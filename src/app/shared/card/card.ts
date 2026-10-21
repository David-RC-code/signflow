import { Component, Input } from '@angular/core';
import { Logo } from '../logo/logo';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Logo, RouterLink],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  @Input() title = '';
  @Input() footerText = '';
  @Input() footerRoute ='';

}
