import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText('Welcome to my DevOps Project');
  expect(welcomeElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('This demonstates the completed pipeline.');
  expect(descriptionElement).toBeInTheDocument();
});

test('renders simple description', () => {
  render(<App />);
  const descriptionElement = screen.getByText('Flows!!!');
  expect(descriptionElement).toBeInTheDocument();
});
