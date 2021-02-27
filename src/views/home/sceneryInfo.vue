<template>
  <div class="container">

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

    <div class="info">

      <div class="info-show">

        <div class="info-show-img">
          <img class="imgs" :src="detailInfo.image" alt="">
        </div>

        <div class="info-show-info">

          <p class="info-title">{{detailInfo.name}}</p>
          <div class="info-title-title">
            <div style="width: 550px">{{detailInfo.title}}</div>
            <div><span class="info-price-number1">￥<span
              class="info-price-number">{{detailInfo.price + '.00'}}</span></span>
            </div>
          </div>

          <div class="shuliang">
            <span class="fl align-center">数量：</span>

            <el-input-number class="number" v-model="num" size="small"
                             @change="handleChange" :min="1"/>
          </div>


          <div class="ms">

            <div style=" padding-right: 20px;margin-top:30px;font-size: 14px;
            color: #8d8d8d;">描述：
            </div>

            <div class="ys">
              <div>颜色：<span style="margin-left: 31px">{{detailInfo.color}}</span></div>
              <div>重量：<span style="margin-left: 31px">{{detailInfo.weight}} kg</span></div>
              <div>上市年份：<span style="margin-left: 3px">{{detailInfo.year}} 年</span></div>
              <div>屏幕尺寸：<span style="margin-left: 3px">{{detailInfo.chicun}} 英寸</span></div>
            </div>

          </div>

          <div class="info-btns">
            <div style="float: right">
              <div class="buySub hvr-shutter-out-horizontal" @click="addCart(detailInfo.id)">加购物车</div>
              <div class="buySub hvr-shutter-out-horizontal1" @click="go(detailInfo.id)">立即购买</div>
            </div>

          </div>


        </div>

      </div>

    </div>

    <div style="width: 100%;height: 100%;background-color: #ededed;padding-top: 30px">
      <div class="person-show">

        <div class="person-show-left">
          <h3>销售排行榜</h3>

          <div class="paihangbang">
            <div class="title-1-i">

              <div class="title-item" v-for="(item, index) in oList" :index="item.id">
                <div class="header-item-person-shop-number">
                  {{index + 1}}
                </div>
                <img class="phone-img"
                     @click="goDetailInfo(item.id)" :src="item.image"
                     alt="">

                <div class="phone-title">{{item.title}}</div>

                <!--                <div class="phone-feature">{{item.name}}</div>-->

                <div class="phone-price">
                  ¥ {{item.price}}
                </div>

              </div>

            </div>

          </div>
        </div>


        <div class="person-show-right">
          <div class="person-show-right-div">
            <span>产品详情</span>
          </div>

          <div v-html="detailInfo.content" style="background: white" class="content">

          </div>
        </div>

      </div>
    </div>

    <div style="width: 100%;height: 70px;background-color: #ededed;">
    </div>

    <!-- ========================= -->
    <!-- 订单 start -->
    <!-- ========================= -->
    <el-dialog title="提交订单" center :visible.sync="showOrder" width="40%">
      <span>


      <div class="addressss">
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
    getInfoList6,
    addOrder2,
    getSceneryInfo,
    addCart,
    addComment,
    getCommentList,
    userLogin,
    addUser,
    getAddressList, addOrder
  }
    from '../../api/common'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'sceneryInfo',
    data() {

      return {
        dilog: false,
        user: {},
        detailId: 0,
        categoryid: 0,
        detailInfo: {},

        addComment: '',

        commentList: [],
        countList: 0,
        totalPrice: 0,
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
        showLogin: false,
        // flower
        loginDialog: false,
        regDialog: false,

        //
        num: 1,
        shoppingNum: 0,
        oList: [],  // 排行榜
        // 订单
        showOrder: false,
        // 地址
        addressList: [],
        addressid: '',
        ids: [],
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
            this.$message({message: '详情获取失败，请刷新再试！', type: 'error', duration: 2000})
          }

        })


        // 排行榜
        await getInfoList6(this.detailId).then(res => {
          if (res.success) {
            this.oList = res.data.data
            console.log(this.oList)
          } else {
            this.$message({
              message: '数据获取失败，请刷新重试',
              type: 'error', duration: 2000
            })
          }
        })

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

      go() {
        // 是否登录
        if (!this.loginIs()) {
          const {href} = this.$router.resolve({path: '/phone/login'})
          window.open(href, '_blank')
        } else {
          this.totalPrice = this.num * this.detailInfo.price
          getAddressList(this.UserInfo.id).then(res => {
            if (res.success) {
              this.addressList = res.data.data
            } else {
              this.$message({message: res.message, type: 'error', duration: 1700})
            }

          })
          this.showOrder = true
        }


      },

      submitOrder() {
        if (this.addressid == 0 || this.addressid == '') {
          this.$message({message: '请选择地址', type: 'error', duration: 1700})
          return false
        }

        const num = this.num * this.detailInfo.price
        let order = {
          'userid': this.UserInfo.id,
          'flowerid': this.addressid,
          'price': num,
          'name': this.detailId,
          'phone': this.num,
        }

        addOrder2(order).then(res => {
          if (res.success) {
            this.$message({message: '购买成功', type: 'success', duration: 2000})
            this.init()
            this.showOrder = false
          } else {
            this.$message({message: '购买失败，刷新再试', type: 'error', duration: 2000})

          }
        })

      },


      // 购物车
      goShopping() {
        // 是否登录
        if (!this.loginIs()) {
          this.$message({message: '请先登录', type: 'error', duration: 1700})
          return false
        }

        const {href} = this.$router.resolve({path: '/phone/shopping'})
        window.open(href, '_blank')
      },


      // 重置添加用户表单
      closeAddAdminForm() {
        this.$refs.loginFormRules2.resetFields()
        this.$refs.loginFormRules.resetFields()

      },

      goHome() {
        this.$router.push({path: `/phone/home`})
      },

      addCart(id) {
        // 是否登录
        if (!this.loginIs()) {
          this.$message({message: '请先登录', type: 'error', duration: 1700})
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
            this.$message({message: '加入购物车成功', type: 'success', duration: 2000})
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
          this.$message({message: '请输入评论内容', type: 'error', duration: 1700})
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
            this.$message({message: '评论成功', type: 'success', duration: 1700})
          } else {
            this.$message({message: '评论失败', type: 'error', duration: 1700})
          }
        })

      },

      // 计数器
      handleChange(value) {
        console.log(value)
      },
      // 去详情页
      goDetailInfo(id) {
        const {href} = this.$router.resolve({path: `/phone/show/${id}`})
        window.open(href, '_blank')

      },

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
    padding-top: 20px;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #dcdcdc;
  }

  .info .info-show {
    margin: 0 auto;
    width: 1200px;
    height: 480px;
    background-color: #fff;
    padding: 20px 60px 20px 20px;
    display: flex;
    border-top: 1px solid #ededed;
    border-radius: 10px;

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
    font-size: 20px;
    line-height: 1.25;
    color: #000;
    margin-bottom: 13px;
  }

  .info-title-title {
    font-size: 14px;
    line-height: 1.5;
    color: #bdbdbd;
    display: flex;
    padding-bottom: 10px;
    border-bottom: solid 1px #cbcbcb;

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

  .info-price-number1 {
    color: #d44d44;
    font-weight: 700;
    font-size: 16px;
  }


  .info-price-number {
    color: #d44d44;
    font-weight: 700;
    font-size: 22px;
  }

  .info-btns {
    margin-top: 25px;
    font-size: 14px;
    height: 42px;
  }


  .shuliang {
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: solid 1px #cbcbcb;
  }

  .align-center {
    padding-right: 20px;
    font-size: 14px;
    color: #8d8d8d;
    line-height: 36px;
  }

  .ms {
    display: flex;

  }

  .ys {
    margin-top: 30px;
    font-size: 14px;
    color: #8d8d8d;
  }

  .ys div {
    margin-bottom: 9px;
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
    color: #5a98de;
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
    background: #5c81e3;
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
    background: white;
    color: #5c81e3;
  }


  .hvr-shutter-out-horizontal {
    width: 145px;
    height: 50px;
    border: 1px solid #5c81e3;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    color: white;
    /*margin-left: 10px;*/
    border-radius: 4px;
    cursor: pointer;
  }

  .hvr-shutter-out-horizontal1 {
    width: 145px;
    height: 50px;
    border: 1px solid #5c81e3;
    border-radius: 4px;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    color: #5c81e3;
    margin-left: 40px;
    cursor: pointer;
  }

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


  .container-item-hr2 {
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
    width: 100%;
    height: 40px;
    background-color: #ededed;
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

  .person-show-right {
    width: 980px;
    border: solid 1px #dbdbdb;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 60px;
  }

  .person-show-right-div {
    height: 60px;
    background: linear-gradient(#fbfbfb, #ececec);
    border-bottom: solid 1px #dbdbdb;
    font-size: 18px;
    font-weight: 400;
    color: #626262;
    line-height: 60px;
    padding: 0 20px;
    border-radius: 10px;
  }

  .person-show {
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;

  }

  .person-show-left {
    width: 210px;
    height: 100%;
    border: solid 1px #dbdbdb;
    background-color: white;
    border-radius: 10px;
    /*padding: 10px;*/
  }

  .person-show-left h3 {
    width: 100%;
    height: 40px;
    font-size: 18px;
    background: linear-gradient(#fbfbfb, #ececec);
    font-weight: 400;
    color: #626262;
    text-align: center;
    border-bottom: solid 1px #dbdbdb;
  }

  .paihangbang {
    width: 100%;
    height: 100%;
    padding: 10px;

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

  .content {
    width: 978px;
    height: 100%;
  }

  /deep/ .content img {
    max-width: 100%;
    max-height: 100%;
  }

  title-1-i {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    /*justify-content: space-between;*/
  }

  .title-1 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 200;
    color: #333;
    /*padding-left: 10px;*/
  }


  .title-item {
    height: 210px;
    padding: 4px;
    width: 100%;
    margin-top: 10px;
    /*margin-right: 6px;*/
    background-color: white;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-bottom: solid 1px #d0c9c9;
  }

  .title-item:hover {
    /*box-shadow: 8px 8px 5px #e1e1e1;*/
  }


  .phone-img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }

  .phone-title {
    color: #333;
    font-size: 14px;
    margin-top: 12px;
    text-align: center;
  }

  .phone-price {
    margin-top: 10px;
    font-weight: normal;
    color: #ca141d;
    text-align: center;
    font-size: 20px;
  }

  .header-item-person-shop-number {
    background-color: #5c81e3;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    margin: auto 8px;
  }

  .addressss {
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    text-align: center;
  }

</style>
