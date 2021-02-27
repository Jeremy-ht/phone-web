<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">

      <!--表格-->
      <el-table :data="allDetailList" stripe style="width: 100%; margin-top: 10px" border size="small">

        <el-table-column label="#" type="index" align="center"/>
        <el-table-column label="手机名称" prop="name" align="center"/>


        <el-table-column label="图片" prop="image" align="center">
          <template slot-scope="scope">
            <img style="width: 70px;height: 80px" :src="scope.row.image" alt="">
          </template>
        </el-table-column>

        <el-table-column label="封面图" prop="image" align="center">
          <template slot-scope="scope">
            <img style="width: 120px;height: 90px" v-if="scope.row.icon != null" :src="scope.row.icon" alt="">
          </template>
        </el-table-column>

        <el-table-column label="品牌分类" prop="categoryname" align="center" width="120px"/>

        <el-table-column label="手机价格" prop="price" align="center" width="120px">
          <template slot-scope="scope">
            <span style="margin-left: 10px;color: #ca141d;">{{ '￥ '+scope.row.price + '.00'}}</span>
          </template>
        </el-table-column>

        <!--        <el-table-column label="上下架状态" align="center" width="200px">-->
        <!--          <template slot-scope="scope">-->
        <!--            <el-switch-->
        <!--              @change="changeState(scope.row.id, scope.row.state)"-->
        <!--              v-model="scope.row.state == 1"-->
        <!--              inactive-text="已下架"-->
        <!--              inactive-color="#f3f3f3"-->
        <!--              active-color="#5a98de"-->
        <!--              active-text="上架">-->
        <!--            </el-switch>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <!--        <el-table-column label="操作" align="center" width="100px">-->
        <!--          <template slot-scope="scope">-->
        <!--            <div style="color: red;cursor: pointer" @click="addIndexShow(scope.row.id)">-->
        <!--              添加首页-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <el-table-column label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <!--禁用-->
            <el-button v-if="scope.row.isshow == null || scope.row.isshow == ''" class="admin-add-btn" type="primary"
                       size="mini"
                       @click="addIndexShow2(scope.row.id)">添加首页
            </el-button>
            <!-- 解禁 -->
            <el-button v-else type="info" size="mini">已添加
            </el-button>
          </template>
        </el-table-column>


      </el-table>

      <!--分页-->
      <page-bar :pageTotal="pageTotal" :pageNum="pagenum" :pageSize="pagesize"
                @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"/>


    </el-card>


    <!--添加图片-->
    <el-dialog title="添加封面图" :visible.sync="addDialogVisible" width="30%" @close="closeAddAdminForm()">
      <span>
        <!--表单-->
        <el-form ref="addAdminRef" label-width="80px">


        <el-upload class="avatar-uploader"
                   action="http://127.0.0.1:9000/upload/updataFile"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess" align="center">
          <img v-if="imageShow !== ''" :src="imageShow" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>

        </el-form>
      </span>

      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addIndexShow(pid)" size="mini">上传</el-button>
        <el-button @click="addDialogVisible = false" size="mini">取 消</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  import PageBar from '@/components/PageBar'
  import {addIndexShow, getSceneryList, pullScenery2, delScenery, disableComment} from '../../api/common'

  export default {
    name: 'four',
    data() {
      return {
        activeName: 'first',
        adminInfo: {},

        // 分页查询
        pagenum: 1,
        pagesize: 8,
        pageTotal: 0,

        // 我的列表分页
        pagenumMy: 1,
        pagesizeMy: 8,
        pageMyTotal: 0,

        myDetailList: [],
        allDetailList: [],
        imageShow: '',
        addDialogVisible: false,
        pid: 0,

      }
    },
    components: {
      PageBar

    },
    created() {
      this.getInit()

    },
    methods: {
      // 初始化
      async getInit() {
        let admin = JSON.parse(window.localStorage.getItem('AdminInfoFlower'))
        if (admin == undefined || admin == null || admin == '') {
          this.$router.push('/login')
          this.$message({message: '未登录', type: 'error', duration: 1700})
          return
        } else {
          this.adminInfo = admin
        }

        // let params = {
        //   pagenum: this.pagenum,
        //   pagesize: this.pagesize
        // }
        // await getSceneryList(params, 0).then(res => {
        //   this.myDetailList = []
        //   if (res.success && res.data.data.length != 0) {
        //     this.pageMyTotal = res.data.total
        //     this.myDetailList = res.data.data
        //   } else {
        //     this.$message({
        //       message: '获取列表失败，请刷新再试!',
        //       type: 'error', duration: 1700
        //     })
        //   }
        // })

        // 全部列表
        let paramsAll = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        await getSceneryList(paramsAll, 0).then(res => {
          this.allDetailList = []
          if (res.success && res.data.data.length != 0) {
            this.pageTotal = res.data.total
            this.allDetailList = res.data.data
            console.log(this.allDetailList);
          } else {
            this.$message({
              message: '获取列表失败，请刷新再试!',
              type: 'error', duration: 1700
            })
          }
        })

      },

      // 分页
      handleSizeChangeMy(pagesize) {
        this.pagesizeMy = pagesize
        this.getInit()
      },
      handleCurrentChangeMy(pagenum) {
        this.pagenumMy = pagenum
        this.getInit()
      },

      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getInit()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getInit()
      },

      pullDetail(id) {

        this.$confirm('是否确定发布?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          pullScenery2(id).then(res => {
            if (res.success) {
              this.$message({message: '发布成功', type: 'success', duration: 1700})
              this.getInit()
            } else {
              this.$message({message: '发布失败', type: 'error', duration: 1700})
            }
          })
        })

      },

      updDetail(id) {
      },

      delDetailBtn(id) {
        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delScenery(id).then(res => {
            if (res.success) {
              this.$message({message: '成功', type: 'success', duration: 1700})
              this.getInit()
            } else {
              this.$message({message: '删除失败', type: 'error', duration: 1700})

            }
          })
        })

      },

      changeState(id, state) {
        console.log(state)
        if (state == 1) {
          state = 3
        } else {
          state = 1
        }
        pullScenery2(id, state).then(res => {
          if (res.success) {
            this.getInit()
          } else {
            this.$message({message: '删除失败', type: 'error', duration: 1700})

          }
        })
      },

      addIndexShow2(id) {
        this.pid = id
        this.addDialogVisible = true
      },

      addIndexShow(id) {
        // if (this.imageShow == '') {
        //   this.$message({message: '封面图不能为空', type: 'error', duration: 1700})
        //   return
        // }

        addIndexShow(id, this.imageShow).then(res => {
          if (res.success) {
            this.getInit()
            this.addDialogVisible = false
            this.imageShow = ''
          } else {
            this.$message({message: '添加失败', type: 'error', duration: 1700})

          }
        })

      },


      // 重置添加用户表单
      closeAddAdminForm() {
        this.imageShow = ''
      },

      // 封面上传成功
      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.imageShow = res.data.location
        } else {
          this.$message({message: '上传失败，请重新上传', type: 'error', duration: 1700})
        }

      }


    }
  }
</script>

<style scoped>
  /* ======= */
  /* 上传图片 */
  /* ======= */

  .avatar {
    width: 298px;
    height: 200px;
    margin: 4px auto;
    display: block;
    border-radius: 2.5%;
  }


  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #5a98de;
  }

  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    width: 298px;
    height: 200px;
    line-height: 200px;
    color: #5a98de;
    text-align: center;
    border: 2px #5a98de dashed;
  }

  /deep/ .el-switch.is-checked .el-switch__core {
    border-color: #5a98de;
    background-color: #5a98de;
  }

  /deep/ .el-radio__input.is-checked + .el-radio__label {
    color: #5a98de;
  }

  /deep/ .el-radio__input.is-checked .el-radio__inner {
    border-color: #5a98de;
    background: #5a98de;
  }

</style>
