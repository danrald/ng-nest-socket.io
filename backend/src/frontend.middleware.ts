import { NestMiddleware, Injectable } from '@nestjs/common';
import {Request, Response} from "express"
import { resolve } from 'path';
import * as express from 'express';

const allowedExtentions = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

//const prefix = apiPrefix;

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const { baseUrl } = req;


    if (baseUrl.indexOf("prefix") === 0) {
      next();
    } else if (
      allowedExtentions.filter(extention => baseUrl.indexOf(extention) > 0).length > 0
    ) {
      res.sendFile(resolve(`./dist/client/${baseUrl}`));
    } else {
      res.sendFile(resolve('./dist/client/index.html'));
    }

    // console.log("Hit the request");
    // res.sendFile(resolve('../frontend/dist/frontend/index.html'));
  }
}