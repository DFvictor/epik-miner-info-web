import axios from 'axios'
import { Message } from 'element-ui';
// localStorage.setItem("token",'Basic SHVhblNoZW46MTIzNDU2')
let num = 0
//创建axios对象
let Ajax = axios.create({
    timeout: 300000
})
//请求拦截
Ajax.interceptors.request.use(
    config =>{
        // config.headers['Authorization'] = localStorage.getItem("token")
        return config;
    },
    err=>{
        return Promise.reject(err);
    }
),
//响应拦截
Ajax.interceptors.response.use(
    res=>{
        if(res.data.code){
            switch (res.data.code) {
                case 1001:
                    break;
                default:
                    break;
            }
        }
        return res.data;
    },
    err=>{
        if(num==0){
            num = num+1
        }
        setTimeout(() => {
            num = 0
        }, 1000);
        console.log(err);
        if(err.response.status!=401)
        {
            Message.error(err.message);
        }
        if (err.response.status==401) {
            localStorage.setItem("bwex::isLogin",false)
        }

        return Promise.reject(err);
    }
)

let ajaxPost = function({url,data,params,success,error}){
    Ajax({
        method:"post",
        url:url,
        data:data,
        params:params
    }).then((res)=>{
        success && success(res);
        // console.log(data)
        error && error(res);
    });
}
let ajaxGet = function({url,data,success,error}){
    Ajax({
        method:"get",
        url:url,
        params:data
    }).then((res)=>{
        success && success(res);
        error && error(res);
    });
}
let ajaxPUT = function({url,data,params,success,error}){
    Ajax({
        method:"PUT",
        url:url,
        data:data,
        params:params
    }).then((res)=>{
        success && success(res);
        console.log(data)
        error && error(res);
    });
}
let ajaxDelete = function({url,data,params,success,error}){
    Ajax({
        method:"DELETE",
        url:url,
        data:data,
        params:params
    }).then((res)=>{
        success && success(res);
        console.log(data)
        error && error(res);
    });
}


export {
    ajaxPost,
    ajaxGet,
    ajaxPUT,
    ajaxDelete
};
