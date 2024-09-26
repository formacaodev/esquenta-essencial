import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ProdutoModule, ConfigModule.forRoot(), DbModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
