import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Themes';
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  test() {
    let grid = document.querySelector('.gridBlock');

  }
  @ViewChild('grid', { static: false }) popo!: ElementRef;
  constructor() {

  }

  ngAfterViewInit() {
    console.log();

    let x = this.popo.nativeElement;
    x.querySelector('.borderSquareButton').style.backgroundColor = "red";
  }
  // styleExp = 'red';


}
