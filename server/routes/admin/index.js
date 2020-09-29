module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams:true
    })
    //创建分类
    router.post('/',async(req,res)=>{
       
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    //根据ID查找更新
    router.put('/:id',async(req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    //根据ID删除
    router.delete('/:id',async(req,res)=>{
         await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })

    //查找分类
    router.get('/',async(req,res)=>{
        const queryOptions = {}
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })

    //根据ID查找
    router.get('/:id',async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')


    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

    const multer = require('multer')
    //文件上传
    const upload = multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async(req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    //登录接口
    app.post('/admin/api/login',async(req,res)=>{
        const {username,password} = req.body
        //根据用户名查找用户
        const user = await AdminUser.findOne({username}).select('+password')
        assert(user,422,'用户不存在')
        // if(!user){
        //     return res.status(422).send({
        //         message:'用户不存在'
        //     })
        // }
        //校验密码
        const isValid =  require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,'密码错误')
        // if(!isValid){
        //     return res.status(422).send({
        //         message:'密码错误'
        //     })
        // }
        //返回token
        const token =  jwt.sign({id:user._id},app.get('secret'))

        res.send({token})
    })
    //错误处理
    app.use(async (err,req,res,next)=>{
        // console.log(err);
        res.status(err.statusCode || 500).send({
            message:err.message
        })
        
    })

}