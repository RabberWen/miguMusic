import songDetailType from '../../actionType/songDetail'
import Axios from 'axios'
export function changeSongInfo(payload) {
    return {
        type: songDetailType.GETSONGINFO,
        payload
    }
}
export function changeLrc(payload) {
    return {
        type: songDetailType.GETLRC,
        payload
    }
}
export default {
    getSongInfo(songId) {
        return async (dispatch) => {
            // const { data } = await Axios.get("/migu/remoting/playlist_query_tag", {
            //     params: {

            //     }
            // })
            // console.log(data)
            // dispatch(changeSongInfo(data.playlist))
        }
    },
}