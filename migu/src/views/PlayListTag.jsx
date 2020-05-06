import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import tagPlayListCreator from "../store/actionCreator/playList";

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

class PlayListTag extends Component {
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
        {/* 歌单列表 */}
        <div style={style.songList}>
          {/* 一个歌单盒子 */}
          {this.props.tagPlayList.map((item) => (
            <div
              style={style.box}
              key={item.playListId}
              onClick={() =>
                this.props.history.push(
                  "/playListDetail/" + item.playListId + ".html"
                )
              }
            >
              <img style={style.img} src={item.image} alt="" />
              <h4 style={style.h4}>{item.playListName}</h4>
              <p style={style.p}>{item.createName}</p>
            </div>
          ))}
        </div>
        <input
          style={style.btn}
          type={"button"}
          value={"加载更多歌单"}
          onClick={this.props.getMoreTagPlayList.bind(
            this,
            this.props.match.params.tagId / 1,
            this.props.startIndex + 10
          )}
        />
      </div>
    );
    return this.props.tagPlayList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getTagPlayList(this.props.match.params.tagId / 1);
  }
  componentWillUnmount() {
    this.props.tagPlayList.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    tagPlayList: state.playList.tagPlayList,
    startIndex: state.playList.startIndex,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(tagPlayListCreator, dispatch)
)(withRouter(PlayListTag));
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
  //图片列表
  songList: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
  },
  box: {
    textAlign: "left",
    width: "48%",
    overflow: "hidden",
    height: "64%",
  },
  img: {
    width: "100%",
    display: "block",
  },
  h4: {
    width: "100%",
    color: "#333",
    fontSize: "14px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: "20px",
    overflow: "hidden",
  },
  p: {
    color: "#888",
    fontSize: "12px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  btn: {
    width: "90%",
    color: "#666",
    fontSize: "14px",
    background: "#eaeaea",
    outline: "none",
    margin: "10px auto",
    height: "35px",
    textAlign: "center",
    lineHeight: "35px",
    borderRadius: "20px",
  },
};
