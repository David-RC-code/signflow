import { Component, computed, inject } from '@angular/core';
import { Title } from '../title';

@Component({
  imports: [],
  selector: 'app-homepage',
  styleUrl: './homepage.css',
  templateUrl: './homepage.html',
})
export class Homepage {

  protected titleService = inject(Title);

  protected inputValid = computed(() => {
    return this.titleService.title().length >= 4;
  });

  protected inputEmpty = computed(() => {
    return this.titleService.title().length === 0;
  });

}
