import { Module } from '@nestjs/common';
import { CentersService } from './centers.service';
import { CentersController } from './centers.controller';

@Module({
  controllers: [CentersController],
  providers: [CentersService]
})
export class CentersModule {}
