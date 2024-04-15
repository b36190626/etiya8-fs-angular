import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'etiya-fs-angular';

  onButtonClick() {
    console.log('Button clicked');
  }
}
