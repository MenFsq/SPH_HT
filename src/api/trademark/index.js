import request from '@/utils/request'

const api_name = '/admin/product/baseTrademark'

export default {
  /*
    根据id获取Trademark
    GET /admin/product/baseTrademark/get/{id}
  */
  getTrademarkById(trademarkId){
    return request({
      url:`${api_name}/get/${trademarkId}`,
      method:"get"
    })
  },

  /*
    获取整个Trademark列表
    GET /admin/product/baseTrademark/getTrademarkList
  */
  getTrademarkList(){
    return request({
      url:`${api_name}/getTrademarkList`,
      method:"get"
    })
  },

  /*
    根据id删除Trademark
    DELETE /admin/product/baseTrademark/remove/{id}
  */
  delTrademarkById(trademarkId){
    return request({
      url:`${api_name}/remove/${trademarkId}`,
      method:"DELETE"
    })
  },

  /*
    新增Trademark
    POST /admin/product/baseTrademark/save
  */
  addTrademark({tmName,logoUrl}){
    return request({
      url:`${api_name}/save`,
      method:"POST",
      data:{
        logoUrl,
        tmName
      }
    })
  },

  /*
    修改Trademark
    PUT /admin/product/baseTrademark/update
  */
  updateTrademark({trademarkId,tmName,logoUrl}){
    return request({
      url:`${api_name}/update`,
      method:"PUT",
      data:{
        id:trademarkId,
        logoUrl,
        tmName
      }
    })
  },

  /*
    分页列表
    GET /admin/product/baseTrademark/{page}/{limit}
  */
  getTrademarkListPage({page,limit}){
    return request({
      url:`${api_name}/${page}/${limit}`,
      method:"get"
    })
  }
}
