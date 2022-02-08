import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignatureComponent } from './components/signature/signature.component';
import { StringPipe } from './pipes/string.pipe';
import { SlicerestPipe } from './pipes/slicerest.pipe';
import { SignatureListComponent } from './signature-list/signature-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent,
    StringPipe,
    SlicerestPipe,
    SignatureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
