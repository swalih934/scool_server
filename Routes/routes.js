const express=require ('express')

const userController=require('../Controllers/userController')
const studentController=require('../Controllers/studentController')
const multerConfigu=require('../Middleware/multerConfig')
const jwtmiddle=require('../Middleware/jwtMiddelware')
const router=express.Router()

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)
router.post('/addstudent',jwtmiddle,multerConfigu.single('image'),studentController.addStudent)
router.get('/getstudent',jwtmiddle,studentController.getStudent)
router.delete('/deletestudent/:id',jwtmiddle,studentController.deleteStudent)
router.put('/updatestudent/:id',jwtmiddle,multerConfigu.single('image'), studentController.updateStudent)


module.exports=router