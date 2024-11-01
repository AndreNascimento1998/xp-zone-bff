import { UserDto, UserOutputDto } from '@/application/dto/user.dto'
import { User } from '@/domain/entity/users'

export interface UserRepositoryInterface {
    findAll(): Promise<UserDto[]>
    create(product: User): Promise<UserOutputDto>
}
