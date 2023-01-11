
const db= require('../utils/database')
const Users= require('../models/users.model')
const Todos = require('../models/todos.models')
const Categories = require('../models/todos-categories.models')
const TodosCategories=require('../models/todos-categories.models')

const users = [
{
usermane:'robert' , email:'robert@gmail.com' , password:'1234'
},
{
usermane:'lucero' , email:'luchero@gmail.com' , password:'456789'
},
{
  usermane:'michael' , email:'jacksonfive@gmail.com' , password:'147852'
}
];

const todos =[
{
title:'estudiar node' , description:'descriptions for one', userId:1
},
{
  title:'pasear al firulais' , description:'descriptions for two', userId:1
},
{
title:'lavar platos imposible' , description:'descriptions for three', userId:2
},
{
  title:'chekeo mensual' , description:'descriptions for', userId:3
},
];

const categories = [
  {name: 'personal'},
  {name: 'educacion'},
  {name: 'salud'},
  {name: 'trabajo'},
  {name: 'hogar'},
  {name: 'cocina'},
  {name: 'deporte'},
  {name: 'ocio'},
  {name: 'financiero'},
  {name: 'entretenimiento'},
  ]; 

  const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
    ]; 

// const categories = [];

// const todosCategories = [];
//creeate
//findOne, findAll, FindByPk
//update
//destroy


db.sync({force:true})
.then(()=>{
console.log('iniciando con el sembriadio malicioso')
users.forEach((user)=>Users.create(user));
setTimeout(()=>{
todos.forEach((todo)=>Todos.create(todo))
},100)
setTimeout(()=>{
categories.forEach((category)=>Categories.create(category))
},250);
setTimeout(()=>{
todosCategories.forEach((tc)=>TodosCategories.create(tc))
},400);
})

