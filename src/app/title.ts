import { Service, signal } from '@angular/core';

@Service()
export class Title {
    public readonly title = signal('SignFlow');

    public changeTitle(newTitle: string) {
        this.title.set(newTitle);
  }
}
