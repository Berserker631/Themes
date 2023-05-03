import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Themes';
  showMenu = false;
  menu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  dropDownMenu() {
    this.menu = !this.menu;
  }

  storedTheme: string | null = localStorage.getItem('themeColor');
  constructor() { }
  ngOnInit() { }

  setTheme(theme) {
    localStorage.setItem('themeColor', theme);
    this.storedTheme = localStorage.getItem('themeColor');
  }
  // test() {
  // }
  // @ViewChild('grid', { static: false }) popo!: ElementRef;
  // constructor() {

  // }

  // ngAfterViewInit() {
  //   console.log();

  //   let x = this.popo.nativeElement;
  //   x.querySelector('.sqrSolidDark').style.backgroundColor = 'red';
  // }
  // styleExp = 'red';


}
