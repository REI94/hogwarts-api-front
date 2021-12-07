import { NoAgePipe } from './no-age.pipe';

describe('NoAgePipe', () => {
  it('create an instance', () => {
    const pipe = new NoAgePipe();
    expect(pipe).toBeTruthy();
  });

  it('if there is NaN age then it returns empty string', () => {
    const pipe = new NoAgePipe();

    const result = pipe.transform(NaN);

    expect(result).toEqual('');
  });
});
