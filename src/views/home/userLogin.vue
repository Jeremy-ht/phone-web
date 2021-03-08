<template>
  <div class="login-container">

    <div class="login-div" v-if="showLoginOr">

      <svg @click="goHome()" t="1614174976054" class="icon111" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1690" width="64" height="64">
        <path
          d="M645.924571 0C693.101714 0 731.428571 35.328 731.428571 78.774857v866.450286C731.428571 988.672 693.101714 1024 645.924571 1024H85.504C38.326857 1024 0 988.672 0 945.225143V78.774857C0 35.328 38.326857 0 85.504 0h560.420571zM841.142857 438.857143a36.571429 36.571429 0 0 1 36.571429 36.571428v512a36.571429 36.571429 0 0 1-73.142857 0v-512a36.571429 36.571429 0 0 1 36.571428-36.571428z m146.285714 292.571428a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-73.142857 0v-219.428571a36.571429 36.571429 0 0 1 36.571428-36.571429zM657.773714 73.069714h-585.142857v877.641143h585.142857v-877.714286zM585.142857 331.995429c0 13.897143-7.460571 26.112-18.651428 33.133714C550.253714 458.605714 466.432 530.066286 365.714286 530.066286S181.174857 458.605714 164.937143 365.129143A39.204571 39.204571 0 0 1 146.285714 332.068571C146.285714 310.272 164.498286 292.571429 186.88 292.571429c22.381714 0 40.521143 17.700571 40.521143 39.497142a38.765714 38.765714 0 0 1-12.8 28.672C228.425143 429.641143 290.889143 481.718857 365.714286 481.718857s137.289143-52.077714 151.113143-120.978286a38.765714 38.765714 0 0 1-12.8-28.745142c0-21.723429 18.139429-39.424 40.521142-39.424 22.381714 0 40.594286 17.700571 40.594286 39.497142zM329.142857 804.571429h73.142857a36.571429 36.571429 0 0 1 0 73.142857h-73.142857a36.571429 36.571429 0 0 1 0-73.142857z"
          p-id="1691" fill="#d81e06"></path>
      </svg>

      <div style="margin: 10px auto;color: #989898">
        <h3>云购手机商城登录</h3>
      </div>

      <!-- 登录表单 -->
      <div class="login-form">

        <el-form ref="loginFormRef" label-width="0" class="login_form"
                 :model="loginForm2" :rules="loginFormRules">
          <!--用户名-->
          <el-form-item prop="uname">
            <el-input class="form-input" placeholder="用户名"
                      v-model="loginForm2.uname" :autofocus="true"/>
          </el-form-item>

          <!--密码-->
          <el-form-item prop="password">
            <el-input class="form-input" type="password"
                      placeholder="密码" v-model="loginForm2.pwd"/>
          </el-form-item>

          <!-- 登录按钮 -->
          <el-form-item>
            <div class="form-btn" @click="login">
              <div class="login-span">登 &nbsp;&nbsp;&nbsp;录</div>
            </div>
          </el-form-item>

          <div class="register-go">
            <el-link class="register-go-a"
                     @click="showLoginOr = !showLoginOr">
              注册
            </el-link>
          </div>
        </el-form>
      </div>

    </div>

    <!-- ========================= -->
    <!-- 注册 -->
    <!-- ========================= -->
    <div class="login-div22" v-if="!showLoginOr">
      <svg @click="goHome()" t="1614174976054" class="icon111" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1690" width="64" height="64">
        <path
          d="M645.924571 0C693.101714 0 731.428571 35.328 731.428571 78.774857v866.450286C731.428571 988.672 693.101714 1024 645.924571 1024H85.504C38.326857 1024 0 988.672 0 945.225143V78.774857C0 35.328 38.326857 0 85.504 0h560.420571zM841.142857 438.857143a36.571429 36.571429 0 0 1 36.571429 36.571428v512a36.571429 36.571429 0 0 1-73.142857 0v-512a36.571429 36.571429 0 0 1 36.571428-36.571428z m146.285714 292.571428a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-73.142857 0v-219.428571a36.571429 36.571429 0 0 1 36.571428-36.571429zM657.773714 73.069714h-585.142857v877.641143h585.142857v-877.714286zM585.142857 331.995429c0 13.897143-7.460571 26.112-18.651428 33.133714C550.253714 458.605714 466.432 530.066286 365.714286 530.066286S181.174857 458.605714 164.937143 365.129143A39.204571 39.204571 0 0 1 146.285714 332.068571C146.285714 310.272 164.498286 292.571429 186.88 292.571429c22.381714 0 40.521143 17.700571 40.521143 39.497142a38.765714 38.765714 0 0 1-12.8 28.672C228.425143 429.641143 290.889143 481.718857 365.714286 481.718857s137.289143-52.077714 151.113143-120.978286a38.765714 38.765714 0 0 1-12.8-28.745142c0-21.723429 18.139429-39.424 40.521142-39.424 22.381714 0 40.594286 17.700571 40.594286 39.497142zM329.142857 804.571429h73.142857a36.571429 36.571429 0 0 1 0 73.142857h-73.142857a36.571429 36.571429 0 0 1 0-73.142857z"
          p-id="1691" fill="#d81e06"></path>
      </svg>

      <div style="margin: 10px auto;color: #989898">
        <h3>云购手机商城注册</h3>
      </div>

      <!-- 登录表单 -->
      <div class="register-form">
        <el-form ref="loginFormRef" label-position="right"
                 :model="registerForm" :rules="loginFormRules2">
          <!--用户名-->
          <el-form-item prop="uname">
            <el-input placeholder="用户名" v-model="registerForm.uname"
                      :autofocus="true"/>
          </el-form-item>

          <!--密码-->
          <el-form-item prop="pwd">
            <el-input type="password" placeholder="密码"
                      v-model="registerForm.pwd"/>
          </el-form-item>

          <!--手机号-->
          <el-form-item prop="phone">
            <el-input placeholder="手机号" v-model="registerForm.phone"/>
          </el-form-item>

          <!-- 登录按钮 -->
          <el-form-item>
            <div class="form-btn22" @click="registerGo">
              <div class="login-span">注 &nbsp;&nbsp;&nbsp;册</div>
            </div>
          </el-form-item>

          <div class="register-go">
            <el-link class="register-go-a"
                     @click="showLoginOr = !showLoginOr">
              登录
            </el-link>
          </div>
        </el-form>

      </div>
    </div>

  </div>
</template>

<script>
  import { userLogin, addUser } from '../../api/common'

  export default {
    name: 'userLogin',
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

      return {
        //表单数据绑定
        loginForm2: {
          uname: '',
          pwd: ''
        },
        //表单验证
        loginFormRules: {
          uname:
            [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
            ],
          pwd:
            [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
            ]
        },

        showLoginOr: true,
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
        }

      }
    },
    created() {
      this.init()
    },
    methods: {
      async init() {
        if (this.$route.params.id == 2) {
          this.showLoginOr = false
        }

      },

      async login() {
        if (this.loginForm2.uname.trim() == '') {
          this.$message({ message: '用户名不能为空', type: 'error', duration: 1700 })
          return
        }

        if (this.loginForm2.pwd.trim() == '') {
          this.$message({ message: '密码不能为空', type: 'error', duration: 1700 })
          return
        }
        await userLogin(this.loginForm2).then(res => {
          if (res.success) {
            res.data.data.pwd = ''
            res.data.data.salt = ''
            window.localStorage.setItem('UserInfoPhone', JSON.stringify(res.data.data))
            this.$router.push({ path: '/phone/home' })
          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })

          }

        })

      },

      // 去首页
      goHome() {
        this.$router.push({path: `/phone/home`})
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
            // res.data.data.pwd = ''
            // res.data.data.salt = ''
            // window.localStorage.setItem('UserInfo', JSON.stringify(res.data.data))
            this.loginForm2.uname = res.data.data
            console.log(res.data.data)
            this.showLoginOr = true
          } else {
            this.$message({ message: res.message, type: 'error', duration: 2000 })

          }
        })

      },

      //重置
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields()
      },

      //重置
      resetLoginForm2() {
        this.$refs.loginFormRef.resetFields()
      }

    }
  }
</script>

<style scoped>

  .login-container {
    background-image: url("../../assets/login2.jpg");
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .login-div {
    width: 400px;
    height: 400px;
    background-color: white;
    margin: 40px auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  }

  .login-div22 {
    width: 400px;
    height: 440px;
    background-color: white;
    margin: 40px auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  }

  .left-image {
    width: 300px;
    height: 100%;

  }

  .login-form {
    margin: 0 auto;
  }

  .icon111 {
    width: 50px;
    height: 40px;
    margin: 20px auto 0 auto;
    cursor: pointer;
  }

  .form-input {
    width: 330px;
    /*margin-top: 2px;*/
    /*background-color: #ffb01e;*/
    /*cursor: pointer;*/
    display: flex;
    border-radius: 3px;
  }

  .form-btn {
    margin-top: 20px;
    width: 330px;
    background-color: #d81e06;
    cursor: pointer;
    display: flex;
    border-radius: 5px;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }

  .form-btn22 {
    /*margin-top: 10px;*/
    width: 330px;
    background-color: #5a98de;
    cursor: pointer;
    display: flex;
    border-radius: 5px;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }

  .form-btn2 {
    /*margin-top: 30px;*/
    width: 330px;
    background-color: #ffb01e;
    cursor: pointer;
    display: flex;
    border-radius: 3px;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }


  .login-span {
    color: white;
    margin: auto;
    font-size: 18px;
    font-weight: 500;
  }

  .register-go {
    /*margin-top: 10px;*/

  }

  .register-go-a {
    float: right;
    /*margin-left: 32px;*/
    font-size: 14px;
    font-weight: 600;
    color: #d81e06;
  }


  .register-form {
    margin: 0 auto;
  }

  .el-radio__input.is-checked + .el-radio__label {
    color: #ffb01e;
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #ffb01e;
    background: #ffb01e;
  }

  .right-div {
    background: linear-gradient(#fff, #f5f5f5);
    box-shadow: 0 1px 4px rgba(0, 0, 0, .08);
  }

  /deep/ .el-link.el-link--default:hover {
    color: #e47a0f;
  }
  /deep/  .el-link.el-link--default:hover {
    color: #e47a0f;
  }
</style>
