// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../config/constant/types"

// Interface
import { IDeleteUserService } from "./IDeleteUser";
import { IUserRepository } from "../repository/IUserRepository";


@injectable()
export default class DeleteUserService implements IDeleteUserService {

    constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {}

    async delete(event: any): Promise<any> {
        const { id } = event;
        await this.userRepository.deleteById(id);
        const message = `User data was successfully deleted.`;

        return { ok: true, message };
    }

}