import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import DataProvider from '../../providers/DataProvider';
import LoadingMore from './index';

describe('Testes do componente <LoadingMore />', () => {
  const server = setupServer(
    rest.get('https://randomuser.me/api/', (req, res, ctx) =>
      res(
        ctx.json({
          results: [{}],
          page: 0,
          info: { seed: 'abc' },
        }),
      ),
    ),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Deve renderizar um botão com um texto', () => {
    render(
      <DataProvider>
        <LoadingMore />
      </DataProvider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(
      'Carregar mais pacientes',
    );
  });

  it('Deve renderizar o componente <Loading /> ao ser clicado', async () => {
    render(
      <DataProvider>
        <LoadingMore />
      </DataProvider>,
    );

    act(() => {
      userEvent.click(screen.getByRole('button'));
    });

    const loadingImg = screen.getByRole('img');

    expect(loadingImg).toHaveAttribute('alt', 'Imagem de Loading');
  });

  it('Deve renderizar o componente <ErrorMessage /> se a chamada GET retornar inválida', async () => {
    server.use(
      rest.get('https://randomuser.me/api/', (req, res, ctx) =>
        res(ctx.status(404)),
      ),
    );

    render(
      <DataProvider>
        <LoadingMore />
      </DataProvider>,
    );

    act(() => {
      userEvent.click(screen.getByRole('button'));
    });

    const errorText = await screen.findByRole('heading');

    expect(errorText).toHaveTextContent('Servidor não encontrado.');
  });
});
