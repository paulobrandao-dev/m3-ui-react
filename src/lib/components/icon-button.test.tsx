import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { IconButton } from './icon-button'

describe('IconButton component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly with default props', () => {
    render(<IconButton aria-label='favorite' />)
    const button = screen.getByRole('button', { name: 'favorite' })

    expect(button).toBeDefined()
    expect(button.tagName.toLowerCase()).toBe('button')
    expect(button.hasAttribute('data-iconbutton')).toBe(true)
    expect(button.getAttribute('data-variant')).toBe('standard')
    expect(button.getAttribute('data-size')).toBe('sm')
  })

  it('should render with different variants', () => {
    const { rerender } = render(
      <IconButton aria-label='icon' variant='filled' />,
    )
    let button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('filled')

    rerender(<IconButton aria-label='icon' variant='outlined' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('outlined')

    rerender(<IconButton aria-label='icon' variant='tonal' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('tonal')

    rerender(<IconButton aria-label='icon' variant='standard' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('standard')
  })

  it('should render with different sizes', () => {
    const { rerender } = render(<IconButton aria-label='icon' size='xs' />)
    let button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('xs')

    rerender(<IconButton aria-label='icon' size='sm' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('sm')

    rerender(<IconButton aria-label='icon' size='md' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('md')

    rerender(<IconButton aria-label='icon' size='lg' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('lg')

    rerender(<IconButton aria-label='icon' size='xl' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('xl')
  })

  it('should render with the width prop', () => {
    const { rerender } = render(<IconButton aria-label='icon' width='narrow' />)
    let button = screen.getByRole('button')
    expect(button.getAttribute('data-width')).toBe('narrow')

    rerender(<IconButton aria-label='icon' width='wide' />)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-width')).toBe('wide')
  })

  it('should not set data-width when width prop is omitted', () => {
    render(<IconButton aria-label='icon' />)
    const button = screen.getByRole('button')
    expect(button.getAttribute('data-width')).toBeNull()
  })

  it('should render as a different HTML element when the "as" prop is provided', () => {
    render(
      <IconButton as='a' href='https://example.com' aria-label='link icon' />,
    )
    const link = screen.getByRole('link', { name: 'link icon' })

    expect(link).toBeDefined()
    expect(link.tagName.toLowerCase()).toBe('a')
    expect(link.getAttribute('href')).toBe('https://example.com')
    expect(link.hasAttribute('data-iconbutton')).toBe(true)
  })

  describe('toggle behaviour', () => {
    it('should not set aria-pressed when isTogglable is false', () => {
      render(<IconButton aria-label='icon' />)
      const button = screen.getByRole('button')
      expect(button.getAttribute('aria-pressed')).toBeNull()
    })

    it('should set aria-pressed to false when isTogglable is true and isSelected is false', () => {
      render(<IconButton aria-label='icon' isTogglable isSelected={false} />)
      const button = screen.getByRole('button')
      expect(button.getAttribute('aria-pressed')).toBe('false')
    })

    it('should set aria-pressed to true when isTogglable and isSelected are both true', () => {
      render(<IconButton aria-label='icon' isTogglable isSelected />)
      const button = screen.getByRole('button')
      expect(button.getAttribute('aria-pressed')).toBe('true')
    })

    it('should default isSelected to false when isTogglable is set without isSelected', () => {
      render(<IconButton aria-label='icon' isTogglable />)
      const button = screen.getByRole('button')
      expect(button.getAttribute('aria-pressed')).toBe('false')
    })
  })

  it('should trigger onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<IconButton aria-label='icon' onClick={handleClick} />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should pass down additional props and custom classes', () => {
    render(
      <IconButton
        aria-label='custom icon'
        className='custom-class'
        data-testid='my-icon-btn'
      />,
    )
    const button = screen.getByRole('button')

    expect(button.className).toContain('custom-class')
    expect(button.getAttribute('aria-label')).toBe('custom icon')
    expect(button.getAttribute('data-testid')).toBe('my-icon-btn')
  })
})
