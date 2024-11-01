const multer=require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Uploads')
    },
    filename: (req, file, cb) => {
        const filename = `Image-${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true)
    } else {
        cb(null, false)
         cb(new Error("Please upload file with following extensions (png,jpg,jpeg)!!"))
    }
}
module.exports =multer({
    storage,fileFilter

})