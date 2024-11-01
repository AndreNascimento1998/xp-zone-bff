import { Module } from '@nestjs/common'
import { HealthUsecase } from './health/health.usecase'
import { CreateProductUsecase } from '@/application/usecase/product/create-product.usecase'
import { FindAllUsersUsecase } from '@/application/usecase/user/find-all-users.usecase'
import { CreateUsersUsecase } from '@/application/usecase/user/create-users.usecase'
import { RepositoryModule } from '@/infra/repository/_repository.module'
import { FindAllProductsUsecase } from '@/application/usecase/product/find-all-products.usecase'
import { FindProductByIdUsecase } from '@/application/usecase/product/find-product-by-id.usecase'

const useCases = [
    HealthUsecase,
    CreateProductUsecase,
    FindAllProductsUsecase,
    FindProductByIdUsecase,
    FindAllUsersUsecase,
    CreateUsersUsecase,
]

@Module({
    imports: [RepositoryModule],
    providers: [...useCases],
    exports: [...useCases],
})
export class UsecaseModule {}
