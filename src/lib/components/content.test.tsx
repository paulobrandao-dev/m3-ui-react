import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { Content, ContentGridItem, ContentPane } from './content'

describe('Content Components', () => {
  afterEach(() => {
    cleanup()
  })

  describe('Content', () => {
    it('renders as a div element by default', () => {
      const { container } = render(<Content>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
      expect(element.hasAttribute('data-content')).toBe(true)
    })

    it('renders with the "as" prop', () => {
      const { container } = render(<Content as='section'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('section')
    })

    it('applies default variant "panes"', () => {
      const { container } = render(<Content>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('panes')
    })

    it('applies the variant prop', () => {
      const { rerender, container } = render(
        <Content variant='grid'>Content</Content>,
      )
      let element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('grid')

      rerender(<Content variant='stack'>Content</Content>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('stack')

      rerender(<Content variant='panes'>Content</Content>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('panes')
    })

    it('applies the spacing prop', () => {
      const { container } = render(<Content spacing='md'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing')).toBe('md')
    })

    it('applies the spacingX prop', () => {
      const { container } = render(<Content spacingX='lg'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing-x')).toBe('lg')
    })

    it('applies the spacingY prop', () => {
      const { container } = render(<Content spacingY='sm'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing-y')).toBe('sm')
    })

    it('applies the gap prop', () => {
      const { container } = render(<Content gap='xl'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap')).toBe('xl')
    })

    it('applies the gapX prop', () => {
      const { container } = render(<Content gapX='xs'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap-x')).toBe('xs')
    })

    it('applies the gapY prop', () => {
      const { container } = render(<Content gapY='md'>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap-y')).toBe('md')
    })

    it('applies the fullwidth prop', () => {
      const { container } = render(<Content fullwidth>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-fullwidth')).toBe('true')
    })

    it('does not set data-fullwidth when fullwidth is omitted', () => {
      const { container } = render(<Content>Content</Content>)
      const element = container.firstChild as HTMLElement
      expect(element.hasAttribute('data-fullwidth')).toBe(false)
    })

    it('passes additional props to the root element', () => {
      const { container } = render(
        <Content className='custom-class' aria-label='Page layout'>
          Content
        </Content>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.className).toContain('custom-class')
      expect(element.getAttribute('aria-label')).toBe('Page layout')
    })
  })

  describe('ContentGridItem', () => {
    it('renders as a div element by default', () => {
      const { container } = render(<ContentGridItem>Item</ContentGridItem>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
      expect(element.hasAttribute('data-content-grid-item')).toBe(true)
    })

    it('renders with the "as" prop', () => {
      const { container } = render(
        <ContentGridItem as='article'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('article')
    })

    it('applies default columns=1 and rows=1', () => {
      const { container } = render(<ContentGridItem>Item</ContentGridItem>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-columns')).toBe('1')
      expect(element.getAttribute('data-rows')).toBe('1')
    })

    it('applies the columns prop', () => {
      const { rerender, container } = render(
        <ContentGridItem columns={2}>Item</ContentGridItem>,
      )
      let element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-columns')).toBe('2')

      rerender(<ContentGridItem columns={4}>Item</ContentGridItem>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-columns')).toBe('4')
    })

    it('applies the rows prop', () => {
      const { rerender, container } = render(
        <ContentGridItem rows={2}>Item</ContentGridItem>,
      )
      let element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-rows')).toBe('2')

      rerender(<ContentGridItem rows={3}>Item</ContentGridItem>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-rows')).toBe('3')
    })

    it('applies the spacing prop', () => {
      const { container } = render(
        <ContentGridItem spacing='md'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing')).toBe('md')
    })

    it('applies the spacingX prop', () => {
      const { container } = render(
        <ContentGridItem spacingX='lg'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing-x')).toBe('lg')
    })

    it('applies the spacingY prop', () => {
      const { container } = render(
        <ContentGridItem spacingY='sm'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing-y')).toBe('sm')
    })

    it('applies the gap prop', () => {
      const { container } = render(
        <ContentGridItem gap='xl'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap')).toBe('xl')
    })

    it('applies the gapX prop', () => {
      const { container } = render(
        <ContentGridItem gapX='xs'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap-x')).toBe('xs')
    })

    it('applies the gapY prop', () => {
      const { container } = render(
        <ContentGridItem gapY='md'>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap-y')).toBe('md')
    })

    it('applies the fullwidth prop', () => {
      const { container } = render(
        <ContentGridItem fullwidth>Item</ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-fullwidth')).toBe('true')
    })

    it('does not set data-fullwidth when fullwidth is omitted', () => {
      const { container } = render(<ContentGridItem>Item</ContentGridItem>)
      const element = container.firstChild as HTMLElement
      expect(element.hasAttribute('data-fullwidth')).toBe(false)
    })

    it('applies the flexDirection prop', () => {
      const { rerender, container } = render(
        <ContentGridItem flexDirection='row'>Item</ContentGridItem>,
      )
      let element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('row')

      rerender(<ContentGridItem flexDirection='column'>Item</ContentGridItem>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('column')

      rerender(
        <ContentGridItem flexDirection='row-reverse'>Item</ContentGridItem>,
      )
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('row-reverse')

      rerender(
        <ContentGridItem flexDirection='column-reverse'>Item</ContentGridItem>,
      )
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('column-reverse')
    })

    it('does not set data-direction when flexDirection is omitted', () => {
      const { container } = render(<ContentGridItem>Item</ContentGridItem>)
      const element = container.firstChild as HTMLElement
      expect(element.hasAttribute('data-direction')).toBe(false)
    })

    it('passes additional props to the root element', () => {
      const { container } = render(
        <ContentGridItem className='grid-item' aria-label='Featured card'>
          Item
        </ContentGridItem>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.className).toContain('grid-item')
      expect(element.getAttribute('aria-label')).toBe('Featured card')
    })
  })

  describe('ContentPane', () => {
    it('renders as a div element by default', () => {
      const { container } = render(<ContentPane>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('div')
      expect(element.hasAttribute('data-content-pane')).toBe(true)
    })

    it('renders with the "as" prop', () => {
      const { container } = render(<ContentPane as='aside'>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.tagName.toLowerCase()).toBe('aside')
    })

    it('applies default variant "flexible"', () => {
      const { container } = render(<ContentPane>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('flexible')
    })

    it('applies the variant prop', () => {
      const { rerender, container } = render(
        <ContentPane variant='fixed'>Pane</ContentPane>,
      )
      let element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('fixed')

      rerender(<ContentPane variant='flexible'>Pane</ContentPane>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-variant')).toBe('flexible')
    })

    it('applies the spacing prop', () => {
      const { container } = render(<ContentPane spacing='md'>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing')).toBe('md')
    })

    it('applies the spacingX prop', () => {
      const { container } = render(
        <ContentPane spacingX='lg'>Pane</ContentPane>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing-x')).toBe('lg')
    })

    it('applies the spacingY prop', () => {
      const { container } = render(
        <ContentPane spacingY='sm'>Pane</ContentPane>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-spacing-y')).toBe('sm')
    })

    it('applies the gap prop', () => {
      const { container } = render(<ContentPane gap='xl'>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap')).toBe('xl')
    })

    it('applies the gapX prop', () => {
      const { container } = render(<ContentPane gapX='xs'>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap-x')).toBe('xs')
    })

    it('applies the gapY prop', () => {
      const { container } = render(<ContentPane gapY='md'>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-gap-y')).toBe('md')
    })

    it('applies the fullwidth prop', () => {
      const { container } = render(<ContentPane fullwidth>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-fullwidth')).toBe('true')
    })

    it('does not set data-fullwidth when fullwidth is omitted', () => {
      const { container } = render(<ContentPane>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.hasAttribute('data-fullwidth')).toBe(false)
    })

    it('applies the flexDirection prop', () => {
      const { rerender, container } = render(
        <ContentPane flexDirection='row'>Pane</ContentPane>,
      )
      let element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('row')

      rerender(<ContentPane flexDirection='column'>Pane</ContentPane>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('column')

      rerender(<ContentPane flexDirection='row-reverse'>Pane</ContentPane>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('row-reverse')

      rerender(<ContentPane flexDirection='column-reverse'>Pane</ContentPane>)
      element = container.firstChild as HTMLElement
      expect(element.getAttribute('data-direction')).toBe('column-reverse')
    })

    it('does not set data-direction when flexDirection is omitted', () => {
      const { container } = render(<ContentPane>Pane</ContentPane>)
      const element = container.firstChild as HTMLElement
      expect(element.hasAttribute('data-direction')).toBe(false)
    })

    it('passes additional props to the root element', () => {
      const { container } = render(
        <ContentPane className='sidebar' aria-label='Sidebar'>
          Pane
        </ContentPane>,
      )
      const element = container.firstChild as HTMLElement
      expect(element.className).toContain('sidebar')
      expect(element.getAttribute('aria-label')).toBe('Sidebar')
    })
  })
})
