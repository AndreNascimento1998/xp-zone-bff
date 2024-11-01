import { Injectable } from '@nestjs/common'
import { UserRepositoryInterface } from '@/domain/repository/user.repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { User } from '@/domain/entity/users'
import { UserOutputDto, UserDto } from '@/application/dto/user.dto'

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    constructor(private readonly prisma: PrismaService) {}

    async create(user: User): Promise<UserOutputDto> {
        const createdUser = await this.prisma.user.create({ data: user.userPayload })

        return new UserOutputDto(createdUser.id, createdUser.name, createdUser.email)
    }

    async findAll(): Promise<UserDto[]> {
        // return await this.prisma.user.findMany()
        return Promise.resolve([])
    }
}
