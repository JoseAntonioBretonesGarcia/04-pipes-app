import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [ButtonModule, ToastModule, MenubarModule],
})
export class PrimeNgModule {}
