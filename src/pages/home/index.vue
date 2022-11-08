<template>
	<div>
		首页
		<button @click="login">登录</button>
	</div>
</template>
<script lang="ts" setup>
// import { ref } from 'vue'
function login() {
	let url = "alipays://platformapi/startapp?appId=20000067&url="
	let redirect_uri = encodeURIComponent(
		"https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2019111669189654&scope=auth_user&redirect_uri=https://guoxue.qqisv.com/admin/#/login&state=init"
	)
	window.open(url + redirect_uri)
}
</script>
<style lang="scss" scoped></style>
