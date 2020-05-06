// 轮播图组件
// 完成1.0
import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

class Banner extends Component {
  render() {
    const data = (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.props.banner.map((item) => (
            <div
              style={style.box}
              className="swiper-slide"
              key={item.linkData.linkId}
              onClick={() => (window.location.href = item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
    return this.props.banner.length ? data : <Spin indicator={antIcon}></Spin>;
  }
  async componentDidMount() {
    await this.props.getHomeBanner();
    new Swiper(".swiper-container", {
      observer: true,
      autoplay: true,
      loop: true, //无缝轮播
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}
function mapStateToProps(state) {
  return {
    banner: state.home.banner,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(homeCreator, dispatch)
)(withRouter(Banner));
const style = {
  box: {
    width: "100%",
  },
  img: {
    width: "100%",
    display: "block",
  },
};
