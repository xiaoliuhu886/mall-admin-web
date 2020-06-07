import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-admin-sms/home/brand/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/mall-admin-sms/home/brand/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHomeBrand(data) {
  return request({
    url:'/mall-admin-sms/home/brand/delete',
    method:'post',
    data:data
  })
}

export function createHomeBrand(data) {
  return request({
    url:'/mall-admin-sms/home/brand/create',
    method:'post',
    data:data
  })
}

export function updateHomeBrandSort(params) {
  return request({
    url:'/mall-admin-sms/home/brand/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
