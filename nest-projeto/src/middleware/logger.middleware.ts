import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request... ${req.url}`);
    console.time('Duracao');
    next();
    console.timeEnd('Duracao');
  }
}
