import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import produtos from 'src/constants/produtos';
import Produto from './produto.entity';

@Controller('produtos')
export class ProdutoController {
  @Get('ping')
  ping(): string {
    return 'Pong';
  }

  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return produtos;
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto> {
    return produtos.find((produto) => produto.id === +id);
  }

  @Post()
  async criar(@Body() produto: Produto): Promise<void> {
    produtos.push({
      ...produto,
      id: produto.id ? produto.id : produtos.length + 1,
    });
  }

  @Patch()
  async atualizar(@Body() produto: Partial<Produto>): Promise<void> {
    const index = produtos.findIndex((p) => p.id === +produto.id);
    produtos[index] = { ...produtos[index], ...produto };
  }

  @Delete(':id')
  async excluir(@Param('id') id: string): Promise<void> {
    const index = produtos.findIndex((p) => p.id === +id);
    produtos.splice(index, 1);
  }
}
