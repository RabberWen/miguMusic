import playListDetailType from '../../actionType/playListDetail'
import playListDetailInit from '../../state/playListDetail'
export default function playListDetail(state = playListDetailInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case playListDetailType.GETLISTINFO:
            state.playInfo = payload
            break
        case playListDetailType.GETUSERINFO:
            state.userInfo = payload
            break
        case playListDetailType.GETLIST:
            state.playList = payload
            break
    }
    return state
}