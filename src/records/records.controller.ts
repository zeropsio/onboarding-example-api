import {
  Controller,
  Get
} from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  findAll() {
    return this.recordsService.findFirst();
  }
}
