// 新歌速递组件,点击进入彩铃路由模块
// 完成1.0
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeCreator from "../../store/actionCreator/home";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 30,
      color: "rgb(252, 80, 198)",
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "(-50%,-50%)",
    }}
    spin
  />
);

class NewSong extends Component {
  render() {
    const data = (
      <div>
        <NavLink style={style.a} to={"/newSong"}>
          <span style={style.span}>新歌速递</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </NavLink>
        <React.Fragment>
          {this.props.newSong.map((item) => (
            <div
              style={style.one}
              key={item.songData.songId}
              onClick={() =>
                (window.location.href =
                  "http://m.music.migu.cn/v3/music/song/" +
                  item.songData.copyrightId)
              }
            >
              <div style={style.box}>
                {/* 左侧整体 */}
                <img style={style.img} src={item.songData.picS} alt="" />
                {/* 左侧图片 */}
                <i
                  style={{
                    fontSize: "22px",
                    color: "#eee",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                  }}
                  className={"iconfont icon-bofang3"}
                ></i>
                {/* 图片定位播放 */}
              </div>
              <div style={style.center}>
                <h4 style={style.h4}>{item.songData.songName}</h4>
                <p>
                  <i
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      marginRight: "5px",
                    }}
                    className={"iconfont icon-sq"}
                  ></i>
                  <span style={{ color: "#888", fontSize: "12.5px" }}>
                    {item.songData.singerName}
                  </span>
                </p>
              </div>
              <div style={style.right}>
                <i
                  style={{
                    color: "#fc50c6",
                    fontSize: "27px",
                    marginRight: "10px",
                  }}
                  className={"iconfont icon-mv"}
                ></i>
                <i
                  style={{
                    color: "#888",
                    fontSize: "27px",
                    marginRight: "10px",
                  }}
                  className={"iconfont icon-edit"}
                ></i>
              </div>
            </div>
          ))}
        </React.Fragment>
      </div>
    );
    return this.props.newSong.length ? data : <Spin indicator={antIcon}></Spin>;
  }
  async componentDidMount() {
    await this.props.getHomeNewSong();
  }
}
function mapStateToProps(state) {
  return {
    newSong: state.home.newSong,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(homeCreator, dispatch)
)(withRouter(NewSong));
const style = {
  a: {
    display: "block",
    width: "100%",
    height: "44px",
    lineHeight: "44px",
    height: "100%",
    color: "#333",
    fontSize: "18px",
  },
  one: {
    width: "100%",
    height: "8%",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    position: "relative",
    width: "13%",
  },
  img: {
    width: "100%",
    display: "block",
  },
  center: {
    width: "64%",
    height: "100%",
    float: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: "10px",
    overflow: "hidden",
  },
  h4: {
    width: "100%",
    color: "#222",
    fontSize: "15px",
    lineHeight: "18px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  right: {
    float: "left",
    height: "100%",
    lineHeight: "55px",
    width: "23%",
  },
};
