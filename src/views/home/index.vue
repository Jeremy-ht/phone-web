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
            <el-dropdown  @click="layoutLogin">
              <span class="el-dropdown-link">
               你好，{{UserInfo.uname}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" @click="layoutLogin">
                <el-dropdown-item @click="layoutLogin">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>

        </div>

      </div>
    </div>

    <div class="bar">
      <div class="home-content">
        <div class="bai-item">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#FFFFFF"
            text-color="#000"
            active-text-color="#ffac89">
            <el-menu-item index="0">鲜花</el-menu-item>
            <el-menu-item index="1">玫瑰</el-menu-item>
            <el-menu-item index="2">康乃馨</el-menu-item>
            <el-menu-item index="3">百合</el-menu-item>
            <el-menu-item index="4">向日葵</el-menu-item>
            <el-menu-item index="5">扶郎</el-menu-item>
            <el-menu-item index="6">郁金香</el-menu-item>
            <el-menu-item index="7">马蹄莲</el-menu-item>
            <!--            <el-submenu index="1000">-->
            <!--              <template slot="title" class="more">更多</template>-->
            <!--              <el-menu-item v-for="item in cateList" :index="item.categoryid">-->
            <!--                {{item.categoryname}}-->
            <!--              </el-menu-item>-->
            <!--            </el-submenu>-->

          </el-menu>
        </div>

<!--        <div class="home-search" v-on:keyup.enter="searchGo">-->
<!--          <el-input class="home-search-input"-->
<!--                    placeholder="请输入搜索内容"-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    v-model="search"-->
<!--                    size="small" v-on:keyup.enter="searchGo">-->
<!--          </el-input>-->
<!--        </div>-->
      </div>
    </div>

    <!-- ========================= -->
    <!-- 新品来袭 -->
    <!-- ========================= -->
    <div class="content-show" v-show="showIndex == 1">

      <div class="new bor">
        <h1>新品来袭</h1>

        <div class="new-item">

          <div class="new-item-list1" v-for="item in newList" :index="item.id">

            <div class="new-item-img">
              <img @click="goDetailInfo(item.id)" :src="item.image" alt="">
            </div>

            <div class="new-item-price">
              ¥ {{item.price}}
            </div>

            <div class="new-item-name" @click="goDetailInfo(item.id)">
              {{item.description}}
            </div>

          </div>

        </div>
      </div>

      <div class="feature">
        <div class="bor">
          <h1>热销榜单</h1>

          <div class="new-item">

            <div class="new-item-list" v-for="item in featureList" :index="item.id">

              <div class="new-item-img">
                <img @click="goDetailInfo(item.id)" :src="item.image" alt="">
              </div>

              <div class="new-item-price">
                ¥ {{item.price}}
              </div>

              <div class="new-item-name" @click="goDetailInfo(item.id)">
                {{item.description}}
              </div>

            </div>


          </div>
        </div>
      </div>

      <div class="feature">
        <div class="bor">
          <h1>鲜花礼盒</h1>

          <div class="new-item">

            <div class="new-item-list" v-for="item in boxList" :index="item.id">

              <div class="new-item-img">
                <img @click="goDetailInfo(item.id)" :src="item.image" alt="">
              </div>

              <div class="new-item-price">
                ¥ {{item.price}}
              </div>

              <div class="new-item-name" @click="goDetailInfo(item.id)">
                {{item.description}}
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>

    <div class="content-show" v-show="showIndex == 2">
      <div class="new bor">
        <div class="bor" style="margin-top: 10px">
          <h1>{{categoryname}}</h1>

          <div class="new-item">

            <div class="new-item-list" v-for="item in otherList" :index="item.id">

              <div class="new-item-img">
                <img @click="goDetailInfo(item.id)" :src="item.image" alt="">
              </div>

              <div class="new-item-price">
                ¥ {{item.price}}
              </div>

              <div class="new-item-name" @click="goDetailInfo(item.id)">
                {{item.description}}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>


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
    getCategoryList, getUserList, getSceneryIndex, getShoppingNum,
    getSceneryList, getrotationList, updUserInfo, getSearchContent, adminLogin, userLogin, addUser, getSceneryListByCate
  } from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'index',
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

        // 三大分类
        newList: [],
        featureList: [],
        boxList: [],

        // 切换页面数据
        otherList: [],
        showIndex: 1,
        categoryname: '',

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
        // 注册表单
        registerForm: {
          uname: '',
          pwd: '',
          sex: '1',
          phone: '',
          email: ''
        },


        showLogin: false,

        // 购物车
        showShopping: false,
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
          this.showLogin = false
        } else {
          await getShoppingNum(this.UserInfo.id).then(res => {
            if (res.success) {
              this.shoppingNum = res.data.data

            } else {
              this.$message({
                message: '数据获取失败，请刷新重试',
                type: 'error', duration: 2000
              })
            }
          })
          this.showLogin = true
        }

        // // 获取导航菜单  放入更多里面
        // let params = {
        //   pagenum: 1,
        //   pagesize: 100
        // }
        // await getCategoryList(params).then(res => {
        //   if (res.success) {
        //     this.cateList = res.data.data.filter(cate =>
        //       cate.categoryid != 1 &&
        //       cate.categoryid != 2 &&
        //       cate.categoryid != 3 &&
        //       cate.categoryid != 4 &&
        //       cate.categoryid != 5 &&
        //       cate.categoryid != 10
        //     )
        //
        //     console.log(this.cateList)
        //   }
        // })

        // 获取分类
        await getSceneryIndex().then(res => {
          if (res.success) {
            this.newList = res.data.data.new
            this.featureList = res.data.data.feature
            this.boxList = res.data.data.box

          } else {
            this.$message({
              message: '数据获取失败，请刷新重试',
              type: 'error', duration: 2000
            })
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

      async handleSelect(key) {
        if (key == 0) {
          this.showIndex = 1
        } else {
          this.showIndex = 2
        }

        this.otherList = []
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        await getSceneryList(params, key).then(res => {
          if (res.success) {
            this.otherList = res.data.data
          } else {
            this.$message({
              message: '数据获取失败,请刷新!',
              type: 'error', duration: 2000
            })
          }
        })

        await getSceneryListByCate(key).then(res => {
          if (res.success) {
            this.categoryname = res.data.data
          } else {
            this.$message({
              message: '数据获取失败,请刷新!',
              type: 'error', duration: 2000
            })
          }
        })

        // if (key != 0) {
        //   window.localStorage.setItem('activeIndex', key)
        //   this.showIndex = 2
        // } else {
        //   this.showIndex = 1
        // }

      },

      // 搜索
      async searchGo() {
        await getSearchContent(this.search.trim()).then(res => {
          if (res.success) {

            this.otherList = []
            this.activeIndex = '-10'
            this.showIndex = 2
            this.otherList = res.data.data

          } else {
            this.$message({
              message: '没有您想获取的内容，换点别的试试',
              type: 'error', duration: 2300
            })
          }
        })

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

      // 去详情页
      goDetailInfo(id) {
        const { href } = this.$router.resolve({ path: `/flower/info/${id}` })
        window.open(href, '_blank')

      },

      handleCommand(command) {
        if (command == 1) {
          // 个人中心
          this.showIndex = 3
          this.activeIndex = '-1'

        } else {
          // 退出
          window.localStorage.removeItem('UserInfo')
          this.UserInfo = {
            uname: '',
            image: '',
            phone: '',
            creatime: '',
            email: '',
            id: 0,
            loginway: 0,
            sex: '1'
          }
          this.activeIndex = '0'
          this.showIndex = 1
          this.init()
        }

      },
      layoutLogin() {
        console.log(1)
        window.localStorage.removeItem('UserInfoFlower')
        console.log(1)
        this.init()
      },

      // 封面上传成功
      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.UserInfo.image = res.data.location
          window.localStorage.removeItem('UserInfo')
          window.localStorage.setItem('UserInfo', JSON.stringify(this.UserInfo))
          this.UserInfo = JSON.parse(window.localStorage.getItem('UserInfo'))
        } else {
          this.$message({ message: '头像上传失败，请重新上传', type: 'error', duration: 1700 })
        }

      },

      // 重置添加用户表单
      closeAddAdminForm() {
        this.$refs.loginFormRules2.resetFields()
        this.$refs.loginFormRules.resetFields()

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
  /*  导航 */
  /* ======= */
  .bar {
    width: 100%;
    height: 70px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-bottom: 1px solid #ebeef5;
  }

  .home-content {
    width: 1200px;
    height: 70px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .home-search {
    width: 200px;
    margin: auto;

  }

  .el-menu {
    display: flex;
    /*justify-content: space-around;*/
  }

  .bai-item {
    width: calc(100% - 300px);
  }

  .el-menu-item {
    height: 69px;
    line-height: 70px;
    margin-left: 12px;
    font-size: 18px;
    color: #232628;
    font-weight: bold;
  }

  /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 70px;
    line-height: 70px;
  }

  /deep/ .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  /deep/ .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid white;
  }

  /deep/ .el-button.is-plain:focus, .el-button.is-plain:hover {
    background: #FFF;
    border-color: #ffac89;
    color: #ffac89;
  }

  /deep/ .el-input__inner:hover {
    border-color: #ffac89;
  }

  /deep/ .el-input__inner:focus {
    border-color: #ffac89;
  }

  /* ======= */
  /* 展示 */
  /* ======= */
  .content-show {
    width: 100%;
    height: 100%;
    color: black;
    display: flex;
    flex-direction: column;
  }

  .new {
    width: 100%;
    /*height: 450px;*/
  }

  .new-item {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .new-item-list {
    width: 260px;
    height: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: white;
    padding: 6px;
    margin-top: 20px;
  }

  .new-item-list1 {
    width: 260px;
    height: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #f4f4f4;
    padding: 6px;
  }

  .new-item-list1:hover {
    border: 1px solid #ffac89;

  }

  .new-item-list:hover {
    border: 1px solid #ff6c41;
  }

  .new-item-img {
    width: 220px;
    height: 240px;
    margin: 4px auto;
  }

  .new-item-img img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .new-item-price {
    height: 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin: 6px auto;
    color: #ff6c41;
  }

  .new-item-name {
    width: 220px;
    margin: 0 auto;
    font-size: 14px;
    color: #737373;
    cursor: pointer;
    text-align: center;
  }

  .new-item-name:hover {
    color: #ff6c41;
  }

  .feature {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;

  }

  .bor {
    width: 1200px;
    height: 100%;
    margin: 10px auto 0 auto;
  }

</style>
