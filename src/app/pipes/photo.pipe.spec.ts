import { PhotoPipe } from './photo.pipe';

describe('PhotoPipe', () => {
  it('create an instance', () => {
    const pipe = new PhotoPipe();
    expect(pipe).toBeTruthy();
  });

  it('if there is no URL image it must return "./assets/img/no-image.jpg"', () => {
    const pipe = new PhotoPipe();

    const result = pipe.transform('');

    expect(result).toEqual('./assets/img/no-image.jpg');
  });
});
