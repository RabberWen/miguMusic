import musicTopType from '../../actionType/musicTop'
import musicTopInit from '../../state/musicTop'
export default function musicTop(state = musicTopInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case musicTopType.GETMUSICLOG:
            state.musicTopLog = payload
            break
        case musicTopType.GETMUSICLIST:
            state.musicTop = payload
            break
        case musicTopType.GETVIDEOLIST:
            state.videoTop = payload
            break
        case musicTopType.GETNEIDILIST:
            state.neidiTop = payload
            break
        case musicTopType.GETGANGTAILIST:
            state.gangtaiTop = payload
            break
        case musicTopType.GETUSLIST:
            state.usTop = payload
            break
        case musicTopType.GETJANPNLIST:
            state.janpnTop = payload
            break
        case musicTopType.GETMUSICTAG://tag
            state.musicTag = payload
            break
    }
    return state
}