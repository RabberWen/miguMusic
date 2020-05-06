// 首页路由
// 完成1.0
import React, { Component } from "react";
import Banner from "../components/home/Banner";
import Search from "../components/home/Search";
import Category from "../components/home/Category";
import RecomPlayList from "../components/home/RecomPlayList";
import NewSong from "../components/home/NewSong";
import NewDisc from "../components/home/NewDisc";
import MusicEvent from "../components/home/MusicEvent";
import MiguProduct from "../components/home/MiguProduct";
class Home extends Component {
  render() {
    return (
      <div>
        {/* 轮播图 */}
        <Banner></Banner>
        {/* 搜索 */}
        <Search></Search>
        {/* 分类 */}
        <Category></Category>
        {/* 推荐歌单 */}
        <RecomPlayList></RecomPlayList>
        {/* 新歌速递 */}
        <NewSong></NewSong>
        {/* 新碟上架 */}
        <NewDisc></NewDisc>
        {/* 音乐活动 */}
        <MusicEvent></MusicEvent>
        {/* 咪咕出品 */}
        <MiguProduct></MiguProduct>
        {/* 三千鸦杀宣传图 */}
        <this.PromotImg></this.PromotImg>
        {/* 底部导航 */}
        <this.NavBotton></this.NavBotton>
        {/* 下载客户端按钮 */}
        <this.DownLoad></this.DownLoad>
      </div>
    );
  }
}
export default Home;
