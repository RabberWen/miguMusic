import playListDetailType from '../../actionType/playListDetail'
import Axios from 'axios'
export function changeListInfo(payload) {
    return {
        type: playListDetailType.GETLISTINFO,
        payload
    }
}
export function changeUserInfo(payload) {
    return {
        type: playListDetailType.GETUSERINFO,
        payload
    }
}
export function changePlayList(payload) {
    return {
        type: playListDetailType.GETLIST,
        payload
    }
}
export default {
    getListInfo(playListId) {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/playlist_query_tag", {
                params: {
                    onLine: 1,
                    queryChannel: 0,
                    createUserId: "221acca8-9179-4ba7-ac3f-2b0fdffed356",
                    contentCountMin: 5,
                    playListId,
                }
            })
            dispatch(changeListInfo(data.playlist))
        }
    },
    getPlayList(playListId) {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/playlistcontents_query_tag", {
                params: {
                    playListType: 2,
                    playListId,
                    contentCount: 10
                }
            })
            dispatch(changePlayList(data.contentList))
        }
    },
    getId(contentId) {
        return async (dispatch) => {
            const { data } = await Axios.get(`/migu/remoting/cms_detail_tag?pid=${contentId}`)
            window.location.href = "http://m.music.migu.cn/v3/music/song/" + data.data.copyrightId
        }
    }
}