import { render, screen } from '@testing-library/react';

import ImageCircle from './index';

describe('Testes do componente <ImageCircle />', () => {
  it('Deve renderizar 1 imagens com alt: "test"', () => {
    render(<ImageCircle src="/" alt="test" />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'test');
  });

  it('Deve renderizar 1 imagens com tamanho: 100x100', () => {
    render(<ImageCircle src="/" alt="test" width="100" />);

    expect(screen.getByRole('img')).toHaveAttribute('width', '100');
    expect(screen.getByRole('img')).toHaveAttribute('height', '100');
  });

  it('Deve renderizar 1 imagens com a classe: "test"', () => {
    render(<ImageCircle src="/" alt="test" ClassName="test" />);

    expect(screen.getByRole('img')).toHaveClass('test');
  });
});
