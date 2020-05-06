import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      phoneShow: false,
      codeShow: false,
      phoneNum: "",
      phoneCode: "",
    };
  }
  async getCode() {
    if (!/^[1][3-8]\d{9}$/.test(this.state.phoneNum)) {
      this.setState({ phoneShow: true }); //手机警告
    } else {
      const { data } = await Axios.post("/api/getCode", {
        params: {
          phoneNum: this.state.phoneNum,
        },
      });
      await this.setState({ phoneCode: data.phoneCode });
      document.querySelector("#code").value = data.phoneCode;
    }
  }
  async login() {
    if (!/^[1][3-8]\d{9}$/.test(this.state.phoneNum)) {
      this.setState({ phoneShow: true }); //手机警告
    } else {
      //隐藏手机警告
      this.setState({ phoneShow: false });
      //登录
      const { data } = await Axios.post("/api/login", {
        params: {
          phoneNum: this.state.phoneNum,
          phoneCode: this.state.phoneCode,
        },
      });
      if (data.code === 0) {
        //验证码警告
        this.setState({ codeShow: true });
      } else {
        this.setState({ codeShow: false });
        this.setState({ phoneShow: false });
        sessionStorage.userName = this.state.phoneNum;
        this.props.history.push("/");
      }
    }
  }
  async changeHandler(e) {
    await this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* 标题 */}
        <h2 style={style.h2}>
          <i
            style={{
              fontSize: "20px",
              position: "absolute",
              left: "15px",
            }}
            className={"iconfont icon-right-angle-copy"}
            onClick={() => this.props.history.go(-1)}
          ></i>
          <span>短信登录</span>
        </h2>
        {/* logo */}
        <img
          style={style.logo}
          src={require("../assets/img/客户端.png")}
          alt=""
        />
        <p style={style.outer}>
          <input
            style={style.input}
            type="text"
            placeholder={"手机号"}
            name={"phoneNum"}
            onChange={this.changeHandler.bind(this)}
          />
        </p>
        <h4
          id={"phoneNotice"}
          style={{
            display: this.state.phoneShow ? "block" : "none",
            color: "#e30077",
            textAlign: "left",
            width: "330px",
            margin: "0 auto",
          }}
        >
          手机号错误
        </h4>
        <p style={style.outer}>
          <input
            id={"code"}
            style={style.input}
            type="text"
            placeholder={"短信验证码"}
            name={"phoneCode"}
            onChange={this.changeHandler.bind(this)}
          />
          {/* 获取验证码 */}
          <span
            onClick={this.getCode.bind(this)}
            id={"getCode"}
            style={style.span}
          >
            获取验证码
          </span>
        </p>
        <h4
          id={"codeNotice"}
          style={{
            display: this.state.codeShow ? "block" : "none",
            color: "#e30077",
            textAlign: "left",
            width: "330px",
            margin: "0 auto",
          }}
        >
          验证码错误
        </h4>
        <button
          onClick={this.login.bind(this)}
          id={"loginBtn"}
          onClick={this.login.bind(this)}
          style={style.btn}
          name={"phoneCode"}
        >
          登录
        </button>
      </div>
    );
  }
}
export default withRouter(Login);
const style = {
  h2: {
    width: "100%",
    height: "40px",
    color: "#31363e",
    lineHeight: "40px",
    fontSize: "18px",
    textAlign: "center",
    position: "relative",
    borderBottom: "1px solid #eee",
  },
  logo: {
    width: "13%",
    margin: "10% auto",
  },
  outer: {
    width: "88%",
    margin: "0 auto",
    borderBottom: "1px solid #eee",
    height: "50px",
    lineHeight: "50px",
    textAlign: "left",
    fontSize: "16px",
    color: "#333",
  },
  input: {
    outline: "none",
    width: "60%",
  },
  span: {
    width: "30%",
    borderRadius: "20px",
    border: "1px solid #eee",
    display: "inline-block",
    height: "30px",
    lineHeight: "30px",
    textAlign: "center",
    marginLeft: "5%",
  },
  btn: {
    width: "88%",
    margin: "0 auto",
    border: "none",
    height: "45px",
    lineHeight: "45px",
    textAlign: "center",
    fontSize: "16px",
    color: "#fff",
    fontWeight: "900",
    background: "#e30077",
    marginTop: "30px",
    borderRadius: "20px",
    outline: "none",
  },
};
