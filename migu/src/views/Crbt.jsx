import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import crbtCreator from "../store/actionCreator/crbt";
import { withRouter } from "react-router-dom";

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

class Crbt extends Component {
  render() {
    const data = (
      <div style={style.root}>
        <div style={style.top}>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/首页icon.png")}
              onClick={() => this.props.history.push("/")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/首发icon.png")}
              onClick={() => this.props.history.push("/newSong")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/歌单icon.png")}
              onClick={() => this.props.history.push("/playList")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/演艺icon.png")}
              onClick={() => this.props.history.push("/video")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/视频彩铃icon.png")}
              onClick={() => this.props.history.push("/client")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/榜单icon.png")}
              onClick={() => this.props.history.push("/musicTop")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/会员icon.png")}
              onClick={() => this.props.history.push("/client")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/专辑icon.png")}
              onClick={() => this.props.history.push("/newDisc")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/客户端icon.png")}
              onClick={() => this.props.history.push("/client")} //1
            />
          </li>
          <li style={style.li}>
            <img
              style={style.topImg}
              src={require("../assets/img/彩铃icon.png")}
              onClick={() => this.props.history.push("/crbt")} //1
            />
          </li>
        </div>
        <React.Fragment>
          {this.props.crbtList.map((item) => (
            <div
              style={style.one}
              key={item.songData.copyrightId}
              onClick={() =>
                (window.location.href =
                  "http://m.music.migu.cn/v3/music/song/" +
                  item.songData.copyrightId)
              }
            >
              {/* 左侧图片 */}
              <img style={style.img} src={item.songData.picS} alt="" />
              <div style={style.center}>
                <h4 style={style.h4}>{item.songData.songName}</h4>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <i
                    style={{
                      color: "orange",
                      fontSize: "18px",
                      marginRight: "5px",
                    }}
                    className={"iconfont icon-sq"}
                  ></i>
                  <span style={style.span}>{item.songData.singerName}</span>
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
        <input
          style={style.btn}
          type={"button"}
          value={"加载更多"}
          onClick={this.props.getMoreCrbtList.bind(
            this,
            this.props.pageNo + 1,
            this.props.match.params.id / 1
          )}
        />
        <this.PromotImg></this.PromotImg>
        <this.NavBotton></this.NavBotton>
      </div>
    );
    return this.props.crbtList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getCrbtList();
  }
  componentWillUnmount() {
    this.props.crbtList.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    crbtList: state.crbt.crbtList,
    pageNo: state.crbt.pageNo,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(crbtCreator, dispatch)
)(withRouter(Crbt));
const style = {
  root: {
    background: "#f8f8f8",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "wrap",
    alignItems: "center",
    width: "100%",
    height: "170px",
    marginBottom: "15px",
    background: "#fff",
  },
  li: {
    width: "20%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topImg: {
    height: "66px",
    width: "55px",
    display: "block",
  },
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
    width: "95%",
    height: "13%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    background: "#fff",
  },
  img: {
    width: "13%",
    height: "100%",
    display: "block",
  },
  center: {
    width: "53%",
    height: "100%",
    display: "flex",
    textAlign: "left",
    flexFlow: "column",
    justifyContent: "center",
  },
  h4: {
    width: "53%",
    color: "#222",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
    lineHeight: "20px",
  },
  span: {
    display: "inline-block",
    width: "40%",
    color: "#888",
    fontSize: "12.5px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  right: {
    float: "left",
    height: "100%",
    lineHeight: "50px",
    width: "23%",
  },
  btn: {
    width: "90%",
    height: "35px",
    border: "none",
    background: "#fff",
    color: "#666",
    fontSize: "14px",
    textAlign: "center",
    lineHeight: "35px",
    margin: "0 auto 10px",
    outline: "none",
    borderRadius: "20px",
  },
};
