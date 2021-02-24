<template>
  <div class="home-container">

    <!-- ========================= -->
    <!-- 欣欣鲜花交易平台！ bar -->
    <!-- ========================= -->
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

    <div class="person-show">

      <div class="person-show-bar">

        <div class="base" @click="showIsOR(1)">账号设置</div>

        <div class="order base" @click="showIsOR(3)">我的地址</div>
        <!--        <div class="order base" @click="showIsOR(3)">我的订单</div>-->

      </div>

      <div class="person-show-item">

        <div class="my-person" v-if="showIs == '1'">

          <div class="name">
            <img class="avatar" :src="UserInfo.image" alt="">

            <div class="name-username">
              <div class="username">{{UserInfo.uname}}</div>
              <div class="nhao">
                你好
              </div>
            </div>

          </div>

          <div class="upd-pwd">
            <h3 style="color: black">修改密码:</h3>
            <el-input placeholder="请原输入密码" v-model="pwd.password" show-password/>
            <div class="pwd-info">

              <el-input placeholder="请新输入密码" v-model="pwd.newPassword" show-password/>
            </div>

            <el-button class="pwd-info3" type="primary" @click="submitPwd(UserInfo.id)">提交</el-button>
          </div>

        </div>


        <div class="my-order" v-show="showIs == '2'">
          <div class="my-order"></div>
        </div>


        <div class="my-address" v-show="showIs == '3'">

          <div class="my-address-item" @click="addAddress()">
            <div style="margin: auto;font-size: 26px; color: #cecece;">
              <i class="el-icon-circle-plus-outline">
                <!--                <em style="font-size: 16px; color: #cecece;line-height: 30px">添加地址</em>-->
              </i>
            </div>
          </div>

          <div class="my-address-item" v-for="item in addressList" :index="item.id">
            <div class="uname">{{item.name}}</div>
            <div class="phone">{{item.phone}}</div>
            <div class="addresss">{{item.address}}</div>
          </div>


        </div>

      </div>


    </div>


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
          phone: ''
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

        // 地址表单验证
        loginFormRules3: {
          name:
            [
              { required: true, message: '请输入收件人', trigger: 'blur' },
              { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
            ],
          address:
            [
              { required: true, message: '请输入地址', trigger: 'blur' },
              { min: 5, max: 100, message: '请输入地址请填写正确地址', trigger: 'blur' }
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
          this.$message({ message: '请先登录', type: 'error', duration: 1700 })
          this.$router.push('/flower/home')
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

      // 登录
      goLogin() {
        this.loginDialog = true
      },
      goLoginTo() {

        if (this.loginForm2.uname.trim() == '') {
          this.$message({ message: '用户名不能为空', type: 'error', duration: 1700 })
          return
        }

        if (this.loginForm2.pwd.trim() == '') {
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
            this.loginDialog = true
          } else {
            this.$message({ message: res.message, type: 'error', duration: 2000 })

          }
        })

      },

      // 去首页
      goHome() {
        this.$router.push({ path: `/scenery/home` })
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
        // // 是否登录
        // if (!this.loginIs()) {
        //   this.$message({ message: '请先登录', type: 'error', duration: 1700 })
        //   return false
        // }

        // 后台请求购物车数据
        const { href } = this.$router.resolve({ path: '/flower/shopping' })
        window.open(href, '_blank')
      },

      // 修改密码
      submitPwd(id) {
        console.log(id)
        updPasswordById(id, this.pwd).then(res => {
          if (res.success) {
            this.$message({ message: '成功修改密码', type: 'success', duration: 1700 })
            this.pwd = {
              password: '',
              newPassword: ''
            }

          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })
          }
        })

      },

      showIsOR(id) {
        if (id == 1) {
          this.showIs = '1'
        } else if (id == 2) {
          this.showIs = '2'
        } else if (id == 3) {
          this.showIs = '3'
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
            this.$message({ message: '添加失败', type: 'error', duration: 1700 })
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
  /* 个人中心 */
  /* ======= */
  .person-show {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    /*border: solid 2px #80430a;*/
    /*flex-direction: column;*/
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
    color: #ffac89;
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
    /*margin: 0;*/
    font-size: 24px;
    font-weight: 400;
    color: #616161;
    margin-left: 10px;
    margin-top: 10px;
  }

  .nhao {
    color: #b0b0b0;
    margin-left: 10px;
    margin-top: 8px;
  }

  /*.name-username{*/
  /*  width: 100px;*/
  /*}*/
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .my-person .name {
    width: 300px;
    display: flex;
    margin-top: 120px;
  }
</style>
