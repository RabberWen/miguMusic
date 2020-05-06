import crbtType from '../../actionType/crbt'
import crbtInit from '../../state/crbt'
export default function getPlayList(state = crbtInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case crbtType.CHANGECRBTLIST:
            state.pageNo = payload.currentPage
            state.crbtList = [...state.crbtList, ...payload.results]
            break
        case crbtType.CHANGENEWSONGLIST:
            state.pageNo = payload.currentPage
            state.newSongList = [...state.newSongList, ...payload.results]
            break
    }
    return state
}