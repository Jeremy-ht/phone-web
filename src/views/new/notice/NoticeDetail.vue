<template>
  <div class="detail-container">
    <MyNavBar :title-name="$route.query.title"/>
    <MyLoding v-if="isLoading"/>
    <!--    <MyPullRefresh @refresh="onRefresh" ref="refresh">-->
    <div class="content" v-if="!isLoading && dataList.length > 0">
      <div v-for="(item, index) in dataList" :key="index">
        <div class="time">
          <span>{{ item.dateTime | dateTime }}</span>
        </div>
        <div class="notice-card" @click="go(item.route)">
          <div>{{ item.sender }}</div>
          <div class="notice-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!--    </MyPullRefresh>-->
    <MyEmpty v-if="!isLoading && dataList.length === 0" description="暂无通知消息"/>
  </div>
</template>

<script>
import { getNoticesList, readNotice } from '@/api/notice/notice'
import MyNavBar from '@/components/share/myNavBar'
import MyLoding from '@/components/share/myLoding'
import MyEmpty from '@/components/share/myEmpty'
import MyPullRefresh from '@/components/share/MyPullRefresh'

export default {
  components: { MyPullRefresh, MyEmpty, MyLoding, MyNavBar },
  data() {
    return {
      page: 1,
      pageSize: 100,
      userId: this.$route.query.userId,
      type: this.$route.query.type,
      dataList: [],
      isLoading: false
    }
  },
  created() {
    this.getList()
    this.readNotice()
  },
  methods: {
    getList() {
      this.isLoading = true
      getNoticesList({
        currentPage: this.page,
        pageSize: this.pageSize,
        userId: this.userId,
        type: this.type
      }).then(res => {
        this.isLoading = false
        this.dataList = res.data.records
        // this.$refs.refresh.closeLoading()
      })
    },
    readNotice() {
      readNotice({ userId: this.userId, type: this.type })
    },
    go(path) {
      this.$router.push('/' + path)
    },
    onRefresh() {
      this.page = 1
      this.getList()
      this.readNotice()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/index";

.detail-container {
  background: @main-bac-color;
  color: @main-color-222;
  min-height: 100%;
  font-size: 14px;

  .content {
    box-sizing: border-box;
    padding: 10px;
    height: 100vh;
    overflow-y: auto;

    .time {
      margin: 30px auto 20px;
      text-align: center;
      color: @assist-color-666;

      span {
        padding: 6px 10px;
        border-radius: 20px;
        background-color: #ebebf1;
      }
    }

    .notice-card {
      box-sizing: border-box;
      padding: 14px 12px;
      background: #FFFFFF;
      //box-shadow: 0 1px 5px 0 rgba(203, 203, 203, 0.5);
      border-radius: 8px;

      & > div:first-child {
        font-size: 16px;
      }

      .notice-title {
        margin-top: 10px;
        color: @assist-color-777;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
