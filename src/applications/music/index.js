import "./style.css"
import iconImg from "../../static/images/music.png"
// app 组件
import AppIcon from "../../components/app/icon"
import Toolbar from "../../components/app/toolsbar"
// 自定义hooks
import useWindowZoom from "../../customhooks/window-zoom"
import usePrepositionWindow from "../../customhooks/preposition-window"
// 
import { useEffect, useState } from "react"
import axios from "axios"

let Music = {
  name: "music",
  cname: "音乐",
  version: "1.0.0",
  iconImg,
  Icon: MusicIcon,
  UI: MusicUI
}

function MusicIcon (props) {
  return (
    <AppIcon theApp={Music} />
  );
}

function MusicUI () {
  useWindowZoom(Music.name, { right: true, bottom: true, rightBottom: true })
  usePrepositionWindow(Music.name)

  let [currentMusic, setCurrentMusic] = useState({ name: "", picurl: "", url: "" })
  // let [currentMusicIsLiked, setCurrentMusicIsLiked] = useState(false)
  let [likeList, setLikeList] = useState([])
  let [showLikeList, setShowLikeList] = useState(false)
  let [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    // nextMusic()
    init()
    let audio = document.querySelector("audio")
    let pauseBtn = document.querySelector(".pause-btn")
    let progress = document.querySelector(".progress")
    // 播放 暂停
    pauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        setIsPaused(false)
        audio.play()
      } else {
        setIsPaused(true)
        audio.pause()
      }
    })
    // 监听音频播放时间并更新进度条
    audio.addEventListener('timeupdate', function () {
      let percentage = (Math.ceil(audio.currentTime) / Math.ceil(audio.duration)).toFixed(4) * 100;
      progress.style.width = percentage + "%"
      if (percentage >= 100) {
        nextMusic()
      }
    }, false);

    // console.log(audio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function addToLikeList () {
    if (!currentMusic.isLiked) {
      currentMusic.isLiked = true
      setLikeList([...likeList, currentMusic])
      // setCurrentMusicIsLiked(!currentMusicIsLiked)
    }
    return
  }

  function init () {
    // http://music.163.com/song/media/outer/url?id=1449678888
    axios.get(`https://api.uomg.com/api/rand.music?sort=热歌榜&format=json`)
      .then(res => {
        setCurrentMusic(res.data.data)
        setBackground(res.data.data.picurl)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function nextMusic () {
    let audio = document.querySelector("audio")
    axios.get(`https://api.uomg.com/api/rand.music?sort=热歌榜&format=json`)
      .then(res => {
        setCurrentMusic(res.data.data)
        audio.play()
        setBackground(res.data.data.picurl)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function setBackground (picurl) {
    let musicEl = document.querySelector("#music")
    musicEl.style.backgroundImage = `url(${picurl})`
  }

  return (
    <div id="music" className="application">
      <Toolbar theApp={Music} />
      <div id="music-content-wrapper">
        <div className="music-name">{currentMusic.name + "-" + currentMusic.artistsname}</div>
        <div className="music-player-wrapper">
          <div className="player-operations">
            <div className="add-like" onClick={addToLikeList}>
              {currentMusic.isLiked ? (<i className="iconfont icon-xihuan color"></i>) : (<i className="iconfont icon-xihuan"></i>)}
            </div>
            <div className="pause-btn">
              {isPaused ? (<i className="iconfont icon-bofang"></i>) : (<i className="iconfont icon-zantingtingzhi"></i>)}
            </div>
            <div className="next-btn" onClick={nextMusic}>
              <i className="iconfont icon-last"></i>
            </div>
          </div>
          {/* <div className="music-setting">设置</div> */}
          <div className="music-likelist-wrapper">
            <div className="likelist-btn" onClick={() => { setShowLikeList(!showLikeList) }}>喜欢列表</div>
            <ul id="music-likelist" className={showLikeList ? "likelist-show" : "likelist-hide"}>
              {
                likeList.map((o, index) => {
                  return (
                    <li onClick={() => { setCurrentMusic(o) }} key={index}>{o.name + "-" + o.artistsname}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="progress-wrapper">
            <div className="progress"></div>
          </div>
        </div>
        <audio src={currentMusic.url}></audio>
      </div>
    </div>
  );
}

export default Music;