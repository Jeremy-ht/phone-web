<template>
  <div class="container-notice-list">
    <MyNavBar title-name="消息中心"/>
    <MyLoding v-if="isLoading"/>
<!--    <MyPullRefresh @refresh="init" ref="refresh">-->
      <div class="content">
        <div v-for="(item, index) in dataList" :key="index" @click="toChatItme(item)">
          <van-image :src="item.icon"/>
          <div class="title">
            <div>
              {{ item.title }}
              <van-badge :content="item.count" class="badge" v-if="item.count > 0"/>
            </div>
            <div>{{ item.content || '- ' }}</div>
          </div>
          <van-icon name="arrow" v-if="item.count > 0"/>
          <div class="time" v-else>{{ item.time | calcTime }}</div>
        </div>
      </div>
<!--    </MyPullRefresh>-->
  </div>
</template>

<script>
import MyNavBar from '@/components/share/myNavBar'
import MyLoding from '@/components/share/myLoding'
import { getNoticesInfo } from '@/api/notice/notice'
import storeUtil from '@/utils/storeUtil'
import MyPullRefresh from '@/components/share/MyPullRefresh'

export default {
  name: 'NoticeList',
  components: { MyPullRefresh, MyLoding, MyNavBar },
  data() {
    return {
      isRefreshLoading: false,
      isLoading: false,
      dataList: [
        { title: '福利通知', type: '1', content: '暂无消息', time: '', count: '0', icon: '/photo/qcykj/common/notice/notice_fl.png' },
        { title: '活动通知', type: '2', content: '暂无消息', time: '', count: '0', icon: '/photo/qcykj/common/notice/notice_hd.png' },
        { title: '社团通知', type: '3', content: '暂无消息', time: '', count: '0', icon: '/photo/qcykj/common/notice/notice_st.png' },
        { title: '审批通知', type: '4', content: '暂无消息', time: '', count: '0', icon: '/photo/qcykj/common/notice/notice_sp.png' },
        { title: '系统通知', type: '5', content: '暂无消息', time: '', count: '0', icon: '/photo/qcykj/common/notice/notice_xt.png' }
      ],
      userId: JSON.parse(storeUtil.getItemString('data')).userId
    }
  },
  created() {
    this.isLoading = true
    this.init()
  },
  methods: {
    init() {
      getNoticesInfo({ userId: this.userId }).then(res => {
        this.dataList.forEach(e => {
          const val = res.data.find(item => item.id == e.type)
          if (val) {
            e.content = val.title
            e.count = val.count - val.readCount
            e.time = val.dateTime
          }
        })
        this.isLoading = false
        // this.$refs.refresh.closeLoading()
      }, err => {
        this.isLoading = false
      })
    },
    toChatItme(item) {
      this.$router.push({
        path: '/notice/detail',
        query: { type: item.type, userId: this.userId, title: item.title }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/index";

.container-notice-list {
  height: 100%;
  background: @main-bac-color;
  color: @main-color-222;

  .content {
    height: 100vh;
    padding: 12px;
    box-sizing: border-box;

    & > div {
      height: 76px;
      background: #FFFFFF;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding-left: 12px;
      padding-right: 12px;
      margin-bottom: 12px;

      .van-image {
        width: 50px;
        height: 50px;
      }

      .title {
        margin-left: 10px;
        width: 120px;
        height: 100%;
        flex: 1;

        & > div:first-child {
          font-size: 16px;
          margin-top: 12px;
          margin-bottom: 8px;
          position: relative;

          .badge {
            position: absolute;
            top: -3px;
            left: -20px;
            border-radius: 100%;
            font-size: 10px;
          }

        }

        & > div:last-child {
          font-size: 12px;
          color: @assist-color-777;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .van-icon, .time {
        width: 80px;
        text-align: right;
        color: @assist-color-999;
        font-size: 12px;
      }

      .van-icon {
        font-size: 18px;
      }
    }
  }
}

</style>
