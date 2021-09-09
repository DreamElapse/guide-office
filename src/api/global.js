import request from '@utils/http'

export default {
    // 首页-搜索人员科室
    searchMessage(args) {
        const url = `/api/DeskQuery`
        return request.post({url, data: args})
    },
    // 搜索结果列表-获取科室人员详细信息
    getPersonnelDetail(args) {
        const url = `/api/QueryOfficePersonDetailByID`
        return request.post({url, data: args})
    },
    // 办事平台-获取业务科室列表
    getOfficeList(args) {
        const url = `/api/GetOffice`
        return request.post({url, data: args})
    },
    // 科室详情-获取科室简介
    getOfficeDetail(args) {
        const url = `/api/GetOfficeIntroByID`
        return request.post({url, data: args})
    },
    // 科室详情-科室人员列表
    getOfficePersonList(args) {
        const url = `/api/GetOfficePersonByOfficeID`
        return request.post({url, data: args})
    },
    // 科室详情-部门风采
    getOfficeShow(args) {
        const url = `/api/GetOfficeMienByOfficeID`
        return request.post({url, data: args})
    },
    // 楼层指引-获取楼层
    getFloor(args) {
        const url = `/api/GetStorey`
        return request.post({url, data: args})
    },
    // 楼层指引-楼层详情
    getFloorDetail(args) {
        const url = `/api/GetStoreyDetails`
        return request.post({url, data: args})
    },
    
}
