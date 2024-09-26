import { Injectable } from '@nestjs/common';
import { CacheProvider } from './cache.provider';

@Injectable()
export class IdService {
  constructor(private readonly cache: CacheProvider) {}

  async gerarId(): Promise<number> {
    const id = await this.cache.obter('id');
    const novoId = id ? +id + 1 : 1;
    await this.cache.salvar('id', novoId);
    return +novoId;
  }
}
