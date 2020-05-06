import songDetailType from '../../actionType/songDetail'
import songDetailInit from '../../state/songDetail'
export default function songDetail(state = songDetailInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case songDetailType.GETSONGINFO:
            state.playInfo = payload
            break
        case songDetailType.GETLRC:
            state.userInfo = payload
            break
    }
    return state
}