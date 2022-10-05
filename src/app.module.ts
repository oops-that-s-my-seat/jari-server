import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
import { SetsModule } from './sets/sets.module';
import { CentersModule } from './centers/centers.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { User } from './users/entities/user.entity';
import { Exercise } from './exercises/entities/exercise.entity';
import { Set } from './sets/entities/set.entity';
import { Center } from './centers/entities/center.entity';
import { Equipment } from './equipments/entities/equipment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootjanghan',
      database: 'jari-test',
      entities: [User, Exercise, Set, Center, Equipment],
      synchronize: true,  
    }),
    UsersModule,
    ExercisesModule,
    SetsModule,
    CentersModule,
    EquipmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
