import { NextFunction, Request, RequestHandler, Response } from "express";

export const requestInterceptor: RequestHandler = (request: Request, response: Response, next: NextFunction): any => {
  console.info(`➡ [${request.method}] ${request.originalUrl} ${JSON.stringify(request.body)}`);
  next();
}