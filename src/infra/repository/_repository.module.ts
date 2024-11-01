import { Module } from '@nestjs/common'
import { PrismaModule } from '@/infra/database/prisma/prisma.module'
import { ProductRepository } from '@/infra/repository/product.repository'
import { UserRepository } from '@/infra/repository/user.repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

const repositories = [
    PrismaService,
    {
        provide: 'ProductRepositoryInterface',
        useClass: ProductRepository,
    },
    {
        provide: 'UserRepositoryInterface',
        useClass: UserRepository,
    },
]

@Module({
    imports: [PrismaModule],
    providers: [...repositories],
    exports: [...repositories],
})
export class RepositoryModule {}
