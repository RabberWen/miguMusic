import newDiscType from '../../actionType/newDisc'
import Axios from 'axios'
export function changeAllDisc(payload) {
    return {
        type: newDiscType.GETALLDISC,
        payload
    }
}
export function changeTagDisc(payload) {
    return {
        type: newDiscType.GETTAGDISC,
        payload
    }
}
export default {
    getAllDisc(pageNo = 0) {
        return async dispatch => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag", {
                params: {
                    pageNo,
                    pageSize: 10,
                    nid: 23854027,
                    type: 2003
                }
            })
            dispatch(changeAllDisc(data.result))
        }
    },
    getMoreDisc(pageNo) {
        return async dispatch => {
            this.props.getAllDisc(pageNo)
        }
    },
    getTagDisc(pageNo = 0, nid) {
        return async dispatch => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag", {
                params: {
                    pageNo,
                    pageSize: 10,
                    nid,
                    type: 2003
                }
            })
            dispatch(changeTagDisc(data.result))
        }
    },
    getTagMoreDisc(pageNo, nid) {
        return async dispatch => {
            this.props.getTagDisc(pageNo, nid)
        }
    },
}