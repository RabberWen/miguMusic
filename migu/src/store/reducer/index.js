import { combineReducers } from 'redux'
import home from './home'
import musicTop from './musicTop'
import newDisc from './newDisc'
import musicEvent from './musicEvent'
import miguProduct from './miguProduct'
import playListDetail from './playListDetail'
import newDiscDetail from './newDiscDetail'
import songDetail from './songDetail'
import playList from './playList'
import miguVideo from './miguVideo'
import crbt from './crbt'
import search from './search'
export default combineReducers({
    home,
    musicTop,
    newDisc,
    musicEvent,
    miguProduct,
    playListDetail,
    newDiscDetail,
    songDetail,
    playList,
    miguVideo,
    crbt,
    search,
})