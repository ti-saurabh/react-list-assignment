import itemsReducer, { setSearchTerm } from './item';

describe('items reducer', () => {
  it('should handle initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual({
      list: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      searchTerm: '',
    });
  });

  it('should handle setSearchTerm', () => {
    const previousState = { list: ['Item 1'], searchTerm: '' };
    expect(itemsReducer(previousState, setSearchTerm('Test'))).toEqual({
      list: ['Item 1'],
      searchTerm: 'Test',
    });
  });
});
