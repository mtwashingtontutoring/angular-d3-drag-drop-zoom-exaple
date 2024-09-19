import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScatterGraphComponent } from "./components/scatter-graph/scatter-graph.component";
import { ScatterTableComponent } from "./components/scatter-table/scatter-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScatterGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drag-drop-zoom-example';  
  
  public data = [
    {x: 1, y: 1, r: 10},
    {x: 2, y: 2, r: 20},
    {x: 3, y: 3, r: 30},
    {x: 4, y: 4, r: 40},
    {x: 5, y: 5, r: 50},
    {x: 6, y: 6, r: 60},
    {x: 7, y: 7, r: 70},
    {x: 8, y: 8, r: 80},
    {x: 9, y: 9, r: 90},
  ]

  onUpdate() {
  }
}
