import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@catch()
export class AllExceptionsFilter implements ExceptionFilter {}
