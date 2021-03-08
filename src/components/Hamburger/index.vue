<template>
  <div style="padding: 0 15px;" @click="toggleClick">
<!--    <svg-->
<!--      :class="{'is-active':isActive}"-->
<!--      class="hamburger"-->
<!--      viewBox="0 0 1024 1024"-->
<!--      xmlns="http://www.w3.org/2000/svg"-->
<!--      width="64"-->
<!--      height="64"-->
<!--    >-->
<!--      <path-->
<!--        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"/>-->
<!--    </svg>-->

    <svg
      :class="{'is-active':isActive}"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      t="1615205854813"
      version="1.1"
      p-id="1749">
      <path
        d="M560.79 881.31H177.28c-17.65 0-32-14.36-32-32V178.14c0-17.65 14.35-32 32-32h383.51c17.64 0 32 14.35 32 32v671.17c0 17.64-14.35 32-32 32z m-375.51-40h367.51V186.14H185.28v655.17zM862.63 880.84l-2.37-9.72 4.86-1.18c0.97-0.24 1.88-0.67 2.69-1.27l0.24-0.19c1.8-1.45 2.83-3.58 2.83-5.86v-29.31h10v29.31c0 3.84-1.25 7.51-3.51 10.51l0.43 0.58-3.74 2.78-3.62 2.92-0.45-0.56c-0.81 0.33-1.64 0.6-2.49 0.81l-4.87 1.18z m-21.29-0.69h-51v-10h51v10z m-71 0h-51v-10h51v10z m-71 0h-51v-10h51v10z m-71 0h-32.13v-10h32.13v10z m252.54-66.83h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-51h10v51z m0-71h-10v-12.18c0-4.15-3.38-7.52-7.52-7.52h-19.15v-10h19.15c8.7 0 15.94 6.38 17.3 14.7h0.23v15z m-56.67-19.7h-51v-10h51v10z m-71 0h-51v-10h51v10z m-71 0h-51v-10h51v10z m-71 0h-15v-10h15v10z"
        fill="#3E3A39" p-id="1750"></path>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleClick() {
        this.$emit('toggleClick')
      }
    }
  }
</script>

<style scoped>
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }

  .hamburger.is-active {
    transform: rotate(180deg);
  }
</style>
