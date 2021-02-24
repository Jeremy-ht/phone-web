<template>
  <div id="container">
    <el-carousel trigger="click" height="400px" :interval="3000">
      <el-carousel-item v-for="(item,index) in imageList" :key="index">
        <img :src="item" width="100%" height="100%" class="image-item">
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
  export default {
    name: 'rotation',
    data() {
      return {
        imageList: [
          'https://n1-q.mafengwo.net/s7/M00/E7/77/wKgB6lSiJrqAEPe_AAWXm88naao942.png?imageMogr2%2Fthumbnail%2F%21660x350r%2Fgravity%2FCenter%2Fcrop%2F%21660x350%2Fquality%2F90',
          'https://b1-q.mafengwo.net/s8/M00/B9/7C/wKgBpVYKTfCAcBr9AAQx6J5QXsM47.jpeg?imageMogr2%2Fthumbnail%2F%21660x350r%2Fgravity%2FCenter%2Fcrop%2F%21660x350%2Fquality%2F90',
          'https://b1-q.mafengwo.net/s7/M00/F3/C7/wKgB6lSvSJ-AC2WlAAaojIciQVE907.png?imageMogr2%2Fthumbnail%2F%21660x350r%2Fgravity%2FCenter%2Fcrop%2F%21660x350%2Fquality%2F90'
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel {
    width: 80%;
    text-align: center;
    margin: 10px auto;
  }

  .el-carousel__item span {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 700px;
    float: left;
    margin-left: 5%;
    z-index: 1000;
  }

  .image-item {
    border-radius: 5px;
  }

</style>
