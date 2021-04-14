import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("dummy1", "dummy2", "dummy3", "dummy4", true)).toBeTruthy();
  });
});