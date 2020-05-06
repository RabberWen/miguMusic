import searchType from '../../actionType/search'
import Axios from 'axios'
export function changeSearchTag(payload) {
    return {
        type: searchType.CHANGESEARCHTAG,
        payload
    }
}
export function changeSearchDown(payload) {
    return {
        type: searchType.CHANGESEARCHDOWN,
        payload
    }
}
export function changeSearchList(payload) {
    return {
        type: searchType.CHANGESEARCHLIST,
        payload
    }
}
export default {
    getSearchTag() {
        return async (dispatch) => {//标签
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=24041523&pageNo=0&type=2005")
            dispatch(changeSearchTag(data.result.results))
        }
    },
    getSearchDown(keyword) {//搜索的下拉列表
        return async (dispatch) => {
            const { data } = await Axios.get(`/migu/remoting/autocomplete_tag?keyword=${keyword}`)
            dispatch(changeSearchDown(data.key))
        }
    },
    getSearchList(keyword) {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/scr_search_tag", {
                params: {
                    rows: 20,
                    type: 2,
                    keyword,
                    pgc: 1
                }
            })
            dispatch(changeSearchList(data))
        }
    },
}