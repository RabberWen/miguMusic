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

class MySearch extends Component {
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
    this.props.getSearchDown(this.state.keyword);
  }
  render() {
    const data = (
      <div>
        <div style={style.seainput_div}>
          <div style={style.left_con}>
            <i
              style={{ fontSize: "20px", color: "#999", margin: "0 10px" }}
              className={"iconfont icon-fangdajing"}
            ></i>
            <input
              autoComplete={"off"}
              style={style.researchBox}
              name={"keyword"}
              onChange={this.changeHandler.bind(this)}
              type="text"
              placeholder={"搜索"}
            />
            <input
              style={style.vms}
              type="button"
              onClick={() =>
                this.props.history.push("/searchDetail/" + this.state.keyword)
              }
              value={"搜索"}
            />
          </div>
          <div
            style={style.search_close}
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            取消
          </div>
        </div>
        <div style={style.hot_div}>
          {this.props.searchTag.map((item, i) => (
            <a
              key={i}
              href={"/searchDetail/" + item.txtData.txtCotent}
              style={style.hot_div.a}
            >
              {item.txtData.txtCotent}
            </a>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            width: "81%",
            backgroundColor: "rgba(225,225,225,0.9)",
            top: "40px",
            left: "2%",
          }}
        >
          {this.props.searchDown.map((item, i) => (
            <li
              style={style.seainput_list.li}
              key={i}
              onClick={() =>
                this.props.history.push("/searchDetail/" + item.name)
              }
            >
              {item.name}—{item.singer}
            </li>
          ))}
        </div>
      </div>
    );
    return this.props.searchTag.length ? (
      data
    ) : (
      <Spin indicator={antIcon}></Spin>
    );
  }
  async componentDidMount() {
    await this.props.getSearchTag();
  }
  componentWillUnmount() {
    this.props.searchDown.length = 0;
    this.props.searchTag.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    searchDown: state.search.searchdown,
    searchTag: state.search.searchTag,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(searchCreator, dispatch)
)(withRouter(MySearch));
const style = {
  seainput_div: {
    fontSize: "16px",
    backgroundColor: "#212224",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "50px",
  },
  left_con: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "2%",
    borderRadius: "5px",
    width: "81%",
    height: "30px",
  },
  search_close: {
    color: "#999",
    width: "100%",
    height: "30px",
    lineHeight: "30px",
  },
  researchBox: {
    width: "240px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#F4F4F4",
    outline: "none",
  },
  search_img: {
    width: "20px",
    height: "20px",
  },
  vms: {
    borderRadius: "5px",
    backgroundColor: "#fff",
    color: "#f53131",
    width: "61px",
    height: "30px",
    fontSize: "16px",
  },
  hot_div: {
    overflow: "hidden",
    padding: "10px 7.5px",
    borderBottom: "1px solid #dedede",
    textAlign: "center",
    backgroundColor: "#fff",
    zoom: 1,
    overflow: "hidden",
    a: {
      backgroundColor: "#ff8484",
      color: "#fff",
      padding: "0 15px",
      fontSize: "14px",
      margin: "10px 7.5px 0 0",
      borderRadius: "15px",
      height: "25px",
      display: "inline-block",
      lineHeight: "25px",
      textAlign: "center",
      float: "left",
      verticalAlign: "top",
    },
  },
  seainput_list: {
    li: {
      color: "#333",
      fontSize: "16px",
      width: "100%",
      height: "31px",
      margin: "0 0 0 6.15px",
      lineHeight: "31px",
      overflow: "hidden",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
    },
  },
};
