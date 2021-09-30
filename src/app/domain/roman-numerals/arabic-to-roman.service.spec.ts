import { TestBed } from '@angular/core/testing';

import { ArabicToRomanService } from './arabic-to-roman.service';

describe('ArabicToRomanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArabicToRomanService = TestBed.get(ArabicToRomanService);
    expect(service).toBeTruthy();
  });

  it('convert numbers from 1 to 4', () => {
    const service: ArabicToRomanService = TestBed.get(ArabicToRomanService);
    const romanNumberOne = service.convertArabicToRoman(2);
    console.log({romanNumberOne});
    expect(romanNumberOne=='I').toBeTruthy();
  });
});
