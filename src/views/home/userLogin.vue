<template>
  <div class="login-container">

    <div class="login-div">
      <div class="left-image">
        <img style="width: 100%;height: 100%;border-radius: 12px;"
             src="../../assets/login2.jpg"/>
      </div>

      <div class="right-div" v-if="showLoginOr">
        <div style="margin: 20px auto">
          <h3>账号密码登录</h3>
        </div>

        <!-- 登录表单 -->
        <div class="login-form">

          <el-form ref="loginFormRef" label-width="0" class="login_form"
                   :model="loginForm2" :rules="loginFormRules">
            <!--用户名-->
            <el-form-item prop="username">
              <el-input class="form-input" prefix-icon="el-icon-s-check" placeholder="用户名"
                        v-model="loginForm2.uname" :autofocus="true"/>
            </el-form-item>

            <!--密码-->
            <el-form-item prop="password">
              <el-input class="form-input" prefix-icon="el-icon-s-goods" type="password"
                        placeholder="密码" v-model="loginForm2.pwd"/>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item>
              <div class="form-btn" @click="login">
                <div class="login-span">登 &nbsp;&nbsp;&nbsp;录</div>
              </div>
            </el-form-item>
          </el-form>
        </div>

        <div class="register-go">
          <el-link type="warning" class="register-go-a"
                   @click="showLoginOr = !showLoginOr">
            沒有账号，去注册
          </el-link>
        </div>
      </div>

      <div class="right-div" v-if="!showLoginOr">
        <div style="margin: 20px auto 0">
          <h3>注册账号</h3>
        </div>

        <!-- 登录表单 -->
        <div class="register-form">
          <el-form ref="loginFormRef" label-position="right"
                   :model="registerForm" :rules="loginFormRules2">
            <!--用户名-->
            <el-form-item prop="uname" label="用户名" label-width="80px">
              <el-input placeholder="用户名" v-model="registerForm.uname"
                        :autofocus="true"/>
            </el-form-item>

            <!--密码-->
            <el-form-item prop="pwd" label="密码" label-width="80px">
              <el-input type="password" placeholder="密码"
                        v-model="registerForm.pwd"/>
            </el-form-item>

            <!--手机号-->
            <el-form-item prop="phone" label="手机号" label-width="80px">
              <el-input placeholder="手机号" v-model="registerForm.phone"/>
            </el-form-item>

            <el-form-item label="性别" label-width="80px">
              <el-radio-group v-model="registerForm.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item>
              <div class="form-btn2" @click="registerGo">
                <span class="login-span">注 &nbsp;&nbsp;&nbsp;册</span>
              </div>
            </el-form-item>
          </el-form>

        </div>
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
          username:
            [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
            ],
          password:
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
       if (this.$route.params.id == 2)
         this.showLoginOr = false

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
            this.$message({ message: `欢迎 ${res.data.data.uname} 登录景区网站`, type: 'success', duration: 2000 })
            res.data.data.pwd = ''
            res.data.data.salt = ''
            window.localStorage.setItem('UserInfo', JSON.stringify(res.data.data))
            this.$router.push({ path: '/scenery/home' })
          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })

          }

        })

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
    background-image: url("../../assets/userLogin.jpg");
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .login-div {
    width: 700px;
    height: 400px;
    background-color: white;
    margin: auto;
    border-radius: 12px;
    display: flex;
  }

  .left-image {
    width: 300px;
    height: 100%;

  }

  .right-div {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;

  }

  .login-form {
    margin: 0 auto;
  }

  .form-input {
    width: 330px;
    margin-top: 10px;
    /*background-color: #ffb01e;*/
    /*cursor: pointer;*/
    display: flex;
    border-radius: 3px;
  }

  .form-btn {
    margin-top: 30px;
    width: 330px;
    background-color: #ffb01e;
    cursor: pointer;
    display: flex;
    border-radius: 3px;
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
    margin-top: 18px;

  }

  .register-go-a {
    float: left;
    margin-left: 32px;
    font-size: 14px;
    font-weight: 600;
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
</style>
