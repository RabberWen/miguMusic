import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import musicTopCeator from "../store/actionCreator/musicTop";

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

class MusicTop extends Component {
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
          <span>排行榜</span>
        </h2>
        {/* 榜单简介 */}
        <div style={style.div}>
          {this.props.musicTopLog.map((item) => (
            <div key={item.columnData.columnId}>
              <p style={style.title}>咪咕乐·榜>></p>
              <h3 style={style.h3}>{item.columnData.columnTitle}</h3>
              <p style={style.p}>DJ点评，每周更新</p>
              <img
                style={style.img}
                src={item.columnData.columnSmallPicUrl}
                alt=""
              />
            </div>
          ))}
        </div>
        {/* 官方榜标题 */}
        <h4 style={style.h4}>咪咕官方榜</h4>
        {/* 官方榜 */}
        <div>
          {/* 音乐榜 */}
          <div
            style={style.box}
            onClick={() =>
              this.props.history.push("/musicTopTag/音乐榜/" + 23603703)
            }
          >
            <img
              style={style.left}
              src={require("../assets/img/音乐榜.jpg")}
              alt=""
            />
            <div style={style.center}>
              {this.props.musicTop.map((item, i) => (
                <React.Fragment key={item.songData.copyrightId}>
                  <p style={style.des}>
                    <span>{i + 1}.</span>
                    {item.songData.relationTitle}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <i
              style={{
                color: "#999",
                fontSize: "13px",
                fontWeight: "900",
                marginRight: "20px",
              }}
              className={"iconfont icon-migukefuicon-"}
            ></i>
          </div>
          {/* 影视榜 */}
          <div
            style={style.box}
            onClick={() => this.props.history.push("/musicTopTag/影视榜/" + 0)}
          >
            <img
              style={style.left}
              src={require("../assets/img/影视榜.jpg")}
              alt=""
            />
            <div style={style.center}>
              {this.props.videoTop.map((item, i) => (
                <React.Fragment key={item.songData.copyrightId}>
                  <p style={style.des}>
                    <span>{i + 1}.</span>
                    {item.songData.relationTitle}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <i
              style={{
                color: "#999",
                fontSize: "13px",
                fontWeight: "900",
                marginRight: "20px",
              }}
              className={"iconfont icon-migukefuicon-"}
            ></i>
          </div>
          {/* 华语榜内地 */}
          <div
            style={style.box}
            onClick={() =>
              this.props.history.push("/musicTopTag/华语榜(内地)/" + 23603926)
            }
          >
            <img
              style={style.left}
              src={require("../assets/img/华语榜内地.jpg")}
              alt=""
            />
            <div style={style.center}>
              {this.props.neidiTop.map((item, i) => (
                <React.Fragment key={item.songData.copyrightId}>
                  <p style={style.des}>
                    <span>{i + 1}.</span>
                    {item.songData.relationTitle}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <i
              style={{
                color: "#999",
                fontSize: "13px",
                fontWeight: "900",
                marginRight: "20px",
              }}
              className={"iconfont icon-migukefuicon-"}
            ></i>
          </div>
          {/* 华语榜港台 */}
          <div
            style={style.box}
            onClick={() =>
              this.props.history.push("/musicTopTag/华语榜(港台)/" + 0)
            }
          >
            <img
              style={style.left}
              src={require("../assets/img/华语榜港台.jpg")}
              alt=""
            />
            <div style={style.center}>
              {this.props.gangtaiTop.map((item, i) => (
                <React.Fragment key={item.songData.copyrightId}>
                  <p style={style.des}>
                    <span>{i + 1}.</span>
                    {item.songData.relationTitle}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <i
              style={{
                color: "#999",
                fontSize: "13px",
                fontWeight: "900",
                marginRight: "20px",
              }}
              className={"iconfont icon-migukefuicon-"}
            ></i>
          </div>
          {/* 欧美榜 */}
          <div
            style={style.box}
            onClick={() =>
              this.props.history.push("/musicTopTag/欧美榜/" + 23603982)
            }
          >
            <img
              style={style.left}
              src={require("../assets/img/欧美榜.jpg")}
              alt=""
            />
            <div style={style.center}>
              {this.props.usTop.map((item, i) => (
                <React.Fragment key={item.songData.copyrightId}>
                  <p style={style.des}>
                    <span>{i + 1}.</span>
                    {item.songData.relationTitle}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <i
              style={{
                color: "#999",
                fontSize: "13px",
                fontWeight: "900",
                marginRight: "20px",
              }}
              className={"iconfont icon-migukefuicon-"}
            ></i>
          </div>
          {/* 日韩榜 */}
          <div
            style={style.box}
            onClick={() =>
              this.props.history.push("/musicTopTag/日韩榜/" + 23603982)
            }
          >
            <img
              style={style.left}
              src={require("../assets/img/日韩榜.jpg")}
              alt=""
            />
            <div style={style.center}>
              {this.props.janpnTop.map((item, i) => (
                <React.Fragment key={item.songData.copyrightId}>
                  <p style={style.des}>
                    <span>{i + 1}.</span>
                    {item.songData.relationTitle}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <i
              style={{
                color: "#999",
                fontSize: "13px",
                fontWeight: "900",
                marginRight: "20px",
              }}
              className={"iconfont icon-migukefuicon-"}
            ></i>
          </div>
        </div>
        {/* 咪咕特色榜 */}
        <h4 style={style.h4}>咪咕特色榜</h4>
        <div style={style.teseBox}>
          <img
            style={style.teseImg}
            src={require("../assets/img/新人榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/新人榜/" + 23604023)
            }
          />
          <img
            style={style.teseImg}
            src={require("../assets/img/唱作人榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/唱作人榜/" + 23604040)
            }
          />
          <img
            style={style.teseImg}
            src={require("../assets/img/彩铃榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/彩铃榜/" + 23604023)
            }
          />
          <img
            style={style.teseImg}
            src={require("../assets/img/原创榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/原创榜/" + 23604058)
            }
          />
          <img
            style={style.teseImg}
            src={require("../assets/img/KTV榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/KTV榜/" + 23604040)
            }
          />

          <img
            style={style.teseImg}
            src={require("../assets/img/网络榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/网络榜/" + 23604058)
            }
          />
          <img
            style={style.teseImg}
            src={require("../assets/img/新专辑榜.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/新专辑榜/" + 23604058)
            }
          />
        </div>
        {/* 全球权威榜 */}
        <h4 style={style.h4}>全球权威榜</h4>
        <div style={style.quanweiBox}>
          <img
            style={style.quanweiImg}
            src={require("../assets/img/iTunes.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/iTunes/" + 23634262)
            }
          />
          <img
            style={style.quanweiImg}
            src={require("../assets/img/公告牌.jpg")}
            onClick={() =>
              this.props.history.push("/musicTopTag/BillBoard/" + 0)
            }
          />
          <img
            style={style.quanweiImg}
            src={require("../assets/img/Hito.jpg")}
            onClick={() => this.props.history.push("/musicTopTag/Hito/" + 0)}
          />
          <img
            style={style.quanweiImg}
            src={require("../assets/img/Top.jpg")}
            onClick={() => this.props.history.push("/musicTopTag/Top/" + 0)}
          />
          <img
            style={style.quanweiImg}
            src={require("../assets/img/Mnet.jpg")}
            onClick={() => this.props.history.push("/musicTopTag/Mnet/" + 0)}
          />
          <img
            style={style.quanweiImg}
            src={require("../assets/img/UK.jpg")}
            onClick={() => this.props.history.push("/musicTopTag/UKTOP/" + 0)}
          />
          <img
            style={style.quanweiImg}
            src={require("../assets/img/CMIC.jpg")}
            onClick={() => this.props.history.push("/musicTopTag/CMIC/" + 0)}
          />
        </div>
      </div>
    );
    return this.props.janpnTop.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getMusicTopLog();
    await this.props.getMusicTop();
    await this.props.getVideoTop();
    await this.props.getNeidiTop();
    await this.props.getGangtaiTop();
    await this.props.getUsTop();
    await this.props.getJanpnTop();
  }
}
function mapStateToProps(state) {
  return {
    musicTopLog: state.musicTop.musicTopLog,
    musicTop: state.musicTop.musicTop,
    videoTop: state.musicTop.videoTop,
    neidiTop: state.musicTop.neidiTop,
    gangtaiTop: state.musicTop.gangtaiTop,
    usTop: state.musicTop.usTop,
    janpnTop: state.musicTop.janpnTop,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(musicTopCeator, dispatch)
)(withRouter(MusicTop));
const style = {
  h2: {
    width: "100%",
    height: "40px",
    color: "#000",
    lineHeight: "40px",
    fontSize: "17px",
    textAlign: "center",
    position: "relative",
    background: "#eee",
  },
  div: {
    position: "relative",
    margin: "25px auto",
    background: "#eee",
    width: "95%",
    height: "100px",
    borderRadius: "5px",
  },
  title: {
    background: "#000",
    color: "#fff",
    position: "absolute",
    top: "-10px",
    width: "25%",
    height: "30px",
    left: "10px",
    borderRadius: "5px",
    fontSize: "15px",
    textAlign: "center",
    lineHeight: "30px",
  },
  h3: {
    position: "absolute",
    top: "30px",
    left: "10px",
    color: "#333",
    fontSize: "15px",
  },
  p: {
    position: "absolute",
    top: "60px",
    left: "10px",
    color: "#8d8d8d",
    fontSize: "11px",
  },
  img: {
    width: "90px",
    height: "90px",
    display: "block",
    float: "right",
    margin: "5px",
  },
  h4: {
    width: "100%",
    height: "45px",
    color: "#333",
    fontSize: "19px",
    textAlign: "center",
    lineHeight: "45px",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  left: {
    width: "26%",
  },
  center: {
    color: "#333",
    fontSize: "14px",
    width: "58%",
  },
  des: {
    margin: "10px auto",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: "20px",
  },
  teseBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "wrap",
  },
  teseImg: {
    width: "30%",
    marginBottom: "10px",
  },
  quanweiBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "wrap",
  },
  quanweiImg: {
    width: "30%",
    marginBottom: "10px",
  },
};
