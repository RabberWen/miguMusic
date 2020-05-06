import miguVideoType from '../../actionType/miguVideo'
import Axios from 'axios'
export function changeLive(payload) {
    return {
        type: miguVideoType.GETLIVE,
        payload
    }
}
export function changeReplay(payload) {
    return {
        type: miguVideoType.GETREPLAY,
        payload
    }
}
export function changeMv(payload) {
    return {
        type: miguVideoType.GETMV,
        payload
    }
}
export function changeIdou(payload) {
    return {
        type: miguVideoType.GETIDOU,
        payload
    }
}
export default {
    getLive() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23886093&pageNo=0&type=2006")
            dispatch(changeLive(data.result.results))
        }
    },
    getReplay() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23887071&pageNo=0&type=2006")
            dispatch(changeReplay(data.result.results))
        }
    },
    getMv() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=24049544&pageNo=0&type=2033")
            dispatch(changeMv(data.result.results))
        }
    },
    getIdou() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=24038478&pageNo=0&type=2006")
            dispatch(changeIdou(data.result.results))
        }
    }
}