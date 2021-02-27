<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">

      <!--表格-->
      <el-table height="375" :data="userList" stripe style="width: 100%; margin-top: 10px" border>
        <el-table-column label="#" type="index" align="center"/>
        <el-table-column label="用户名" prop="uname" align="center"/>
<!--        <el-table-column label="性别" prop="sex" align="center" >-->
<!--          <template slot-scope="scope">-->
<!--            <span v-if="scope.row.sex == 1">男</span>-->
<!--            <span v-else>女</span>-->
<!--          </template>-->
<!--        </el-table-column>-->

        <el-table-column label="用户头像" prop="image" align="center">
          <template slot-scope="scope">
            <img style="width: 50px;height: 50px" :src="scope.row.image" alt="">
          </template>
        </el-table-column>

        <el-table-column label="联系方式" prop="phone" align="center" />
<!--        <el-table-column label="邮箱" prop="email" align="center"/>-->

        <el-table-column label="注册时间" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.creatime }}</span>
          </template>
        </el-table-column>
        <!--        <el-table-column label="登录方式" prop="sex" align="center" width="110px">-->
        <!--          <template slot-scope="scope">-->
        <!--            <span v-if="scope.row.loginway == 0">用户名登录</span>-->
        <!--            <span v-else>手机号登录</span>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
        <!--        <el-table-column label="用户状态" prop="sex" align="center" width="100px">-->
        <!--          <template slot-scope="scope">-->
        <!--            <span v-if="scope.row.state == 1"><el-tag type="success">正常</el-tag></span>-->
        <!--            <span v-else-if="scope.row.state == 2"><el-tag type="danger">已禁用</el-tag></span>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
<!--        <el-table-column label="操作" align="center" width="100px">-->
<!--          <template slot-scope="scope">-->
<!--            &lt;!&ndash;禁用&ndash;&gt;-->
<!--            <el-button v-if="scope.row.state == 1" class="admin-add-btn" type="primary" size="mini"-->
<!--                       @click="delUserBtn(scope.row.id)">禁用-->
<!--            </el-button>-->
<!--            &lt;!&ndash; 解禁 &ndash;&gt;-->
<!--            <el-button v-else-if="scope.row.state == 2" type="info" size="mini" @click="ableUserBtn(scope.row.id)">解禁-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->

      </el-table>


      <!--分页-->
      <page-bar :pageTotal="pageTotal" :pageNum="pagenum" :pageSize="pagesize"
                @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"/>


    </el-card>
  </div>
</template>

<script>
  import PageBar from '@/components/PageBar'
  import { getUserList, disableUserById, ableUserById } from '../../api/common'

  export default {

    data() {
      return {
        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        userList: []
      }
    },
    components: {
      PageBar

    },
    created() {
      this.getUserList()

    },
    methods: {
      // 初始化
      getUserList() {
        let params = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        getUserList(params).then(res => {
          if (res.success) {
            this.pageTotal = res.data.total
            this.userList = res.data.data
            this.userList.forEach(item => {
              if (item.email == '' || item.email == null) {
                item.email = '- - -'
              }
            })

          }
        })
      },

      // 分页
      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getUserList()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getUserList()
      },

      // 禁用
      delUserBtn(id) {
        this.$confirm('是否确定禁用该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          disableUserById(id).then(res => {
            if (res.success) {
              this.getUserList()
              this.$message({ message: res.message, type: 'success', duration: 1700 })
            } else {
              this.$message({ message: res.message, type: 'error', duration: 1700 })
            }
          })
        })

      },

      // 解禁
      ableUserBtn(id) {
        console.log(id)
        this.$confirm('是否确定解禁该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          ableUserById(id).then(res => {
            if (res.success) {
              this.getUserList()
              this.$message({ message: res.message, type: 'success', duration: 1700 })
            } else {
              this.$message({ message: res.message, type: 'error', duration: 1700 })
            }
          })
        })

      }

    }
  }
</script>

<style scoped>

  .admin-add-btn {
    margin-bottom: 10px;
    float: left;
    background-color: #5a98de;
  }

  /* ======= */
  /* 按钮颜色改变 */
  /* ======= */
  /deep/ .el-button--primary:focus, .el-button--primary:hover {
    background: #5a98de;
    border-color: #5a98de;
    color: #FFF;
  }

  /deep/ .el-button--primary {
    color: #FFF;
    background-color: #5a98de;
    border-color: #5a98de;
  }
</style>

