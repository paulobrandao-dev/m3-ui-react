import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Button } from './button'

describe('Button component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })

    expect(button).toBeDefined()
    expect(button.tagName.toLowerCase()).toBe('button')
    expect(button.getAttribute('data-button')).toBe('true')
    expect(button.getAttribute('data-variant')).toBe('text')
    expect(button.getAttribute('data-size')).toBe('sm')
  })

  it('should render with different variants', () => {
    const { rerender } = render(<Button variant='filled'>Filled</Button>)
    let button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('filled')

    rerender(<Button variant='elevated'>Elevated</Button>)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('elevated')

    rerender(<Button variant='outlined'>Outlined</Button>)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('outlined')

    rerender(<Button variant='tonal'>Tonal</Button>)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-variant')).toBe('tonal')
  })

  it('should render with different sizes', () => {
    const { rerender } = render(<Button size='lg'>Large</Button>)
    let button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('lg')

    rerender(<Button size='xs'>Extra Small</Button>)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('xs')

    rerender(<Button size='md'>Medium</Button>)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('md')

    rerender(<Button size='xl'>Extra Large</Button>)
    button = screen.getByRole('button')
    expect(button.getAttribute('data-size')).toBe('xl')
  })

  it('should render as a different HTML element when the "as" prop is provided', () => {
    render(
      <Button as='a' href='https://example.com'>
        Link
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Link' })

    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toBe('https://example.com')
    expect(link.tagName.toLowerCase()).toBe('a')
  })

  it('should handle the disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button') as HTMLButtonElement

    expect(button.disabled).toBe(true)
    // The data-disabled attribute will be rendered as "true" (or empty string, but present)
    expect(button.hasAttribute('data-disabled')).toBe(true)
  })

  it('should trigger onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should pass down additional props and custom classes', () => {
    render(
      <Button className='custom-class' aria-label='custom aria label'>
        Custom
      </Button>,
    )
    const button = screen.getByRole('button')

    expect(button.className).toContain('custom-class')
    expect(button.getAttribute('aria-label')).toBe('custom aria label')
  })
})
