<template>
<m-card :icon="icon" :title="title">
    <div class="card-body pt-3">
        <div class="nav jc-between">
            <div class="nav-item " :class="{active:active === index}" v-for="(category,index) in categories" :key="index">
                <div class="nav-link" @click="$refs.list.swiper.slideTo(index)">{{category.name}}</div>
            </div>
        </div>
        <div class="pt-2">
            <swiper ref="list" :options="{autoHeight:true}" @slide-change="()=>active = $refs.list.swiper.realIndex">
                <swiper-slide v-for="(category,index2) in categories" :key="index2">
                    <slot name="items" :category="category"></slot>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</m-card>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            active: 0
        }
    },
}
</script>

<style>

</style>
