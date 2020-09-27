<template>
<div>
    <h1>{{id ?'编辑':'新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="所属分类">
            <el-select v-model="model.categories" multiple placeholder="请选择">
                <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标题">
            <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="详情">
            <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    VueEditor
} from "vue2-editor";
export default {
    props: {
        id: {}
    },
    components: {
        VueEditor
    },
    data() {
        return {
            model: {},
            categories: []
        }
    },
    methods: {
        //保存分类
        async save() {
            let res // eslint-disable-line no-unused-vars
            if (this.id) {
                res = await this.$axios.put(`rest/articles/${this.id}`, this.model)
            } else {
                res = await this.$axios.post('rest/articles', this.model)
            }
            this.$router.push('/articles/list')

            this.$message({
                type: 'success',
                message: '保存成功'
            })

        },
        async fetch() {
            const res = await this.$axios.get(`rest/articles/${this.id}`)
            this.model = res.data
        },
        async fetchCategories() {
            const res = await this.$axios.get(`rest/categories`)
            this.categories = res.data
        },
        //富文本图片上传
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {

            var formData = new FormData();
            formData.append("file", file);

            const res = await this.$axios.post('upload', formData)
            Editor.insertEmbed(cursorLocation, "image", res.data.url);
            resetUploader();

        }
    },
    created() {
        this.fetchCategories()
        this.id && this.fetch()
    },
}
</script>

<style>

</style>
