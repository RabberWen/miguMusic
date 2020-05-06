import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import musicEventCreator from "../store/actionCreator/musicEvent";

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

class MusicEvent extends Component {
  render() {
    const data = (
      <div style={style.root}>
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
          <span>活动栏目</span>
        </h2>
        <React.Fragment>
          {this.props.musicEventList.map((item) => (
            <div
              style={style.box}
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <div style={style.div}>
                <h4 style={style.h4}>{item.linkData.linkTitle}</h4>
                <p style={style.p}>{item.linkData.linkDes}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
        <p style={style.bottom}>--这是我的底线--</p>
      </div>
    );
    return this.props.musicEventList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getMusicEventList();
  }
}
function mapStateToProps(state) {
  return {
    musicEventList: state.musicEvent.musicEventList,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(musicEventCreator, dispatch)
)(withRouter(MusicEvent));
const style = {
  root: {
    background: "#eee",
  },
  h2: {
    width: "100%",
    height: "40px",
    color: "#000",
    lineHeight: "40px",
    fontSize: "17px",
    textAlign: "center",
    position: "relative",
    background: "#f0f0f0",
  },
  box: {
    borderBottom: "1px solid #eee",
    marginBottom: "10px",
  },
  img: {
    width: "100%",
    height: "140px",
    display: "block",
  },
  div: {
    padding: "4px 10px",
    background: "#fff",
  },
  h4: {
    color: "#333",
    fontSize: "14px",
    fontWeight: "900",
    textAlign: "left",
  },
  p: {
    color: "#666",
    fontSize: "13px",
    textAlign: "left",
    padding: "4px 0",
  },
  bottom: {
    color: "#808080",
    width: "100%",
    height: "100px",
    textAlign: "center",
    lineHeight: "100px",
    fontSize: "12px",
  },
};
