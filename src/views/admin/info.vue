<template>
  <div class="info-container">
    <el-card>
      <h2> 个人中心 </h2>

      <div class="info-div">
        <div class="basic-info info">
          <h4>基本信息</h4>
          <el-divider content-position="left">姓名</el-divider>
          <span>{{adminInfo.name}}</span>
          <el-divider content-position="left">用户名</el-divider>
          <span>{{adminInfo.username}}</span>
          <el-divider content-position="left">工号</el-divider>
          <span>{{adminInfo.infoId}}</span>
          <el-divider content-position="left">手机号</el-divider>
          <span>{{adminInfo.phone}}</span>
          <el-divider content-position="left">邮箱</el-divider>
          <span>{{adminInfo.email}}</span>
        </div>

        <div class="upd-pwd info">
          <h4>修改密码</h4>
          <el-divider content-position="left">原密码</el-divider>
          <el-input class="pwd-info" placeholder="请原输入密码" v-model="pwd.password" show-password/>
          <el-divider content-position="left">新密码</el-divider>
          <div class="pwd-info">

            <el-input placeholder="请新输入密码" v-model="pwd.newPassword" show-password/>
          </div>

          <el-button class="pwd-info2" type="primary" @click="submitPwd(adminInfo.id)">提交</el-button>
        </div>


      </div>


    </el-card>
  </div>
</template>

<script>
  import { updPasswordById } from '../../api/common'

  export default {
    name: 'info',
    data() {
      return {
        adminInfo: {},
        pwd: {
          password: '',
          newPassword: ''
        }
      }
    },
    created() {
      this.getInit()

    },
    methods: {
      // 初始化
      getInit: function() {
        let admin = JSON.parse(window.localStorage.getItem('AdminInfoFlower'))
        if (admin == undefined || admin == null || admin == '') {
          this.$router.push('/login')
          this.$message({ message: '请先登录再操作系统', type: 'error', duration: 1700 })
          return
        }
        admin.infoId = String(admin.id).length > 4 ? admin.id
          : String((Array(4).join(0) + admin.id).slice(-4))
        console.log(this.adminInfo.infoId)
        this.adminInfo = admin
      },

      submitPwd(id) {
        updPasswordById(id, this.pwd).then(res => {
          if (res.success) {
            this.$message({ message: '修改密码成功', type: 'success', duration: 1700 })
            this.pwd = {
              password: '',
              newPassword: ''
            }

          } else {
            this.$message({ message: res.message, type: 'error', duration: 1700 })
          }
        })

      }

    }

  }
</script>

<style scoped>
  .box-card {
    margin: 10px 10px;
  }

  .info-div {
    display: flex;
    /*justify-content: space-between;*/

  }

  .basic-info {
    width: 45%;
  }

  .upd-pwd {
    width: 45%;
    margin-left: 8%;
  }

  .info-div {
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .basic-info span {
    margin-left: 70px;
    font-size: 14px;
  }

  .pwd-info {
    margin-top: 10px;
    width: 90%;
  }

  .pwd-info2 {
    margin-top: 50px;
    /*margin-left: 90%;*/
    width: 90%;
  }


</style>
