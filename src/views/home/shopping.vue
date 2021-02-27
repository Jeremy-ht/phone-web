<template>
  <div class="home-container">

    <div class="container-item-hr">
      <svg @click="goHome()" t="1614167354200" class="icon"
           viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="2441"
           width="200" height="200">
        <path
          d="M645.924571 0C693.101714 0 731.428571 35.328 731.428571 78.774857v866.450286C731.428571 988.672 693.101714 1024 645.924571 1024H85.504C38.326857 1024 0 988.672 0 945.225143V78.774857C0 35.328 38.326857 0 85.504 0h560.420571zM841.142857 438.857143a36.571429 36.571429 0 0 1 36.571429 36.571428v512a36.571429 36.571429 0 0 1-73.142857 0v-512a36.571429 36.571429 0 0 1 36.571428-36.571428z m146.285714 292.571428a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-73.142857 0v-219.428571a36.571429 36.571429 0 0 1 36.571428-36.571429zM657.773714 73.069714h-585.142857v877.641143h585.142857v-877.714286zM585.142857 331.995429c0 13.897143-7.460571 26.112-18.651428 33.133714C550.253714 458.605714 466.432 530.066286 365.714286 530.066286S181.174857 458.605714 164.937143 365.129143A39.204571 39.204571 0 0 1 146.285714 332.068571C146.285714 310.272 164.498286 292.571429 186.88 292.571429c22.381714 0 40.521143 17.700571 40.521143 39.497142a38.765714 38.765714 0 0 1-12.8 28.672C228.425143 429.641143 290.889143 481.718857 365.714286 481.718857s137.289143-52.077714 151.113143-120.978286a38.765714 38.765714 0 0 1-12.8-28.745142c0-21.723429 18.139429-39.424 40.521142-39.424 22.381714 0 40.594286 17.700571 40.594286 39.497142zM329.142857 804.571429h73.142857a36.571429 36.571429 0 0 1 0 73.142857h-73.142857a36.571429 36.571429 0 0 1 0-73.142857z"
          p-id="2442" fill="#e6e6e6"></path>
      </svg>
    </div>

    <div style="display: flex;background-color: #ededed;">
      <div class="shopping-1">

        <div class="title">
          <h3 style="margin-left: 20px;font-weight: 400;">购物清单</h3>

          <div class="cart-table-title">
            <div class="name">商品信息</div>
            <div class="price1">单价</div>
            <div class="num">数量</div>
            <div class="subtotal">小计</div>
            <div class="operation">操作</div>
          </div>

          <div class="shopping-items">

            <div v-if="showList" class="shopping-item" v-for="item in cartList" :index="item.id">

              <div style="width: 640px;display: flex">
                <el-checkbox style="margin: auto" @change="checkboxBox(item.price, item.amount, item.id)"
                             :key="item.id"/>

                <img :src="item.image">

                <div class="name">
                  {{item.name}}
                </div>
              </div>


              <div class="price">
                ￥ {{item.price}}
              </div>

              <div class="count">
                <el-input-number v-model="item.amount" size="small"
                                 @change="handleChange(item.amount,item.id)" :min="1"/>
              </div>

              <div class="price-count">
                ￥ {{item.price * item.amount}}
              </div>

              <div class="delete">
                <i class="el-icon-delete" @click="delCart(item.id)"/>
              </div>
            </div>

          </div>

          <div v-if="!showList" style="color: #555555;text-align: center;margin-top: 50px">
            购物车为空
          </div>

          <div class="pay">
            <div>
              <span class="total-price"> 应付总额：
                <em id="J_cartTotalPrice">{{totalPrice + ' '}}</em>元
              </span>
            </div>

            <div style="margin-left: 40px">
              <el-button class="aaaaa"
                         @click="showOrderGo">现在结算
              </el-button>
            </div>

          </div>

        </div>

      </div>
    </div>


    <!-- ========================= -->
    <!-- 订单 start -->
    <!-- ========================= -->
    <el-dialog title="提交订单" center :visible.sync="showOrder" width="40%">
      <span>


      <div class="addressss">
<!--        <div @click="addressShow(item.id)" class="my-address-item" v-for="item in addressList" :index="item.id">-->
        <!--                  <div class="uname">{{item.name}}</div>-->
        <!--                  <div class="phone">{{item.phone}}</div>-->
        <!--                  <div class="addresss">{{item.address}}</div>-->
        <!--                </div>-->

<!--         <span style="margin-left: 10px;font-size: 18px;font-weight: 600">选择地址:</span>-->
       <el-select v-model="addressid" placeholder="选择地址" clearable style="width: 500px;text-align: center">
          <el-option v-for="item in addressList"
                     :label="item.name + ' - ' + item.phone + ' - ' + item.address"
                     :value="item.id"
                     :key="item.id"/>
        </el-select>


      </div>

        <!--        <span style="margin-left: 20px;font-size: 18px;font-weight: 600"></span>-->
      <div style="text-align:right;margin-top: 40px">
        应付总额: <span style="font-size: 26px;color: #5a98de;">{{ totalPrice }} </span> 元
      </div>

        <!--表单-->
        <div style="display: flex">
          <el-form style="margin: 40px auto 20px auto;">
            <el-form-item style="display: flex;justify-content: center">
              <el-button class="btn2ww2333" type="success" @click="submitOrder" size="small">提交订单</el-button>
              <el-button style="margin-left: 80px" @click="showOrder = false" size="small">取 消</el-button>
            </el-form-item>
        </el-form>
        </div>

      </span>
    </el-dialog>


  </div>
</template>

<script>
  import {
    delCart, getCartList, updAmount, getAddressList, getSceneryList, addOrder
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
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur'}
            ],
          password:
            [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
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
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
            ],
          pwd:
            [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
            ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {validator: checkMobile, trigger: 'blur'}
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
        addressid: '',
        shoppingNum: 0

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
          this.$message({message: '请先登录', type: 'error', duration: 1700})
          adminInfo
          return false
        } else {

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
            this.$message({message: res.message, type: 'error', duration: 1700})
          }

        })

      },

      // 是否登录
      loginIs() {
        // 是否登录
        let user = JSON.parse(window.localStorage.getItem('UserInfoPhone'))
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
        this.$router.push({path: `/phone/home`})
      },


      // 购物车
      goShopping() {
        // 是否登录
        if (!this.loginIs()) {
          this.$message({message: '请先登录', type: 'error', duration: 1700})
          return false
        }

        const {href} = this.$router.resolve({path: '/flower/shopping'})
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
        const {href} = this.$router.resolve({path: `/scenery/sceneryInfo/${categoryid}/${id}`})
        window.open(href, '_blank')

      },


      // 提交订单
      showOrderGo() {

        if (this.totalPrice == 0) {
          this.$message({message: '请挑选需要结算的商品', type: 'error', duration: 1700})
          return
        }

        this.showOrder = true

      },
      submitOrder() {
        if (this.addressid == 0 || this.addressid == '') {
          this.$message({message: '请选择地址', type: 'error', duration: 1700})
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
            this.$message({message: '购买成功', type: 'success', duration: 2000})
            this.init()
            this.showOrder = false
          } else {
            this.$message({message: '购买失败，刷新再试', type: 'error', duration: 2000})

          }
        })

      },
      addressShow(id) {
        this.addressid = id

      },
      // 刪除商品
      delCart(id) {

        this.$confirm('是否确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delCart(id).then(res => {

            if (res.success) {
              this.init()
            } else {
              this.$message({message: '删除失败，刷新再试', type: 'error', duration: 2000})

            }
          })
        })

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

      }

    }
  }
</script>

<style scoped>
  .home-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background-color: rgb(237, 237, 237);
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
    width: 1200px;
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
    width: 60px;
    height: 60px;
    margin: auto 20px;
  }

  .shopping-item .name {
    margin: auto 20px;
    width: 300px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline;
  }

  .shopping-item .name:hover {
    cursor: pointer;
    color: #5a98de;
  }

  .shopping-item .price {
    margin: auto 0;
    width: 130px;
    /*color: #ff6700;*/
    text-align: center;
    font-size: 16px;
  }

  .shopping-item .count {
    margin: auto 0;
    width: 160px;
    text-align: center;
  }

  .shopping-item .price-count {
    margin: auto 0;
    width: 130px;
    color: #ca141d;;
    font-size: 16px;
    text-align: center;
  }

  .shopping-item .delete {
    margin: auto 0 auto 70px;
    color: red;
    width: 118px;
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
    margin: 30px auto;
  }

  .total-price {
    padding-left: 13px;
    color: #d81e06;
    /*height: 50px;*/
    line-height: 50px;
  }

  .total-price em {
    font-style: normal;
    font-size: 30px;
  }

  .addressss {
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    text-align: center;
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


  .shopping-1 {
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .shopping-1 .title {
    border: 1px solid #dcdcdc;
    margin: 30px auto;
    width: 100%;
    /*height: 60px;*/
    font-size: 18px;
    color: #3c3c3c;
    border-radius: 8px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #d4d4d4;
    box-shadow: 0 1px 7px rgba(0, 0, 0, .06);
  }

  .cart-table-title {
    line-height: 38px;
    height: 38px;
    padding: 0 0 0 20px;
    font-size: 12px;
    background: #eee;
    border-bottom: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    border-bottom-color: rgba(0, 0, 0, .08);
    display: flex;
  }

  .cart-table-title .name {
    width: 600px;
  }

  .cart-table-title .operation {
    width: 130px;
    text-align: center;
  }

  .cart-table-title .subtotal {
    width: 130px;
    text-align: center;
  }

  .cart-table-title .num {
    width: 130px;
    text-align: center;
  }

  .cart-table-title .price1 {
    width: 130px;
    text-align: center;
  }

  .aaaaa {
    width: 130px;
    height: 50px;
    color: white;
    background-color: #6c8cd4;
  }

  /deep/ .el-button:focus, .el-button:hover {
    color: white;
    border-color: #6c8cd4;
    background-color: #6c8cd4;
  }


  .container-item-hr {
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
  }

  .container-item-hr .icon {
    width: 40px;
    height: 30px;
    cursor: pointer;
    margin: auto 30px;
    color: black;
    line-height: 60px;
  }

  /deep/ .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #aeb4c4;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
  }

  /*       */
  /* 计算  */
  /deep/ .el-input-number__decrease {
    left: 1px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid white;
  }

  /deep/ .el-input-number__decrease, .el-input-number__increase {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: white;
    color: #606266;
    cursor: pointer;
  }

  /deep/ input__inner:not(.is-disabled) {
    border-color: #5c81e3;
  }

  /deep/ .el-input-number__decrease:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled) {
    border-color: #5c81e3;
  }

  /deep/ .el-input-number__increase {
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid white;
  }


  /deep/ .el-input-number__increase {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: white;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
  }

  /deep/ .el-input__inner {
    border: 1px solid #5a98de;
  }

  .btn2ww2333 {
    background-color: #5a98de;
    text-align: right;
  }

  /deep/ .el-button--success:focus, .el-button--success:hover {
    background: #5a98de;
    border-color: #5a98de;
    color: #FFF;
  }

  /deep/ .el-button--success {
    color: #FFF;
    background-color: #5a98de;
    border-color: #5a98de;
  }
</style>
