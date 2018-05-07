import { Injectable } from '@angular/core';

@Injectable()
export class TestContentService {

  constructor() { }

  getContent(): string {
    return 'Hello from our service!';
  }
}
