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
      <div class="person-show">

        <div class="person-show-left">
          <div class="name">
            <!--          <img class="avatar" :src="UserInfo.image" alt="">-->
            <img class="avatar" src="http://service.szhtkj.com.cn/SzhtShop/uploads/default/avatar/userimg.png" alt="">
            <div class="username">huangtao{{UserInfo.uname}}</div>
          </div>

          <div class="base" @click="showIsOR(1)">我的账号</div>
          <div class="base" @click="showIsOR(2)">我的订单</div>
          <div class="base" style="border-bottom: solid 1px #dbdbdb;"
               @click="showIsOR(3)">我的地址
          </div>
        </div>


        <div class="person-show-right">
          <div class="person-show-right-div">
            <span>{{' ' + titleName}}</span>
          </div>
        </div>

      </div>
    </div>


    <!--    <div class="person-show">-->

    <!--      <div class="person-show-bar">-->

    <!--        <div class="base" @click="showIsOR(1)">账号设置</div>-->

    <!--        <div class="order base" @click="showIsOR(3)">我的地址</div>-->
    <!--        &lt;!&ndash;        <div class="order base" @click="showIsOR(3)">我的订单</div>&ndash;&gt;-->

    <!--      </div>-->

    <!--      <div class="person-show-item">-->

    <!--        <div class="my-person" v-if="showIs == '1'">-->

    <!--          <div class="name">-->
    <!--            <img class="avatar" :src="UserInfo.image" alt="">-->

    <!--            <div class="name-username">-->
    <!--              <div class="username">{{UserInfo.uname}}</div>-->
    <!--              <div class="nhao">-->
    <!--                你好-->
    <!--              </div>-->
    <!--            </div>-->

    <!--          </div>-->

    <!--          <div class="upd-pwd">-->
    <!--            <h3 style="color: black">修改密码:</h3>-->
    <!--            <el-input placeholder="请原输入密码" v-model="pwd.password" show-password/>-->
    <!--            <div class="pwd-info">-->

    <!--              <el-input placeholder="请新输入密码" v-model="pwd.newPassword" show-password/>-->
    <!--            </div>-->

    <!--            <el-button class="pwd-info3" type="primary" @click="submitPwd(UserInfo.id)">提交</el-button>-->
    <!--          </div>-->

    <!--        </div>-->


    <!--        <div class="my-order" v-show="showIs == '2'">-->
    <!--          <div class="my-order"></div>-->
    <!--        </div>-->


    <!--        <div class="my-address" v-show="showIs == '3'">-->

    <!--          <div class="my-address-item" @click="addAddress()">-->
    <!--            <div style="margin: auto;font-size: 26px; color: #cecece;">-->
    <!--              <i class="el-icon-circle-plus-outline">-->
    <!--                &lt;!&ndash;                <em style="font-size: 16px; color: #cecece;line-height: 30px">添加地址</em>&ndash;&gt;-->
    <!--              </i>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="my-address-item" v-for="item in addressList" :index="item.id">-->
    <!--            <div class="uname">{{item.name}}</div>-->
    <!--            <div class="phone">{{item.phone}}</div>-->
    <!--            <div class="addresss">{{item.address}}</div>-->
    <!--          </div>-->


    <!--        </div>-->

    <!--      </div>-->


    <!--    </div>-->


    <!-- ========================= -->
    <!-- 地址 start -->
    <!-- ========================= -->
    <el-dialog title="添加地址" center :visible.sync="addressDialog" width="40%">
      <span>
        <!--表单-->
        <div style="display: flex">
           <el-form :model="addressInfo" :rules="loginFormRules3" style="margin: 4px auto;">
            <!--用户名-->
            <el-form-item prop="name">
              <el-input placeholder="收件人" v-model="addressInfo.name" style="width: 300px"/>
            </el-form-item>

             <!--密码-->
            <el-form-item prop="phone">
              <el-input placeholder="手机号"
                        v-model="addressInfo.phone" style="width: 300px"/>
            </el-form-item>

             <!--手机号-->
            <el-form-item prop="address">
              <el-input placeholder="地址" v-model="addressInfo.address" style="width: 300px"/>
            </el-form-item>


            <el-form-item style="display: flex;justify-content: center">
              <el-button @click="goAddAddress" type="success" size="small">提 交</el-button>
              <el-button style="margin-left: 150px" @click="addressDialog = false" size="small">取 消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  import {
    getShoppingNum,
    getCategoryList, getAddressList, addAddress, getUserList, getSceneryIndex,
    getSceneryList, getrotationList, updUserInfo, getSearchContent, adminLogin, userLogin, addUser, updPasswordById
  } from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'person',
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
          uname: '',
          pwd: ''
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
          phone: ''
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

        // 地址表单验证
        loginFormRules3: {
          name:
            [
              {required: true, message: '请输入收件人', trigger: 'blur'},
              {min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur'}
            ],
          address:
            [
              {required: true, message: '请输入地址', trigger: 'blur'},
              {min: 5, max: 100, message: '请输入地址请填写正确地址', trigger: 'blur'}
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

        showIs: '3',

        // 修改密码
        pwd: {
          password: '',
          newPassword: ''
        },

        // 地址
        addressList: [],
        addressInfo: {
          name: '',
          phone: '',
          address: ''
        },
        addressDialog: false,
        shoppingNum: 0,

        titleName: '我的账号',

      }
    },
    created() {
      this.init()

    },
    methods: {
      // 初始化
      async init() {

        // // 是否登录
        // if (!this.loginIs()) {
        //   this.$message({ message: '请先登录', type: 'error', duration: 1700 })
        //   this.$router.push('/phone/home')
        //   return false
        // } else {
        //   getShoppingNum(this.UserInfo.id).then(res => {
        //     if (res.success) {
        //       this.shoppingNum = res.data.data
        //
        //     } else {
        //       this.$message({
        //         message: '数据获取失败，请刷新重试',
        //         type: 'error', duration: 2000
        //       })
        //     }
        //   })
        //
        // }
        //
        // getAddressList(this.UserInfo.id).then(res => {
        //   if (res.success) {
        //     this.addressList = res.data.data
        //   } else {
        //     this.$message({ message: res.message, type: 'error', duration: 1700 })
        //   }
        //
        // })

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

      // 去首页
      goHome() {
        this.$router.push({path: `/phone/home`})
      },

      // 购物车
      goShopping() {
        // // 是否登录
        // if (!this.loginIs()) {
        //   this.$message({ message: '请先登录', type: 'error', duration: 1700 })
        //   return false
        // }

        // 后台请求购物车数据
        const {href} = this.$router.resolve({path: '/flower/shopping'})
        window.open(href, '_blank')
      },

      // 修改密码
      submitPwd(id) {
        console.log(id)
        updPasswordById(id, this.pwd).then(res => {
          if (res.success) {
            this.$message({message: '成功修改密码', type: 'success', duration: 1700})
            this.pwd = {
              password: '',
              newPassword: ''
            }

          } else {
            this.$message({message: res.message, type: 'error', duration: 1700})
          }
        })

      },

      showIsOR(id) {
        if (id == 1) {
          this.titleName = '我的账号'
        } else if (id == 2) {
          this.titleName = '我的订单'
        } else if (id == 3) {
          this.titleName = '我的地址'
        }

      },

      // 地址
      addAddress() {
        this.addressInfo = {
          'name': '',
          'phone': '',
          'address': ''
        }
        this.addressDialog = true
      },
      // 重置添加用户表单
      closeAddAdminForm() {
        // this.$refs.loginFormRules2.resetFields()
        // this.$refs.loginFormRules.resetFields()

      },

      // 去首页
      goHome() {
        this.$router.push({path: `/phone/home`})
      },

      goAddAddress() {
        let address = {
          'userid': this.UserInfo.id,
          'name': this.addressInfo.name,
          'phone': this.addressInfo.phone,
          'address': this.addressInfo.address
        }
        addAddress(address).then(res => {
          if (res.success) {
            // this.$message({ message: '成功添加', type: 'success', duration: 1700 })
            this.init()
          } else {
            this.$message({message: '添加失败', type: 'error', duration: 1700})
          }
        })

        this.addressInfo = {
          'name': '',
          'phone': '',
          'address': ''
        }
        this.addressDialog = false
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
    background-color: #f3f3f3;
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
    color: #5a98de;
  }

  /* ======= */
  /* 个人中心 */
  /* ======= */
  .person-show {
    width: 1200px;
    height: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;

  }

  .person-show-left {
    width: 210px;
    height: 600px;
    border: solid 1px #dbdbdb;
    background-color: white;
    border-radius: 8px;
  }

  .person-show-left .name {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }

  .base {
    border-top: solid 1px #dbdbdb;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    color: #5079d9;
    width: 100%;
    cursor: pointer;
  }

  .base:hover {
    color: white;
    background-color: #5079d9;
  }

  .person-show-right {
    width: 950px;
    height: 600px;
    border: solid 1px #dbdbdb;
    background-color: white;
    border-radius: 8px;
  }

  .person-show-right-div {
    height: 60px;
    background: linear-gradient(#fbfbfb, #ececec);
    border-bottom: solid 1px #dbdbdb;
    font-size: 18px;
    font-weight: 400;
    color: #626262;
    line-height: 60px;
  }

  .person-show-right-div span {
    margin-left: 20px;
  }

  .person-show-bar {
    width: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .person-show-bar .base {
    font-size: 20px;
    color: #636363;
    font-weight: 600;
    margin-top: 14px;
  }

  .person-show-bar .base:hover {
    cursor: pointer;
    color: #5a98de;
  }


  .person-show-item {
    width: calc(100% - 130px);
    height: 100%;
    /*display: flex;*/
    /*flex-direction: column;*/
    padding: 10px;
  }

  .my-person {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .upd-pwd {
    width: 400px;
    margin: 120px 40px;
  }

  .pwd-info {
    margin-top: 20px;
    /*width: 70%;*/
  }

  .pwd-info3 {
    margin-top: 50px;
    float: right;
    width: 30%;
  }

  .my-order {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .my-address {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    color: black;

  }

  .my-address-item {
    width: 260px;
    height: 170px;
    border: solid 1px #cecece;
    margin-left: 30px;
    margin-top: 20px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .my-address-item .uname {
    font-size: 20px;
    color: #333;
    font-style: normal;
    margin: 20px 0 20px 20px;
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

  .username {
    font-size: 20px;
    font-weight: 400;
    color: #616161;
    margin: 10px auto;
  }

  .avatar {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .my-person .name {
    width: 300px;
    display: flex;
    margin-top: 120px;
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


</style>
