import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//* Material
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TitleComponent } from '@shared/title/title.component';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,

    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css',
})
export default class MaterialComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(OptionsBottomSheetComponent);
  }
}
