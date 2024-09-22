import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ItemList from './itemList';

test('renders item list', () => {
  render(
    <Provider store={store}>
      <ItemList />
    </Provider>
  );
  const listElement = screen.getByText(/Item 1/i);
  expect(listElement).toBeInTheDocument();
});
