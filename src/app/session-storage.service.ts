import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  setItem(key: string, data: any) {
    sessionStorage.setItem(key, data);
  }

  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
