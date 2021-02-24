<template>
  <div class="login-container">

    <div class="container-nav"> <a style="cursor: pointer" @click="goHome()" class="navbar-brand">欣欣鲜花交易平台</a>
    </div>


    <div class="login-item">

      <div class="title-sapn">
        <h2>欣欣鲜花交易后台管理</h2>
      </div>

      <div class="login-form">
        <!-- 登录表单 -->
        <el-form ref="loginFormRef" label-width="0" class="login_form" :model="loginForm" :rules="loginFormRules">
          <!--用户名-->
          <el-form-item prop="username">

            <el-input class="form-input" prefix-icon="el-icon-s-check
" placeholder="用户名" v-model="loginForm.username"
                      :autofocus="true"/>
          </el-form-item>

          <!--密码-->
          <el-form-item prop="password">
            <el-input class="form-input" prefix-icon="el-icon-s-goods" type="password" placeholder="密码"
                      v-model="loginForm.password"/>
          </el-form-item>

          <!-- 登录按钮 -->
          <el-form-item class="form-btn" style="margin-top: 20px">
            <el-button style="height: 36px" class="form-input" type="primary" @click="login">
              <span class="login-span">登 &nbsp;录</span>
            </el-button>
          </el-form-item>


        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
  import { adminLogin } from '../../api/common'

  export default {
    name: 'index',
    data() {
      return {
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
        }

      }
    },
    methods: {
      login() {
        if (this.loginForm.username.trim() == '') {
          this.$message({ message: '用户名不能为空', type: 'error', duration: 1700 })
          return
        }

        if (this.loginForm.password.trim() == '') {
          this.$message({ message: '密码不能为空', type: 'error', duration: 1700 })
          return
        }
        adminLogin(this.loginForm).then(res => {
          if (res.success) {
            window.localStorage.setItem('AdminInfoFlower', JSON.stringify(res.data.data))
            this.$router.push({ path: '/' })
          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })

          }

        })

      },

      //重置
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields()
      },
      // 去首页
      goHome() {
        this.$router.push({ path: `/phone/home` })
      },

    }
  }
</script>

<style scoped>
  .login-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    /*background-image: linear-gradient(to right, rgb(60, 59, 63), rgb(96, 92, 60));*/
    display: flex;
    flex-direction: column;
  }

  .login-item {
    margin: 50px auto;
    background-color: white;
    border: solid 2px #d6d6d6;
    width: 300px;
    height: 290px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

  }

  .title-sapn {
    margin: 16px auto;
  }

  .login-form {
    margin: 0 auto;
  }

  .form-input {
    width: 230px;
  }

  .login-span {
    font-size: 16px;
/*line-height:36px;*/
    font-weight: 500;
  }

  .container-nav {
    padding-left: 15px;
    padding-right: 15px;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #e6e9f0;
  }
  .container-nav .navbar-brand {
    line-height: 30px;
    color: #7a8599;
  }
  .navbar-brand {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
  }

</style>
