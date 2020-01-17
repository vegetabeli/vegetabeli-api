module.exports = {
    success: (res, data) => {
      res.json ({
        status: 200,
        msg: 'Success',
        data,
      })
    },
    imageFilter : (req, file, cb)=>{
      if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
          req.fileValidationError = 'Only image files are allowed'
          return cb(new Error('Only image files are allowed'), false)
      }
      cb(null, true)
  }
  }