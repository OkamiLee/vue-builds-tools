import axios from 'axios'
import QS from 'qs';
axios.defaults.timeout = 10000;
axios.defaults.baseURL = '';

//axios.defaults.headers.common['token'] = store.state.loginToken;
axios.interceptors.request.use(
  	config => {
	    /*if (localStorage.getItem('adminToken')) { //判断token是否存在
	      	config.headers.token = localStorage.getItem('adminToken');  //将token设置成请求头
	    }*/
	    return config;
  	},
  	err => {

    	return Promise.reject(err);
  	}
);


/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get('/api'+url, {
            params: params        
        })        
        .then(res => {
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {    
    return new Promise((resolve, reject) => {       
        axios.post('/api'+url, QS.stringify(params))
        .then(res => {
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function del(url, params) {    
    return new Promise((resolve, reject) => {         
        axios.delete(process.env.API_HOST+url, QS.stringify(params))        
        .then(res => {
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postJson(url, json) {
    return new Promise((resolve, reject) => {
        axios.post(process.env.API_HOST+url, json,
            {
                headers: { 'Content-Type':' application/json'}
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * post方法，上传文件
 * @param {String} url [请求的url地址]
 * @param {Object} formData [请求时携带的参数]
 */

export function postFile(url, formData) {    
    return new Promise((resolve, reject) => {       
        axios.post(process.env.API_HOST+url, formData,
            {
                'Content-Type':'multipart/form-data'
            })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

