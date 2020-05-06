import newDiscType from '../../actionType/newDisc'
import newDiscInit from '../../state/newDisc'
export default function changeNewDisc(state = newDiscInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case newDiscType.GETALLDISC:
            state.allDisc = [...state.allDisc, ...payload.results]
            state.pageNo = payload.currentPage
            break
        case newDiscType.GETTAGDISC:
            state.tagDisc = [...state.tagDisc, ...payload.results]
            state.pageNo = payload.currentPage
            break
    }
    return state
}