
const db= require('../utils/database')
const Users= require('../models/users.model')
const Todos = require('../models/todos.models')

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
title:'task1' , description:'descriptions for one', userId:1
},
{
  title:'task2' , description:'descriptions for two', userId:1
},
{
title:'task3 imposible' , description:'descriptions for three', userId:2
},
{
  title:'task4' , description:'descriptions for', userId:3
},
];

// const categories = [];

// const todosCategories = [];
//creeate
//findOne, findAll, FindByPk
//update
//destroy


db.sync({force:false})
.then(()=>{
console.log('iniciando con el sembriadio malicioso')
users.forEach((user)=>Users.create(user));
setTimeout(()=>{
todos.forEach((todo)=>Todos.create(todo))
},100)
})

