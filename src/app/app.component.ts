import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';
import { AddCardComponent } from './components/add-card/add-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    BoardComponent,
    ColumnComponent,
    CardComponent,
    AddCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mylilassistant';
}
