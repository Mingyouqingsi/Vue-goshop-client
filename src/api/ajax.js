/**
 * Created by 王翔 on 2018-12-22.
 */
import axios from 'axios'
export default function ajax(url,data={},method = 'GET') {

 return new Promise(function (resolve,reject) {
   let promise
   //执行异步的ajax请求
   if(method==='GET') {
     // 发get请求
     promise =  axios.get(url,{params : data})//params配置指定的query参数
   } else {
     // 发post请求
     promise =  axios.post(url, data)
   }
   promise.then(response =>{
     //如果成功了，调用resolvev（response.data）
     resolve(response.data)
   }).catch(error =>{
     alert('请求出错了：' +error.message)
   })
  })

}
