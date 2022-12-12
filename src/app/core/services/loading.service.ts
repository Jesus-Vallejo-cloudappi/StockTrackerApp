import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject = new Subject<boolean>();

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}