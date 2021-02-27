<template>
  <div class="home-container">


    <div class="header">
      <div class="header-item">

        <div class="header-item-icon">
          <svg @click="goHome()" t="1614167354200" class="icon"
               viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="2441"
               width="200" height="200">
            <path
              d="M645.924571 0C693.101714 0 731.428571 35.328 731.428571 78.774857v866.450286C731.428571 988.672 693.101714 1024 645.924571 1024H85.504C38.326857 1024 0 988.672 0 945.225143V78.774857C0 35.328 38.326857 0 85.504 0h560.420571zM841.142857 438.857143a36.571429 36.571429 0 0 1 36.571429 36.571428v512a36.571429 36.571429 0 0 1-73.142857 0v-512a36.571429 36.571429 0 0 1 36.571428-36.571428z m146.285714 292.571428a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-73.142857 0v-219.428571a36.571429 36.571429 0 0 1 36.571428-36.571429zM657.773714 73.069714h-585.142857v877.641143h585.142857v-877.714286zM585.142857 331.995429c0 13.897143-7.460571 26.112-18.651428 33.133714C550.253714 458.605714 466.432 530.066286 365.714286 530.066286S181.174857 458.605714 164.937143 365.129143A39.204571 39.204571 0 0 1 146.285714 332.068571C146.285714 310.272 164.498286 292.571429 186.88 292.571429c22.381714 0 40.521143 17.700571 40.521143 39.497142a38.765714 38.765714 0 0 1-12.8 28.672C228.425143 429.641143 290.889143 481.718857 365.714286 481.718857s137.289143-52.077714 151.113143-120.978286a38.765714 38.765714 0 0 1-12.8-28.745142c0-21.723429 18.139429-39.424 40.521142-39.424 22.381714 0 40.594286 17.700571 40.594286 39.497142zM329.142857 804.571429h73.142857a36.571429 36.571429 0 0 1 0 73.142857h-73.142857a36.571429 36.571429 0 0 1 0-73.142857z"
              p-id="2442" fill="#e6e6e6"></path>
          </svg>
        </div>

        <!-- ========================= -->
        <!-- 搜索 -->
        <!-- ========================= -->
        <div class="header-item-search">
          <el-input class="header-item-search-ic"
                    popper-class="my-autocomplete"
                    v-model="searchText"
                    placeholder="请输入内容"
                    @keyup.13="handleIconClick">
            <i class="el-icon-search el-input__icon a"
               slot="suffix"
               @click="handleIconClick">
            </i>
          </el-input>
        </div>

        <div class="header-item-person">

          <div class="header-item-person-all" @click="allShop()">
            全部商品
          </div>

          <div class="header-item-person-icon">
            <i @click="goLoginTo" class="el-icon-user-solid"/>
            <!--            <i v-if="showLogin"  @click="goLoginTo"  class="el-icon-user-solid"/>-->
            <!--            <i v-else @click="goLogin" class="el-icon-user-solid"/>-->
          </div>

          <div class="header-item-person-shop">
            <svg @click="goShopping" t="1614169177551" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="1814" width="200" height="200">
              <path
                d="M1005.94270776 797.03077888H265.53154332c-21.94242333 0-42.52558222-8.54395221-57.86585999-24.0784111-15.3402789-15.53445888-23.88423111-35.92343666-23.69005112-57.86586112l2.71853112-545.25952c0-21.74824334-7.57304889-36.3117989-45.24411334-42.3314011h-0.19417999l-108.74121557-18.64135111c-10.48576-1.74762667-17.67044779-11.84502557-15.92281998-22.33078557 1.74762667-10.48576 11.84502557-17.67044779 22.33078442-15.92282112l108.54703446 18.64135112c51.65207666 8.15559111 77.86647666 35.34089443 77.86647666 80.7791889L222.61759999 715.47486776c0 11.45666333 4.27197667 22.13660445 12.42756779 30.09801558 8.15559111 8.15559111 18.83553223 12.62174777 30.29219555 12.62174777h740.41116445c10.67994112 0 19.41807445 8.73813333 19.41807331 19.41807445s-8.54395221 19.41807445-19.22389333 19.41807332z"
                fill="#dbdbdb" p-id="1815"></path>
              <path
                d="M950.60119665 685.57103445l-685.65219556-2.13598891c-21.55406222-0.19418112-41.74885888-8.54395221-56.89495665-23.88423111-15.14609778-15.3402789-23.30168889-35.53507555-23.30168889-57.08913777l2.13598777-402.73085554L962.64040333 257.5966811c35.14671445 1.35926557 62.72037888 29.90383445 62.72037888 65.0505489V611.00563c0 41.16631666-33.59326777 74.56540445-74.75958556 74.56540445zM265.33736333 644.59889778l685.45801444 2.13598776c19.80643555 0 35.92343666-16.1170011 35.92343666-35.72925554V322.64723c0-14.17519445-11.26248334-25.8260389-25.43767666-26.2144h-0.77672334l-734.58574222-54.75896888-1.74762667 361.17617778c0 11.06830222 4.27197667 21.55406222 12.03920669 29.51547221 7.37886777 7.76723001 17.86462777 12.23338667 29.1271111 12.23338667z"
                fill="#dbdbdb" p-id="1816"></path>
              <path
                d="M340.87367111 861.11042332m-72.42941668 0a72.42941667 72.42941667 0 1 0 144.85883335 0 72.42941667 72.42941667 0 1 0-144.85883335 0Z"
                fill="#dbdbdb" p-id="1817"></path>
              <path
                d="M340.87367111 952.95791445c-50.68117333 0-91.84748999-41.16631666-91.84749-91.84749113s41.16631666-91.84748999 91.84749-91.84748999c50.68117333 0 91.84748999 41.16631666 91.84748998 91.84748999s-41.16631666 91.84748999-91.84748998 91.84749113z m0-144.85883335c-29.32129223 0-53.01134222 23.69004999-53.01134223 53.01134222s23.69004999 53.01134222 53.01134223 53.01134222 53.01134222-23.69004999 53.01134222-53.01134222-23.69004999-53.01134222-53.01134222-53.01134222z"
                fill="#dbdbdb" p-id="1818"></path>
              <path
                d="M896.81313223 861.11042332m-72.42941668 0a72.42941667 72.42941667 0 1 0 144.85883221 0 72.42941667 72.42941667 0 1 0-144.85883221 0Z"
                fill="#dbdbdb" p-id="1819"></path>
              <path
                d="M896.81313223 952.95791445c-50.68117333 0-91.84748999-41.16631666-91.84749114-91.84749113s41.16631666-91.84748999 91.84749114-91.84748999 91.84748999 41.16631666 91.84748998 91.84748999-41.16631666 91.84748999-91.84748998 91.84749113z m0-144.85883335c-29.32129223 0-53.01134222 23.69004999-53.01134223 53.01134222s23.69004999 53.01134222 53.01134223 53.01134222 53.01134222-23.69004999 53.01134222-53.01134222-23.69004999-53.01134222-53.01134222-53.01134222z"
                fill="#dbdbdb" p-id="1820"></path>
              <path
                d="M780.30468778 426.33974556H384.56433777c-10.67994112 0-19.41807445-8.73813333-19.41807445-19.41807445s8.73813333-19.41807445 19.41807445-19.41807445h395.74035001c10.67994112 0 19.41807445 8.73813333 19.41807331 19.41807445s-8.73813333 19.41807445-19.41807331 19.41807445zM780.30468778 537.99367111H384.56433777c-10.67994112 0-19.41807445-8.73813333-19.41807445-19.41807445s8.73813333-19.41807445 19.41807445-19.41807332h395.74035001c10.67994112 0 19.41807445 8.73813333 19.41807331 19.41807332s-8.73813333 19.41807445-19.41807331 19.41807445z"
                fill="#dbdbdb" p-id="1821"></path>
            </svg>
          </div>

          <div class="header-item-person-shop-number" v-if="showLogin">
            {{shoppingNum}}
          </div>

        </div>


      </div>
    </div>

    <!-- ========================= -->
    <!-- 四大品牌 -->
    <!-- ========================= -->
    <div class="content-phone" v-show="showIndex == 1">

      <div class="pull-4">
        <div class="pull-4-item">

          <div class="four-item" v-for="item in fourList" :index="item.id">
            <img class="img" :src="item.icon" @click="goDetailInfo(item.id)">
          </div>

        </div>
      </div>

      <div class="gray-box">
        <div class="title">
        </div>
      </div>

      <div class="content-show">

        <div class="new bor" v-for="(item, index) in cate" :index="index">
          <h1 class="title-1">{{item}}</h1>

          <div class="title-1-i">

            <div class="title-item" v-for="(items, index) in showLists[index]" :index="items.id">

              <img class="phone-img"
                   @click="goDetailInfo(items.id)" :src="items.image"
                   alt="">

              <div class="phone-title">{{items.title}}</div>

              <div class="phone-feature">{{items.name}}</div>

              <div class="phone-price">
                ¥ {{items.price}}
              </div>

            </div>

          </div>


        </div>

      </div>

    </div>


    <!-- ========================= -->
    <!-- 所有分类 -->
    <!-- ========================= -->
    <div class="content-phone" style="display: flex" v-show="showIndex == 2">

      <div class="content-phone-div">

        <div class="category">

          <span class="plfl">品牌分类:</span>

          <div class="category-item">
            <span v-for="item in cateList" :index="item.id"
                  @click="getcateList(item.id)">{{item.categoryname}}</span>
          </div>

        </div>


        <div class="content-phone-show">
          <div class="content-show1">

            <div class="new bor2">
              <!--              <h1 class="title-1">华为</h1>-->

              <div class="title-1-i">
                <div  v-if="otherList.length == 0" class="se">没有商品可以浏览...</div>

                <div class="title-item" v-else v-for="item in otherList" :index="item.id">


                  <img class="phone-img"
                       @click="goDetailInfo(item.id)" :src="item.image"
                       alt="">

                  <div class="phone-title">{{item.title}}</div>

                  <div class="phone-feature">{{item.name}}</div>

                  <div class="phone-price">
                    ¥ {{item.price}}
                  </div>

                </div>




              </div>


            </div>

          </div>
        </div>

      </div>

    </div>


    <!-- ========================= -->
    <!-- 搜索 -->
    <!-- ========================= -->
    <div class="content-phone" style="display: flex" v-show="showIndex == 3">

      <div class="content-phone-div">

        <div class="content-phone-show">
          <div v-if="searchList.length != 0" class="content-show1">

            <div class="new bor2">

              <div class="title-1-i">

                <div class="title-item" v-for="item in searchList" :index="item.id">

                  <img class="phone-img"
                       @click="goDetailInfo(item.id)" :src="item.image"
                       alt="">

                  <div class="phone-title">{{item.title}}</div>

                  <div class="phone-feature">{{item.name}}</div>

                  <div class="phone-price">
                    ¥ {{item.price}}
                  </div>

                </div>

              </div>


            </div>

          </div>

          <div v-else class="se">没有搜到您想要的内容...</div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
  import {
    fourList,
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

        // 切换页面数据
        otherList: [],
        showIndex: 1,
        categoryname: '',

        isActive: false,
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

        // phone
        searchText: '',
        showLists: [],
        cate: [],
        fourList: [],
        searchList: [],

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
          // 购物车商品数量
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

        // 3分类
        await getSceneryIndex().then(res => {
          if (res.success) {

            let data = res.data.data
            for (let key in data) {
              this.showLists.push(data[key])
              this.cate.push(key)
            }
            console.log(this.showLists)
          } else {
            this.$message({message: '数据获取失败,请刷新!', type: 'error', duration: 2000})
          }

        })

        // 4
        await fourList().then(res => {
          if (res.success) {
            this.fourList = res.data.data

          } else {
            this.$message({message: '数据获取失败,请刷新!', type: 'error', duration: 2000})
          }

        })

        // 获取导航菜单  放入更多里面
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        await getCategoryList(params).then(res => {
          if (res.success) {
            this.cateList = res.data.data
          }
        })


      },

      // 全部商品
      allShop() {
        this.showIndex = '2'

        let params = {
          pagenum: 1,
          pagesize: 100
        }

        getSceneryList(params, 777).then(res => {

          if (res.success) {
            this.otherList = res.data.data
          } else {
            this.$message({
              message: '数据获取失败,请刷新!',
              type: 'error', duration: 2000
            })
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

      getcateList(key) {

        let params = {
          pagenum: 1,
          pagesize: 100
        }

        getSceneryList(params, key).then(res => {
          console.log(res)
          if (res.success) {
            this.otherList = []
            this.otherList = res.data.data

          } else {
            this.$message({
              message: '数据获取失败,请刷新!',
              type: 'error', duration: 2000
            })
          }
        })

      },

      async handleIconClick() {

        if (this.searchText == '') {
          this.init()
          this.showIndex = 1

          return
        }

        console.log(this.searchText)


        let params = {
          pagenum: 1,
          pagesize: 100,
          a: this.searchText.trim()
        }
        console.log(params)
        await getSearchContent(params).then(res => {
          if (res.success) {
            this.showIndex = 3
            this.searchList = []
            this.searchList = res.data.data

          } else {
            this.$message({
              message: '换个搜索方式吧！',
              type: 'error', duration: 2300
            })
          }
        })

      },

      // 去首页
      goHome() {
        this.showIndex = '1'
        // this.$router.push({path: `/phone/home`})
      },

      // 登录
      goLogin() {
        this.$router.push({path: `/phone/login`})
      },

      // 个人中心
      goLoginTo() {
        // 是否登录
        if (!this.loginIs()) {
          // this.$message({ message: '请先登录', type: 'error', duration: 1700 })
          this.goLogin()
          return false
        }
        const {href} = this.$router.resolve({path: `/phone/my`})
        window.open(href, '_blank')
      },

      // 购物车
      goShopping() {
        // // 是否登录
        // if (!this.loginIs()) {
        //   this.$message({ message: '请先登录', type: 'error', duration: 1700 })
        //   return false
        // }

        const {href} = this.$router.resolve({path: '/phone/shopping'})
        window.open(href, '_blank')
      },

      // 去详情页
      goDetailInfo(id) {
        const {href} = this.$router.resolve({path: `/phone/show/${id}`})
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
        window.localStorage.removeItem('UserInfoPhone')
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
          this.$message({message: '头像上传失败，请重新上传', type: 'error', duration: 1700})
        }

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
    color: #5a98de;
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
    border-color: #5a98de;
    color: #5a98de;
  }

  /deep/ .el-input__inner:hover {
    border-color: black;
  }

  /deep/ .el-input__inner:focus {
    border-color: black;
  }

  /* ======= */
  /* 展示 */
  /* ======= */
  .content-show {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    color: black;
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
  }

  .content-show1 {
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }

  .new {
    width: 100%;
    margin-top: 20px;
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
    border: 1px solid #5a98de;

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
    margin: 18px auto 0 auto;
  }

  .bor2 {
    width: 1200px;
    height: 100%;
    margin: 18px auto 0 auto;
    background-color: #f3f3f3;
  }

  /* ======= */
  /*  phone  */
  /* ======= */
  .header {
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
  }

  .header-item {
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;

  }

  .header-item-icon {
    width: 500px;
    display: flex;
  }

  .header-item-icon .icon {
    width: 50px;
    height: 40px;
    margin: auto 0;
    cursor: pointer;
  }

  .header-item-search {
    width: 400px;
    display: flex;
  }

  .header-item-search-ic {
    width: 340px;
    margin: auto;
  }

  .header-item-person {
    width: calc(100% - 840px);
    height: 100%;
    display: flex;
  }

  .header-item-person-all:hover {
    color: #ff6b25;
  }

  .header-item-person-all {
    width: 100px;
    height: 100%;
    line-height: 100px;
    text-align: center;
    cursor: pointer;
  }

  .header-item-person-icon:hover {
    color: #ff6b25;
  }

  .header-item-person-icon {
    width: 50px;
    height: 100%;
    /*display: flex;*/
  }

  .header-item-person-icon i {
    float: right;
    line-height: 100px;
    font-size: 22px;
    cursor: pointer;
  }

  .header-item-person-shop {
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
  }

  .header-item-person-shop .icon:hover {
    color: #ff6b25;
  }

  .header-item-person-shop .icon {
    margin: auto 0;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  .header-item-person-shop-number {
    background-color: #ff6b25;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    margin: auto 8px;
  }

  .pull-4 {
    width: 100%;
    height: 280px;
    display: flex;
  }

  .pull-4-item {
    padding-left: 8px;
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
  }

  .four-item {
    margin-top: 30px;
    width: 298px;
    height: 200px;
    border: solid 1px #dadada;
    float: right;
    cursor: pointer;
  }

  .four-item .img {
    width: 100%;
    height: 100%;
  }

  .four-item:hover {
    border: solid 2px #dadada;
  }

  .gray-box .title {
    position: relative;
    z-index: 10;
    height: 30px;
    padding: 0 10px 0 24px;
    border-bottom: 1px solid #e4e4e4;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 1px 7px rgba(50, 50, 50, 0.06);
    background: #f3f3f3;
    background: linear-gradient(#ffffff, #f1f1f1);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }

  .title-1-i {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    /*justify-content: space-between;*/
  }

  .title-1 {
    margin-top: 16px;
    font-size: 22px;
    font-weight: 200;
    color: #333;
    padding-left: 10px;
  }


  .title-item {
    height: 280px;
    padding: 20px;
    width: 230px;
    margin-top: 10px;
    margin-right: 6px;
    background-color: white;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .title-item:hover {
    box-shadow: 8px 8px 5px #e1e1e1;
  }

  .phone-img {
    width: 160px;
    height: 160px;
    margin: 0 auto;
  }

  .phone-title {
    color: #333;
    font-size: 14px;
    margin-top: 2px;
    text-align: center;
  }

  .phone-feature {
    font-size: 12px;
    color: #b0b0b0;
    margin-top: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .phone-price {
    margin-top: 10px;
    font-weight: normal;
    color: #ca141d;
    text-align: center;
    font-size: 20px;
  }


  .content-phone {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .content-phone-div {
    width: 1200px;
    height: 100%;
    background-color: #f3f3f3;
    margin: 20px auto;
  }

  .category {
    width: 100%;
    height: 60px;
    padding: 10px;
    border-radius: 6px;
  }

  .plfl {
    color: black;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
  }

  .category-item {
    display: inline;
    color: #626262;
    font-size: 16px;
    line-height: 40px;
  }

  .category-item span {
    margin-left: 22px;
    cursor: pointer;

  }

  .category-item span:hover {
    color: #5a98de;
  }

  .category-item span:visited {
    color: #5a98de;
  }

  .a{
    cursor: pointer;
  }
  .activecc {
    color: #5a98de;
  }

  .content-phone-show {
    border-radius: 6px;
  }

  .se {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: black;
  }

</style>
