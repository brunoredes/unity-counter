import { TraitsSeparatorPipe } from './traits-separator.pipe';

describe('TraitsSeparatorPipe', () => {
  it('create an instance', () => {
    const pipe = new TraitsSeparatorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should separate words using pipe |', () => {
    const pipe = new TraitsSeparatorPipe();
    const words = ['Mirage', 'Dragon'];

    const transformedWords = pipe.transform(words);

    expect(transformedWords).toBe('Mirage | Dragon');
  });
});
