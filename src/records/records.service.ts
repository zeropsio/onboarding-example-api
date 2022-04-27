import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './records.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>
  ) {}

  async findFirst(): Promise<Record> {
    const records = await this.recordsRepository.find();
    return records[0];
  }
}
