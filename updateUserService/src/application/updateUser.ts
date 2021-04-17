
// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IUpdateUserService } from "./IUpdateUser";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserDto } from "./IUserDto";


@injectable()
export default class UpdateUserService implements IUpdateUserService {

    constructor(
        @inject(TYPES.IUserRepository) private userRepository: IUserRepository,
        ) {}

    async update(event: any): Promise<any> {
        try {
            // Generate a copy of the received data.
            const user: IUserDto = { ...event };

            // Call the repository method to create new user.
            await this.userRepository.updateById(user.id, user);

            const message = `User data was updated successfully.`;

            return { ok: true, message };
            
        } catch (error) {
            console.error(error)
        }
    }

}