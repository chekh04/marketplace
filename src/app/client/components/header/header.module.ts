import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})

export class HeaderModule {}
