import musicEventInit from '../../state/musicEvent'
import musicEventType from '../../actionType/musicEvent'
export default function MusicEvent(state = musicEventInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case musicEventType.GETMUSICEVENTLIST:
            state.musicEventList = payload
            break
    }
    return state
}