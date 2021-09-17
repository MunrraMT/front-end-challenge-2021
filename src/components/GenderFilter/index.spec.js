import { render, screen } from '@testing-library/react';

import DataProvider from '../../providers/DataProvider';
import GenderFilter from './index';

describe('Testes do componente <GenderFilter />', () => {
  it('Deve renderizar um título H3', () => {
    render(
      <DataProvider>
        <GenderFilter />
      </DataProvider>,
    );

    expect(screen.getByRole('heading').tagName).toEqual('H3');
  });

  it('Deve renderizar 3 input radio', () => {
    render(
      <DataProvider>
        <GenderFilter />
      </DataProvider>,
    );

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('Deve renderizar os input radio com os labels: "Todos, Masculino e Feminino"', () => {
    render(
      <DataProvider>
        <GenderFilter />
      </DataProvider>,
    );

    expect(screen.getByRole('radio', { name: 'Todos' })).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: 'Masculino' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Feminino' })).toBeInTheDocument();
  });
});
