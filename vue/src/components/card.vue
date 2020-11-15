<template>
  <div class="card__wrap">
    <div class="card__content">
      <div class="card__img" v-if="imgUrl">
        <img :src="imgUrl" alt="" />
      </div>
      <div class="card__info">
        <div class="card__info--title" v-if="title">{{ title }}</div>
        <Labels :labels="label_arr" />
        <div class="card__info--description" v-if="description">
          “{{ description }}“
        </div>
        <div class="card__info--recent" v-if="recent">
          <img
            class="card__info--recent--rank"
            src="../assets/rank.png"
            alt=""
          />
          <span>{{ recent }}</span
          >万人近1个月导航来过
        </div>
      </div>
    </div>
    <DoubleButton>
      <div slot="leftbtn" class="leftbtn">
        <span class="icon icon-like"></span>收藏
      </div>
      <div slot="rightbtn" class="rightbtn">
        <span class="icon icon-to"></span>去这里
      </div>
    </DoubleButton>
  </div>
</template>

<script>
import DoubleButton from './double-button'
import Labels from './labels'
export default {
  name: 'card',
  props: {
		title: {
			type: String,
			default: ''
		},
		imgUrl: {
			type: String,
		},
		description: {
			type: String
		},
		recent: {
			type: String
		},
		distance: {
			type: String
		},
		type: {
			type: String
		},
		fei: {
			type: String
		}
	},
	data() {
		return {
			label_arr: []
		}
	},
	components: {
		DoubleButton,
		Labels
	},
	mounted() {
		this.label_arr = [this.distance, this.type, this.fei ? '¥' + this.fei + '起': '']
	}
}
</script>

<style scoped>
.card__wrap {
  min-height: 1rem;
  border-radius: 0.3rem;
  overflow: hidden;
  background: #fff;
  padding-bottom: 0.2rem;
	margin-bottom: 0.20rem;
}

.leftbtn {
  color: #404A69;
}

.rightbtn {
  color: #2F68F6;
}

.card__content {
  display: flex;
  padding: 0.2rem;
}

.card__img {
  width: 2rem;
  height: 2.7rem;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-right: 0.2rem;
	flex-shrink: 0;
}

.card__img img {
  display: inline-block;
  width: 100%;
}
.card__info {
	display: flex;
	flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}
.card__info--title {
  font-size: 0.4rem;
  font-weight: 600;
  color: #000;
}
.card__info--description {
  color: #000;
}

.card__info--recent {
  position: relative;
  display: inline-block;
  color: #3263F6;
  background: #EDF3FD;
  padding: 0 0.4rem 0 0.4rem;
  margin-left: 0.4rem;
  margin-top: 0.16rem;
  flex-grow: 0;
  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.2rem;
  transform: skewX(-20deg);
}

.card__info--recent--rank {
  position: absolute;
  display: inline-block;
  width: 0.8rem;
  top: -0.16rem;
  left: -0.4rem;
  transform: skewX(20deg);
}

.card__info--recent span {
  margin-right: 0.04rem;
  font-size: 0.36rem;
  font-weight: 500;
}
</style>
