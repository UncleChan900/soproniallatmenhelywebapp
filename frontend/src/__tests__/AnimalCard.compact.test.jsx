import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnimalCard from '../components/AnimalCard';

describe('AnimalCard tömör nézet', () => {
  test('megjeleníti a tömör kártyát és kezeli a kattintást', () => {
    const a = { id: 2, nev: 'Mini', statusz: 'függőben', kep: null };
    const handle = jest.fn();
    render(<AnimalCard allat={a} compact={true} onSelect={handle} />);
    expect(screen.getByText('Mini')).toBeInTheDocument();
  screen.getByText('Mini').parentElement.click();
    expect(handle).toHaveBeenCalledWith(a);
  });
});
