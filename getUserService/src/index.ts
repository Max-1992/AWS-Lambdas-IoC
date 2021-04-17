// Database connected
import * as database from "./repository/connect"
database.connect('mongodb://localhost/test-ts-CRUD')

// Inversify container
import { container } from './config/inversify.config'

// Types
import { TYPES } from './config/constant/types'

// class
import GetUserService from "./application/getUser"

// Create instance
const instance = container.get<GetUserService>(TYPES.IGetUserService)


export default instance.get



