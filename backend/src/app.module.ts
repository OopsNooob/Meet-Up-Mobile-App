import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { MeetupsModule } from './modules/meetups/meetups.module.js';
import { LocationModule } from './modules/location/location.module.js';

@Module({
  imports: [AuthModule, UsersModule, MeetupsModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
