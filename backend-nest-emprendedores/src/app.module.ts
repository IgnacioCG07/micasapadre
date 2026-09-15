import 'dotenv/config'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Emprendedor } from './emprendedores/entities/emprendedor.entity.js'
import { EmprendedoresModule } from './emprendedores/emprendedores.module.js'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'data.db',
      entities: [Emprendedor],
      synchronize: true
    }),
    EmprendedoresModule
  ],
})
export class AppModule {}
