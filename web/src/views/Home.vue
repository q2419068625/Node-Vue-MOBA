<template>
<div>

    <swiper :options="swiperOptions">
        <swiper-slide>
            <img class="w-100" src="../assets/images/79860d923bba914ecf7e328bf366894a.jpeg" alt="banner">
        </swiper-slide>
        <swiper-slide>
            <img class="w-100" src="../assets/images/033065220b7a8ebfa497261ec7cb4436.jpeg" alt="banner">
        </swiper-slide>
        <swiper-slide>
            <img class="w-100" src="../assets/images/ab445e5ea35667ed001170d1282b29e3.jpeg" alt="banner">
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right px-3 pd-2" slot="pagination"></div>
    </swiper>
    <!--end of swiper-->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
        <div class="d-flex flex-wrap">
            <div class="nav-item mb-3" v-for="(item,index) in items" :key="index">
                <i class="sprite " :class="'sprite-'+index"></i>
                <div class="py-2">{{item}}</div>
            </div>
        </div>
        <div class="bg-light py-2 fs-sm">
            <i class="sprite sprite-arrow mr-1"></i>
            <span>收起</span>
        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: {
                news: '爆料站',
                gsz: '故事站',
                zbsc: '周边商城',
                tyf: '体验服',
                xrzq: '新人专区',
                rycc: '荣耀·传承',
                wzyd: '王者营地',
                gzh: '公众号',
                bbjs: '版本介绍',
                djhj: '对局环境',
                wxwzt: '无限王者团',
                cyhdy: '创意互动营',

            },

            swiperOptions: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.pagination-home {
    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.1538rem;
        background: map-get($colors, 'white');

        &.swiper-pagination-bullet-active {
            background: map-get($colors, 'info');
        }
    }
}

//nav 
.nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    .nav-item {
        width: 25%;
        border-left: 1px solid $border-color;

        &:nth-child(4n+1) {
            border: none;
        }
    }
}
</style>
