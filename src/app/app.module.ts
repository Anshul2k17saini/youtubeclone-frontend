import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './header/header.component'
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { SaveVideoDetailsComponent } from './save-video-details/save-video-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule}  from '@angular/material/input'
import {MatChipsModule}  from  '@angular/material/chips'
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AuthInterceptor, AuthModule, OidcSecurityService} from 'angular-auth-oidc-client';
import { AuthConfigModule } from './auth/auth-config.module';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule}  from  "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { FeaturedComponent } from './featured/featured.component';
import { VideoCardComponent } from './video-card/video-card.component';
import {MatCardModule} from '@angular/material/card';
import { CallbackComponent } from './callback/callback.component';
import { CommentsComponent } from './comments/comments.component';
import { MatMenuModule}  from '@angular/material/menu'



@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent,
    HeaderComponent,
    SaveVideoDetailsComponent,
    VideoPlayerComponent,
    VideoDetailComponent,
    HomeComponent,
    HistoryComponent,
    SubscriptionsComponent,
    LikedVideosComponent,
    SidebarComponent,
    FeaturedComponent,
    VideoCardComponent,
    CallbackComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AuthModule,
    AuthConfigModule, 
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
