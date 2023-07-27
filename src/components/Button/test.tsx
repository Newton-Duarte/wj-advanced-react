import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button />);

    expect(screen.getByText('Button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
