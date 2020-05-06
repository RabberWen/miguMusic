import musicTopType from '../../actionType/musicTop'
import Axios from 'axios'
export function changeMusicTopLog(payload) {//排行榜信息
    return {
        type: musicTopType.GETMUSICLOG,
        payload
    }
}
export function changeMusicTopMusic(payload) {//音乐榜
    return {
        type: musicTopType.GETMUSICLIST,
        payload
    }
}
export function changeMusicTopVideo(payload) {//影视榜
    return {
        type: musicTopType.GETVIDEOLIST,
        payload
    }
}
export function changeMusicTopNeidi(payload) {//内地榜
    return {
        type: musicTopType.GETNEIDILIST,
        payload
    }
}
export function changeMusicTopGangtai(payload) {//港台榜
    return {
        type: musicTopType.GETGANGTAILIST,
        payload
    }
}
export function changeMusicTopUs(payload) {//欧美榜
    return {
        type: musicTopType.GETUSLIST,
        payload
    }
}
export function changeMusicTopJanpn(payload) {//日韩榜
    return {
        type: musicTopType.GETJANPNLIST,
        payload
    }
}
export function changeMusicTopTag(payload) {//TAG
    return {
        type: musicTopType.GETMUSICTAG,
        payload
    }
}
export default {
    getMusicTopLog() {//排行榜信息
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603695&type=2011&pageNo=0&pageSize=1")
            dispatch(changeMusicTopLog(data.result.results))
        }
    },
    getMusicTop() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603703&pageSize=3&pageNo=0")
            dispatch(changeMusicTopMusic(data.result.results))
        }
    },
    getVideoTop() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603721&pageSize=3&pageNo=0")
            dispatch(changeMusicTopVideo(data.result.results))
        }
    },
    getNeidiTop() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603926&pageSize=3&pageNo=0")
            dispatch(changeMusicTopNeidi(data.result.results))
        }
    },
    getGangtaiTop() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603954&pageSize=3&pageNo=0")
            dispatch(changeMusicTopGangtai(data.result.results))
        }
    },
    getUsTop() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603974&pageSize=3&pageNo=0")
            dispatch(changeMusicTopUs(data.result.results))
        }
    },
    getJanpnTop() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?nid=23603982&pageSize=3&pageNo=0")
            dispatch(changeMusicTopJanpn(data.result.results))
        }
    },
    getMusicTopTag(nid = 23603703) {//切换tag
        return async (dispatch) => {
            const { data } = await Axios.get(`/migu/remoting/cms_list_tag?nid=${nid}&pageSize=200&pageNo=0`)
            dispatch(changeMusicTopTag(data.result.results))
        }
    },
}