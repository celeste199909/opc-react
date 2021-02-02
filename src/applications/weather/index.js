import "./style.css"
import iconImg from "../../static/images/weather.png"
// app 组件
import AppIcon from "../../components/app/icon"
import Toolbar from "../../components/app/toolsbar"
// 自定义hooks
import useWindowZoom from "../../customhooks/window-zoom"
import usePrepositionWindow from "../../customhooks/preposition-window"
// 
import { useEffect } from "react"
// import axios from "axios"

let Weather = {
  name: "weather",
  cname: "天气",
  iconImg,
  Icon: WeatherIcon,
  UI: WeatherUI
}

function WeatherIcon (props) {
  return (
    <AppIcon theApp={Weather} />
  );
}

function WeatherUI () {
  useWindowZoom(Weather.name, { right: true, bottom: true, rightBottom: true })
  usePrepositionWindow(Weather.name)

  useEffect(() => {
    // axios.get("https://devapi.qweather.com/v7/weather/now")
    //   .then(res => {
    //     console.log(res);
    //   })
  }, []);

  return (
    <div id="weather" className="application">
      <Toolbar theApp={Weather} />
      <div id="weather-content-wrapper">😯</div>
    </div>
  );
}

export default Weather;