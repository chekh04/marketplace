import {NgModule} from "@angular/core";
import {ClientComponent} from "./client.component";
import {CommonModule} from "@angular/common";
import {ClientRoutingModule} from "./client-routing.module";
import {HeaderModule} from "./components/header/header.module";

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HeaderModule
  ]
})

export class ClientModule {}
