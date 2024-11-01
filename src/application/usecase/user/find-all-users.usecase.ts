import { Inject, Injectable } from '@nestjs/common'
import { ApiResponse } from '@/application/interface/api-response'
import { UserDto } from '@/application/dto/user.dto'
import { UserRepositoryInterface } from '@/domain/repository/user.repository'

@Injectable()
export class FindAllUsersUsecase {
    constructor(@Inject('UserRepositoryInterface') private readonly userRepository: UserRepositoryInterface) {}

    //public async execute(): Promise<{ data: userDto[]; message: string }> {
    public async execute(): Promise<ApiResponse<UserDto[]>> {
        const user = await this.userRepository.findAll()

        return {
            message: `User(s) found: ${user.length}`,
            data: user,
        }
    }
}
