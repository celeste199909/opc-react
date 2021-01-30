import axios from "axios"

let data

axios.get("https://www.bilibili.com/v/popular/rank/food")
  .then(res => {
    console.log(res);
    data = res
  })
  .catch(err => {
    console.log(err)
  })

export default data