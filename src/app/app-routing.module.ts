import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDirectoryComponent } from './views/product-directory/product-directory.component';

const routes: Routes = [
  // { path: 'index', component: IndexComponent }
  { path: 'productDirctory', component: ProductDirectoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
