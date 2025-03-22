import { TestBed } from '@angular/core/testing';
import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageService);
    sessionStorage.clear();
  });

  it('should store and retrieve an item', () => {
    const key = 'testKey';
    const value = 'testValue';
    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
  });

  it('should return null for a non-existing key', () => {
    expect(service.getItem('nonExistingKey')).toBeNull();
  });
});
