import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent {}
