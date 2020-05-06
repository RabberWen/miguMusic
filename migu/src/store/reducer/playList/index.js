import playListType from '../../actionType/playList'
import playListInit from '../../state/playList'
export default function getPlayList(state = playListInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case playListType.CHANGEPLAYLIST:
            if (state.playList.length === 0) {
                state.startIndex = 0
                state.playList = payload
            } else {
                state.startIndex += 10
                state.playList = [...state.playList, ...payload]
            }
            break
        case playListType.CHANGETAGPLAYLIST:
            if (state.tagPlayList.length === 0) {
                state.startIndex = 0
                state.tagPlayList = payload
            } else {
                state.startIndex += 10
                state.tagPlayList = [...state.tagPlayList, ...payload]
            }
            break
    }
    return state
}