import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ListComponent } from './pages/list/list.component';
import { ProductRoutingModule } from './products-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
    declarations: [
        LayoutComponent,
        ListComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ProductRoutingModule
    ]
})
export class ProductModule { }