<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view style="width: 100%;">
			<view style="display: flex;">
				<input class="uni-input" v-model="name" placeholder="姓名" style="flex: 3;"/>
				<button type="primary" size="mini" @click="addData" style="flex: 1;">新增</button>
			</view>
			<view  style="display: flex;" class="uni-form-item uni-column">
				<button type="primary" @click="searchData" size="mini" style="flex: 1;">查询全部</button>
				<button type="primary" @click="pagesData" size="mini" style="flex: 1;">分页查询</button>
			</view>
		
		  <view class="text-box" scroll-y="true" style="margin-top: 10px;">
				<div style="height: 30px;" v-for=" tab in tab_list" >{{ tab.name }} <button type="primary" size="mini" @click="delData(tab._id)" style="float: right;">删除</button></div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				name: '',
				tab_list: [],
				pages: {
					pageNum: 1,
					pageSize: 5
				}
			}
		},
		onLoad() {
			this.searchData()
		},
		methods: {
			addData() {
				uniCloud.callFunction({
					name: 'addData',
					data: { name: this.name}
				}).then(res => {
					this.searchData()
					console.log(111, res)
				})
			},
			searchData() {
				uniCloud.callFunction({
					name: 'searchData',
				}).then(res => {
					this.tab_list = res.result.data
					console.log(222, res)
				})
			},
			delData(id) {
				console.log(id)
				uniCloud.callFunction({
					name: 'delData',
					data: {id: id}
				}).then(res => {
					this.searchData()
					console.log(333, res)
				})
			},
			pagesData() {
				uniCloud.callFunction({
					name: 'pages',
					data: this.pages
				}).then(res => {
					// this.tab_list = res.result.data
					console.log(444, res)
				})
			},
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
