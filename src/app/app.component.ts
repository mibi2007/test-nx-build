import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  @HostBinding('class') class = 'block w-full h-full';

  title = 'kyons-angular';
  isAuthenticated = true;

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also
      // if (val instanceof NavigationEnd)
      // this.isAuthenticated = this.authService.getToken() !== null;
    });
  }
}
