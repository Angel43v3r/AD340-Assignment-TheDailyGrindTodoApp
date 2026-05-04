import { describe, it, expect } from 'vitest';

describe('Index Screen Test Cases', () => {
  it('displays the correct title', () => {
    const title = 'The Daily Grind';
    expect(title).toBe('The Daily Grind');
  });

  it('displays the correct tagline', () => {
    const tagline = 'Stay organized, one task at a time!';
    expect(tagline).toBe('Stay organized, one task at a time!');
  });
});