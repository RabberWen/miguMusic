import newDiscDetailType from '../../actionType/newDiscDetail'
import Axios from 'axios'
export function changeAlbumInfo(payload) {//歌碟信息
    return {
        type: newDiscDetailType.GETALBUMINFO,
        payload
    }
}
export function changeAlbumList(payload) {//歌碟列表
    return {
        type: newDiscDetailType.GETALBUMLIST,
        payload
    }
}
export default {
    getAlbumInfo(albumId) {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_album_detail_tag", {
                params: {
                    albumId
                }
            })
            dispatch(changeAlbumInfo(data.data))
        }
    },
    getAlbumList(albumId) {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_album_song_list_tag", {
                params: {
                    albumId,
                }
            })
            dispatch(changeAlbumList(data.result.results))
        }
    },
}