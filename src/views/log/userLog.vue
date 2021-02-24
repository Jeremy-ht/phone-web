<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">

      <!--表格-->
      <el-table :data="logList" stripe style="width: 100%; margin-top: 10px" border size="small">
        <el-table-column label="#" type="index" align="center"/>
        <el-table-column label="登录用户名" prop="uname" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.uname == '' || scope.row.uname == undefined || scope.row.uname == null">
              未登录
            </span>
            <span v-else>{{ scope.row.uname }}</span>
          </template>
        </el-table-column>
        <el-table-column label="访问路径" prop="method" align="center"/>
        <el-table-column label="IP" prop="userip" align="center"/>

        <el-table-column label="操作系统" prop="operatingsystem" align="center">
          <template slot-scope="scope">
            <svg v-if="scope.row.operatingsystem == 'Windows'" class="icon iconfont" aria-hidden="true">
              <use xlink:href="#icon-Windows"/>
            </svg>
            <svg v-else class="icon iconfont" aria-hidden="true">
              <use xlink:href="#icon-mac"/>
            </svg>
            <span style="margin-left: 10px">{{ scope.row.operatingsystem }}</span>
          </template>
        </el-table-column>
        <el-table-column label="浏览器" prop="browser" align="center">
          <template slot-scope="scope">
            <svg v-if="scope.row.browser == 'Chrome'" class="icon iconfont" aria-hidden="true">
              <use xlink:href="#icon-liulanqi3"/>
            </svg>
            <svg v-else class="icon iconfont" aria-hidden="true">
              <use xlink:href="#icon-liulanqi-IE"/>
            </svg>
            <span style="margin-left: 10px">{{ scope.row.browser }}</span>
          </template>
        </el-table-column>

        <el-table-column label="访问时间" align="center" width="170px">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.logintime }}</span>
          </template>
        </el-table-column>
      </el-table>

      <!--分页-->
      <page-bar :pageTotal="pageTotal" :pageNum="pagenum" :pageSize="pagesize"
                @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"/>

    </el-card>
  </div>
</template>

<script>
  import { getUserLogList } from '../../api/common'
  import PageBar from '@/components/PageBar'
  import '../../assets/iconfont/iconfont'

  export default {
    name: 'userLog',
    data() {
      return {
        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        logList: []

      }
    },
    components: {
      PageBar

    },
    created() {
      this.getLogList()

    },
    methods: {
      // 初始化
      getLogList() {
        let params = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        getUserLogList(params).then(res => {
          if (res.success) {
            this.pageTotal = res.data.total
            this.logList = res.data.data

          } else {
            this.$message({ message: '获取用户日志列表失败', type: 'error', duration: 1700 })
          }

        })

      },

      // 分页
      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getLogList()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getLogList()
      }

    }
  }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
