/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import fs from 'fs'
import path from 'path'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/cv', ({ response }) => {
  const pdf = fs.createReadStream(path.join(process.cwd(), 'resources', 'views', 'cv', 'cv-luca-chaboissier.pdf'))
  return response.stream(pdf)
})

Route.get('/auth/signin', 'AuthController.signin')
Route.post('/auth/login', 'AuthController.login')

Route.get('/auth/signup', 'AuthController.signup')
Route.post('/auth/register', 'AuthController.register')
