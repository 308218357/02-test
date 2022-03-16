import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.headers.common['Authorization'] = 'tokenas34kds456saxc';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.timeout = 5000
// axios({
//   url:'http://106.54.54.237:8000/home/multidata',
//   //method:'post'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

// axios.all([axios({
//   url:'/home/multidata',
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
// //.then(res => {
//    // console.log(res);
//    // console.log(res[0]);
//     // console.log(res[)];
// //})

// //对象结构
// const objd = {
//   name:'liu',
//   age:23
// }

// const {name,age} = objd;
// const names = ['liu','why','kobe'];
// const {name1,name2,name3} = names;


// const instance2 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   // headers = {
//   //   common['Authorization'] = 'tokenas34kds456saxc',
//   //   post['Content-Type'] = 'application/x-www-form-urlencoded',
//   // },
//   headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'tokenas34kds456saxc'},
//   timeout:5000
// })

// instance2({
//   url:'/home/multidata',
// }).then((res) => {
//   console.log(res);
// })

import {request}  from './network/request';
// request({
//   url:'/home/multidata',
// }, res =>{
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseconfig:{
//     url:'/home/multidata',
//   },
//   success: function(res){
//     console.log(res);
//   },
//   failure: function(err){
//     console.log(err);
//   }
// })

request({
  url:'/home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})