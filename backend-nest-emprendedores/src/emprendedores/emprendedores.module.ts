import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmprendedoresController } from './emprendedores.controller.js'
import { EmprendedoresService } from './emprendedores.service.js'
import { Emprendedor } from './entities/emprendedor.entity.js'

@Module({
  imports: [TypeOrmModule.forFeature([Emprendedor])],
  controllers: [EmprendedoresController],
  providers: [EmprendedoresService],
})
export class EmprendedoresModule {}
