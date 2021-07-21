import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DefaultComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,

  ]
})
export class DefaultModule { }
