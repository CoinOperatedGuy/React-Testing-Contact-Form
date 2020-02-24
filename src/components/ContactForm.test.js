import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import ContactForm, {errors} from './ContactForm';

test('renders form without crashing', () => {
    render(<ContactForm />);
});

test('labels text', () => {
    const {getByText} = render(<ContactForm />);

    getByText(/First Name/i);
    getByText(/Last Name/i);
    getByText(/Email/i);
    getByText(/Message/i);
});

test('errors in Form', () => {
    const {getByErrors} = render(<ContactForm />)

    if(errors) {
        console.log(true)
    }
});

test('testing input data', () => {
    const {getByText, getByTextId} = render(<ContactForm />);
    const firstNameInput = getByTestId('firstName');
    expect(firstNameInput).ToBeTruthy();
    fireEvent.change(firstNameInput, {target: {value: 'Trevor'}});
    expect(firstNameInput.value).toBe('Trevor');
    fireEvent.click(getByText('submit'));
})