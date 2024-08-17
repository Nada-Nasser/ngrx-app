import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './guide/counter.reducer';
import { AppCounterComponent } from './cm/app-counter/app-counter.component';
import { LoginPageComponent } from './cm/login-page/login-page.component';

import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [
    AppComponent, 
    AppCounterComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({ count: counterReducer }),
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}