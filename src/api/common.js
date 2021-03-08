import request from '@/utils/request'

const baseURL = 'http://127.0.0.1:9000'

/**
 * admin
 */
export function getAdminList(params) {
  return request({
    url: baseURL + `/admin/getAdminList`,
    method: 'get',
    params
  })
}

export function addAdmin(id, params) {
  return request({
    url: baseURL + `/admin/addAdmin/${id}`,
    method: 'post',
    data: params
  })
}

export function delAdmin(id) {
  return request({
    url: baseURL + `/admin/delAdmin/${id}`,
    method: 'get'
  })
}

/**
 * user
 */
export function getUserList(params) {
  return request({
    url: baseURL + `/user/getUserList`,
    method: 'get',
    params
  })
}

export function disableUserById(userId) {
  return request({
    url: baseURL + `/user/disableUserById/${userId}`,
    method: 'get'
  })
}

export function ableUserById(userId) {
  return request({
    url: baseURL + `/user/ableUserById/${userId}`,
    method: 'get'
  })
}

export function updUserInfo(params) {
  return request({
    url: baseURL + `/user/updUserInfo`,
    method: 'post',
    data: params
  })
}

/**
 * category
 */
export function getCategoryList(params) {
  return request({
    url: baseURL + `/category/getCategoryList`,
    method: 'get',
    params
  })
}

export function delCategory(id) {
  return request({
    url: baseURL + `/category/delCategory/${id}`,
    method: 'get'
  })
}

export function addCategory(params) {
  return request({
    url: baseURL + `/category/addCategory`,
    method: 'post',
    data: params
  })
}

export function getCategoryById(id) {
  return request({
    url: baseURL + `/category/getCategoryById/${id}`,
    method: 'get'
  })
}

export function updCategory(params) {
  return request({
    url: baseURL + `/category/updCategory`,
    method: 'post',
    data: params
  })
}

/**
 * comment
 */
export function getCommentList(pagenum = 1, pagesize = 10, detailId = 0) {
  return request({
    url: baseURL + `/comment/getCommentList/${pagenum}/${pagesize}/${detailId}`,
    method: 'get'
  })
}

export function disableComment(id, state) {
  return request({
    url: baseURL + `/comment/disableComment/${id}/${state}`,
    method: 'get'
  })
}

export function addComment(params) {
  return request({
    url: baseURL + `/comment/addComment`,
    method: 'post',
    data: params
  })
}

/**
 * log
 */
export function getLogList(params) {
  return request({
    url: baseURL + `/log/getLogList`,
    method: 'get',
    params
  })
}

export function getUserLogList(params) {
  return request({
    url: baseURL + `/log/getUserLogList`,
    method: 'get',
    params
  })
}

/**
 * detail
 */
export function addScenery(params) {
  return request({
    url: baseURL + `/phones/addScenery`,
    method: 'post',
    data: params
  })
}

export function getInfoList6(id) {
  return request({
    url: baseURL + `/phones/getInfoList6/${id}`,
    method: 'get'
  })
}

export function addIndexShow(image) {
  return request({
    url: baseURL + `/phones/addIndexShow`,
    method: 'post',
    data: image
  })
}

export function fourList() {
  return request({
    url: baseURL + `/phones/getFourIcon`,
    method: 'get'
  })
}

export function getSceneryList(params, categoryId) {
  return request({
    url: baseURL + `/phones/getSceneryList/${categoryId}`,
    method: 'get',
    params
  })
}

export function getSceneryIndex() {
  return request({
    url: baseURL + `/phones/getSceneryIndex`,
    method: 'get'
  })
}

export function getSceneryListByCate(id) {
  return request({
    url: baseURL + `/flowers/getSceneryListByCate/${id}`,
    method: 'get'
  })

}

// export function getSceneryIndex() {
//   return request({
//     url: baseURL + `/flowers/getSceneryIndex`,
//     method: 'get'
//   })
// }

export function getSceneryInfo(id) {
  return request({
    url: baseURL + `/phones/getSceneryInfo/${id}`,
    method: 'get'
  })
}

export function pullScenery(id, state) {
  return request({
    url: baseURL + `/category/pullCategory/${id}/${state}`,
    method: 'get'
  })
}

export function pullScenery2(id, state) {
  return request({
    url: baseURL + `/flowers/pullScenery/${id}/${state}`,
    method: 'get'
  })
}

export function delScenery(id) {
  return request({
    url: baseURL + `/flowers/delScenery/${id}`,
    method: 'get'
  })
}

export function getrotationList(id) {
  return request({
    url: baseURL + `/detail/getrotationList`,
    method: 'get'
  })
}

export function getSearchContent(params) {
  return request({
    url: baseURL + `/user/getSearchList`,
    method: 'post',
    data: params
  })
}

/**
 * login
 */

export function adminLogin(params) {
  return request({
    url: baseURL + `/admin/adminLogin`,
    method: 'post',
    data: params
  })
}

export function updPasswordById(id, params) {
  return request({
    url: baseURL + `/user/updPasswordById/${id}`,
    method: 'post',
    data: params
  })
}

export function updPasswordByIdadmin(id, params) {
  return request({
    url: baseURL + `/admin/updPasswordById/${id}`,
    method: 'post',
    data: params
  })
}

/**
 * uploadFile
 */
export function uploadFile() {
  return request({
    url: baseURL + `/upload/updataFile`,
    method: 'post',
    data: params
  })
}

export function getHomeCount() {
  return request({
    url: baseURL + `/admin/getHomeCount`,
    method: 'get'
  })
}

/**
 * 网站首页
 */

export function getCategoryListHome() {
  return request({
    url: baseURL + `/category/getCategoryList`,
    method: 'get'
  })
}

export function userLogin(params) {
  return request({
    url: baseURL + `/user/userLogin`,
    method: 'post',
    data: params
  })
}

export function addUser(params) {
  return request({
    url: baseURL + `/user/addUser`,
    method: 'post',
    data: params
  })
}

/**
 * 统计
 */

export function getEchartsCategory() {
  return request({
    url: baseURL + `/detail/getEchartsCategory`,
    method: 'get'
  })
}

export function getEchartsOrder() {
  return request({
    url: baseURL + `/orders/getEchartsOrder`,
    method: 'get'
  })
}

export function getEchartsCate() {
  return request({
    url: baseURL + `/orders/getEchartsCate`,
    method: 'get'
  })
}

export function getEchartsUser() {
  return request({
    url: baseURL + `/detail/getEchartsUser`,
    method: 'get'
  })
}

/**
 * 地址
 */
export function addAddress(address) {
  return request({
    url: baseURL + `/address/addAddress`,
    method: 'post',
    data: address
  })
}

export function getAddressList(id) {
  return request({
    url: baseURL + `/address/getAddressList/${id}`,
    method: 'get'
  })
}

/**
 * 购物车
 */
export function addCart(cart) {
  return request({
    url: baseURL + `/cart/addCart`,
    method: 'post',
    data: cart
  })
}

export function getCartList(id) {
  return request({
    url: baseURL + `/cart/getCartList/${id}`,
    method: 'get'
  })
}

export function delCart(id) {
  return request({
    url: baseURL + `/cart/delCart/${id}`,
    method: 'get'
  })
}

export function updAmount(uid, id, value) {
  return request({
    url: baseURL + `/cart/updAmount/${uid}/${id}/${value}`,
    method: 'get'
  })
}

export function getShoppingNum(id) {
  return request({
    url: baseURL + `/cart/getShoppingNum/${id}`,
    method: 'get'
  })
}

/**
 * 订单
 */
export function addOrder(order) {
  return request({
    url: baseURL + `/orders/addOrder`,
    method: 'post',
    data: order
  })
}

export function addOrder2(order) {
  return request({
    url: baseURL + `/orders/addOrder2`,
    method: 'post',
    data: order
  })
}

export function getOrderList(params) {
  return request({
    url: baseURL + `/orders/getOrderList`,
    method: 'get',
    params
  })
}
