import miguProductType from '../../actionType/miguProduct'
import Axios from 'axios'
export function changeYinRen(payload) {
    return {
        type: miguProductType.YINREN,
        payload
    }
}
export function changeLeFang(payload) {
    return {
        type: miguProductType.LEFANG,
        payload
    }
}
export function changeFangYingTing(payload) {
    return {
        type: miguProductType.FANGYINGTING,
        payload
    }
}
export function changeMinYue(payload) {
    return {
        type: miguProductType.MINYUE,
        payload
    }
}
export function changeLeBang(payload) {
    return {
        type: miguProductType.LEBANG,
        payload
    }
}
export default {
    getYinRen() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23854099&pageNo=0&type=2006")
            dispatch(changeYinRen(data.result.results))
        }
    },
    getLeFang() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23854081&pageNo=0&type=2006")
            dispatch(changeLeFang(data.result.results))
        }
    },
    getFangYingTing() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23854090&pageNo=0&type=2006")
            dispatch(changeFangYingTing(data.result.results))
        }
    },
    getMinYue() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23854108&pageNo=0&type=2006")
            dispatch(changeMinYue(data.result.results))
        }
    },
    getLeBang() {
        return async (dispatch) => {
            const { data } = await Axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23854072&pageNo=0&type=2006")
            dispatch(changeLeBang(data.result.results))
        }
    }
}