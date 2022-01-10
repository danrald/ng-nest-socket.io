import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    let thing = "nice";

    var returnvalues = thing;

    

    return 'Hello World!';
  }
}
