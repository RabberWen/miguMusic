const express = require("express")
const bodyParser = require("body-parser")
const { json, getRandom } = require("./module/tools")
const db = require("./module/db")
const app = express()
app.use(bodyParser.json())
// 登录接口
/*********************************login*************************************/
// 发送验证码
app.post("/getCode", async (req, res) => {
    const { phoneNum } = req.body.params
    const codeInfo = await db.findOne("userCodeList", { phoneNum })
    if (codeInfo) {//有值判断发送时间，大于30秒过期重新发送，更新验证码列表信息
        const time = Date.now() - codeInfo.sendTime
        if (time > 30 * 1000) {//大于30秒过期重新发送
            const phoneCode = getRandom(100000, 999999)
            await db.updateOne("userCodeList", { phoneNum }, {
                $set: {
                    phoneCode,
                    sendTime: Date.now()
                }
            })
            res.json({ code: 1, phoneCode, msg: "验证码发送成功" })
        } else {//否则避免频繁发送
            json(res, 0, "请不要频繁发送验证码")
        }
    } else {//没有值，发送验证码
        const phoneCode = getRandom(100000, 999999)
        await db.insertOne("userCodeList", {
            phoneNum,
            phoneCode,
            sendTime: Date.now()
        })
        res.json({ code: 1, phoneCode, msg: "验证码发送成功" })
    }
})
// 登录
app.post("/login", async (req, res) => {
    const { phoneNum, phoneCode } = req.body.params
    const codeInfo = await db.findOne("userCodeList", {
        phoneNum, phoneCode
    })
    if (codeInfo) {
        if ((Date.now() - codeInfo.sendTime) > 30 * 1000) {//验证码过期
            json(res, 0, "验证码已过期")
        } else {//验证码未过期
            const userInfo = await db.findOne("userList", { phoneNum })
            if (userInfo) {//根据手机号在用户列表中查找到，用户存在，则变更最后登录时间
                await db.updateOne("userList", { phoneNum }, {
                    $set: {
                        lastTime: Date.now()
                    }
                })
            } else {//根据手机号在用户列表中未查找到，用户不存在，则增加新用户
                await db.insertOne("userList", {
                    phoneNum,
                    // isFree: 1,
                    regTime: Date.now(),//注册时间
                    lastTime: Date.now()//最后登录时间
                })
            }
            res.json({ code: 1, msg: "登录成功" })
        }
    } else {
        json(res, 0, "验证码错误")
    }
})
// 监听80端口
app.listen(1907, () => console.log("listening on port 1907!"))