import { Body, Controller, Get, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from '@/presenter/controller/filter/http-exception.filter'
import { ApiResponse } from '@/application/interface/api-response'
import { UserDto, UserOutputDto } from '@/application/dto/user.dto'
import { FindAllUsersUsecase } from '@/application/usecase/user/find-all-users.usecase'
import { CreateUsersUsecase } from '@/application/usecase/user/create-users.usecase'

@Controller({ path: 'user', version: '1' })
export class UserController {
    constructor(
        private readonly findAllUser: FindAllUsersUsecase,
        private readonly createProduct: CreateUsersUsecase
    ) {}

    @Get('/')
    @UseFilters(new HttpExceptionFilter())
    public async findAll(): Promise<ApiResponse<UserDto[]>> {
        return this.findAllUser.execute()
    }

    @Post('/')
    @UsePipes(new ValidationPipe())
    @UseFilters(new HttpExceptionFilter())
    public async create(@Body() user: UserDto): Promise<ApiResponse<UserOutputDto>> {
        return this.createProduct.execute(user)
    }
}
