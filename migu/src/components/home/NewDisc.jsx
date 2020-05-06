// 新碟上架组件
// 完成1.0
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeCreator from "../../store/actionCreator/home";
class NewDisc extends Component {
  render() {
    return (
      <div>
        <NavLink style={style.a} to={"/newDisc"}>
          <span style={style.span}>新碟上架</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </NavLink>
        <ul style={style.ul}>
          {this.props.newDisc.map((item) => (
            <li
              style={style.li}
              key={item.albumData.albumId}
              onClick={() =>
                this.props.history.push(
                  "/newDiscDetail/" + item.albumData.albumId + ".html"
                )
              }
            >
              <img
                style={style.img}
                src={item.albumData.albumsSmallUrl}
                alt=""
              />
              <h3 style={style.h3}>{item.albumData.albumName}</h3>
              <p style={style.p}>{item.albumData.albumName}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getHomeNewDisc();
  }
}
function mapStateToProps(state) {
  return {
    newDisc: state.home.newDisc,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(homeCreator, dispatch)
)(withRouter(NewDisc));
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
  ul: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  li: {
    width: "30%",
    marginBottom: "10px",
  },
  img: {
    width: "100%",
    display: "block",
  },
  h3: {
    color: "#333",
    padding: "5px",
    fontSize: "14px",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  p: {
    padding: "5px",
    color: "#999",
    overflow: "hidden",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};
