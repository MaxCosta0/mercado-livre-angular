import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from './menu/menu.component'
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent, ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mercado-livre-angular';
}
