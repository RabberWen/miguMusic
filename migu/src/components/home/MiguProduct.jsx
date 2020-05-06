// 咪咕出品组件
// 完成1.0
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeCreator from "../../store/actionCreator/home";

class MiguProduct extends Component {
  render() {
    return (
      <div>
        <NavLink style={style.a} to={"/miguProduct"}>
          <span style={style.span}>咪咕出品</span>
          <i
            style={{ marginLeft: "5px", fontSize: "18px" }}
            className={"iconfont icon-youjiantou"}
          ></i>
        </NavLink>
        <ul style={style.ul}>
          {this.props.miguProduct.map((item) => (
            <li
              style={style.li}
              key={item.linkData.linkDes}
              onClick={() => window.open(item.linkData.linkUrl)}
            >
              <img style={style.img} src={item.linkData.linkPicUrl} alt="" />
              <h3 style={style.h3}>{item.linkData.linkDes}</h3>
              <p style={style.p}>{item.linkData.linkTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getHomeMiguProduct();
  }
}
function mapStateToProps(state) {
  return {
    miguProduct: state.home.miguProduct,
  };
}
export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(homeCreator, dispatch)
)(withRouter(MiguProduct));
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
  },
  li: {
    width: "48%",
    marginBottom: "20px",
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
    textAlign: "left",
    color: "#999",
  },
};
