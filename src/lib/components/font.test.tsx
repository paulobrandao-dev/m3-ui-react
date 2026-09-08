import { cleanup, render } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { Font } from './font'

describe('Font component', () => {
  afterEach(cleanup)

  it('should render span element as default with data-font and data-variant', () => {
    const result = render(<Font variant="body-large">Sample text</Font>)
    const text = result.getByText('Sample text')

    expect(text.tagName).toBe('SPAN')
    expect(text.hasAttribute('data-font')).toBe(true)
    expect(text.getAttribute('data-variant')).toBe('body-large')
  })

  it('should render the right element according to "as" prop', () => {
    const result = render(
      <Font as="h1" variant="display-large">
        Sample heading
      </Font>,
    )
    const heading = result.getByRole('heading', { level: 1 })

    expect(heading.tagName).toBe('H1')
    expect(heading.hasAttribute('data-font')).toBe(true)
    expect(heading.getAttribute('data-variant')).toBe('display-large')
  })

  it('should apply data-align attribute according to "textAlign" prop', () => {
    const result = render(
      <>
        <Font as="h2" variant="title-large" textAlign="center">
          Title
        </Font>
        <Font
          as="p"
          variant="label-large"
          textAlign="right"
          data-testid="align-right"
        >
          Right
        </Font>
        <Font
          as="p"
          variant="body-medium"
          textAlign="left"
          data-testid="align-left"
        >
          Left
        </Font>
        <Font
          as="p"
          variant="body-small"
          textAlign="justify"
          data-testid="align-justify"
        >
          Justify
        </Font>
      </>,
    )
    const title = result.getByRole('heading', { level: 2 })
    const right = result.getByTestId('align-right')
    const left = result.getByTestId('align-left')
    const justify = result.getByTestId('align-justify')

    expect(title.getAttribute('data-align')).toBe('center')
    expect(right.getAttribute('data-align')).toBe('right')
    expect(left.getAttribute('data-align')).toBe('left')
    expect(justify.getAttribute('data-align')).toBe('justify')
  })

  it('should apply data-transform attribute according to "textTransform" prop', () => {
    const result = render(
      <>
        <Font
          variant="title-medium"
          textTransform="lowercase"
          data-testid="transform-lowercase"
        >
          Sample text A
        </Font>
        <Font
          variant="title-small"
          textTransform="capitalize"
          data-testid="transform-capitalize"
        >
          Sample text B
        </Font>
        <Font
          variant="label-medium"
          textTransform="uppercase"
          data-testid="transform-uppercase"
        >
          Sample text C
        </Font>
      </>,
    )
    const lowercase = result.getByTestId('transform-lowercase')
    const capitalize = result.getByTestId('transform-capitalize')
    const uppercase = result.getByTestId('transform-uppercase')

    expect(lowercase.getAttribute('data-transform')).toBe('lowercase')
    expect(capitalize.getAttribute('data-transform')).toBe('capitalize')
    expect(uppercase.getAttribute('data-transform')).toBe('uppercase')
  })

  it('should apply data-color attribute according to "textColor" prop', () => {
    const result = render(
      <>
        <Font as="h1" variant="display-medium" textColor="primary">
          Primary
        </Font>
        <Font as="h2" variant="display-small" textColor="secondary">
          Secondary
        </Font>
        <Font as="h3" variant="headline-large" textColor="tertiary">
          Tertiary
        </Font>
        <Font as="h4" variant="headline-medium" textColor="reverse">
          Reverse
        </Font>
        <Font as="h5" variant="headline-small" textColor="error">
          Error
        </Font>
      </>,
    )
    const h1 = result.getByRole('heading', { level: 1 })
    const h2 = result.getByRole('heading', { level: 2 })
    const h3 = result.getByRole('heading', { level: 3 })
    const h4 = result.getByRole('heading', { level: 4 })
    const h5 = result.getByRole('heading', { level: 5 })

    expect(h1.getAttribute('data-color')).toBe('primary')
    expect(h2.getAttribute('data-color')).toBe('secondary')
    expect(h3.getAttribute('data-color')).toBe('tertiary')
    expect(h4.getAttribute('data-color')).toBe('reverse')
    expect(h5.getAttribute('data-color')).toBe('error')
  })

  it('should forward additional HTML attributes and children', () => {
    const result = render(
      <Font
        variant="body-medium"
        id="custom-id"
        className="custom-class"
        data-testid="custom-font"
      >
        Custom attributes
      </Font>,
    )
    const el = result.getByTestId('custom-font')

    expect(el.id).toBe('custom-id')
    expect(el.classList.contains('custom-class')).toBe(true)
    expect(el.textContent).toBe('Custom attributes')
  })

  it('should support ref forwarding', () => {
    const ref = createRef<HTMLHeadingElement>()
    render(
      <Font as="h1" variant="display-small" ref={ref}>
        Ref Heading
      </Font>,
    )

    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('H1')
  })
})
