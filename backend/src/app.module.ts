import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { FrontendMiddleware } from './frontend.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(frontEnd: MiddlewareConsumer)
  {
    frontEnd.apply(FrontendMiddleware).forRoutes(
      {
        path: '/**',
        method: RequestMethod.ALL,
        
      }
    );

  }

}
