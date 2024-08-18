import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    { id: 1, name: 'Producto 1', quantity: 1 },
    { id: 2, name: 'Producto 2', quantity: 1 },
    { id: 3, name: 'Producto 3', quantity: 1 },
    { id: 4, name: 'Producto 4', quantity: 1 },
  ]);

  private intervalSuscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Producto ${products.length + 1}`,
            quantity: 1,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  ngOnDestroy(): void {
    this.intervalSuscription.unsubscribe();
  }
}
