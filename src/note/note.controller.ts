import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Post('create')
  create(@Body('nova chave') request: any) {
    console.log(request);

    //return `Essa rota cria recados`;
    return request;
  }

  @Patch('update/:id')
  update(@Param('id') id: Request, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete('remove/:id')
  remove(@Param('id') id: Request) {
    return `O recado de ID ${id} foi deletado`;
  }
}
