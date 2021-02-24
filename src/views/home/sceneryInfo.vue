<template>
  <div class="container">

    <div class="container-item-hr"/>
    <div class="info">

      <div class="info-show">

        <div class="info-show-img">
          <img class="imgs" :src="detailInfo.image" alt="">
        </div>

        <div class="info-show-info">

          <p class="info-title ellipsis">{{detailInfo.name}}</p>


          <div style="margin-top: 10px;font-size: 14px;color: #666;">
            产地: {{detailInfo.origin}}
          </div>
          <div class="flower-lag">
            {{detailInfo.description}}
          </div>

          <div class="info-price">
            <div class="info-price-top">
              店铺价:<span class="info-price-number">￥<span id="festival-price">{{detailInfo.price}}</span></span>
            </div>

            <div>
              销量 <span style="font-size: 16px;color:#ffac89;"> 50 </span>笔
            </div>
          </div>


          <div class="info-btns">
            <div class="fl info-num align-center">
              <span class="fl align-center">数量：</span>

              <el-input-number class="number" v-model="num" size="small"
                               @change="handleChange" :min="1"/>


              <div class="buySub hvr-shutter-out-horizontal" @click="addCart(detailInfo.id)">加购物车</div>
              <div class="buySub hvr-shutter-out-horizontal1">立即购买</div>
            </div>

          </div>


        </div>

      </div>
      <div class="container-item-hr"/>

    </div>

    <div class="xiangqing">
      <div style="width: 200px;font-size: 18px;color: #ffac89;">
        产品详情
      </div>

      <div v-html="detailInfo.content">

      </div>


    </div>
    <div style="width: 100%;height: 50px;background-color: #ffac89;">
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
  import { getShoppingNum,getSceneryInfo, addCart, addComment, getCommentList, userLogin, addUser }
    from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'sceneryInfo',
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
        dilog: false,
        user: {},
        detailId: 0,
        categoryid: 0,
        detailInfo: {
          name: '',
          content: '',
          origin: '',
          image: '',
          kucun: 10,
          price: 0,
          categoryid: '',
          description: '', // 鲜花花语
          isshow: ''
        },

        addComment: '',

        commentList: [],
        countList: 0,

        //
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
        showLogin: false,
        // flower
        loginDialog: false,
        regDialog: false,

        //
        num: 1,
        shoppingNum: 0,

      }
    },
    created() {
      this.init()

    },
    methods: {
      // 初始化
      async init() {
        this.detailId = this.$route.params.id

        // 获取详情
        await getSceneryInfo(this.detailId).then(res => {
          if (res.success) {
            this.detailInfo = res.data.data
          } else {
            this.$message({
              message: '详情获取失败，请刷新再试！',
              type: 'error',
              duration: 2000
            })
          }

          console.log(this.detailInfo)

        })

        // 是否登录
        if (!this.loginIs()) {

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

        }

        // // 评论
        // await getCommentList(1, 100, this.detailId).then(res => {
        //   if (res.success) {
        //     this.commentList = res.data.data
        //     this.countList = res.data.data.length
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
        this.$router.push({ path: `/phone/home` })
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
            window.localStorage.setItem('UserInfoPhone', JSON.stringify(res.data.data))
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


      // 重置添加用户表单
      closeAddAdminForm() {
        this.$refs.loginFormRules2.resetFields()
        this.$refs.loginFormRules.resetFields()

      },

      addCart(id) {
        // 是否登录
        if (!this.loginIs()) {
          this.$message({ message: '请先登录', type: 'error', duration: 1700 })
          this.$router.push('/flower/home')
          return false
        }

        let cart = {
          'userid': this.UserInfo.id,
          'flowerid': id,
          'amount': this.num
        }
        addCart(cart).then(res => {
          if (res.success) {
            this.$message({ message: '加入购物车成功', type: 'success', duration: 2000 })
            this.num = 1
          } else {
            this.$message({
              message: '添加购物车失败，请刷新再试！',
              type: 'error',
              duration: 2000
            })
          }

        })

      },

      addCommentBtn() {
        if (this.addComment == '') {
          this.$message({ message: '请输入评论内容', type: 'error', duration: 1700 })
          return
        }

        let addCommentInfo = {
          commentary: this.addComment,
          userid: this.user.id,
          detailid: this.detailId,
          categoryid: this.categoryid
        }

        addComment(addCommentInfo).then(res => {
          if (res.success) {
            this.init()
            this.dilog = false
            this.addComment = ''
            this.$message({ message: '评论成功', type: 'success', duration: 1700 })
          } else {
            this.$message({ message: '评论失败', type: 'error', duration: 1700 })
          }
        })

      },

      // 计数器
      handleChange(value) {
        console.log(value)
      }

    }
  }
</script>

<style scoped>

  .container {
    margin: 0;
    padding: 0;
  }

  .container .info {
    width: 100%;
    height: 100%;
    /*color: #71797F;*/
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
  }

  .info .info-show {
    margin: 0 auto;
    width: 1200px;
    height: 460px;
    background-color: #fff;
    padding: 20px 60px 20px 20px;
    display: flex;

  }

  .info-show-img {
    width: 460px;
    height: 460px;
  }

  .imgs {
    width: 400px;
    height: 400px;
  }

  .info-show-info {
    width: calc(100% - 460px);
    height: 500px;
    /*border: solid 1px #eaecee;*/
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  .info-title {
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 25px;
    border-bottom: 1px solid #ccc;
  }

  .info-price {
    padding: 20px 20px 20px 0;
    background-color: rgb(240, 240, 240);
    margin-top: 20px;
    /*margin-left: 6px;*/
    display: flex;
    justify-content: space-between;
  }

  .info-price .info-price-top {
    height: 30px;
    margin-left: 3px;
  }

  .info-price-top .info-price-number {
    color: #f43;
    font-weight: 600;
    font-size: 20px;
  }

  .info-btns {
    margin-top: 55px;
    font-size: 14px;
    height: 42px;
  }

  .info-btns .info-num {
    height: 32px;
  }

  .align-center {
    font-size: 18px;
    /*padding-left: 10px;*/
  }

  .xiangqing {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    display: flex;
    /*flex-direction: column;*/

  }

  /* ======= */
  /* bar  */
  /* ======= */
  .top-bar {
    width: 100%;
    height: 34px;
    font-size: 12px;
    color: #71797F;
    background-color: #fbfdff;
    display: flex;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-bottom: 1px solid #ebeef5;
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


  .flower-lag {
    margin-top: 40px;
    /*padding-left: 10px;*/
    font-size: 14px;
    color: #666;
  }

  .number {
    margin-left: 10px;
  }

  .hvr-shutter-out-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    background: #ffffff;
    color: #fff;
  }

  .hvr-shutter-out-horizontal1 {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    background: #ffac89;
    color: #ffffff;
  }


  .hvr-shutter-out-horizontal {
    width: 140px;
    height: 40px;
    border: 1px solid #ffac89;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    color: #ffac89;
    margin-left: 40px;
    cursor: pointer;
  }

  .hvr-shutter-out-horizontal1 {
    width: 140px;
    height: 40px;
    border: 1px solid #ffac89;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    margin-left: 40px;
    cursor: pointer;
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

  .container-item-hr {
    width: 100%;
    height: 20px;
    background-color: #f5f5f5;
  }
</style>
