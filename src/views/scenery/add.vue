<template>
  <div class="app-container">

    <!--    <div style="margin:0 auto 20px auto;width: 85%;height: 30px;-->
    <!--    background-color: #5a98de;border-radius: 10px;display: flex">-->

    <!--      <div  style="color: white;margin: auto">请仔细填写鲜花信息，必填项不能为空！</div>-->

    <!--    </div>-->


    <el-form :model="addDetail" ref="ruleForm" label-width="140px" class="detail-form">


      <el-form-item label="产品标题" prop="name">
        <el-input v-model="addDetail.name" show-word-limit class="textarea base-width-50"/>
      </el-form-item>

      <el-form-item label="产品分类" prop="categoryid">
        <el-select v-model="addDetail.categoryid" placeholder="产品分类" class="base-width-30" clearable>
          <el-option v-for="item in cateList" :label="item.categoryname" :value="item.id"
                     :key="item.id"/>
        </el-select>
      </el-form-item>

      <el-form-item label="手机价格" prop="price">
        <el-input v-model="addDetail.price" show-word-limit class="base-width-30"/>
        元
      </el-form-item>

    </el-form>

    <div
      style="color:white;border-radius:6px;width: 100%;height: 26px;background-color: #5a98de;
      line-height: 26px;margin-bottom: 20px;text-align: center;font-size: 14px">
      基本参数填写
    </div>


    <el-form :model="addDetail" ref="ruleForm" label-width="140px" class="detail-form">


      <el-form-item label="手机名称" prop="description">
        <el-input v-model="addDetail.title" show-word-limit class="base-width-30"/>
      </el-form-item>

      <el-form-item label="手机重量" prop="price">
        <el-input v-model="addDetail.weight" show-word-limit class="base-width-30"/>
        kg
      </el-form-item>

      <el-form-item label="上市年份">
        <el-select v-model="addDetail.year" placeholder="上市年份" class="base-width-30" clearable>
          <el-option v-for="(item,index) in nativeplaceList" :label="item" :value="item"
                     :key="index"/>
        </el-select>
      </el-form-item>

      <el-form-item label="是否支持无线充电">
        <el-switch v-model="addDetail.wuxian"/>
      </el-form-item>

      <el-form-item label="是否支持NFC">
        <el-switch v-model="addDetail.nfc"/>
      </el-form-item>

      <el-form-item label="屏幕尺寸" prop="description">
        <el-input v-model="addDetail.chicun" show-word-limit class="base-width-30"/>
        英寸
      </el-form-item>

      <el-form-item label="电池容量" prop="description">
        <el-input v-model="addDetail.pool" show-word-limit class="base-width-30"/>
        mAh
      </el-form-item>

      <el-form-item label="手机颜色">
        <el-radio-group v-model="addDetail.color">
          <el-radio label="黑色">黑色</el-radio>
          <el-radio label="白色">白色</el-radio>
          <el-radio label="粉色">粉色</el-radio>
          <el-radio label="天空蓝">天空蓝</el-radio>
          <el-radio label="蓝色">蓝色</el-radio>
          <el-radio label="玫瑰粉">玫瑰粉</el-radio>
          <el-radio label="冰雪极光">冰雪极光</el-radio>
          <el-radio label="红色">红色</el-radio>

        </el-radio-group>
      </el-form-item>

      <el-form-item label="内存容量">
        <el-radio-group v-model="addDetail.version">
          <el-radio label="6GB + 128GB">6GB + 128GB</el-radio>
          <el-radio label="6GB + 256GB">6GB + 256GB</el-radio>
          <el-radio label="8GB + 128GB">8GB + 128GB</el-radio>
          <el-radio label="8GB + 256GB">8GB + 256GB</el-radio>
          <el-radio label="12GB + 128GB">12GB + 128GB</el-radio>
          <el-radio label="12GB + 256GB">12GB + 256GB</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>


    <div
      style="color:white;border-radius:6px;width: 100%;height: 26px;background-color: #5a98de;
      line-height: 26px;margin-bottom: 20px;text-align: center;font-size: 14px">
      添加图片详情
    </div>


    <el-form :model="addDetail" ref="ruleForm" label-width="140px" class="detail-form">

      <el-form-item label="缩略图">
        <el-upload class="avatar-uploader"
                   action="http://127.0.0.1:9000/upload/updataFile"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess">
          <img v-if="addDetail.image !== ''" :src="addDetail.image" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>


      <el-form-item label="产品详情" prop="content">
        <editor api-key="u6hiizd3o4r3p4mhnvag8b7fc9hhs8yivqdddzqbd60tyoh5" :init="tinymceConfig"
                v-model="addDetail.content" style="z-index: 0"/>
      </el-form-item>


      <el-form-item style="text-align: left;margin-top: 80px">
        <el-button type="success" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import {getCategoryList, uploadFile, addScenery} from '../../api/common'
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
    color: '黑色',
    version: '6GB + 128GB',
    title: '',
    year: '',
    wuxian: true,
    weight: '',
    chicun: '',
    nfc: true,
    pool: '',
  }

  export default {
    name: 'add',
    data() {
      return {
        addDetail: addDetailInfo,
        cateList: [],    // 分类列表

        nativeplaceList: [
          '2021',
          '2020',
          '2019',
          '2018',
          '2017'],

        adminInfo: {},

        // 表单验证
        rules: {
          name: [
            {required: true, message: '请鲜花名称', trigger: 'blur'},
            {min: 1, max: 50, message: '长度在 1 到 150 个字符', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '请填写鲜花详情', trigger: 'blur'},
            {min: 1, max: 30000, message: '长度在 1 到 3000 个字符', trigger: 'blur'}
          ],
          description: [
            {required: true, message: '请输入鲜花花语', trigger: 'blur'},
            {min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur'}
          ],
          origin: [
            {required: true, message: '请选择选择产地', trigger: 'change'}
          ],
          categoryid: [
            {required: true, message: '请选择鲜花分类', trigger: 'change'}
          ]

        },

        // tinymce初始化配置
        tinymceConfig: {
          height: 600,
          width: 800,
          menubar: true,
          branding: false,
          language: 'zh_CN',
          language_url: '/tinymce/langs/zh_CN.js',
          images_upload_handler: function (blobInfo, success, failure) {
            let formData = new FormData()
            formData.append('file', blobInfo.blob(), blobInfo.filename())
            uploadFile(formData).then(res => {
              if (res.success) {
                success(res.data.location)
              } else {
                failure('图片编辑失败')
              }
            }).catch(res => {
              this.$message({message: '图片编辑失败', type: 'error', duration: 1700})
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
          this.$message({message: '请您登录再操作', type: 'error', duration: 1700})
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
          this.$message({message: '产品标题不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addDetail.content == '') {
          this.$message({message: '产品详情不能为空', type: 'error', duration: 1700})
          return false
        }

        if (this.addDetail.categoryid == '') {
          this.$message({message: '产品分类不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addDetail.price == '') {
          this.$message({message: '手机价格不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addDetail.chicun == '') {
          this.$message({message: '手机价格不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addDetail.weight == '') {
          this.$message({message: '屏幕尺寸不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addDetail.title == '') {
          this.$message({message: '手机名称不能为空', type: 'error', duration: 1700})
          return false
        }
        if (this.addDetail.pool == '') {
          this.$message({message: '电池容量不能为空', type: 'error', duration: 1700})
          return false
        }
        // if (this.addDetail.image == '') {
        //   this.$message({message: '添加产品缩略图', type: 'error', duration: 1700})
        //   return false
        // }

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

        if (this.addDetail.year == '') {
          this.addDetail.year = '2021'
        }
        if (this.addDetail.categoryid == '') {
          this.addDetail.categoryid = 1
        }
        if (this.addDetail.wuxian) {
          this.addDetail.wuxian = 1
        } else {
          this.addDetail.wuxian = 0
        }

        if (this.addDetail.nfc) {
          this.addDetail.nfc = 1
        } else {
          this.addDetail.nfc = 0
        }


        addScenery(this.addDetail).then(res => {
          if (res.success) {
            this.$message({message: '成功添加手机', type: 'success', duration: 1700})
            this.resetForm()
          } else {
            this.$message({message: '添加失败', type: 'error', duration: 1700})
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
          description: '',
          isShow: 0
        }
      },

      // 封面上传成功
      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.addDetail.cover = res.data.location
        } else {
          this.$message({message: '封面上传失败，请重新上传', type: 'error', duration: 1700})
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
    width: 160px;
    height: 160px;
    line-height: 160px;
    text-align: center;
    border: 1.4px #d9d9d9 dashed;
  }


  .avatar {
    width: 160px;
    height: 160px;
    margin: 4px auto;
    display: block;
    border-radius: 2.5%;
  }

  /* ======= */
  /* 上传图片 */
  /* ======= */
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #5a98de;
  }

  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    /*width: 220px;*/
    height: 160px;
    line-height: 160px;
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

  .base-width-50 {
    width: 50%
  }

  .base-width-30 {
    width: 30%
  }

  /deep/ .el-button--success {
    color: #FFF;
    background-color: #5a98de;
    border-color: #5a98de;
  }

  /deep/ .el-button--success:focus, .el-button--success:hover {
    background: #5a98de;
    border-color: #5a98de;
    color: #FFF;
  }
</style>
