import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response.interface';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );
}
