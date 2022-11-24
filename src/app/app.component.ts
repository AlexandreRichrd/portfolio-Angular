import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @HostListener('window:scroll') onScroll(e: Event): void {
    document.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        this.scroll = false
      }else{
        this.scroll = true
      }
    })
  }
  
  scroll: boolean = false

}
