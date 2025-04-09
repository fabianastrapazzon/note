import { Controller, Get, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('note') //decorator de classe
export class NoteController {
  @Get('all') //Encontra todos os recados //Decorato método/função
  findAll() {
    return 'Essa rota retorna todos os recados';
  }

  @Get(':id') //Encontra UM recado
  findOne(@Param('id') request: Request) {
    console.log(request);

    return `Essa rota retorna UM recado ID ${request}`;
  }
}
