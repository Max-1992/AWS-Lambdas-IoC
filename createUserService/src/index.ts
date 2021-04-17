// Database connected
import * as database from "./repository/connect"
database.connect('mongodb://localhost/test-ts-CRUD')

// Inversify container
import { container } from './config/inversify.config'

// Types
import { TYPES } from './config/constant/types'

// Class
import CreateUserService from './application/createUser'

// Create instance
const instance = container.get<CreateUserService>(TYPES.ICreateUserService)


export default instance.create