import { render, screen } from '@testing-library/react';

import ErrorMessage from './index';

describe('Testes do componente <ErrorMessage />', () => {
  it('Deve renderizar por padrão a mensagem: "Servidor não encontrado."', () => {
    render(<ErrorMessage />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Servidor não encontrado.',
    );
  });

  it('Deve renderizar outra a mensagem passada por argumento no lugar da mensagem padrão', () => {
    render(<ErrorMessage message="Outra mensagem." />);

    expect(screen.getByRole('heading')).toHaveTextContent('Outra mensagem.');
  });
});
