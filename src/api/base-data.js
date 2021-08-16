import request from '@utils/http'

export default {
  searchMessage(args) {
    const url = `/api/DeskQuery`
    return request.post({url, data: args})
  }




}
