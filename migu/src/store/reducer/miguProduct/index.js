import miguProductType from '../../actionType/miguProduct'
import miguProductInit from '../../state/miguProduct'
export default function changeMiguProduct(state = miguProductInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case miguProductType.YINREN:
            state.yinren = payload.splice(0, 3)
            break
        case miguProductType.LEFANG:
            state.lefang = payload.splice(0, 3)
            break
        case miguProductType.FANGYINGTING:
            state.fangyingting = payload
            break
        case miguProductType.MINYUE:
            state.minyue = payload
            break
        case miguProductType.LEBANG:
            state.lebang = payload.splice(0, 3)
            break
    }
    return state
}
