// 新碟上架路由，点击新碟上架标题进入
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import newDiscCreator from "../store/actionCreator/newDisc";

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

class NewDisc extends Component {
  render() {
    const data = (
      <div>
        <this.DownLoad></this.DownLoad>
        <h2 style={style.h2}>新碟上架</h2>
        <ul style={style.ul}>
          <li
            style={style.li}
            onClick={() =>
              this.props.history.push("/newDiscTag/全部/" + 23854027)
            }
          >
            全部
          </li>
          <li
            style={style.li}
            onClick={() =>
              this.props.history.push("/newDiscTag/华语/" + 23854036)
            }
          >
            华语
          </li>
          <li
            style={style.li}
            onClick={() =>
              this.props.history.push("/newDiscTag/欧美/" + 23854045)
            }
          >
            欧美
          </li>
          <li
            style={style.li}
            onClick={() =>
              this.props.history.push("/newDiscTag/日韩/" + 23854054)
            }
          >
            日韩
          </li>
        </ul>
        <div style={style.div}>
          {this.props.allDisc.map((item) => (
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
          <input
            style={style.btn}
            onClick={this.props.getMoreDisc.bind(this, this.props.pageNo + 1)}
            type={"button"}
            value={"加载更多"}
          />
        </div>
      </div>
    );
    return this.props.allDisc.length ? data : <Spin indicator={antIcon}></Spin>;
  }
  async componentDidMount() {
    await this.props.getAllDisc(0);
  }
  componentWillUnmount() {
    this.props.allDisc.length = 0;
  }
}
function mapStateToProps(state) {
  return {
    pageNo: state.newDisc.pageNo,
    allDisc: state.newDisc.allDisc,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(newDiscCreator, dispatch)
)(withRouter(NewDisc));
const style = {
  h2: {
    color: "#2a2a2a",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "45px",
    width: "100%",
    height: "45px",
  },
  ul: {
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    display: "flex",
    height: "30px",
    alignItems: "center",
  },
  li: {
    width: "25%",
    color: "#333",
    fontSize: "16px",
    lineHeight: "16px",
  },
  div: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "wrap",
  },
  box: {
    width: "44%",
    marginBottom: "10px",
  },
  img: {
    display: "block",
    width: "100%",
  },
  h4: {
    padding: "5px",
    color: "#333",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  p: {
    padding: "0 5px 0 5px",
    color: "#999",
    fontSize: "12px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  btn: {
    background: "#eaeaea",
    fontSize: "14px",
    width: "90%",
    margin: "10px auto",
    textAlign: "center",
    height: "35px",
    color: "#666",
    borderRadius: "20px",
    outline: "none",
  },
};
