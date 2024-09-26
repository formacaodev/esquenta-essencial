import { Body, Controller, Get, Post } from '@nestjs/common';
import { CacheProvider } from 'src/db/cache.provider';
import Usuario from './usuario.entity';
import { IdService } from 'src/db/id.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(
    private readonly cache: CacheProvider,
    private readonly idService: IdService,
  ) {}

  @Get()
  async obterTodos() {
    return this.cache.obterTodos('usuario');
  }

  @Post()
  async salvar(@Body() usuario: Usuario): Promise<void> {
    const id = await this.idService.gerarId();
    return this.cache.salvarPorId('usuario', id, {
      ...usuario,
      id,
    });
  }
}
