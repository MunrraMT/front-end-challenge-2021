import { render, screen } from '@testing-library/react';

import Header from './index';

describe('Testes do componente <Header />', () => {
  it('Deve renderizar 2 imagens', () => {
    render(<Header />);

    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('Deve renderizar um título H1', () => {
    render(<Header />);

    expect(screen.getByRole('heading').tagName).toEqual('H1');
  });
});
