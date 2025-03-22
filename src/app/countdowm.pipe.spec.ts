import { CountdowmPipe } from './countdowm.pipe';

describe('CountdowmPipe', () => {
  let pipe: CountdowmPipe;

  beforeEach(() => {
    pipe = new CountdowmPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "0 days, 0 h, 0 m, 0 s" for 0 seconds', () => {
    expect(pipe.transform(0)).toBe('0 days, 0 h, 0 m, 0 s');
  });

  it('should transform 86461 seconds correctly', () => {
    expect(pipe.transform(86461)).toBe('1 days, 0 h, 1 m, 1 s');
  });
});
