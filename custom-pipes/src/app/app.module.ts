import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadRealPipe } from './pipes/cad-real.pipe';
import { PercentagePipe } from './pipes/percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CadRealPipe,
    PercentagePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
