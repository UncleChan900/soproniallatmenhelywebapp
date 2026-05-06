import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnimalCard from '../components/AnimalCard';

describe('AnimalCard komponens', () => {
  const base = {
    id: 1,
    nev: 'Buksi',
    faj: 'Kutya',
    fajta: 'keverék',
    kor: 3,
    nem: 'Hím',
    statusz: 'elérhető',
    leiras: 'Barátságos kutya',
    kep: '/uploads/kuty/kep1.jpg'
  };

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test('megjeleníti az alap információkat és a kedvenc gombot', () => {
    render(<AnimalCard allat={base} showFavoriteButton={true} />);
    expect(screen.getByText('Buksi')).toBeInTheDocument();
    expect(screen.getByText('Kutya')).toBeInTheDocument();
    expect(screen.getByText('keverék')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Kedvencekhez/i })).toBeInTheDocument();
  });

  test('hozzáadja a kedvencekhez', () => {
    window.alert = jest.fn();
    render(<AnimalCard allat={base} showFavoriteButton={true} />);
    fireEvent.click(screen.getByRole('button', { name: /Kedvencekhez/i }));
    const favs = JSON.parse(localStorage.getItem('kedvencek'));
    expect(favs).toHaveLength(1);
    expect(favs[0].nev).toBe('Buksi');
    expect(window.alert).toHaveBeenCalled();
  });
});
