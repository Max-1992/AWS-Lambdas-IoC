// Database connected
import * as database from "./repository/connect"
database.connect('mongodb://localhost/test-ts-CRUD')

// Inversify container
import { container } from './config/inversify.config'

// Types
import { TYPES } from './config/constant/types'

// Class
import UpdateUserService from "./application/updateUser"

// Create instance
const instance = container.get<UpdateUserService>(TYPES.IUpdateUserService)

export default instance.update
