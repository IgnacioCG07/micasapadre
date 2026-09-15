import { PartialType } from '@nestjs/swagger'
import { CreateEmprendedorDto } from './create-emprendedor.dto.js'

export class UpdateEmprendedorDto extends PartialType(CreateEmprendedorDto) {}
