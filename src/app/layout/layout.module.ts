import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../shared/shared.module";
import {FeaturesModule} from "../features/features.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainComponent
  ]
})
export class LayoutModule { }
