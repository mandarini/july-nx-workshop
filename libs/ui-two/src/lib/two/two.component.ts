import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-hoard-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  @Input() test = 'Hello Two';
  @Input() count = 1;
}
