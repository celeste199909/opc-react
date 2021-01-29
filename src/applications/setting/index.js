import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./style.css"

// app 组件
import AppIcon from "../../components/app/icon"
import Toolbar from "../../components/app/toolsbar"
// 自定义hooks
import useWindowZoom from "../../customhooks/window-zoom"
import usePrepositionWindow from "../../customhooks/preposition-window"

import iconImg from "../../static/images/setting/setting.png"

import acountIcon from "../../static/images/setting/acount.png"
import appearanceIcon from "../../static/images/setting/appearance.png"
import systemIcon from "../../static/images/setting/system.png"
import aboutIcon from "../../static/images/setting/about.png"
import helpIcon from "../../static/images/setting/help.png"
// 头像
import avatar1 from "../../static/images/avatars/touxiang.jpg"
import avatar2 from "../../static/images/avatars/avatar2.jpeg"
import avatar3 from "../../static/images/avatars/avatar3.jpeg"
import avatar4 from "../../static/images/avatars/avatar4.jpeg"
import avatar5 from "../../static/images/avatars/avatar5.jpeg"
// 壁纸
import wallpaper1 from "../../static/images/wallpapers/wallpaper1.jpg"
import wallpaper2 from "../../static/images/wallpapers/wallpaper2.jpg"
import wallpaper3 from "../../static/images/wallpapers/wallpaper3.jpg"

let Setting = {
  name: "setting",
  cname: "设置",
  version: "1.0.0",
  iconImg,
  Icon: SettingIcon,
  UI: SettingUI
}

function SettingIcon (props) {
  return (
    <AppIcon theApp={Setting} />
  );
}

function SettingUI (props) {

  useWindowZoom(Setting.name, { right: true, bottom: true, rightBottom: true })
  usePrepositionWindow(Setting.name)

  const [settingList] = useState([
    { name: "acount", cname: "账户", icon: acountIcon },
    { name: "appearance", cname: "外观", icon: appearanceIcon },
    { name: "system", cname: "系统", icon: systemIcon },
    { name: "about", cname: "关于", icon: aboutIcon },
    { name: "help", cname: "帮助", icon: helpIcon },
  ])

  const [settingDetails, setSettingDetails] = useState(null)

  function handleClickDetail (settingItem) {
    document.querySelector(".setting-list").classList.add("hide-setting-list")
    setSettingDetails(settingItem)
  }
  function clickToSettingHome () {
    document.querySelector(".setting-list").classList.remove("hide-setting-list")
    setSettingDetails(null)
  }

  return (
    <div id="setting" className="application" >
      <Toolbar theApp={Setting} />
      <div className="setting-list">
        {settingList.map((settingItem, index) => {
          return (
            <div className="setting-item"
              key={index}
              onClick={handleClickDetail.bind(this, settingItem)}
            >
              <img className="icon" src={settingItem.icon} alt="img" />
              <span className="name" >{settingItem.cname}</span>
            </div>
          )
        })}
      </div>
      {settingDetails &&
        (<div className="setting-details"
        >
          <div className="setting-breadcrumb">
            <div onClick={clickToSettingHome}>设置首页</div>
            <span> » </span>
            <div>{settingDetails.cname}设置</div>
          </div>

          <SettingDetailsPage currentDetailsPage={settingDetails} />
        </div>)}
    </div>
  );
}

// 设置详情的组件
// 详情页
function SettingDetailsPage (props) {
  let CurrentDetailsPage

  switch (props.currentDetailsPage.name) {
    case "acount":
      CurrentDetailsPage = AcountSetting
      break;
    case "appearance":
      CurrentDetailsPage = AppearanceSetting
      break;
    case "system":
      CurrentDetailsPage = SystemSetting
      break;
    case "about":
      CurrentDetailsPage = AboutSetting
      break;
    case "help":
      CurrentDetailsPage = HelpSetting
      break;
    default:
      break;
  }

  return (
    <CurrentDetailsPage />
  )
}
// 1. 账户
function AcountSetting () {

  const [defaultUsername, setDefalutUsername] = useState("默认用户名")

  // let username = useSelector(state => state.acountInfo.username)

  // 预设头像
  let avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]
  // 
  let dispatch = useDispatch()

  function handleOnchange (e) {
    setDefalutUsername(e.target.value)
    // username = e.target.value
  }
  function handleUpdateUsername () {
    dispatch({
      type: "UPDATE_USERNAME",
      username: defaultUsername
    })
  }
  function handleClick (avatar) {
    // console.log(e);
    dispatch({
      type: "UPDATE_AVATAR",
      avatar
    })

  }
  return (
    <div id="acount-setting">
      <div id="acount-avatar-part" className="acount-part">
        <div className="setting-title">头像：</div>
        <div className="setting-description">请从下面预设图片中挑选一个你喜欢的来作为你的头像吧，头像会显示在开始菜单中</div>
        <div className="select-avatar">
          {avatars.map((item, index) => {
            return (
              <div className="avatar-item"
                key={"avatar" + index}
                onClick={handleClick.bind(this, item)}
              >
                <img src={item} alt="avatar" />
              </div>
            )
          })}
        </div>
      </div>
      <div id="acount-username-part" className="acount-part">
        <div className="setting-title">用户名：</div>
        <div className="username-wrapper">
          <input type="text" placeholder="请输入用户名"
            value={defaultUsername} onChange={handleOnchange}></input>
          <button onClick={handleUpdateUsername}>确定</button>
        </div>
      </div>
    </div>
  )
}
// 2. 外观 appearance
function AppearanceSetting () {
  let wallpapers = [wallpaper1, wallpaper2, wallpaper3]
  function handleChangeWallpaper (wallpaper) {
    console.log(wallpaper);
    document.querySelector("#desktop").style.backgroundImage = `url(${wallpaper})`
  }
  return (
    <div id="appearance-setting">
      <div id="theme-part" className="theme-part">
        <div className="setting-title">主题</div>
        <div className="select-theme-wrapper">
          <div className="light-theme">
            <input type="radio" name="theme" id="light-theme" />
            <label htmlFor="light-theme">明亮</label>
          </div>
          <div className="dark-theme">
            <input type="radio" name="theme" id="dark-theme" />
            <label htmlFor="dark-theme">夜间</label>
          </div>
        </div>
      </div>
      <div id="wallpaper-part" className="theme-part">
        <div className="setting-title">桌面壁纸</div>
        <div className="setting-description">选择一张图片作为桌面壁纸</div>
        <div className="select-wallpaper-wrapper">
          {wallpapers.map((wallpaper, index) => {
            return (
              <div className="wallpaper-item"
                key={"wallpaper" + index}
                onClick={handleChangeWallpaper.bind(this, wallpaper)}
              >
                <img src={wallpaper} alt="wallpaper" />
              </div>
            )
          })}
        </div>
      </div>
      {/* <div id="status-bar-part" className="theme-part">
        <div className="setting-title">状态栏</div>
        <div className="select-status-wrapper">
          <div className="light-theme">
            <input type="radio" name="status-bar-status" id="always-show" />
            <label htmlFor="always-show">始终显示</label>
          </div>
          <div className="dark-theme">
            <input type="radio" name="status-bar-status" id="always-hide" />
            <label htmlFor="always-hide">始终隐藏</label>
          </div>
          <div className="dark-theme">
            <input type="radio" name="status-bar-status" id="only-show-onfullscreen" />
            <label htmlFor="only-show-onfullscreen">仅在有应用全屏的状态下隐藏</label>
          </div>
        </div>
      </div> */}
    </div>
  )
}
// 3. 系统设置 system
function SystemSetting () {
  return (
    <div id="system-setting">
      {/* <div>
        <div>自动锁屏</div>
        <div>在一段时间无操作之后系统将会自动锁屏</div>
        <select>
          <option>5分钟</option>
          <option>10分钟</option>
          <option>30分钟</option>
          <option>1小时</option>
        </select>
        <div>
          <div>自定义</div>
          <input></input>
          <div>分钟</div>
        </div>
      </div> */}
    </div>
  )
}
// 4. 关于 about
function AboutSetting () {
  return (
    <div>关于设置</div>
  )
}
// 5. 帮助 help
function HelpSetting () {
  return (
    <div>帮助设置</div>
  )
}
export default Setting;