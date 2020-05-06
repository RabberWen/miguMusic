import musicEventType from '../../actionType/musicEvent'
import Axios from 'axios'
export function changeMusicEvent(payload) {
    return {
        type: musicEventType.GETMUSICEVENTLIST,
        payload
    }
}
export default {
    getMusicEventList() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageNo=0&pageSize=10&nid=25068113&type=2006")
            dispatch(changeMusicEvent(data.result.results))
        }
    }
}