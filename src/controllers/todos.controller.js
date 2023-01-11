const TodosService = require('../services/todos.service')

const getAllTodos = async (req, res) => {
  try {
    const result = await TodosService.getAllTodos()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getTodosById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await TodosService.getTodosById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const createTodos = async (req, res) => {
  try {
    const newtasks = req.body
    const result = await TodosService.createTodos(newtasks)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateTodos = async (req, res) => {
  try {
    const { id } = req.params
    const update = req.body
    const result = await TodosService.updateTodos(id, update)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params
    const result = await TodosService.deleteTodos(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllTodos,
  getTodosById,
  createTodos,
  updateTodos,
  deleteTodos,
}
