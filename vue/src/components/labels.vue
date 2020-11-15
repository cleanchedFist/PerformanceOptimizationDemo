<template>
  <div class="labels__wrap">
    <div class="labels__item" v-for="(item, key) in labels" :key="item">
			<span>{{item}}</span>
			<span v-if="labels[key+1]" class="labels__line"></span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
		labels: {
			type: Array,
			default: () => []
		}
	},
	methods: {}
}
</script>

<style scoped>
.labels__wrap {
	display: flex;
		align-items: center;
}
.labels__item {
	display: flex;
	align-items: center;
}
.labels__line {
	display: inline-block;
	width: 0.02rem;
	height: 0.32rem;
	background: #eaeaea;
	margin: 0 0.16rem;
}
</style>
