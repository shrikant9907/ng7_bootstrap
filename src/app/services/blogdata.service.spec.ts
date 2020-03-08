import { TestBed } from '@angular/core/testing';

import { BlogdataService } from './blogdata.service';

describe('BlogdataService', () => {
  let service: BlogdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
