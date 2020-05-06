import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import miguVideoCreator from "../store/actionCreator/miguVideo";

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

class Video extends Component {
  render() {
    const data = (
      <div>
        {/* 标题 */}
        <h2 style={style.h2}>
          <i
            style={{
              fontSize: "20px",
              fontWeight: "900",
              position: "absolute",
              left: "15px",
            }}
            className={"iconfont icon-right-angle-copy"}
            onClick={() => this.props.history.go(-1)}
          ></i>
          <span>现场</span>
        </h2>
        {/* 分类 */}
        <div style={style.headerTop}>
          <img
            style={{ width: "45%", display: "block" }}
            src={require("../assets/img/演唱会.png")}
          />
          <img
            style={{ width: "29%", display: "block" }}
            src={require("../assets/img/音乐视频.png")}
          />
          <img
            style={{ width: "15%", display: "block" }}
            src={require("../assets/img/活动.png")}
          />
        </div>
        {/* 演唱会直播 */}
        <h4 style={style.h4}>
          <span>演唱会直播</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </h4>
        {/* 演唱会直播盒子 */}
        <div style={style.live}>
          {this.props.live.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img
                src={item.linkData.linkPicUrl}
                style={{
                  display: "block",
                  width: "100%",
                  margin: "0 auto",
                }}
              />
              <h5 style={style.h5}>{item.linkData.linkTitle}</h5>
              <p style={style.p}>{item.linkData.linkDes}</p>
            </div>
          ))}
        </div>
        {/* 演唱会全程回顾 */}
        <h4 style={style.h4}>演唱会全程回顾</h4>
        {this.props.replay.map((item) => (
          <div
            style={style.replay}
            key={item.linkData.linkId}
            onClick={() => (window.location.href = item.linkData.linkUrl)}
          >
            <img
              src={item.linkData.linkPicUrl}
              style={{ display: "block", width: "100%" }}
            />
            <h5 style={style.h5}>{item.linkData.linkTitle}</h5>
            <p style={style.p}>{item.linkData.linkDes}</p>
          </div>
        ))}
        {/* MV放映厅 */}
        <h4 style={style.h4}>
          <span>MV放映厅</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </h4>
        {/* MV放映厅的详情 */}
        <div style={style.mvbox}>
          {this.props.mv.map((item) => (
            <div style={style.mvone} key={item.mvData.copyrightId}>
              <img
                style={{ width: "100%", display: "block" }}
                src={item.mvData.imageUrlMap.entry[0].value}
              />
              <h5 style={style.h5}>{item.mvData.contentName}</h5>
              <p style={style.p}>{item.mvData.actorName}</p>
            </div>
          ))}
        </div>
        {/* 爱豆情报站 */}
        <h4 style={style.h4}>
          <span>爱豆情报站</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </h4>
        {/* 爱豆的图片 */}
        <React.Fragment>
          {this.props.idou.map((item) => (
            <div
              style={style.replay}
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img
                src={item.linkData.linkPicUrl}
                style={{ display: "block", width: "100%", height: "140px" }}
              />
              <h5 style={style.h5}>{item.linkData.linkTitle}</h5>
              <p style={style.p}>{item.linkData.linkDes}</p>
            </div>
          ))}
        </React.Fragment>
        <this.PromotImg></this.PromotImg>
        <this.NavBotton></this.NavBotton>
      </div>
    );
    return this.props.idou.length ? data : <Spin indicator={antIcon}></Spin>;
  }
  async componentDidMount() {
    await this.props.getLive();
    await this.props.getReplay();
    await this.props.getMv();
    await this.props.getIdou();
  }
}
function mapStateToProps(state) {
  return {
    live: state.miguVideo.live,
    replay: state.miguVideo.replay,
    mv: state.miguVideo.mv,
    idou: state.miguVideo.idou,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(miguVideoCreator, dispatch)
)(withRouter(Video));
const style = {
  h2: {
    width: "100%",
    height: "45px",
    color: "#a2a2a2a",
    lineHeight: "45px",
    fontSize: "18px",
    textAlign: "center",
    position: "relative",
    borderBottom: "1px solid #f1f1f1",
  },
  //演唱会音乐视频活动
  headerTop: {
    width: "100%",
    display: "flex",
    margin: "10px 0",
    justifyContent: "space-around",
  },
  h4: {
    display: "block",
    width: "100%",
    height: "44px",
    lineHeight: "44px",
    height: "100%",
    color: "#333",
    fontSize: "18px",
  },
  live: {
    width: "100%",
  },
  h5: {
    color: "#333",
    fontSize: "14px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: "20px",
    overflow: "hidden",
    textAlign: "left",
    width: "48%",
  },
  p: {
    color: "#999",
    padding: "0 5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: "20px",
    overflow: "hidden",
    textAlign: "left",
  },
  mvbox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "wrap",
  },
  mvone: {
    width: "48%",
  },
};
