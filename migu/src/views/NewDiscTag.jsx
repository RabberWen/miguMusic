import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import tagNewDiscCreator from "../store/actionCreator/newDisc";

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

class NewDiscTag extends Component {
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
          {this.props.tagNewDisc.map((item) => (
            <div
              style={style.box}
              key={item.albumData.albumId}
              onClick={() =>
                this.props.history.push(
                  "/newDiscDetail/" + item.albumData.albumId + ".html"
                )
              }
            >
              <img
                style={style.img}
                src={item.albumData.localAlbumPicS}
                alt=""
              />
              <h4 style={style.h4}>{item.albumData.albumName}</h4>
              <p style={style.p}>{item.albumData.relationTitle}</p>
            </div>
          ))}
        </div>
        <input
          style={style.btn}
          type={"button"}
          value={"加载更多"}
          onClick={this.props.getTagMoreDisc.bind(
            this,
            this.props.pageNo + 1,
            this.props.match.params.tagId / 1
          )}
        />
      </div>
    );
    return this.props.tagNewDisc.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getTagDisc(
      this.props.pageNo,
      this.props.match.params.tagId / 1
    );
  }
  componentWillUnmount() {
    this.props.tagNewDisc.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    tagNewDisc: state.newDisc.tagDisc,
    pageNo: state.newDisc.pageNo,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(tagNewDiscCreator, dispatch)
)(withRouter(NewDiscTag));
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
    width: "44%",
    overflow: "hidden",
    height: "240px",
  },
  img: {
    width: "100%",
    display: "block",
  },
  h4: {
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
    margin: "0 auto",
    height: "35px",
    textAlign: "center",
    lineHeight: "35px",
    borderRadius: "20px",
  },
};
