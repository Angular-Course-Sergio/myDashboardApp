import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css',
})
export default class MaterialComponent {}
