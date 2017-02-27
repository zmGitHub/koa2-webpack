import request from 'superagent';
import { notification } from 'antd';

// 根据返回的数据做检查 PS: 登录过期
function checkData(response) {
  let data = null;
  if (response.ok) {
    data = response.body;
  }
  return Promise.resolve(data);
}

// 数据异常捕获
function errorCatch(error) {
  notification.error({
    message: '系统错误',
    description: '未知错误',
  });
  return Promise.reject(error);
}

// get 请求直接在 API 后带参数 api/get/:id
export function get(api) {
  return request
    .get(api)
    .then(response => checkData(response), error => errorCatch(error));
}

// query 查询接口
export function query(api, params = null) {
  return request
    .get(api)
    .query(params)
    .then(response => checkData(response), error => errorCatch(error));
}

// post 请求发送对象

export function post(api, params = null) {
  return request
    .post(api)
    .send(params)
    .then(response => checkData(response), error => errorCatch(error));
}

// put 请求更改数据类型
export function update(api) {
  return request
    .put(api)
    .then(response => checkData(response), error => errorCatch(error));
}

// 删除
export function remove(api) {
  return request
    .del(api)
    .then(response => checkData(response), error => errorCatch(error));
}
