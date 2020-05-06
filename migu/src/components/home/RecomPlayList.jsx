// 推荐歌单组件,点击标题跳转"/playList",点击歌单跳转"/recomPlayList/" + item.playlistId
// 完成1.0
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import playListCreator from "../../store/actionCreator/home/index";

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

class RecomPlayList extends Component {
  render() {
    const data = (
      <div>
        <NavLink style={style.a} to={"/playList"}>
          <span style={style.span}>推荐歌单</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </NavLink>
        <ul style={style.ul}>
          {this.props.playList.map((item) => (
            <React.Fragment key={item.playlistId}>
              <li
                style={style.li}
                onClick={() =>
                  this.props.history.push(
                    "/playListDetail/" + item.playlistId + ".html"
                  )
                }
              >
                <div style={style.div}>
                  <img style={style.img} src={item.image} alt="" />
                  <div style={style.bottom}>
                    <i
                      style={{
                        fontSize: "12px",
                        color: "white",
                        margin: "2px",
                      }}
                      className={"iconfont icon-tools-erji-copy"}
                    ></i>
                    <span style={{ color: "white" }}>
                      {parseInt(item.playlistId / 1000000)}万
                    </span>
                  </div>
                </div>
                <p style={style.p}>{item.playlistName}</p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
    return this.props.playList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getHomePlayList();
  }
}
function mapStateToProps(state) {
  return {
    playList: state.home.playList,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(playListCreator, dispatch)
)(withRouter(RecomPlayList));
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
  ul: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  li: {
    width: "32%",
    marginBottom: "10px",
  },
  div: {
    width: "100%",
    position: "relative",
  },
  bottom: {
    position: "absolute",
    bottom: "2px",
  },
  img: {
    width: "100%",
    display: "block",
  },
  p: {
    height: "30px",
    padding: "5px",
    lineHeight: "30px",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};
