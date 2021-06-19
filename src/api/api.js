import { ajaxPost, ajaxGet, ajaxDelete } from './request'

let sendPost = function (url, obj) {
  ajaxPost({
    url: url,
    data: obj.data,
    params: obj.params,
    success: obj.success
  })
}
let sendGet = function (url, obj) {
  ajaxGet({
    url: url,
    data: obj.data,
    success: obj.success

  })
}
let sendDelete = function (url, obj) {
  ajaxDelete({
    url: url,
    data: obj.data,
    params: obj.params,
    success: obj.success
  })
}

let getMinerInfo = function (obj) { sendGet('/api/miner', obj) }


export {
  getMinerInfo,
}
