const { Router } = require('express')
const {
  getAllTodos,
  getTodosById,
  getTodosWithCategories,
  createTodos,
  updateTodos,
  deleteTodos,
} = require('../controllers/todos.controller')
const router = Router()

router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodosById)
/// voya traer los todos con categories
router.get('/todos/:id/categories', getTodosWithCategories)
router.post('/todos', createTodos)
router.put('/todos/:id', updateTodos)
router.delete('/todos/:id', deleteTodos)

module.exports = router
