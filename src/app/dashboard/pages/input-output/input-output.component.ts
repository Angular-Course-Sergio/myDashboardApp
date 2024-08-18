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
    { id: 1, name: 'Producto 1', quantity: 0 },
    { id: 2, name: 'Producto 2', quantity: 0 },
    { id: 3, name: 'Producto 3', quantity: 0 },
    { id: 4, name: 'Producto 4', quantity: 0 },
  ]);

  private intervalSuscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Producto ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  ngOnDestroy(): void {
    this.intervalSuscription.unsubscribe();
  }

  public updateProduct(product: Product, quantity: number) {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
    );
  }
}
