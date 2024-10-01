import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FunctionsNavigationComponent} from "./functions-navigation/functions-navigation.component";



@NgModule({
  declarations: [
    FunctionsNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FunctionsNavigationComponent
  ]
})
export class FeaturesModule { }
