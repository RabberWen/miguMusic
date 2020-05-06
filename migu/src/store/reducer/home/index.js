import homeType from '../../actionType/home'
import homeInit from '../../state/home'
export default function getHomePlayList(state = homeInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case homeType.GETHOMEBANNER:// 轮播图
            state.banner = payload
            break
        case homeType.GETHOMEPLAYLIST:// 推荐歌单
            state.playList = payload
            break
        case homeType.GETHOMENEWSONG:// 新歌速递
            state.newSong = payload
            break
        case homeType.GETHOMENEWDISC:// 新碟上架
            state.newDisc = payload.splice(1, 3)
            break
        case homeType.GETHOMEMUSICEVENT:// 音乐活动
            state.musicEvent = payload
            break
        case homeType.GETHOMEMIGUPRODUCT:// 咪咕出品
            state.miguProduct = payload
            break
    }
    return state
}