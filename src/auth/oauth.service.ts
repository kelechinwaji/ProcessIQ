import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
console.log(process.env.OAUTH_CLIENT_ID,'process.env.OAUTH_CLIENT_ID');
@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      authorizationURL: 'https://provider.com/oauth/authorize',
      tokenURL: 'https://provider.com/oauth/token',
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/callback',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    // Handle user validation or save user info in DB
    return { accessToken, profile };
  }
}
