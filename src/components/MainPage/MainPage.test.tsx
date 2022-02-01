import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MainPage from './MainPage';

const MOCK_CARD_TEXT = 'Welcome';

describe('MainPage component unit tests', () => {
    test('Renders without crashing', () => {
        const { getByText } = render(<MainPage />);

        expect(getByText(MOCK_CARD_TEXT)).toBeInTheDocument();
    });
});