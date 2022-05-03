import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import {FooterComponent} from "./footer/footer.component";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class LayoutModule { }
