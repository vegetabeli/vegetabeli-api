const model = require ('../models/product')
const helpers = require ('../helpers/index')
const multer = require('multer')
const path = require('path')
const uuid = require('uuid/v4')

const storage = multer.diskStorage({
    destination: './public/uploads/product',
    filename: (req, file, cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1*1024*1024
    },
    fileFilter: helpers.imageFilter
}).single('image')

module.exports = {
    getProduct: (req , res) => {

        let { sort_by, order, name, limit, page, category} = req.query
        let data = {
        sort_by,
        order,
        name,
        limit,
        page,
        category
        }

        model
          .getProduct (data)
          .then (response => {
            // helpers.success (res, response)
            res.json({
                status: 200,
                  msg: 'Success',
                  "page" : req.query.page,
                //   "pages": Math.ceil(result.length/req.query.limit),
                //   "total": result.length,
                  response 
            })
          })
          .catch (err => {
            console.log (err);
          });
      },
      getProductById: (req , res) => {

        const id = req.params.id_product

        model
          .getProductById (id)
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    addProduct: (req, res) => {
        upload(req, res, (err)=>{
            if(req.fileValidationError){
                res.status(400).json({
                    error: true,
                    message: 'Only image file is allowed, try another file'
                })
            }else if(err){
                res.status(400).json({
                    message:err,
                    message: 'File is not valid'
                })
            }else{
            const id_product = uuid().split('-')[0]
            const { name, description, price, category, stock, id_market } = req.body
            const image = req.file ? req.file.filename : req.file
            const data = {
                id_product,
                name,
                description,
                price,
                image,
                category,
                stock,
                date_created: new Date(),
                date_updated: new Date(),
                id_market
            }
            console.log(req, "ini req")
            model.addProduct(data)
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
        
    },
    editProduct: (req, res) => {
        upload(req, res, (err)=>{
            if(err){
                res.status(400).json({
                    message: err
                })
            }else{
                const id_product = req.params.id_product
                const { name, description, price, category, stock, id_market } = req.body
                const image = req.file ? req.file.filename : req.file
                const data = {
                    id_product,
                    name,
                    description,
                    price,
                    image,
                    category,
                    stock,
                    date_updated: new Date(),
                    id_market
                }
        
                model.editProduct(data, id_product)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
    },
    deleteProduct: (req, res) => {
        const id_product = req.params.id_product

        model.deleteProduct(id_product)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}