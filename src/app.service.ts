import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EntityManager, Connection } from 'typeorm';
import { Record } from './records/records.entity';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly connection: Connection,
  ) {}

  onApplicationBootstrap() {
    this.seed();
  }

  async seed() {
    const seeded = await this.entityManager.query(
      `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'record');`,
    );

    if (seeded?.[0]?.exists === false) {
      console.log('Seeding data for Zerops recipe ⏳');
      await this.connection.synchronize();
      await this.entityManager.save(
        Record,
        { title: 'Hello world', desc: 'This app is just a placeholder for curious folk, create real recipes and examples at <a class="__link" href="https://app.zerops.io/">app.zerops.io</a>' }
      );
      console.log('Done ✅');
    }
  }
}
