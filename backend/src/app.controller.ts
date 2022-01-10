import { Controller, Get, Res } from '@nestjs/common';
//import path from 'path';
import { pathToFileURL } from 'url';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//   @Get()
//   root(@Res() response): void {
//  //   response.sendFile(path.resolve('../../'))
//   }

  @Get()
  getHello(): string {
  console.log(process.env);
    console.log(__dirname);
    return this.appService.getHello();
  }
}
