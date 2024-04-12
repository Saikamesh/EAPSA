import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.css',
})
export class DisclaimerComponent {
  constructor(private readonly router: Router) {}

  onClickStart() {
    this.router.navigate(['/general']);
  }
}
