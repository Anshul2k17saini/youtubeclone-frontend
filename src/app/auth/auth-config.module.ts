import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-rviuc3f2ps5ucw51.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'OKSREi4axHN96YNPcSrLvKYs2H4Li7qL',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            secureRoutes:['http//localhost:8080/'],
            customParamsAuthRequest:{
                audience:'http://localhost:8080/'
            }
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
  