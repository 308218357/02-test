import axios from 'axios'

// export function request(config,success,failure) {
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance(config).then(res => {
//         //console.log(res);
//         success(res);
//     }).catch(err => {
//        // console.log(err);
//         failure(err);
//     })


// }


// export function request(config) {
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance(config.baseconfig).then(res => {
//         //console.log(res);
//         config.success(res);
//     }).catch(err => {
//         // console.log(err);
//         config.failure(err);
//     })
// }
// export function request(config) {
//     return new Promise((resolve,reject) => {

//         const instance = axios.create({
//                     baseURL:'http://123.207.32.32:8000',
//                     timeout:5000
//         })
   

//         instance(config)
//             .then(res => {
//                 //console.log(res);
//                 resolve(res);
//             }).catch(err => {
//                 // console.log(err);
//                 reject(err);
//             })

//     })
// }



export function request(config) {

        const instance = axios.create({
                    baseURL:'http://152.136.185.210:7878/api/hy66',
                    timeout:5000
        })
   
        instance.interceptors.request.use(config =>{
           console.log(config);
           //请求拦截
           //1验证一些头部信息 添加修改头部信息
           //2发送请求前图标显示
           //3 特殊信息验证
           return config;
        },err =>{
          console.log(err);
        })
        
        //服务器响应拦截
        instance.interceptors.response.use(res => {
          console.log(res);
          return res.data;
        },err => {
          console.log('服务器错误',err);    
        })
        return instance(config)

  
}



