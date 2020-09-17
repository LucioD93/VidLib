import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeModule
  ]
})
export class PagesModule { }
