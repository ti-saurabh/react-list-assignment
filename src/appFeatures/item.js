import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: ['Item 1', 'Item 2', 'Item 3', 'Item 4', ],
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
});

export const { setSearchTerm } = itemsSlice.actions;

export const selectFilteredItems = (state) => {
  const { list, searchTerm } = state.items;
  return list.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default itemsSlice.reducer;
