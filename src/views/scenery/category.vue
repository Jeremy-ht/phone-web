<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">

      <el-row>
        <el-col>
          <!-- 新增按钮 -->
          <el-button class="admin-add-btn" type="primary" size="mini" @click="addCateBtn">新增品牌</el-button>
        </el-col>
      </el-row>


      <!-- 表格 -->
      <el-table :data="cateList" stripe style="width: 100%; margin-top: 10px" border size="small">
        <el-table-column label="#" type="index" align="center"/>
        <el-table-column label="品牌名称" prop="categoryname" align="center"/>
        <el-table-column label="品牌名称创建时间" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.creatime }}</span>
          </template>
        </el-table-column>

        <el-table-column label="是否在首页显示" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="changeState(scope.row.id, scope.row.creator)"
              v-model="scope.row.creator == 1"
              inactive-text="不显示"
              inactive-color="#f3f3f3"
              active-color="#5a98de"
              active-text="显示">
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <!--修改-->
            <el-button type="primary" size="mini" @click="updCateBtn(scope.row.id)">
              修改
            </el-button>
            <!-- 删除 -->
            <el-button class="del" type="danger" size="mini" @click="delCateBtn(scope.row.id)">
              删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>


      <!--分页-->
      <page-bar :pageTotal="pageTotal" :pageNum="pagenum" :pageSize="pagesize"
                @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"/>

    </el-card>


    <!--添加分类的对话框-->
    <el-dialog title="添加鲜花分类" :visible.sync="addDialogVisible" width="40%" @close="closeAddAdminForm()">
      <span>
        <!--表单-->
        <el-form :model="addCateInfo" :rules="addCateRules" ref="addCateRef" label-width="180px">
          <el-form-item label="分类名称" prop="categoryname">
            <el-input v-model="addCateInfo.categoryname" style="width: 200px"/>
          </el-form-item>
        </el-form>
      </span>

      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addCate">确 定</el-button>
        <el-button @click="addDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!--修改分类的对话框-->
    <el-dialog title="修改鲜花分类" :visible.sync="updDialogVisible" width="40%" @close="closeupdAdminForm()">
      <span>
        <!--表单-->
        <el-form :model="updCateInfo" :rules="addCateRules" ref="updCateRef" label-width="180px">
          <el-form-item label="分类名称" prop="categoryname">
            <el-input v-model="updCateInfo.categoryname" style="width: 200px"/>
          </el-form-item>
        </el-form>
      </span>

      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updCate">确 定</el-button>
        <el-button @click="updDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  import PageBar from '@/components/PageBar'
  import {getCategoryList, delCategory, addCategory, updCategory, getCategoryById, pullScenery} from '../../api/common'

  export default {
    data() {
      return {
        // 分页查询
        pagenum: 1,
        pagesize: 10,
        pageTotal: 0,
        cateList: [],
        addDialogVisible: false,
        updDialogVisible: false,
        addCateInfo: {
          categoryname: '',
          creator: 1
        },

        updCateInfo: {},

        // 添加分类表单验证
        addCateRules: {
          categoryname: [
            {required: true, message: '请输入分类名', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ]

        }
      }
    },
    components: {
      PageBar

    },
    created() {
      this.getCateList()

    },
    methods: {
      // 初始化
      getCateList() {
        let params = {
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
        getCategoryList(params).then(res => {
          if (res.success) {
            this.pageTotal = res.data.total
            this.cateList = res.data.data
            // console.log(this.cateList)
          }
        })
      },

      // 分页
      handleSizeChange(pagesize) {
        this.pagesize = pagesize
        this.getCateList()
      },
      handleCurrentChange(pagenum) {
        this.pagenum = pagenum
        this.getCateList()
      },

      // 新增
      addCateBtn() {
        this.addDialogVisible = true
      },
      addCate() {
        if (this.addCateInfo.categoryname == '') {
          this.$message({message: '分类名称不能为空!', type: 'error', duration: 1700})
          return
        }

        addCategory(this.addCateInfo).then(res => {
          if (res.success) {
            this.getCateList()
            this.addDialogVisible = false
            this.$message({message: res.message, type: 'success', duration: 1700})
          } else {
            this.$message({message: res.message, type: 'error', duration: 1700})
          }
        })

      },

      // 修改
      updCateBtn(id) {
        getCategoryById(id).then(res => {
          if (res.success) {
            this.updCateInfo = res.data.data
            this.updDialogVisible = true
          } else {
            this.$message({message: res.message, type: 'error', duration: 1700})
          }
        })

      },
      updCate() {
        if (this.updCateInfo.categoryname == '') {
          this.$message({message: '分类名称不能为空!', type: 'error', duration: 1700})
          return
        }

        updCategory(this.updCateInfo).then(res => {
          if (res.success) {
            this.getCateList()
            this.updDialogVisible = false
            this.$message({message: res.message, type: 'success', duration: 1700})
          } else {
            this.$message({message: res.message, type: 'error', duration: 1700})
          }
        })
      },

      // 禁用
      delCateBtn(id) {
        this.$confirm('是否确定删除该分类?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delCategory(id).then(res => {
            if (res.success) {
              this.getCateList()
              this.$message({message: res.message, type: 'success', duration: 1700})
            } else {
              this.$message({message: res.message, type: 'error', duration: 1700})
            }
          })
        })

      },

      // 重置添加用户表单
      closeAddAdminForm() {
        this.$refs.addCateRef.resetFields()
      },

      closeupdAdminForm() {
        this.$refs.updCateRef.resetFields()
      },

      changeState(id, state) {
        console.log(state)
        if (state == 1) {
          state = 0
        } else {
          state = 1
        }
        pullScenery(id, state).then(res => {
          if (res.success) {
            this.getCateList()
          } else {
            this.$message({message: '失败', type: 'error', duration: 1700})

          }
        })
      },

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

  /deep/ .el-switch__label.is-active {
    color: #5a98de;
  }

  .del {
    background-color: #c62b26;
  }

</style>

