import {NgModule} from "@angular/core";
import {ClientComponent} from "./client.component";
import {CommonModule} from "@angular/common";
import {ClientRoutingModule} from "./client-routing.module";
import {HeaderModule} from "./components/header/header.module";
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HeaderModule,
    AngularSvgIconModule
  ]
})

export class ClientModule {}
