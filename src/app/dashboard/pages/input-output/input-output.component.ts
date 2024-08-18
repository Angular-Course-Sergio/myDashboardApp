import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCardComponent } from '@dashboardPages/ui/product-card/product-card.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, TitleComponent, ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent {}
