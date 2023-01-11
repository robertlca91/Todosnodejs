const { Router } = require('express')
const {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller')
const router = Router() // enrrutador

//app. get
//app.post
//app.put
//app.delete

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
//obtener a un usuario con sus tareas
router.get('/users/:id/tasks', getUserWithTasks)

router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router
