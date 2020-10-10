<template>
<div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
        <img src="../assets/logo.png" alt="logo" height="30">
        <div class="px-2 flex-1">
            <div class="text-white">王者荣耀</div>
            <div class="text-grey-1 fs-xxs">团队成就更多</div>
        </div>
        <button class="btn bg-primary" type="button ">立即下载</button>
    </div>

    <div class="bg-primary pt-3 pb-2">
        <div class="nav  nav-inverse jc-around pd-1">
            <div class="nav-item active">
                <router-link to="/" class="nav-link" tag="div">首页</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/" class="nav-link" tag="div">攻略中心</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/" class="nav-link" tag="div">赛事中心</router-link>
            </div>
        </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
