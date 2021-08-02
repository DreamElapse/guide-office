import request from '@utils/http'

export default {
  getAuthorize(args) {
    const url = `/user-center/api/wechat/ticketSignature`
    return request.get({url, data: args})
  },
  // 获取基地列表
  getBaseList() {
    const url = `/datacenter/common/baseList`
    return request.get({ url })
  },
  // 车次销售情况
  getBaseRevenueList() {
    const url = `/datacenter/data_view/weekSalesAmount`
    return request.get({ url })
  },
  // 销售总额情况
  getSalesCompare() {
    const url = `/datacenter/data_view/todayYesterdaySalesCompare`
    return request.get({ url })
  },
  // 订单监控
  getOrderMonitor() {
    const url = `/datacenter/data_view/orderMonitor`
    return request.get({ url })
  },
  // 7日订单
  getOrderNumCompare(data) {
    const url = `/datacenter/data_view/todayWeekOrderNumCompare`
    return request.get({ url, data })
  },
  // 基地销售额统计
  getBaseSalesRate() {
    const url = `/datacenter/data_view/todayBaseSalesRate`
    return request.get({ url })
  },
  // 乘务销售额和今日出乘统计排行
  getTeamSales() {
    const url = `/datacenter/data_view/trainAndBestCrew`
    return request.get({ url })
  },
  // 乘务销售额统计排行/商品品类销量占比
  getProductCateSale(data) {
    const url = `/datacenter/product_sale/productCateSaleData`
    return request.get({ url, data })
  },
  // 今日商品销量排行前十
  getProductSale(data) {
    const url = `/datacenter/product_sale/productSaleData`
    return request.get({ url, data })
  },
  // 餐牌信息
  getProductMenuList() {
    const url = `/datacenter/product_sale/productMenu`
    return request.get({ url })
  },
  // 商品品类数量统计
  getProductCateSumList() {
    const url = `/datacenter/product_sale/productCateSum`
    return request.get({ url })
  },
  // 车底销售前10
  getVtNumAsc(data) {
    const url = `/datacenter/data_view/todayVtnumAsc10`
    return request.get({ url, data })
  },
  // 今日班组销售业绩
  getCrewSales(data) {
    const url = `/datacenter/crew_sales/todayCrewSales`
    return request.get({ url, data })
  },
  // 今日乘务考勤
  getCrewPunch(data) {
    const url = `/datacenter/crew_sales/todayCrewPunch`
    return request.get({ url, data })
  },
  // 今日乘务排班
  getCrewDuty(data) {
    const url = `/datacenter/crew_sales/todayCrewDuty`
    return request.get({ url, data })
  },
  // 入库数据
  getMealsData(data) {
    const url = `/datacenter/product_sale/matterEnter`
    return request.get({ url, data })
  },
  // 昨日餐食价格区间占比
  getPriceSum(data) {
    const url = `/datacenter/product_sale/productPriceSum`
    return request.get({ url, data })
  },
  // 基地配餐同比
  getAllotment(data) {
    const url = `/datacenter/product_sale/baseProductAllotment`
    return request.get({ url, data })
  },
  // 车底配餐数据
  getPeipin(data) {
    const url = `/datacenter/Product_sale/vtnumPeipin`
    return request.get({ url, data })
  },
  // 车底列表
  getTrainList(data) {
    const url = `/datacenter/common/vTnumList`
    return request.get({ url, data })
  },
  // 车次列表
  getTrainsList(data) {
    const url = `/datacenter/common/trainList`
    return request.get({ url, data })
  },
  // 近6月采购金额和销售统计
  getSixMonthData(data) {
    const url = `/datacenter/product_sale/latelySixMonthData`
    return request.get({ url, data })
  },
  // 今日增减车底
  getTodayVtnum(data) {
    const url = `/datacenter/Product_sale/todayVtnum`
    return request.get({ url, data })
  },
  // 供应商资质预警
  getSupplierContractData(data) {
    const url = `/datacenter/product_sale/supplierContractData`
    return request.get({ url, data })
  },
  // 搜索商品
  searchGoods(data) {
    // const url = `/datacenter/product_sale/searchProduct`
    const url = `/datacenter/train_search/productSearch`
    return request.get({ url, data, loading: true })
  },
  // 根据关键字搜索商品列表
  getGoods(data) {
    const url = `/datacenter/product_sale/getProduct`
    return request.get({ url, data })
  },
  // 基地搜索
  searchBase(data) {
    const url = `/datacenter/train_search/baseSearch`
    return request.get({ url, data, loading: true })
  },
  // 车次搜索
  searchTrain(data) {
    const url = `/datacenter/train_search/trainSearch`
    return request.get({ url, data, loading: true })
  },
  // 班组搜索
  searchTeam(data) {
    const url = `/datacenter/train_search/teamSearch`
    return request.get({ url, data, loading: true })
  },
  // 线上餐食异常情况
  getAbnormalData(data) {
    const url = `/datacenter/product_sale/abnormalProductData`
    return request.get({ url, data})
  },
  // 获取抽检数据
  getSpotCheckData(data) {
    const url = `/datacenter/spot_check/insideSpotCheck`
    return request.get({url, data});
  },
  // 获取人员名称列表
  getSelectList(data) {
    const url = `/datacenter/common/quantizationUserList`
    return request.get({ url, data})
  },
  // 获取人员检查信息
  getPersonData(data) {
    const url = `/datacenter/security_manager/quantizationQuota`
    return request.get({url, data});
  },
  // 员工姓名列表
  getNameList(data) {
    const url = `/datacenter/common/staffNamelist`
    return request.get({url, data});
  },
  // 人员个人成绩
  getPersonResult(data) {
    const url = `/datacenter/security_manager/memberScore`
    return request.get({url, data});
  }



}
