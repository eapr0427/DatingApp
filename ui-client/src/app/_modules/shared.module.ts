import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }) //ForRoot significa que tiene algunos servicios o componentes que necesita inicializar junto con el módulo roots
  ],
  exports: [
    BsDropdownModule,
    ToastrModule
  ]

})
export class SharedModule { }
