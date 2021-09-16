/* eslint-disable jest/expect-expect */

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import DataProvider from './providers/DataProvider';

test('Renderizar sem problemas', () => {
  render(
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>,
  );
});
