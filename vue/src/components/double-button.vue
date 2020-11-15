<template>
  <div class="double-btn__wrap">
    <div class="double-btn__left-btn btn" @click="leftBtnTap">
			<slot name="leftbtn"></slot>
    </div>
		<div class="double-btn__line"></div>
    <div class="double-btn__right-btn btn" @click="rightBtnTap">
			<slot name="rightbtn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {},
	methods: {
		rightBtnTap(e) {
			this.$emit('rightBtnTap', e)
		},
		leftBtnTap(e) {
			this.$emit('leftBtnTap', e)
		},
	}
}
</script>

<style scoped>
.double-btn__wrap {
  width: 100%;
  display: flex;
	align-items: center;
	height: 0.8rem;
	background: #fff;
}

.double-btn__line {
	height: 0.72rem;
	width: 0.02rem;
	background: #EAEAEA;
}

.btn {
	width: 50%;
	line-height: 0.8rem;
  text-align: center;
}

.btn:active {
	background: #efefef;
}
</style>
