import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import playListCreator from "../store/actionCreator/playList";

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

class PlayList extends Component {
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
          <span>歌单</span>
        </h2>
        {/* 歌曲分类 */}
        <div style={style.tag}>
          <a
            style={style.a}
            onClick={() =>
              this.props.history.push("/playListTag/经典老歌/" + 1000001635)
            }
          >
            经典老歌
          </a>
          <a
            style={style.a}
            onClick={() =>
              this.props.history.push("/playListTag/华语/" + 1000001762)
            }
          >
            华语
          </a>
          <a
            style={style.a}
            onClick={() =>
              this.props.history.push("/playListTag/流行/" + 1000001672)
            }
          >
            流行
          </a>
          <a
            style={style.a}
            onClick={() =>
              this.props.history.push("/playListTag/民谣/" + 1000001775)
            }
          >
            民谣
          </a>
        </div>
        {/* 歌单列表 */}
        <div style={style.songList}>
          {/* 一个歌单盒子 */}
          {this.props.playList.map((item) => (
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
          onClick={this.props.getMorePlayList.bind(
            this,
            this.props.startIndex + 10
          )}
        />
      </div>
    );
    return this.props.playList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getPlayList();
  }
  componentWillUnmount() {
    this.props.playList.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    playList: state.playList.playList,
    startIndex: state.playList.startIndex,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(playListCreator, dispatch)
)(withRouter(PlayList));
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
  tag: {
    //歌曲标签
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    lineHeight: "30px",
    fontSize: "14px",
    width: "100%",
  },
  a: {
    width: "21%",
    height: "30px",
    background: "#eaeaea",
    borderRadius: "15px",
    color: "#2a2a2a",
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
