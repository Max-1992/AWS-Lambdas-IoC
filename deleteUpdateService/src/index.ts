// Database connected
import * as database from "./repository/connect"
database.connect('mongodb://localhost/test-ts-CRUD')

// Inversify container
import { container } from './config/inversify.config'

// Types
import { TYPES } from './config/constant/types'

// Class
import DeleteUserService from "./application/deleteUser"

// Create intance
const instance = container.get<DeleteUserService>(TYPES.IDeleteUserService)


export default instance.delete