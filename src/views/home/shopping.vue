<template>
  <div class="home-container">

    <div class="top-bar">
      <div class="top-bar-item">

        <div class="top-bar-item-left">

          <div style="cursor: pointer" @click="goHome()">
            <i class="el-icon-magic-stick" style="color:#ff6a00;margin-right: 2px"/>
            欣欣鲜花交易平台！
          </div>

          <div class="person co" @click="person()">
            个人中心
          </div>

        </div>

        <div class="top-bar-item-right">

          <div class="cart co" @click="goShopping()">
            购物车{{'(' + shoppingNum + ')'}}
          </div>

          <div class="register co" @click="goRegister()">
            注册
          </div>

          <div class="login co" @click="goLogin()" v-if="!showLogin">
            你好，请登录
          </div>

          <div class="login" style="cursor: pointer" v-else>
            <el-dropdown>
              <span class="el-dropdown-link">
               你好，{{UserInfo.uname}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="layoutLogin">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>

        </div>

      </div>
    </div>

    <div class="shopping">
      <div style="margin: 10px auto">
        <h2>购 物 车</h2>
      </div>

      <div class="shopping-items">

        <div v-if="showList" class="shopping-item" v-for="item in cartList" :index="item.id">

          <el-checkbox style="margin: auto 0" @change="checkboxBox(item.price, item.amount, item.id)" :key="item.id"/>

          <img :src="item.image">

          <div class="name">
            {{item.name}}
          </div>

          <div class="price">
            {{item.price}}
          </div>

          <div class="count">
            <el-input-number v-model="item.amount" size="small"
                             @change="handleChange(item.amount,item.id)" :min="1"/>
          </div>

          <div class="price-count">
            {{item.price * item.amount}}
          </div>

          <div class="delete">
            <i class="el-icon-delete" @click="delCart(item.id)"/>
          </div>
        </div>

      </div>

      <div v-if="!showList" style="color: black;text-align: center;margin-top: 100px">
        购物车空空，去挑选鲜花吧.
      </div>

      <div class="pay">
        <div>
          <span class="total-price"> 合计：
            <em id="J_cartTotalPrice">{{totalPrice + ' '}}</em>元
          </span>
        </div>

        <div style="margin-left: 40px">
          <el-button type="warning" round
                     @click="showOrder = true">提交订单
          </el-button>
        </div>

      </div>

    </div>

    <!-- ========================= -->
    <!-- 订单 start -->
    <!-- ========================= -->
    <el-dialog title="提交订单" center :visible.sync="showOrder" width="60%">
      <span>

        <span style="margin-left: 10px;font-size: 18px;font-weight: 600">选择地址:</span>
      <div class="addressss">
        <div @click="addressShow(item.id)" class="my-address-item" v-for="item in addressList" :index="item.id">
                  <div class="uname">{{item.name}}</div>
                  <div class="phone">{{item.phone}}</div>
                  <div class="addresss">{{item.address}}</div>
                </div>
      </div>

        <!--        <span style="margin-left: 20px;font-size: 18px;font-weight: 600"></span>-->
      <div style="margin-left: 20px;margin-top: 20px">
        应付总金额:
          <span style="font-size: 26px;color: #ffac89;">{{ totalPrice }} </span> 元
      </div>

        <!--表单-->
        <div style="display: flex">
          <el-form style="margin: 60px auto 20px auto;">
            <el-form-item style="display: flex;justify-content: center">
              <el-button style="" type="warning" @click="submitOrder" size="small">确 认</el-button>
              <el-button style="margin-left: 80px" @click="showOrder = false" size="small">取 消</el-button>
            </el-form-item>
        </el-form>
        </div>

      </span>
    </el-dialog>


    <!-- ========================= -->
    <!-- 登录 注册 start -->
    <!-- ========================= -->
    <el-dialog title="登 录" center :visible.sync="loginDialog" width="26%" @close="closeAddAdminForm()">
      <span>
        <!--表单-->
        <div style="display: flex">
          <el-form style="margin: 4px auto;" :rules="loginFormRules">

          <el-form-item prop="username">
            <el-input class="form-input"
                      placeholder="用户名" v-model="loginForm.uname"
                      :autofocus="true" style="width: 280px;"/>
          </el-form-item>

            <!--密码-->
          <el-form-item prop="password">
            <el-input class="form-input"
                      type="password" placeholder="密码"
                      v-model="loginForm.pwd" style="width: 280px"/>
          </el-form-item>

            <el-form-item style="display: flex;justify-content: center">
              <el-button type="warning" @click="goLoginTo" size="small">登录</el-button>
              <el-button style="margin-left: 80px" @click="loginDialog = false" size="small">取 消</el-button>
            </el-form-item>
        </el-form>
        </div>

      </span>
    </el-dialog>

    <el-dialog title="注 册" center :visible.sync="regDialog" width="30%" @close="closeAddAdminForm()">
      <span>
        <!--表单-->
        <div style="display: flex">
           <el-form :model="registerForm" :rules="loginFormRules2" style="margin: 4px auto;">
            <!--用户名-->
            <el-form-item prop="uname">
              <el-input placeholder="用户名" v-model="registerForm.uname" style="width: 300px"/>
            </el-form-item>

             <!--密码-->
            <el-form-item prop="pwd">
              <el-input type="password" placeholder="密码"
                        v-model="registerForm.pwd" style="width: 300px"/>
            </el-form-item>

             <!--手机号-->
            <el-form-item prop="phone">
              <el-input placeholder="手机号" v-model="registerForm.phone" style="width: 300px"/>
            </el-form-item>

            <el-form-item style="display: flex;justify-content: center">
              <el-button @click="registerGo" type="success" size="small">注 &nbsp;&nbsp;&nbsp;册</el-button>
              <el-button style="margin-left: 120px" @click="regDialog = false" size="small">取 消</el-button>
            </el-form-item>
          </el-form>
        </div>

      </span>
    </el-dialog>

  </div>
</template>

<script>
  import {
    addCart, getCartList, updAmount, getAddressList,getShoppingNum,
    getCategoryList, getUserList, getSceneryIndex,
    getSceneryList, getrotationList, updUserInfo,
    getSearchContent, adminLogin, userLogin, addUser, addOrder
  } from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'shopping',
    data() {

      // 验证手机号的规则
      let checkMobile = (rule, value, cb) => {
        // 验证手机号的正则表达式
        const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (regMobile.test(value)) {
          return cb()
        }
        cb(new Error('请输入合法的手机号'))
      }

      // 验证邮箱的规则
      let checkEmail = (rule, value, cb) => {
        // 验证邮箱的正则表达式
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        if (regEmail.test(value)) {
          // 合法的邮箱
          return cb()
        }
        cb(new Error('请输入合法的邮箱'))
      }

      return {
        activeIndex: '0',
        search: '',
        showLogin: false,

        UserInfo: {
          uname: '',
          image: '',
          phone: '',
          creatime: '',
          email: '',
          id: 0,
          loginway: 0,
          sex: '1'
        },

        // 分类
        cateList: [],

        // 切换页面数据
        otherList: [],
        showIndex: 1,

        // flower
        loginDialog: false,
        regDialog: false,
        comment: '',

        //表单数据绑定
        loginForm: {
          username: '',
          password: ''
        },
        //表单验证
        loginFormRules: {
          username:
            [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
            ],
          password:
            [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
            ]
        },

        // 注册表单
        registerForm: {
          uname: '',
          pwd: '',
          sex: '1',
          phone: '',
          email: ''
        },

        //表单验证
        loginFormRules2: {
          uname:
            [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
            ],
          pwd:
            [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
            ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: checkMobile, trigger: 'blur' }
          ]
        },

        // 购物车
        checked: false,
        num: 1,
        countPay: 0,
        cartList: [],
        showList: true,
        totalPrice: 0,
        ids: [],

        // 订单
        showOrder: false,
        // 地址
        addressList: [],
        addressid: 0,
        shoppingNum: 0,

      }
    },
    created() {
      this.init()

    },
    methods: {
      // 初始化
      async init() {

        // 是否登录
        if (!this.loginIs()) {
          this.$message({ message: '请先登录', type: 'error', duration: 1700 })
          adminInfo
          return false
        } else {
          getShoppingNum(this.UserInfo.id).then(res => {
            if (res.success) {
              this.shoppingNum = res.data.data

            } else {
              this.$message({
                message: '数据获取失败，请刷新重试',
                type: 'error', duration: 2000
              })
            }
          })

        }

        await getCartList(this.UserInfo.id).then(res => {
          if (res.success) {
            this.cartList = res.data.data
            if (res.data.data.length == 0) {
              this.showList = false
            }
            console.log(this.cateList)
          }
        })

        getAddressList(this.UserInfo.id).then(res => {
          if (res.success) {
            this.addressList = res.data.data
          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })
          }

        })

      },

      // 是否登录
      loginIs() {
        // 是否登录
        let user = JSON.parse(window.localStorage.getItem('UserInfoFlower'))
        if (user == undefined || user == null || user == '') {
          return false
        } else {
          this.UserInfo = user
          return true
        }
      },

      async handleSelect(key, keyPath) {
        console.log(key)
        this.otherList = []
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        await getSceneryList(params, key, 1, 0).then(res => {
          if (res.success) {
            this.otherList = res.data.data
          } else {
            this.$message({
              message: '数据获取失败,请刷新!',
              type: 'error', duration: 2000
            })
          }
        })

        if (key != 0) {
          window.localStorage.setItem('activeIndex', key)
          this.showIndex = 2
        } else {
          this.showIndex = 1
        }

      },

      // 去首页
      goHome() {
        this.$router.push({ path: `/scenery/home` })
      },

      // 登录
      goLogin() {
        this.loginDialog = true
      },
      goLoginTo() {

        if (this.loginForm.uname.trim() == '') {
          this.$message({ message: '用户名不能为空', type: 'error', duration: 1700 })
          return
        }

        if (this.loginForm.pwd.trim() == '') {
          this.$message({ message: '密码不能为空', type: 'error', duration: 1700 })
          return
        }
        userLogin(this.loginForm).then(res => {
          if (res.success) {
            res.data.data.pwd = ''
            res.data.data.salt = ''
            window.localStorage.setItem('UserInfoFlower', JSON.stringify(res.data.data))
            this.loginDialog = false
            this.init()
          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })

          }

        })

      },

      // 注册
      goRegister() {
        this.regDialog = true
      },
      async registerGo() {
        if (this.registerForm.uname.trim() == '') {
          this.$message({ message: '用户名不能为空', type: 'error', duration: 1700 })
          return
        }

        if (this.registerForm.pwd.trim() == '') {
          this.$message({ message: '密码不能为空', type: 'error', duration: 1700 })
          return
        }

        if (this.registerForm.phone.trim() == '') {
          this.$message({ message: '手机号不能为空', type: 'error', duration: 1700 })
          return
        }

        await addUser(this.registerForm).then(res => {
          if (res.success) {
            this.$message({ message: res.message, type: 'success', duration: 2000 })
            // this.loginForm2.uname = res.data.data
            this.regDialog = false
            // this.loginDialog = true
          } else {
            this.$message({ message: res.message, type: 'error', duration: 2000 })

          }
        })

      },

      // 个人中心
      person() {
        // 是否登录
        if (!this.loginIs()) {
          this.$message({ message: '请先登录', type: 'error', duration: 1700 })
          return false
        }
        const { href } = this.$router.resolve({ path: `/flower/person` })
        window.open(href, '_blank')
      },

      // 购物车
      goShopping() {
        // 是否登录
        if (!this.loginIs()) {
          this.$message({ message: '请先登录', type: 'error', duration: 1700 })
          return false
        }

        const { href } = this.$router.resolve({ path: '/flower/shopping' })
        window.open(href, '_blank')
      },

      // 计数器
      handleChange(value, id) {
        updAmount(this.UserInfo.id, id, value).then(res => {
          if (res.success) {
            this.init()
          }

        })

      },

      // 去详情页
      goDetailInfo(categoryid, id) {
        const { href } = this.$router.resolve({ path: `/scenery/sceneryInfo/${categoryid}/${id}` })
        window.open(href, '_blank')

      },

      // 提交订单
      submitOrder() {
        if (this.addressid == 0) {
          this.$message({ message: '请选择地址', type: 'error', duration: 1700 })
          return false
        }

        let num = ''
        this.ids.forEach(item => {
          num += ',' + item
        })
        num = num.substring(1)
        let order = {
          'userid': this.UserInfo.id,
          'flowerid': this.addressid,
          'price': this.totalPrice,
          'name': num
        }

        addOrder(order).then(res => {
          if (res.success) {
            this.$message({ message: '提交成功', type: 'success', duration: 2000 })
            this.init()
            this.showOrder = false
          } else {
            this.$message({ message: '提交失败，刷新再试', type: 'error', duration: 2000 })

          }
        })

      },
      addressShow(id) {
        this.addressid = id

      },
      // 刪除商品
      delCart(id) {

      },
      checkboxBox(price, amount, id) {
        let temp = 0
        this.ids.forEach((item, index, array) => {
          if (id == item) {
            this.totalPrice -= price * amount
            this.ids.splice(index, 1)
            temp = 1
          }
        })
        if (temp == 1) {
          return false
        }

        this.ids.push(id)
        this.totalPrice += price * amount
      },

      // 重置添加用户表单
      closeAddAdminForm() {
        // this.$refs.loginFormRules2.resetFields()
        // this.$refs.loginFormRules.resetFields()

      },

    }
  }
</script>

<style scoped>
  .home-container {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: white;
  }

  .top-bar {
    width: 100%;
    height: 34px;
    font-size: 12px;
    color: #71797F;
    background-color: #F3F5F7;
    display: flex;
  }

  .top-bar-item {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .top-bar-item-left {
    width: 500px;
    height: 100%;
    margin: auto 0 auto 1px;
    line-height: 34px;
    display: flex;
  }

  .top-bar-item-right {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
  }

  .person {
    margin: auto 0 auto 20px;
  }

  .login {
    margin: auto 0 auto 20px;
  }

  .register {
    margin: auto 0 auto 20px;
  }

  .cart {
    margin: auto 5px auto 30px;
  }

  .co:hover {
    cursor: pointer;
    color: #ffac89;
  }


  /* ======= */
  /* 购物车  */
  /* ======= */
  .shopping {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: black
  }

  .shopping-items {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .shopping-item {
    width: 100%;
    height: 80px;
    border-top: solid 1px #ececec;
    display: flex;
    margin-top: 20px;
    padding-top: 14px;
  }

  .shopping-item img {
    width: 70px;
    height: 70px;
    margin: auto 80px;
  }

  .shopping-item .name {
    margin: auto 0;
    width: 300px;
    font-size: 14px;
  }

  .shopping-item .name:hover {
    cursor: pointer;
    color: #ffac89;
  }

  .shopping-item .price {
    margin: auto 0;
    width: 120px;
    color: #ff6700;
    font-size: 16px;
  }

  .shopping-item .count {
    margin: auto 0;
    width: 60px;
  }

  .shopping-item .price-count {
    margin: auto 0 auto 140px;
    /*width: 30px;*/
    color: #ff6700;
    font-size: 16px;
  }

  .shopping-item .delete {
    margin: auto 0 auto 70px;
    color: #ff6700;
    font-size: 20px;
    cursor: pointer;
  }

  /deep/ .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
  }

  /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ff6700;
    border-color: #ff6700;
  }

  /deep/ .el-checkbox__inner:hover {
    border-color: #ff6700;
  }

  /deep/ .el-checkbox__inner::after {
    height: 9px;
    left: 6px;
  }

  /deep/ .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #ff6700;
  }

  .pay {
    display: flex;
    justify-content: flex-end;
    width: 1000px;
    height: 100%;
    margin: 40px auto;
  }

  .total-price {
    padding-left: 13px;
    color: #ff6700;
  }

  .total-price em {
    font-style: normal;
    font-size: 30px;
  }

  .addressss {
    display: flex;
    flex-wrap: wrap;
  }

  .my-address-item {
    width: 200px;
    height: 150px;
    border: solid 1px #cecece;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .my-address-item .uname {
    font-size: 16px;
    color: #333;
    font-style: normal;
    margin: 10px 20px;
  }

  .my-address-item .phone {
    margin: 10px 20px;
    /*line-height: 22px;*/
    color: #757575;
  }

  .my-address-item .addresss {
    margin: 6px 20px;
    color: #757575;
  }

</style>
