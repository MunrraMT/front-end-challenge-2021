import { render } from '@testing-library/react';

import App from './App';
import DataProvider from './providers/DataProvider';

test('Renderizar sem problemas', () => {
  render(
    <DataProvider>
      <App />
    </DataProvider>,
  );
  expect(1).toBeTruthy();
});
