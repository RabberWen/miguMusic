import searchType from '../../actionType/search'
import searchInit from '../../state/search'
export default function getPlayList(state = searchInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case searchType.CHANGESEARCHDOWN:
            state.searchdown = payload
            break
        case searchType.CHANGESEARCHTAG:
            state.searchTag = payload
            break
        case searchType.CHANGESEARCHLIST:
            state.pageNo = payload.pageNo
            state.searchList = payload.musics
            break
    }
    return state
}