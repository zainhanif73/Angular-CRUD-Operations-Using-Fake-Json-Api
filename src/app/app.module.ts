import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './App-components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './angular-material/mat.module';
import { HeaderComponent } from './includes/login-header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './student-dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { LogoutheaderComponent } from './logoutheader/logoutheader.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LogoutComponent,
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    LogoutheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
