import { Module } from '@nestjs/common';
import { NoteModule } from 'src/note/note.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
