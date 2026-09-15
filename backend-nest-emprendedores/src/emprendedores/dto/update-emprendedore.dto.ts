import { PartialType } from '@nestjs/swagger';
import { CreateEmprendedoreDto } from './create-emprendedore.dto.js';

export class UpdateEmprendedoreDto extends PartialType(CreateEmprendedoreDto) {}
