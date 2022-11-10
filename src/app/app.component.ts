import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photoservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  showThumbnails = true;
  autoPlay = false;

  constructor(private photoService: PhotoService,
              private changeDetector: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.photoService.getImages().then((images) => {
      this.images = images;
    });
  }

  toggleShowThumbnails() {
    this.showThumbnails = !this.showThumbnails;
    // ChangeDetector is not really necessary
    this.changeDetector.detectChanges();
  }

  toggleAutoPlay() {
    this.autoPlay = !this.autoPlay;
    // ChangeDetector is not really necessary
    this.changeDetector.detectChanges();
  }
}
