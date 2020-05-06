// 导入首页actionType
import homeType from '../../actionType/home/index'
import axios from 'axios'
// 轮播图
export function changeHomeBanner(payload) {
    return {
        type: homeType.GETHOMEBANNER,
        payload
    }
}
// 推荐歌单
export function changeHomePlayList(payload) {
    return {
        type: homeType.GETHOMEPLAYLIST,
        payload
    }
}
// 新歌速递
export function changeHomeNewSong(payload) {
    return {
        type: homeType.GETHOMENEWSONG,
        payload
    }
}
// 新碟上架
export function changeHomeNewDisc(payload) {
    return {
        type: homeType.GETHOMENEWDISC,
        payload
    }
}
// 音乐活动
export function changeHomeMusicEvent(payload) {
    return {
        type: homeType.GETHOMEMUSICEVENT,
        payload
    }
}
// 咪咕出品
export function changeHomeMiguProduct(payload) {
    return {
        type: homeType.GETHOMEMIGUPRODUCT,
        payload
    }
}
export default {
    // 轮播图
    getHomeBanner() {
        return async (dispatch) => {
            const { data } = await axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006")
            dispatch(changeHomeBanner(data.result.results))
        }
    },
    getHomePlayList() {
        // 推荐歌单
        return async (dispatch) => {
            const { data } = await axios.get("/migu/remoting/client_play_list_tag")
            dispatch(changeHomePlayList(data.msg))
        }
    },
    getHomeNewSong() {
        // 新歌速递
        return async (dispatch) => {
            const { data } = await axios.get("/migu/remoting/cms_list_tag?pageSize=3&nid=23853978&pageNo=0")
            dispatch(changeHomeNewSong(data.result.results))
        }
    },
    getHomeNewDisc() {
        // 新碟上架
        return async (dispatch) => {
            const { data } = await axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=23854016&pageNo=0&type=2003")
            dispatch(changeHomeNewDisc(data.result.results))
        }
    },
    getHomeMusicEvent() {
        // 音乐活动
        return async (dispatch) => {
            const { data } = await axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=25068352&pageNo=0&type=2006")
            dispatch(changeHomeMusicEvent(data.result.results))
        }
    },
    getHomeMiguProduct() {
        // 咪咕出品
        return async (dispatch) => {
            const { data } = await axios.get("/migu/remoting/cms_list_tag?pageSize=10&nid=25066472&pageNo=0&type=2006")
            dispatch(changeHomeMiguProduct(data.result.results))
        }
    },
}