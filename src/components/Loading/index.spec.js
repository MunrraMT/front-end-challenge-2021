import { render, screen } from '@testing-library/react';

import Loading from './index';

describe('Testes do componente <Loading />', () => {
  it('Deve renderizar 1 imagens com alt: "Imagem de Loading"', () => {
    render(<Loading />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Imagem de Loading');
    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'Imagem de Loading',
    );
  });
});
