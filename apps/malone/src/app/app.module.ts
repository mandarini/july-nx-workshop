import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {StoreUiSharedModule} from "@bg-hoard/store/ui-shared";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, StoreUiSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
