import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import musicTopCreator from "../store/actionCreator/musicTop";

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

class MusicTopTag extends Component {
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
          <span>{this.props.match.params.tag}</span>
        </h2>
        {/* 排行榜列表 */}
        <div>
          <React.Fragment>
            {this.props.musicTag.map((item, index) => (
              <div
                key={item.songData.copyrightId}
                style={style.outer}
                onClick={() =>
                  (window.location.href =
                    "http://m.music.migu.cn/v3/music/song/" +
                    item.songData.copyrightId)
                }
              >
                <span style={{ color: "#e81a60", fontSize: "18px" }}>
                  {index + 1}
                </span>
                <div>
                  <h4 style={style.h4}>{item.songData.relationTitle}</h4>
                  <p style={style.sanger}>{item.songData.singerName}</p>
                </div>
                <i
                  style={{
                    color: "#999",
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                  className={"iconfont icon-bofang3"}
                ></i>
                <i
                  style={{
                    color: "#999",
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                  className={"iconfont icon-edit"}
                ></i>
              </div>
            ))}
          </React.Fragment>
        </div>
      </div>
    );
    return this.props.musicTag.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    if (this.props.match.params.tagId / 1) {
      await this.props.getMusicTopTag(this.props.match.params.tagId / 1);
    } else {
      await this.props.getMusicTopTag();
    }
  }
  componentWillUnmount() {
    this.props.musicTag.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    musicTag: state.musicTop.musicTag,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(musicTopCreator, dispatch)
)(withRouter(MusicTopTag));
const style = {
  h2: {
    //标题的样式
    width: "100%",
    height: "45px",
    color: "#2a2a2a",
    lineHeight: "45px",
    fontSize: "18px",
    textAlign: "center",
    position: "relative",
    borderBottom: "1px solid #eee",
  },
  outer: {
    padding: "0 20px",
    height: "55px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
  },
  sanger: {
    color: "#888",
    fontSize: "14px",
    textAlign: "left",
    width: "220px",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: "20px",
  },
  h4: {
    fontSize: "15px",
    color: "#333",
    width: "220px",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: "20px",
  },
};
