import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import miguProductCreator from "../store/actionCreator/miguProduct";

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

class MiguProduct extends Component {
  render() {
    const data = (
      <div style={style.root}>
        <this.DownLoad></this.DownLoad>
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
        {/* 音人而异二级标题 */}
        <div style={style.title}>
          <span style={style.left}>音人而异</span>
          <span style={style.right}>
            查看全部
            <i className={"iconfont icon-migukefuicon-"}></i>
          </span>
        </div>
        {/* 音人而异主体 */}
        <div style={style.box}>
          {this.props.yinren.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <h4 style={style.h4}>{item.linkData.linkTitle}</h4>
            </div>
          ))}
        </div>
        {/* 乐访二级标题 */}
        <div style={style.title}>
          <span style={style.left}>乐访</span>
          <span style={style.right}>
            查看全部
            <i className={"iconfont icon-migukefuicon-"}></i>
          </span>
        </div>
        {/* 乐访主体 */}
        <div style={style.box}>
          {this.props.lefang.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <h4 style={style.h4}>{item.linkData.linkTitle}</h4>
            </div>
          ))}
        </div>
        {/* 放映厅二级标题 */}
        <div style={style.title}>
          <span style={style.left}>音乐放映厅</span>
          <span style={style.right}>
            查看全部
            <i className={"iconfont icon-migukefuicon-"}></i>
          </span>
        </div>
        {/* 放映厅主体 */}
        <div style={style.box}>
          {this.props.fangyingting.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <h4 style={style.h4}>{item.linkData.linkTitle}</h4>
            </div>
          ))}
        </div>
        {/* 民乐二级标题 */}
        <div style={style.title}>
          <span style={style.left}>民乐课代表</span>
          <span style={style.right}>
            查看全部
            <i className={"iconfont icon-migukefuicon-"}></i>
          </span>
        </div>
        {/* 民乐主体 */}
        <div style={style.box}>
          {this.props.minyue.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <h4 style={style.h4}>{item.linkData.linkTitle}</h4>
            </div>
          ))}
        </div>
        {/* 乐榜二级标题 */}
        <div style={style.title}>
          <span style={style.left}>乐榜</span>
          <span style={style.right}>
            查看全部
            <i className={"iconfont icon-migukefuicon-"}></i>
          </span>
        </div>
        {/* 乐榜主体 */}
        <div style={style.box}>
          {this.props.lebang.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <h4 style={style.h4}>{item.linkData.linkTitle}</h4>
            </div>
          ))}
        </div>
      </div>
    );
    return this.props.lebang.length ? data : <Spin indicator={antIcon}></Spin>;
  }
  async componentDidMount() {
    await this.props.getYinRen();
    await this.props.getLeFang();
    await this.props.getFangYingTing();
    await this.props.getMinYue();
    await this.props.getLeBang();
  }
}
function mapStateToProps(state) {
  return {
    yinren: state.miguProduct.yinren,
    lefang: state.miguProduct.lefang,
    fangyingting: state.miguProduct.fangyingting,
    minyue: state.miguProduct.minyue,
    lebang: state.miguProduct.lebang,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(miguProductCreator, dispatch)
)(withRouter(MiguProduct));
const style = {
  root: {
    background: "#eee",
  },
  box: {
    marginBottom: "10px",
    background: "#fff",
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
  title: {
    background: "#fff",
    width: "100%",
    height: "40px",
    color: "#999",
    fontSize: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    color: "#ef0080",
    marginLeft: "10px",
  },
  right: {
    marginRight: "10px",
  },
  img: {
    height: "150px",
    width: "90%",
    margin: "0 auto",
  },
  h4: {
    fontSize: "14px",
    color: "#000",
    height: "45px",
    lineHeight: "45px",
    marginLeft: "15px",
    width: "90%",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};
