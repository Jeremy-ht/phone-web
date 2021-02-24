<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">

      <!--表格-->
      <el-table :data="commonList" stripe style="width: 100%; margin-top: 10px" border size="small">
        <el-table-column label="#" type="index" align="center"/>
        <el-table-column label="标题" prop="title" align="center"/>
        <el-table-column label="所属分类" prop="categoryname" align="center"/>
        <el-table-column label="评论内容" prop="commentary" align="center"/>
        <el-table-column label="评论者" prop="uname" align="center"/>
        <el-table-column label="评论时间" align="center" width="170px">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.creatime }}</span>
          </template>
        </el-table-column>

        <el-table-column label="评论状态" prop="sex" align="center" width="100px">
          <template slot-scope="scope">
            <span v-if="scope.row.state == 1"><el-tag type="success">已显示</el-tag></span>
            <span v-else-if="scope.row.state == 2"><el-tag type="info">已隐藏</el-tag></span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="120px" align="center">
          <template slot-scope="scope">
            <!--显示-->
            <el-button v-if="scope.row.state == 2" type="success" icon="el-icon-delete" size="mini"
                       @click="ableCommonBtn(scope.row.id)">显示
            </el-button>
            <el-button v-else-if="scope.row.state == 1" type="danger" icon="el-icon-delete" size="mini"
                       @click="disableCommonBtn(scope.row.id)">隐藏
            </el-button>

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
  import { getCommentList, disableComment, addComment } from '../../api/common'
  import PageBar from '@/components/PageBar'

  export default {
    name: 'commentList',
    data() {
      return {
        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        commonList: [],
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
        getCommentList(this.pagenum, this.pagesize, 0).then(res => {
          if (res.success) {
            this.pageTotal = res.data.total
            this.commonList = res.data.data
          } else {
            this.$message({ message: '获取评论列表失败', type: 'error', duration: 1700 })

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
              this.$message({ message: '评论已显示', type: 'success', duration: 1700 })
            } else {
              this.$message({ message: res.message, type: 'error', duration: 1700 })
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
              this.$message({ message: '评论已隐藏', type: 'success', duration: 1700 })
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

</style>
