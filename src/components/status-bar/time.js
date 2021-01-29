import "./style/time.css"
import { useState } from "react"
import * as moment from 'moment';
moment.locale("zh-cn");
export default function Time () {
  let [currentDate, setCurrentDate] = useState("")
  setInterval(() => {
    let date = moment().format('YYYY/MM/DD HH:mm')
    setCurrentDate(date)
  }, 1000)

  return (
    <div id="status-bar-time">
      {currentDate}
    </div>
  )
}