import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-hoard-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  @Input() test = 'Hello One';
}
