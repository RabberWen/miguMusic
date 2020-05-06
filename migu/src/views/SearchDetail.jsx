import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import searchCreator from "../store/actionCreator/search";

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

class SearchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
    };
  }
  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async changeKeyWord(keyword) {
    this.props.history.push("/searchDetail/" + keyword);
    await this.props.getSearchList(keyword);
  }
  render() {
    const data = (
      <div style={style.root}>
        <div style={style.seainput_div}>
          <div style={style.seainput_div.left_con}>
            <input
              autoComplete={"off"}
              style={style.seainput_div.left_con.input}
              placeholder={this.props.match.params.keyword}
              type="text"
              name={"keyword"}
              onChange={this.changeHandler.bind(this)}
            />
            <a
              style={style.seainput_div.left_con.a}
              onClick={this.changeKeyWord.bind(this, this.state.keyword)}
            >
              搜索
            </a>
          </div>
          <span
            onClick={() => {
              this.props.history.push("/search");
            }}
            style={style.seainput_div.span}
          >
            返回
          </span>
        </div>
        <nav style={style.nav}>
          <a style={style.nav.navlink}>歌曲</a>
          <a style={style.nav.navlink}>歌手</a>
          <a style={style.nav.navlink}>专辑</a>
          <a style={style.nav.navlink}>歌单</a>
        </nav>
        <div>
          <div style={style.result}>相关搜索结果为</div>
          <div style={style.song_list}>
            {this.props.searchList.map((item) => (
              <div
                style={style.one}
                key={item.copyrightId}
                onClick={() =>
                  (window.location.href =
                    "http://m.music.migu.cn/v3/music/song/" + item.copyrightId)
                }
              >
                {/* 左侧图片 */}
                <img style={style.img} src={item.cover} />
                <div style={style.center}>
                  <h4 style={style.h4}>{item.songName}</h4>
                  <p style={{ display: "flex", alignItems: "center" }}>
                    <i
                      style={{
                        color: "orange",
                        fontSize: "18px",
                        marginRight: "5px",
                      }}
                      className={"iconfont icon-sq"}
                    ></i>
                    <span style={style.span}>{item.singerName}</span>
                  </p>
                </div>
                <div style={style.right}>
                  <i
                    style={{
                      color: "#fc50c6",
                      fontSize: "27px",
                      marginRight: "10px",
                    }}
                    className={"iconfont icon-mv"}
                  ></i>
                  <i
                    style={{
                      color: "#888",
                      fontSize: "27px",
                      marginRight: "10px",
                    }}
                    className={"iconfont icon-edit"}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <this.PromotImg></this.PromotImg>
        <this.NavBotton></this.NavBotton>
      </div>
    );
    return this.props.searchList.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getSearchList(this.props.match.params.keyword);
  }
  componentWillUnmount() {
    this.props.searchList.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    searchList: state.search.searchList,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(searchCreator, dispatch)
)(withRouter(SearchDetail));
const style = {
  root: {
    background: "#f8f8f8",
  },
  seainput_div: {
    color: "#000000",
    background: "#FFFFFF",
    padding: "10px 0",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    left_con: {
      width: "77%",
      overflow: "hidden",
      fontSize: "16px",
      border: "1px solid #EBEBEB",
      borderRadius: "18px",
      background: "#F4F4F4",
      input: {
        outline: "none",
        width: "65%",
        height: "40px",
        border: "none",
        padding: "0 0 0 28.3125px",
        lineHeight: "40px",
        background:
          "url(/migu/fs/media/p/149/163/5129/image/20151025/1306812.png) no-repeat center left",
        backgroundSize: "20px 20px",
        fontSize: "14px",
      },
      a: {
        width: "20%",
        height: "40px",
        color: "#333333",
        lineHeight: "40px",
        textAlign: "center",
        display: "inline-block",
      },
    },
    span: {
      width: "15%",
      fontSize: "16px",
      height: "40px",
      color: "#999999",
      float: "right",
      textAlign: "center",
      lineHeight: "40px",
    },
  },
  nav: {
    width: "100%",
    height: "42px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    navlink: {
      width: "25%",
      color: "#666666",
      fontWeight: "bolder",
      fontSize: "16px",
    },
  },
  result: {
    width: "100%",
    fontSize: "12px",
    color: "#999999",
    lineHeight: "34px",
    textAlign: "left",
    textIndent: "30px",
  },
  song_list: {
    textAlign: "center",
  },
  one: {
    width: "95%",
    height: "13%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    background: "#fff",
  },
  img: {
    width: "13%",
    height: "100%",
    display: "block",
  },
  center: {
    width: "53%",
    height: "100%",
    display: "flex",
    textAlign: "left",
    flexFlow: "column",
    justifyContent: "center",
  },
  h4: {
    width: "53%",
    color: "#222",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
    lineHeight: "20px",
  },
  span: {
    display: "inline-block",
    width: "40%",
    color: "#888",
    fontSize: "12.5px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  right: {
    float: "left",
    height: "100%",
    lineHeight: "50px",
    width: "23%",
  },
};
