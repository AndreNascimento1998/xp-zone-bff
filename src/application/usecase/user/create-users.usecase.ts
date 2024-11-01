import { Inject, Injectable } from '@nestjs/common'
import { ApiResponse } from '@/application/interface/api-response'
import { UserRepositoryInterface } from '@/domain/repository/user.repository'
import { UserDto, UserOutputDto } from '@/application/dto/user.dto'
import { User } from '@/domain/entity/users'

@Injectable()
export class CreateUsersUsecase {
    constructor(@Inject('UserRepositoryInterface') private readonly userRepository: UserRepositoryInterface) {}

    public async execute(userDto: UserDto): Promise<ApiResponse<UserOutputDto>> {
        const user = new User(userDto.name, userDto.email, userDto.password)

        const createdUser = await this.userRepository.create(user)

        return {
            message: 'User created successfully',
            data: createdUser,
        }
    }
}
