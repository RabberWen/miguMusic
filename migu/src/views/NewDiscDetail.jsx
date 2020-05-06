import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import newDiscDetailCreator from "../store/actionCreator/newDiscDetail";

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

class NewDiscDetail extends Component {
  render() {
    const data = (
      <div>
        {/* 头部 */}
        <div style={style.header}>
          <i
            style={style.back}
            className={"iconfont icon-right-angle-copy"}
            onClick={() => this.props.history.go(-1)}
          ></i>
          <div style={style.box} key={this.props.albumInfo.albumId}>
            <img style={style.img} src={this.props.albumInfo.localAlbumPicS} />
            <div style={style.right}>
              <h4 style={style.h4}>{this.props.albumInfo.albumName}</h4>
              <p>
                <i
                  style={{
                    color: "#999",
                    fontSize: "20px",
                    margin: "10px 30px 0 0",
                    textAlign: "left",
                  }}
                  className={"iconfont icon-pinglun"}
                ></i>
                <i
                  style={{
                    color: "#999",
                    fontSize: "20px",
                    margin: "10px 30px 0 0",
                    textAlign: "left",
                  }}
                  className={"iconfont icon-fenxiang"}
                ></i>
              </p>
            </div>
          </div>
        </div>
        {/* 列表 */}
        <div>
          {this.props.albumList.map((item) => (
            <div
              key={item.songId}
              style={style.outer}
              onClick={() =>
                (window.location.href =
                  "http://m.music.migu.cn/v3/music/song/" + item.copyrightId)
              }
            >
              <div>
                <h4 style={style.h4}>{item.songName}</h4>
                <p style={style.sanger}>{item.singerName}</p>
              </div>
              <i
                style={{ color: "#999", fontSize: "30px", marginRight: "10px" }}
                className={"iconfont icon-bofang3"}
              ></i>
              <i
                style={{ color: "#999", fontSize: "30px", marginRight: "10px" }}
                className={"iconfont icon-edit"}
              ></i>
            </div>
          ))}
        </div>
      </div>
    );
    return this.props.albumList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getAlbumInfo(this.props.match.params.id);
    await this.props.getAlbumList(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.albumList.length = 0;
    this.props.albumInfo.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    albumList: state.newDiscDetail.albumList,
    albumInfo: state.newDiscDetail.albumInfo,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(newDiscDetailCreator, dispatch)
)(withRouter(NewDiscDetail));
const style = {
  header: {
    width: "100%",
    height: "160px",
  },
  back: {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "20px",
    color: "#999",
  },
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100px",
    height: "100px",
    display: "block",
    margin: "10px 0 0 10px",
  },
  right: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "200px",
    height: "100px",
    margin: "10px 0 0 20px",
    marginLeft: "20px",
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
};
