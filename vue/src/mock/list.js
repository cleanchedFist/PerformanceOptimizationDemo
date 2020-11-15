const Mock = require('mockjs')
const Random = Mock.Random
Random.extend({
	type: function() {
			const types = ['景区', '4A景区', '3A景区', '公园', '美术馆', '文物古迹', '2A景区', '5A景区', '寺庙']
			return this.pick(types)
	}
})

Random.extend({
	fei() {
		const feis = ['1.1', '10', '80', '90']
		return this.pick(feis)
	}
})
export default function getList () {
	return Mock.mock({
		'list|1-10': [{
			'id|+1': 1,
			imgUrl: Random.image('100x200'),
			'title': Random.county(),
			description: Random.csentence(6, 12),
			recent: Random.natural(1, 100) + '',
			distance: Random.natural(10, 100) + 'km',
			type: Random.type(),
			fei: Random.fei(),
		}]
	})
}