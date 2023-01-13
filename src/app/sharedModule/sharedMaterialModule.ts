import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [MatMenuModule] // 在export
})
export class SharedMaterialModule {}