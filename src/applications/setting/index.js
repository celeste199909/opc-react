import React, { useState } from "react";
import "./style.css"

import AppIcon from "../../components/app-icon"
import Toolbar from "../../components/app-tool-bar"
// import zoom from "../../components/app-zoom"
import useWindowZoom from "../../customhooks/window-zoom"

import iconImg from "../../images/applications/setting.png"

import acountIcon from "../../images/applications/acount.png"
import appearanceIcon from "../../images/applications/appearance.png"
import languageIcon from "../../images/applications/language.png"
import aboutIcon from "../../images/applications/about.png"
import helpIcon from "../../images/applications/help.png"

// 头像
import avatar from "../../images/touxiang.jpg"

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

  useWindowZoom(Setting.name, { right: true, bottom: true })

  const [settingList] = useState([
    { name: "acount", cname: "账户", icon: acountIcon },
    { name: "appearance", cname: "外观", icon: appearanceIcon },
    { name: "language", cname: "语言", icon: languageIcon },
    { name: "about", cname: "关于", icon: aboutIcon },
    { name: "help", cname: "关于", icon: helpIcon },
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

  // useEffect(() => {
  //   // zoom()
  // }, [])

  return (
    <div id="setting" className="application">
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
    case "language":
      CurrentDetailsPage = LanguageSetting
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

  const [username, setUsername] = useState("默认用户名")
  function handleOnchange (e) {
    setUsername(e.target.value)
    console.log();
  }
  return (
    <div id="acount-setting">
      <div id="acount-avatar-part" className="acount-part">
        <div className="acount-title">头像：</div>
        <div className="acount-description">请从下面预设图片中挑选一个你喜欢的来作为你的头像吧，头像会显示在开始菜单中</div>
        <div className="select-avatar">
          <div className="avatar-item"><img src={avatar} alt="avatar" /></div>
          <div className="avatar-item"><img src={avatar} alt="avatar" /></div>
          <div className="avatar-item"><img src={avatar} alt="avatar" /></div>
          <div className="avatar-item"><img src={avatar} alt="avatar" /></div>
          <div className="avatar-item"><img src={avatar} alt="avatar" /></div>
        </div>
      </div>
      <div id="acount-username-part" className="acount-part">
        <div className="acount-title">用户名：</div>
        <div className="username-wrapper">
          <input type="text" placeholder="请输入用户名"
            value={username} onChange={handleOnchange}></input>
          <button>确定</button>
        </div>
      </div>
    </div>
  )
}
// 2. 外观 appearance
function AppearanceSetting () {
  return (
    <div id="appearance-setting">
      <div id="theme-part" className="theme-part">
        <div className="appearance-title">主题</div>
        <div>
          <div>明亮</div>
          <div>夜间</div>
        </div>
      </div>
      <div id="status-part" className="theme-part">
        <div className="appearance-title">状态栏</div>
        <div>
          <div>始终显示</div>
          <div>始终隐藏</div>
          <div>仅在有应用全屏的状态下隐藏</div>
        </div>
      </div>
    </div>
  )
}
// 3. 语言 language
function LanguageSetting () {
  return (
    <div>语言设置</div>
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