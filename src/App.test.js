import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText('Rishabh Srivastava');
  expect(welcomeElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('The Jenkins pipeline demonstrated here showcases a complete Continuous Integration and Continuous Deployment (CI/CD) workflow.');
  expect(descriptionElement).toBeInTheDocument();
});

