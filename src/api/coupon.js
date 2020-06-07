import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-admin-sms/coupon/list',
    method:'get',
    params:params
  })
}

export function createCoupon(data) {
  return request({
    url:'/mall-admin-sms/coupon/create',
    method:'post',
    data:data
  })
}

export function getCoupon(id) {
  return request({
    url:'/mall-admin-sms/coupon/'+id,
    method:'get',
  })
}

export function updateCoupon(id,data) {
  return request({
    url:'/mall-admin-sms/coupon/update/'+id,
    method:'post',
    data:data
  })
}

export function deleteCoupon(id) {
  return request({
    url:'/mall-admin-sms/coupon/delete/'+id,
    method:'post',
  })
}
