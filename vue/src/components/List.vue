<template>
  <div class="list-wrap" @scroll="handleScroll">
    <div class="content-wrap">
      <card
        v-for="item in itemArr"
        :key="item.id"
        :imgUrl="item.imgUrl"
        :title="item.title"
        :description="item.description"
        :recent="item.recent"
        :distance="item.distance"
        :type="item.type"
        :fei="item.fei"
      />
    </div>
  </div>
</template>

<script>
import card from './card'
import getList from '../mock/list'
export default {
  name: 'List',
  props: {},
  data() {
    return {
      itemArr: [],
      wrapHeight: 0
    }
  },
  components: {
    card
  },
  methods: {
    isScrollToBottom(contentHeight, scrollTop) {
      //  这里有一个问题，最后一个子元素的margin-bottom没有撑起父元素的高度，有11px的差
      return contentHeight - this.wrapHeight - scrollTop <= 0
    },
    handleScroll(e) {
      const contentHeight = document.querySelector('.content-wrap').offsetHeight
      if(this.isScrollToBottom(contentHeight, e.target.scrollTop)) {
        this.itemArr = this.itemArr.concat((getList().list))
        console.log(this.itemArr)
      }
    }
  },
  mounted() {
    const listDom = document.querySelector('.list-wrap')
    const {paddingTop, paddingBottom} = window.getComputedStyle(listDom)
    this.wrapHeight = listDom.offsetHeight - parseFloat(paddingTop) - parseFloat(paddingBottom)
    this.itemArr = getList().list
  }
}
</script>

<style scoped>
.list-wrap {
  width: 100vw;
  height: 100vh;
  background: #F1F4FA;
  padding: 0.1rem;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
