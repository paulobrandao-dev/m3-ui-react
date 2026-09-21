import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Appbar,
  AppbarRow,
  AppbarContent,
  AppbarHeading,
  AppbarTitle,
  AppbarSubtitle,
} from './appbar'

describe('Appbar Components', () => {
  describe('Appbar', () => {
    it('renders as a header element by default', () => {
      const { container } = render(<Appbar>Content</Appbar>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('header')
      expect(element.hasAttribute('data-appbar')).toBe(true)
    })

    it('renders with the "as" prop', () => {
      const { container } = render(<Appbar as='div'>Content</Appbar>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
    })

    it('sets the data-scrolled attribute based on isScrolled prop', () => {
      const { container, rerender } = render(
        <Appbar isScrolled>Content</Appbar>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-scrolled')).toBe('true')

      rerender(<Appbar isScrolled={false}>Content</Appbar>)
      expect(element.getAttribute('data-scrolled')).toBe('false')
    })
  })

  describe('AppbarRow', () => {
    it('renders as a div by default', () => {
      const { container } = render(<AppbarRow>Content</AppbarRow>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
      expect(element.hasAttribute('data-appbar-row')).toBe(true)
      expect(element.getAttribute('role')).toBe('presentation')
    })

    it('renders with the "as" prop', () => {
      const { container } = render(<AppbarRow as='section'>Content</AppbarRow>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('section')
    })
  })

  describe('AppbarContent', () => {
    it('renders correctly with required variant', () => {
      const { container } = render(
        <AppbarContent variant='center'>Content</AppbarContent>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
      expect(element.hasAttribute('data-appbar-content')).toBe(true)
      expect(element.getAttribute('data-variant')).toBe('center')
      expect(element.getAttribute('role')).toBe('presentation')
    })

    it('renders with the "as" prop', () => {
      const { container } = render(
        <AppbarContent as='span' variant='start'>
          Content
        </AppbarContent>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('span')
    })
  })

  describe('AppbarHeading', () => {
    it('renders as an hgroup by default with default variant small', () => {
      const { container } = render(<AppbarHeading>Heading</AppbarHeading>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('hgroup')
      expect(element.hasAttribute('data-appbar-heading')).toBe(true)
      expect(element.getAttribute('data-variant')).toBe('small')
      expect(element.getAttribute('role')).toBe('presentation')
    })

    it('handles alignCenter and custom variants', () => {
      const { container } = render(
        <AppbarHeading alignCenter variant='large'>
          Heading
        </AppbarHeading>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-align-center')).toBe('true')
      expect(element.getAttribute('data-variant')).toBe('large')
    })

    it('renders with the "as" prop', () => {
      const { container } = render(
        <AppbarHeading as='div'>Heading</AppbarHeading>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
    })
  })

  describe('AppbarTitle', () => {
    it('renders as an h1 by default', () => {
      const { container } = render(<AppbarTitle>Title</AppbarTitle>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('h1')
      expect(element.hasAttribute('data-appbar-title')).toBe(true)
    })

    it('renders with the "as" prop', () => {
      const { container } = render(<AppbarTitle as='h2'>Title</AppbarTitle>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('h2')
    })
  })

  describe('AppbarSubtitle', () => {
    it('renders as a p by default', () => {
      const { container } = render(<AppbarSubtitle>Subtitle</AppbarSubtitle>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('p')
      expect(element.hasAttribute('data-appbar-subtitle')).toBe(true)
    })

    it('renders with the "as" prop', () => {
      const { container } = render(
        <AppbarSubtitle as='span'>Subtitle</AppbarSubtitle>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('span')
    })
  })
})
