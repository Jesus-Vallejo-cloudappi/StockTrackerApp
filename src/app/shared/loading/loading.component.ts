import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  loading: boolean = false;

  constructor(private loadingService: LoadingService) {

    this.loadingService.loadingSubject.subscribe((value: boolean) => {
      this.loading = value;
    });
  }
}