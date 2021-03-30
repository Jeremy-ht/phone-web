<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">

      <!--表格-->
      <el-table :data="orderList" stripe style="width: 100%; margin-top: 10px" border size="small">
        <el-table-column label="#" type="index" align="center"/>
        <el-table-column label="下单人" prop="uname" align="center"/>
<!--        <el-table-column label="头像" prop="image" align="center">-->
<!--          <template slot-scope="scope">-->
<!--            <img :src="scope.row.image" :alt="scope.row.uname" style="width: 30px;height: 30px">-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column label="下单人联系方式" prop="uphone" align="center"/>
        <el-table-column label="收件人" prop="name" align="center"/>
        <el-table-column label="联系方式" prop="phone" align="center"/>
        <el-table-column label="地址" prop="address" align="center"/>
        <el-table-column label="总价格" align="center">
          <template slot-scope="scope">

            <span style="margin-left: 2px;color: red">{{'￥ ' + scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量" prop="amount" align="center" width="60px"/>
        <el-table-column label="下单时间" width="170px" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.creatime }}</span>
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
  import {getOrderList, getCommentList, disableComment, addComment} from '../../api/common'
  import PageBar from '@/components/PageBar'

  export default {
    name: 'orders',
    data() {
      return {
        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        orderList: [],
        categoryList: []

      }
    },
    components: {
      PageBar

    },
    created() {
      this.getCommonList()

    },
    methods: {
      // 初始化
      getCommonList() {

        let params = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        getOrderList(0, params).then(res => {
          if (res.success) {
            this.pageTotal = res.data.total
            this.orderList = res.data.data
          }
        })

      },

      // 分页
      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getCommonList()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getCommonList()
      },

      // 显示
      ableCommonBtn(id) {
        this.$confirm('是否确定显示评论内容?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          disableComment(id, 1).then(res => {
            if (res.success) {
              this.getCommonList()
              this.$message({message: '评论已显示', type: 'success', duration: 1700})
            } else {
              this.$message({message: res.message, type: 'error', duration: 1700})
            }
          })
        })

      },

      // 隐藏
      disableCommonBtn(id) {
        this.$confirm('是否确定隐藏评论内容?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          disableComment(id, 2).then(res => {
            if (res.success) {
              this.getCommonList()
              this.$message({message: '评论已隐藏', type: 'success', duration: 1700})
            } else {
              this.$message({message: res.message, type: 'error', duration: 1700})
            }
          })
        })

      }

    }
  }
</script>

<style scoped>

</style>
