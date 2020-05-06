import miguVideoType from '../../actionType/miguVideo'
import miguVideoInit from '../../state/miguVideo'
export default function changeMiguProduct(state = miguVideoInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case miguVideoType.GETLIVE:
            state.live = payload
            break
        case miguVideoType.GETREPLAY:
            state.replay = payload
            break
        case miguVideoType.GETMV:
            state.mv = payload.splice(0, 4)
            break
        case miguVideoType.GETIDOU:
            state.idou = payload
            break
    }
    return state
}
