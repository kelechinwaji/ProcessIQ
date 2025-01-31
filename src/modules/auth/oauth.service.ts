import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-oauth2';
import { config } from '../../config/config';
import axios from 'axios';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'oauth2') {
  constructor() {
    super({
      authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
      tokenURL: 'https://accounts.google.com/o/oauth2/token',
      clientID: config.oauth.clientId,
      clientSecret: config.oauth.clientSecret,
      callbackURL: 'http://localhost:3000/auth/callback',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    params: any,
    done: VerifyCallback,
  ): Promise<any> {
    try {
      // Manually fetch profile info from Google
      const { data } = await axios.get(
        'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const user = {
        id: data.id,
        displayName: data.name,
        email: data.email,
        photo: data.picture,
      };

      done(null, { accessToken, ...user });
    } catch (error) {
      done(error, null);
    }
  }
}
