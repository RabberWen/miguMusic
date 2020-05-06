// 音乐活动组件
// 完成1.0
import { NavLink, withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeCreator from "../../store/actionCreator/home";
class MusicEvent extends Component {
  render() {
    return (
      <div>
        <NavLink style={style.a} to={"/musicEvent"}>
          <span style={style.span}>音乐活动</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </NavLink>
        <React.Fragment>
          {this.props.musicEvent.map((item) => (
            <div
              key={item.linkData.linkId}
              onClick={() => window.open(item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <div style={style.div}>
                <h3 style={style.h3}>{item.linkData.linkTitle}</h3>
                <p style={style.p}>{item.linkData.linkDes}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getHomeMusicEvent();
  }
}
function mapStateToProps(state) {
  return {
    musicEvent: state.home.musicEvent,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(homeCreator, dispatch)
)(withRouter(MusicEvent));
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
  div: {
    padding: "5px",
    textAlign: "left",
  },
  img: {
    width: "100%",
    display: "block",
  },
  h3: {
    color: "#333",
    fontSize: "14px",
    marginBottom: "5px",
  },
  p: {
    color: "#999",
    fontSize: "12px",
  },
};
