import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';

describe('SearchBar komponens', () => {
  test('megjeleníti a select mezőket és meghívja a setSzures-t változáskor', () => {
    const szures = { faj: '', nem: '', elerhetoseg: '' };
    const setSzures = jest.fn();
    render(<SearchBar szures={szures} setSzures={setSzures} />);

    expect(screen.getByText(/Összes faj/)).toBeInTheDocument();
    expect(screen.getByText(/Összes nem/)).toBeInTheDocument();

    const selects = screen.getAllByRole('combobox');
    fireEvent.change(selects[0], { target: { value: 'Kutya' } });
    expect(setSzures).toHaveBeenCalled();
  });

  test('ne jeleníti meg a faj selectet ha hideFaj igaz', () => {
    const szures = { faj: '', nem: '', elerhetoseg: '' };
    const setSzures = jest.fn();
    render(<SearchBar szures={szures} setSzures={setSzures} hideFaj={true} />);

    expect(screen.queryByText(/Összes faj/)).not.toBeInTheDocument();
  });
});
