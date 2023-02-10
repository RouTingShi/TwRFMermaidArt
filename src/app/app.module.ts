import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './sharedModule/sharedMaterialModule';
import { HeaderComponent } from './views/header/header.component';
import { ProductDirectoryComponent } from './views/product-directory/product-directory.component';
import { ProductCardComponent } from './views/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDirectoryComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
