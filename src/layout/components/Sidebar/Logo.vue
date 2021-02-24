<template>
  <div class="sidebar-logo-container">
    <!--        <img v-if="logo" :src="logo" class="sidebar-logo">-->


    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <svg class="icon iconfont logo-svg" style="margin-left: 2px;" aria-hidden="true">
          <use xlink:href="#icon-tubiaozhizuomoban_fengjing"/>
        </svg>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
<!--        <svg class="icon iconfont logo-svg" style="margin-left: 2px;" aria-hidden="true">-->
<!--          <use xlink:href="#icon-tubiaozhizuomoban_fengjing"/>-->
<!--        </svg>-->
        <h3 style="font-size: 18px;color: white; ">{{title}}</h3>
      </router-link>
    </transition>


  </div>


</template>

<script>
  export default {
    name: 'SidebarLogo',
    props: {
      collapse: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        title: '景区后台管理'
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
    font-size: 50px;
  }

  .logo-svg-div {
    width: 32px;
    height: 100%;
    margin-left: 2px;
  }

  .sidebar-logo-container {
    display: flex;
    width: 100%;
    height: 50px;
    /*line-height: 50px;*/
    background: #2b2f3a;
    text-align: center;

  }

</style>

<style lang="scss" scoped>
  .sidebarLogoFade-enter-active {
    transition: opacity 1.5s;
  }

  .sidebarLogoFade-enter,
  .sidebarLogoFade-leave-to {
    opacity: 0;
  }

  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    /*line-height: 50px;*/
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
      height: 100%;
      width: 100%;

      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 12px;
      }

      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
    }

    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
      }
    }
  }
</style>
