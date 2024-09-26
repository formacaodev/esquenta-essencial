import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class CacheProvider implements OnModuleDestroy {
  private readonly db: Redis;

  constructor() {
    this.db = new Redis({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    });
  }

  onModuleDestroy(): void {
    this.db.disconnect();
  }

  async salvar(chave: string, valor: any): Promise<void> {
    await this.db.set(chave, JSON.stringify(valor));
  }

  async salvarPorId(tipo: string, id: number, valor: any): Promise<void> {
    await this.db.set(`${tipo}:${id}`, JSON.stringify(valor));
    await this.atualizarIds(tipo, id);
  }

  async obter(chave: string): Promise<any> {
    const valor = await this.db.get(chave);
    return JSON.parse(valor);
  }

  async obterPorId(tipo: string, id: number): Promise<any> {
    const valor = await this.db.get(`${tipo}:${id}`);
    return JSON.parse(valor);
  }

  async obterTodos(tipo: string): Promise<any[]> {
    const ids = await this.db.get(tipo);
    const idsArray = ids ? JSON.parse(ids) : [];

    const valores = await Promise.all(
      idsArray.map(async (id: number) => {
        const valor = await this.obterPorId(tipo, id);
        return valor;
      }),
    );

    return valores;
  }

  private async atualizarIds(tipo: string, id: number): Promise<void> {
    const ids = await this.db.get(tipo);

    const idsArray = ids ? JSON.parse(ids) : [];
    if (idsArray.includes(id)) return;

    idsArray.push(+id);
    idsArray.sort();

    await this.db.set(tipo, JSON.stringify(idsArray));
  }
}
