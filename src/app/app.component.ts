import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycalcComponent } from "./mycalc/mycalc.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MycalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator';
}
