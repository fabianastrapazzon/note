import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note') //decorator de classe
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('all') //Encontra todos os recados //Decorato método/função
  findAll(@Query() pagination: any) {
    //console.log(pagination);
    const { offset = 1, limit = 0 } = pagination;
    return this.noteService.findall();
    //return `Essa rota retorna todos os recados. Limmit = ${limit}, Offset = ${offset}`;
  }

  @Get(':id') //Encontra UM recado
  findOne(@Param('id') request: string) {
    console.log(request);
    return this.noteService.findOne(request);
    //return `Essa rota retorna UM recado ID ${request}`;
  }

  @Post('create')
  create(@Body() request: any) {
    console.log(request);

    //return `Essa rota cria recados`;
    return this.noteService.create(request);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.noteService.update(id, body);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(id);
  }
}
