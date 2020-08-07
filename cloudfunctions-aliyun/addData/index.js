'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('tab');
	let res = await collection.add(event)
	console.log('event : ', res)
	
	//返回数据给客户端
	return res
};
