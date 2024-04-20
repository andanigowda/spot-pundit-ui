import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor(
    public router: Router,
    private titleService: Title
) {
}

// Get Parent Route if any
parentUrl() {
    return this.router.url.split('/')[1];
}

// Get Child Route if any
childUrl() {
    return this.router.url.split('/')[2];
}

// Get Child Route if any
subChildUrl() {
    return this.router.url.split('/')[3];
}

// Set Title
setTitle(newTitle: string) {
    const title = 'Find A Pandit' +  (newTitle ? ': ' + newTitle : '');
    this.titleService.setTitle(title);
}

// Uppercase First
Ucase(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
}
