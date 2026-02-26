import { render, screen } from '@testing-library/react';
import App from '../App';

/**
 * Tests del componente App.
 */
describe('App', () => {
  it('renderiza la página de inicio', () => {
    render(<App />);
    expect(screen.getByText(/Caso de Uso - Hooks/i)).toBeInTheDocument();
  });
});
