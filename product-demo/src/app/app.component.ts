import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductListComponent } from './products/product-list/product-list.component';
// It is safer to declare above directives and pipes in root module

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PriceFormatPipe, HighlightDirective, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// @NgModule({
//   declarations: [AppComponent],
//   imports: [RouterOutlet, PriceFormatPipe, HighlightDirective, ProductListComponent],
//   bootstrap: [AppComponent]
// })


export class AppComponent {
  title = 'product-demo';
}
