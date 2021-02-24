<template>
  <div class="app-container">

    <div style="margin:0 auto 20px auto;width: 85%;height: 30px;
    background-color: #ffac89;border-radius: 10px;display: flex">

      <div  style="color: white;margin: auto">请仔细填写鲜花信息，必填项不能为空！</div>

    </div>


    <el-form :model="addDetail" :rules="rules" ref="ruleForm" label-width="100px" class="detail-form">

      <el-form-item label="图片">
        <el-upload class="avatar-uploader"
                   action="http://127.0.0.1:9000/upload/updataFile"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess">
          <img v-if="addDetail.image !== ''" :src="addDetail.image" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
        <!--        <span style="padding-top: -30px"><span style="color:red">*</span>点击更换封面图片</span>-->
      </el-form-item>


      <el-form-item label="鲜花名称" prop="name">
        <el-input v-model="addDetail.name" show-word-limit class="textarea"/>
      </el-form-item>

      <el-form-item label="鲜花花语" prop="description">
        <el-input v-model="addDetail.description" type="textarea"
                  maxlength="200" show-word-limit/>
      </el-form-item>

      <el-form-item label="鲜花分类" prop="categoryid">
        <el-select v-model="addDetail.categoryid" placeholder="选择鲜花分类" style="width: 50%" clearable>
          <el-option v-for="item in cateList" :label="item.categoryname" :value="item.id"
                     :key="item.id"/>
        </el-select>
      </el-form-item>

      <el-form-item label="鲜花产地" prop="origin">
        <el-select v-model="addDetail.origin" placeholder="鲜花产地" style="width: 50%" clearable>
          <el-option v-for="(item,index) in nativeplaceList" :label="item" :value="item"
                     :key="index"/>
        </el-select>
      </el-form-item>


      <el-form-item label="鲜花价格" prop="price">
        <el-input-number v-model="addDetail.price" size="small"
                         @change="handleChange" :min="1"/>
      </el-form-item>


      <el-form-item label="礼盒类">
        <el-switch v-model="addDetail.isshow"/>
      </el-form-item>

      <el-form-item label="鲜花详情" prop="content">
        <editor api-key="u6hiizd3o4r3p4mhnvag8b7fc9hhs8yivqdddzqbd60tyoh5" :init="tinymceConfig"
                v-model="addDetail.content" style="z-index: 0"/>
      </el-form-item>


      <el-form-item style="text-align: center;margin-top: 80px">
        <el-button style="width: 400px" type="success" icon="el-icon-check" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import { getCategoryList, uploadFile, addScenery } from '../../api/common'
  import '../../assets/iconfont/iconfont'
  import Editor from '@tinymce/tinymce-vue'

  let addDetailInfo = {
    name: '',
    content: '',
    origin: '',
    image: '',
    kucun: 10,
    price: 0,
    categoryid: '',
    description: '', // 鲜花花语
    isshow: 0
  }

  export default {
    name: 'add',
    data() {
      return {
        addDetail: addDetailInfo,
        cateList: [],    // 分类列表

        nativeplaceList: [
          '河北省',
          '山西省',
          '辽宁省',
          '吉林省',
          '黑龙省',
          '江苏省',
          '浙江省',
          '安徽省',
          '福建省',
          '江西省',
          '山东省',
          '河南省',
          '湖北省',
          '湖南省',
          '广东省',
          '海南省',
          '四川省',
          '贵州省',
          '云南省',
          '陕西省',
          '甘肃省',
          '青海省',
          '台湾省',
          '北京市',
          '上海市',
          '重庆市',
          '天津市',
          '广西壮族自治区',
          '宁夏回族自治区',
          '西藏自治区',
          '新疆维吾尔自治区',
          '内蒙古自治区',
          '香港',
          '澳门'],

        adminInfo: {},

        // 表单验证
        rules: {
          name: [
            { required: true, message: '请鲜花名称', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 150 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请填写鲜花详情', trigger: 'blur' },
            { min: 1, max: 30000, message: '长度在 1 到 3000 个字符', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入鲜花花语', trigger: 'blur' },
            { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
          ],
          origin: [
            { required: true, message: '请选择选择产地', trigger: 'change' }
          ],
          categoryid: [
            { required: true, message: '请选择鲜花分类', trigger: 'change' }
          ]

        },

        // tinymce初始化配置
        tinymceConfig: {
          height: 600,
          width: 900,
          menubar: true,
          branding: false,
          language: 'zh_CN',
          language_url: '/tinymce/langs/zh_CN.js',
          images_upload_handler: function(blobInfo, success, failure) {
            let formData = new FormData()
            formData.append('file', blobInfo.blob(), blobInfo.filename())
            uploadFile(formData).then(res => {
              if (res.success) {
                success(res.data.location)
              } else {
                failure('图片编辑失败')
              }
            }).catch(res => {
              this.$message({ message: '图片编辑失败', type: 'error', duration: 1700 })
            })

          },
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'code wordcount'
          ],
          toolbar:
            ' image  | \
            alignleft aligncenter alignright alignjustify'

        }
      }
    },
    components: {
      Editor
    },
    created() {
      this.init()

    },
    methods: {
      async init() {

        this.loginIs()

        // 获取分类
        let params = {
          pagenum: 1,
          pagesize: 100
        }
        getCategoryList(params).then(res => {
          if (res.success) {
            this.cateList = res.data.data

          }
        })

      },

      // 是否登录 Admin
      loginIs() {

        let admin = JSON.parse(window.localStorage.getItem('AdminInfoFlower'))
        if (admin == undefined || admin == null || admin == '') {
          this.$router.push('/login')
          this.$message({ message: '请您登录再操作', type: 'error', duration: 1700 })
          return false
        } else {
          this.adminInfo = admin
          return true
        }

      },

      // 计数器
      handleChange(value) {

      },

      // 校验
      checkForm() {
        if (this.addDetail.name == '') {
          this.$message({ message: '鲜花名称不能为空', type: 'error', duration: 1700 })
          return false
        }

        if (this.addDetail.content == '') {
          this.$message({ message: '鲜花详情不能为空', type: 'error', duration: 1700 })
          return false
        }

        if (this.addDetail.description == '') {
          this.$message({ message: '鲜花花语不能为空', type: 'error', duration: 1700 })
          return false
        }

        if (this.addDetail.origin == '') {
          this.$message({ message: '鲜花产地不能为空', type: 'error', duration: 1700 })
          return false
        }
        if (this.addDetail.categoryid == '') {
          this.$message({ message: '鲜花分类不能为空', type: 'error', duration: 1700 })
          return false
        }

        if (this.addDetail.categoryid == '') {
          this.addDetail.categoryid = 1
        }
        return true
      },

      // 添加
      submitForm() {
        if (!this.checkForm()) {
          return
        }

        addScenery(this.addDetail).then(res => {
          if (res.success) {
            this.$message({ message: '成功添加', type: 'success', duration: 1700 })
            this.resetForm()
          } else {
            this.$message({ message: '添加失败', type: 'error', duration: 1700 })
          }
        })
      },

      // 重置表单
      resetForm() {
        this.$refs.ruleForm.resetFields()
        this.addDetail = {
          name: '',
          content: '',
          origin: '',
          image: '',
          kucun: 10,
          price: 0,
          categoryid: '',
          description: '', // 鲜花花语
          isShow: 0
        }
      },

      // 封面上传成功
      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.addDetail.cover = res.data.location
        } else {
          this.$message({ message: '封面上传失败，请重新上传', type: 'error', duration: 1700 })
        }

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

  .detail-form {
    margin: 10px 10%;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 273px;
    height: 153px;
    line-height: 153px;
    text-align: center;
    border: 1.4px #d9d9d9 dashed;
  }

  .avatar {
    width: 240px;
    height: 153px;
    display: block;
    border-radius: 2.5%;
  }

  .avatar {
    width: 220px;
    height: 240px;
    margin: 4px auto;
    display: block;
    border-radius: 2.5%;
  }

  /* ======= */
  /* 上传图片 */
  /* ======= */
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #ffac89;
  }

  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    /*width: 220px;*/
    height: 240px;
    line-height: 270px;
    color: #ffac89;
    text-align: center;
    border: 2px #d9d9d9 dashed;
  }

  /deep/ .el-switch.is-checked .el-switch__core {
    border-color: #ffac89;
    background-color: #ffac89;
  }
</style>
