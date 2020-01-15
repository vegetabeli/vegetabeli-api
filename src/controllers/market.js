const model = require ('../models/market')
const helpers = require ('../helpers/index')
const multer = require('multer')
const path = require('path')
const uuid = require('uuid/v4')

const storage = multer.diskStorage({
    destination: './public/uploads/market',
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
}).single('photo')

module.exports = {
    getAllMarket: (_, res) => {
        model
          .getAllMarket ()
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    getMarketById: (req, res) => {
        const id_market = req.params.id_market
        model
          .getMarketById (id_market)
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    addMarket: (req, res) => {
        // console.log(req, "ini req")
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
                const id_market = uuid().split('-')[0]
                const { id_user, name, location } = req.body
                const photo = req.file ? req.file.filename : req.file
                const data = {
                    id_market,
                    id_user,
                    name,
                    photo,
                    location,
                    date_created: new Date(),
                    date_updated: new Date()
                }
        
                model.addMarket(data)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
        
    },
    editMarket: (req, res) => {
        upload(req, res, (err)=>{
            if(err){
                res.status(400).json({
                    message: err
                })
            }else{
                const id_market = req.params.id_market
                const { name, location } = req.body
                const photo = req.file ? req.file.filename : req.file
                const data = {
                    name,
                    photo,
                    location,
                    date_updated: new Date()
                }
        
                model.editMarket(data, id_market)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
    },
    deleteMarket: (req, res) => {
        const id_market = req.params.id_market

        model.deleteMarket(id_market)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}