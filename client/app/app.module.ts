import { GlobalService } from './services/global.service';
import { AddApartmentsComponent } from './add-apartments/add-apartments.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Import relevant http modules
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    AddApartmentsComponent
  ],
  imports: [ 
    RoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule,
    NguiAutoCompleteModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    GlobalService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
