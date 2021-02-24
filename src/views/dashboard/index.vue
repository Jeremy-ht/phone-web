<template>
  <div class="home-container">
<!--    <div class="home">-->

<!--      <div class="home-item">-->
<!--        &lt;!&ndash; 图标 &ndash;&gt;-->
<!--        <div class="home-item-svg item">-->
<!--          <svg class="icon iconfont" aria-hidden="true">-->
<!--            <use xlink:href="#icon-yonghu1"/>-->
<!--          </svg>-->
<!--        </div>-->

<!--        &lt;!&ndash; 文字 &ndash;&gt;-->
<!--        <div class="home-item-text item">-->
<!--          <div class="text-div" @click="goPath(1)">新增用户</div>-->
<!--          <div class="number-div" @click="goPath(1)">{{home.todayUser}}</div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="home-item">-->
<!--        &lt;!&ndash; 图标 &ndash;&gt;-->
<!--        <div class="home-item-svg item">-->
<!--          <svg class="icon iconfont" aria-hidden="true">-->
<!--            <use xlink:href="#icon-tubiaozhizuomobanyihuifu-"/>-->
<!--          </svg>-->
<!--        </div>-->

<!--        &lt;!&ndash; 文字 &ndash;&gt;-->
<!--        <div class="home-item-text item">-->
<!--          <div class="text-div" @click="goPath(2)">用户总计</div>-->
<!--          <div class="number-div" @click="goPath(2)">{{home.totalUser}}</div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="home-item">-->
<!--        &lt;!&ndash; 图标 &ndash;&gt;-->
<!--        <div class="home-item-svg item">-->
<!--          <svg class="icon iconfont" aria-hidden="true">-->
<!--            <use xlink:href="#icon-fengjing"/>-->
<!--          </svg>-->
<!--        </div>-->

<!--        &lt;!&ndash; 文字 &ndash;&gt;-->
<!--        <div class="home-item-text item">-->
<!--          <div class="text-div" @click="goPath(3)">新增景点</div>-->
<!--          <div class="number-div" @click="goPath(3)">{{home.detail}}</div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="home-item">-->
<!--        &lt;!&ndash; 图标 &ndash;&gt;-->
<!--        <div class="home-item-svg item">-->
<!--          <svg class="icon iconfont" aria-hidden="true">-->
<!--            <use xlink:href="#icon-pinglun1"/>-->
<!--          </svg>-->
<!--        </div>-->

<!--        &lt;!&ndash; 文字 &ndash;&gt;-->
<!--        <div class="home-item-text item">-->
<!--          <div class="text-div" @click="goPath(4)">新增评论</div>-->
<!--          <div class="number-div" @click="goPath(4)">{{home.comment}}</div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
  </div>
</template>

<script>
  import '../../assets/iconfont/iconfont'
  import { getHomeCount } from '../../api/common'

  export default {
    name: 'Dashboard',
    data() {
      return {
        home: {}

      }
    },
    created() {
      this.init()

    },
    methods: {

      // 初始化
      init() {
        // getHomeCount().then(res => {
        //   if (res.success) {
        //     this.home = res.data.data
        //   } else {
        //     this.$message({ message: '获取数据失败', type: 'error', duration: 1700 })
        //   }
        //
        // })

      },

      goPath(id) {
        switch (id) {
          case 1:
            this.$router.push({ path: '/sys/user' })
            break
          case 2:
            this.$router.push({ path: '/sys/user' })
            break
          case 3:
            this.$router.push({ path: '/scenery/list' })
            break
          case 4:
            this.$router.push({ path: '/comment/commentList' })
            break

        }

      }

    }

  }
</script>

<style scoped>
  .home {
    margin: 50px 50px;
    display: flex;
    justify-content: space-between;
  }

  .home-item {
    width: 220px;
    height: 108px;
    background-color: #dcece5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
  }

  .item {
    width: 110px;
    height: 100%;
    display: flex;

  }

  .home-item-text {
    flex-direction: column;
    /*justify-content: center;*/
  }

  .text-div {
    margin: 30px auto 5px;
    font-size: 18px;
    color: rgba(0, 0, 0, .45);
    font-weight: 600;
    cursor: pointer;
  }

  .number-div {
    margin: 5px auto;
    font-weight: 700;
    font-size: 20px;
    color: #666;
    cursor: pointer;
  }


  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 68px;
    margin: auto;
  }
</style>
