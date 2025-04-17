import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteEntity } from './entities/note.entity';

@Injectable()
export class NoteService {
  private lastId = 1;
  private notes: NoteEntity[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundException() {
    throw new NotFoundException('Recado não encontrado.');
  }

  findall() {
    return this.notes;
  }
  findOne(id: string) {
    const note = this.notes.find((item) => item.id == +id);

    if (note) return note;
    //throw new HttpException('Recado não encontrado.', HttpStatus.NOT_FOUND);
    //throw new NotFoundException('Recado não encontrado.');
    this.throwNotFoundException();
  }
  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const newNote = {
      id,
      ...body,
    };
    this.notes.push(newNote);
    return newNote;
  }
  update(id: string, body: any) {
    const noteExistenteIndex = this.notes.findIndex((item) => item.id === +id);

    if (noteExistenteIndex < 0) {
      this.throwNotFoundException();
    }
    const noteExistente = this.notes[noteExistenteIndex];

    this.notes[noteExistenteIndex] = {
      ...noteExistente,
      ...body,
    };
    return this.notes[noteExistenteIndex];
  }
  remove(id: string) {
    const noteExisteIndex = this.notes.findIndex((item) => item.id === +id);
    if (noteExisteIndex < 0) {
      this.throwNotFoundException();
    }
    const note = this.notes[noteExisteIndex];

    this.notes.splice(noteExisteIndex, 1);

    return note;
  }
  hello() {
    return 'Hello world';
  }
}
