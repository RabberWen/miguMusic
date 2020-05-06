import newDiscDetailType from '../../actionType/newDiscDetail'
import newDiscDetailInit from '../../state/newDiscDetail'
export default function newDiscDetail(state = newDiscDetailInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case newDiscDetailType.GETALBUMINFO:
            state.albumInfo = payload
            break
        case newDiscDetailType.GETUSERINFO:
            state.userInfo = payload
            break
        case newDiscDetailType.GETALBUMLIST:
            state.albumList = payload
            break
    }
    return state
}