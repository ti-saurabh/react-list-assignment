import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import reducers from '../src/appFeatures/item'; // Adjust the path as necessary

// Create the Redux store
const store = configureStore({ reducer: reducers });

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Example assertion (adjust based on what you're testing)
  expect(getByText(/learn react/i)).toBeInTheDocument();
});
