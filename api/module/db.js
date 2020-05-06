const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
// 连接数据库
function _connect() {
    return new Promise((resolve, reject) => {
        mongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true }, (err, client) => {
            (!err ? resolve(client.db("migu")) : reject("数据库连接失败"))
        })
    })
}
module.exports = {
    // 增:插入一条信息
    async insertOne(collName, insertObj) {
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).insertOne(insertObj, (err) => {
                (!err ? resolve("增加数据成功") : reject("增加数据失败"))
            })
        })
    },
    // 删:根据ID进行删除一条操作
    async deleteOneById(collName, id) {
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).deleteOne({ _id: ObjectId(id) }, (err, results) => {
                (!err ? resolve({ code: 1, msg: "删除数据成功" }) : reject({ code: 0, msg: "删除数据失败" }))
            })
        })
    },
    // 改:更新一条数据
    async updateOne(collName, whereObj, upObj) {
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).updateOne(whereObj, upObj, err => {
                (!err ? resolve("修改数据成功") : reject("修改数据失败"))
            })
        })

    },
    // 改:根据ID进行修改一条操作
    async updateOneById(collName, id, upObj) {
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).updateOne({ _id: ObjectId(id) }, upObj, err => {
                (!err ? resolve({ code: 1, msg: "修改数据成功" }) : reject({ code: 0, msg: "修改数据失败" }))
            })
        })
    },
    // 查:查找多条数据
    async find(collName, obj = {}) {
        const { skip = 0, limit = 0, sort = {}, whereObj = {} } = obj;
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).find(whereObj).limit(limit).skip(skip).sort(sort).toArray((err, results) => {
                (!err ? resolve(results) : reject("查询数据失败"))
            })
        })
    },
    // 查:根据条件查找一条数据
    async findOne(collName, whereObj) {
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).findOne(whereObj, (err, results) => {
                (!err ? resolve(results) : reject("查询数据失败"))
            })
        })
    },
    // 查:根据ID查找一条数据
    async findOneById(collName, id) {
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).findOne({ _id: ObjectId(id) }, (err, results) => {
                (!err ? resolve(results) : reject("查询数据失败"))
            })
        })
    },
    // 查:计算数据
    async count(collName, whereObj = {}) {
        const db = await _connect()
        return new Promise((resolve, reject) => {
            db.collection(collName).countDocuments(whereObj).then(count => resolve(count))
        })
    },
    // 分页查询
    async page(collName, { whereObj = {}, limit = 10, pageIndex = 1, sort = {} } = {}) {
        let pageSum = 1
        const count = await this.count(collName, whereObj)
        pageSum = Math.ceil(count / limit)
        if (pageSum < pageIndex) pageIndex = pageSum
        if (pageIndex < 1) pageIndex = 1
        if (pageSum < 1) pageSum = 1
        const results = await this.find(collName, {
            whereObj,
            sort,
            limit,
            skip: (pageIndex - 1) * limit
        })
        return {
            code: 1,
            [collName]: results,
            pageIndex,
            pageSum
        }
    }
}
