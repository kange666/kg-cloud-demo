'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log(event)
	const collection = db.collection('tab');
	let res = await collection.doc(event.id).remove()
	//返回数据给客户端
	return event
};
