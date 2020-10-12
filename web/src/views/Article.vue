<template>
<div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
        <div class="iconfont icon-back text-blue"></div>
        <strong class="flex-1 text-ellipsis pr-4 pl-1 text-blue">{{model.title}}</strong>
        <div class="text-gray ">
            2020-10-12
        </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
        <div class="d-flex ai-center">
            <i class="iconfont icon-cc-menu-circle"></i>
            <strong class="text-blue fs-lg ml-1">相关资讯</strong>
        </div>
        <div class="pt-2 fs-lg">
            <router-link class="py-2" :to="`/articles/${item._id}`" tag="div" v-for="item in model.related " :key="item._id">
                {{item.title}}
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        id: {
            required: true
        }
    },
    data() {
        return {
            model: null
        }
    },
    methods: {
        async fetch() {
            const res = await this.$axios.get(`/articles/${this.id}`);
            this.model = res.data
        }
    },
    created() {
        this.fetch()
    },
    watch: {
        id() {
            this.fetch()
        }
    },
}
</script>

<style lang="scss">
.page-article {
    .icon-back {
        font-size: 1.6923rem;
    }

    .body {
        img {
            max-width: 100%;
            height: auto;
        }

        iframe {
            width: 100%;
            height: auto;
        }

        .ql-align-center {
            text-align: center;
        }
    }

}
</style>
