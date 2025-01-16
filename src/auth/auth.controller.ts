import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  login() {
    // This redirects the user to the OAuth provider
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  callback(@Req() req) {
    // Handle the callback and return user info
    return req.user;
  }
}
