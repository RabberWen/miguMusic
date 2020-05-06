import crbtType from '../../actionType/crbt'
import Axios from 'axios'
export function changeCrbtList(payload) {
    return {
        type: crbtType.CHANGECRBTLIST,
        payload
    }
}
export function changeNewSongList(payload) {
    return {
        type: crbtType.CHANGENEWSONGLIST,
        payload
    }
}
export default {
    getCrbtList(pageNo = 0) {
        return async (dispatch) => {//获取歌单列表首页推荐
            const { data } = await Axios.get("/migu/remoting/cms_list_tag", {
                params: {
                    pageNo,
                    pageSize: 15,
                    nid: 10955383,
                }
            })
            dispatch(changeCrbtList(data.result))
        }
    },
    getMoreCrbtList(pageNo) {
        return async (dispatch) => this.props.getCrbtList(pageNo)
    },
    getNewSongtList(pageNo = 0) {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag", {
                params: {
                    pageNo,
                    pageSize: 15,
                    nid: 11248351,
                }
            })
            dispatch(changeNewSongList(data.result))
        }
    },
    getMoreNewSongList(pageNo) {
        return async (dispatch) => this.props.getNewSongtList(pageNo)
    },
}