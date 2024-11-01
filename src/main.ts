import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const config = app.get<ConfigService>(ConfigService)
    const appPort = config.get('APP_PORT') || 3000

    app.enableCors({
        origin: config.get('CORS_ORIGIN'),
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    })

    app.enableVersioning({
        type: VersioningType.URI,
    })

    const swaggerConfig = new DocumentBuilder()
        .setTitle('XP Games - BFF API')
        .setDescription('API de retorno para provimento de informações para o FrontEnd')
        .setVersion('1.0')
        .addBearerAuth()
        .build()

    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('api', app, document)

    await app.listen(appPort)
    console.log(' ---------------------------------------------------- ')
    console.log(`| ✅ Application is running on: ${await app.getUrl()}/vX/ |`)
    console.log('| Where X is the version of the API.                 |')
    console.log(' ---------------------------------------------------- ')
}
bootstrap()
