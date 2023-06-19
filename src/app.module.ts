import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentModule } from './student/student.module'
import { LocalModule } from './local/local.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    StudentModule,
    LocalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
