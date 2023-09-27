import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  @Input() sideNavStatus: boolean = true;
  menuStatus: boolean;

  activeLink: string = null;

  constructor(
    // private authService: AuthService
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink();
      }
    });
  }

  setActiveLink(): void {
    const activeChild = this.activatedRoute.snapshot.firstChild;
    if (activeChild) {
      const { data } = activeChild.routeConfig;
      if (data && data['activeLink']) {
        this.activeLink = data['activeLink'];
        return;
      }
    }
    this.activeLink = null;
  }

  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}
