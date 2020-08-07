'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const dbCmd = db.command
	// 总页数
	const collection = db.collection('tab');
	const total = collection.where({
		_db: dbCmd.exists(true)
	}).count()
	console.log(1, total)
	// 分页
	const list = (await collection.skip((event.pageNum - 1) * event.pageSize).limit(event.pageSize).get()).data
	// 返回
	return {
		list: list,
		total: total
	}
};
