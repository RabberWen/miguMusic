import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Client from './views/Client'
import Service from './views/Service'
import User from './views/User'
import MusicTop from './views/MusicTop';
import NewDisc from './views/NewDisc'
import MusicEvent from './views/MusicEvent';
import MiguProduct from './views/MiguProduct';
import PlayListDetail from './views/PlayListDetail';
import NewDiscDetail from './views/NewDiscDetail';
import PlayList from './views/PlayList';
import PlayListTag from './views/PlayListTag';
import NewDiscTag from './views/NewDiscTag';
import Video from './views/Video';
import MusicTopTag from './views/MusicTopTag';
import Crbt from './views/Crbt';
import NewSong from './views/NewSong'
import SearchDetail from './views/SearchDetail'
import MySearch from './views/MySearch';
function App() {
  return (
    <div className="App">
      <Switch>
        {/* 搜索详情页 */}
        <Route path={"/searchDetail/:keyword"} component={SearchDetail}></Route>
        {/* 搜索 */}
        <Route path={"/search"} component={MySearch}></Route>
        {/* 歌单/推荐歌单 */}
        <Route path={"/playList"} component={PlayList}></Route>
        {/* 标签切换歌单 */}
        <Route path={"/playListTag/:tag/:tagId"} component={PlayListTag}></Route>
        {/* 现场 */}
        <Route path={"/video"} component={Video}></Route>
        {/* 榜单 */}
        <Route path={"/musicTop"} component={MusicTop}></Route>
        {/* 榜单 */}
        <Route path={"/musicTopTag/:tag/:tagId"} component={MusicTopTag}></Route>
        {/* 彩铃 */}
        <Route path={"/crbt"} component={Crbt}></Route>
        {/* 新碟速递 */}
        <Route path={"/newSong"} component={NewSong}></Route>
        {/* 歌单详情页 */}
        <Route path={"/playListDetail/:id.html"} component={PlayListDetail}></Route>
        {/* 新碟上架 */}
        <Route path={"/newDisc"} component={NewDisc}></Route>
        {/* 新碟专辑切换 */}
        <Route path={"/newDiscTag/:tag/:tagId"} component={NewDiscTag}></Route>
        {/* 新碟详情页 */}
        <Route path={"/newDiscDetail/:id.html"} component={NewDiscDetail}></Route>
        {/* 音乐活动 */}
        <Route path={"/musicEvent"} component={MusicEvent}></Route>
        {/* 咪咕出品 */}
        <Route path={"/miguProduct"} component={MiguProduct}></Route>
        {/* 下载客户端 */}
        <Route path={"/client"} component={Client}></Route>
        {/* 在线客服 */}
        <Route path={"/service"} component={Service}></Route>
        {/* 个人中心 */}
        <Route path={"/user"} component={User}></Route>
        {/* 登录 */}
        <Route path={"/login"} component={Login}></Route>
        {/* 返回首页 */}
        <Route exact path={"/"} component={Home}></Route>
      </Switch>
    </div>
  );
}
export default App;
