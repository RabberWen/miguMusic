import playListType from '../../actionType/playList/index'
import Axios from 'axios'
export function changePlayList(payload) {
    return {
        type: playListType.CHANGEPLAYLIST,
        payload
    }
}
export function changeTagPlayList(payload) {
    return {
        type: playListType.CHANGETAGPLAYLIST,
        payload
    }
}
export default {
    getPlayList(tagId = "") {
        return async (dispatch) => {//获取歌单列表首页推荐
            const { data } = await Axios.get("/migu/remoting/playlist_bycolumnid_tag", {
                params: {
                    playListType: 2,
                    type: 1,
                    columnId: 15127315,
                    tagId,
                    startIndex: 0
                }
            })
            dispatch(changePlayList(data.retMsg.playlist))
        }
    },
    getMorePlayList(startIndex) {
        return async (dispatch) => {//获取更多歌单列表首页推荐
            const { data } = await Axios.get("/migu/remoting/playlist_bycolumnid_tag", {
                params: {
                    columnId: 15127315,
                    startIndex,
                    playListType: 2,
                    type: 1,
                }
            })
            dispatch(changePlayList(data.retMsg.playlist))
        }
    },
    getTagPlayList(tagId) {
        return async (dispatch) => {//获取标签歌单列表
            const { data } = await Axios.get("/migu/remoting/playlist_bycolumnid_tag", {
                params: {
                    playListType: 2,
                    type: 1,
                    tagId,
                    startIndex: 0
                }
            })
            dispatch(changeTagPlayList(data.retMsg.playlist))
        }
    },
    getMoreTagPlayList(tagId, startIndex) {
        return async (dispatch) => {//获取更多标签歌单列表首页推荐
            const { data } = await Axios.get("/migu/remoting/playlist_bycolumnid_tag", {
                params: {
                    tagId,
                    startIndex,
                    playListType: 2,
                    type: 1,
                }
            })
            dispatch(changeTagPlayList(data.retMsg.playlist))
        }
    },
}