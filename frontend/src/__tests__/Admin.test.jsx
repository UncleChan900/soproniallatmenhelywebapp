import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Admin from '../pages/Admin';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../api', () => ({
  get: (path) => {
    if (path === '/allatok') return Promise.resolve({ data: [] });
    if (path === '/orokbefogadas') return Promise.resolve({ data: [] });
    return Promise.resolve({ data: [] });
  },
  put: () => Promise.resolve(),
  delete: () => Promise.resolve()
}));

describe('Admin felület', () => {
  beforeEach(() => {
    sessionStorage.setItem('role', 'admin');
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  test('megjeleníti az admin fejlécet és a kijelentkezés gombot', async () => {
    render(<MemoryRouter><Admin /></MemoryRouter>);
    expect(await screen.findByText(/Admin felület/)).toBeInTheDocument();
    expect(screen.getByText(/Kijelentkezés/)).toBeInTheDocument();
  });

  test('megjeleníti az üres listákhoz tartozó üzeneteket, ha nincs adat', async () => {
    render(<MemoryRouter><Admin /></MemoryRouter>);
    expect(await screen.findByText(/Nincs fügő kérelmünk.|Nincs kutya a listában.|Nincs macska a listában./)).toBeTruthy();
  });
});
