import { Snippet } from '@/docs/shared/Snippet';
import { Button, Content, Font, Input, Select } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useReducer } from 'react';
import { ButtonSize, ButtonVariant, initialState, reducer } from './reducer';

export default function ComponentButtonArtcile() {
  const [{ children, disabled, icon, iconSize, size, variant }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <article id="component_button_article">
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlockEnd: 'xl' }}
      >
        Overview
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          Button
        </Font>{' '}
        component allows users to take actions and make choices with a single
        tap.
      </Font>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Import
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        To use the{' '}
        <Font variant="code" as="code" textColor="secondary">
          Button
        </Font>{' '}
        component, import it from the library:
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> <samp>Button</samp> <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
      </pre>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{
          paddingInline: 'lg',
          paddingBlock: 'xl',
          marginBlockStart: 'md',
        }}
      >
        Usage
      </Font>
      <Snippet
        title="Playground"
        lang="js"
        code={`
<Button
  ${variant ? `variant="${variant}"` : ''}
  ${size ? `size="${size}"` : ''}
  ${icon ? `icon={<Icon symbol="${icon}" size={${iconSize}} />}` : ''}
  ${disabled ? 'disabled' : ''}
>
  ${children}
</Button>
        `}
      >
        <Button
          variant={variant}
          size={size}
          icon={icon ? <Icon symbol={icon} size={iconSize} /> : undefined}
          disabled={disabled}
        >
          {children}
        </Button>
      </Snippet>
      <Content
        as="div"
        spacing={{ marginBlock: 'lg' }}
        scrollable={{ horizontal: 'auto', vertical: 'hidden' }}
      >
        <table className="component-reference">
          <thead>
            <tr>
              <Font
                as="th"
                variant="title-small"
                spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
              >
                Prop
              </Font>
              <Font
                as="th"
                variant="title-small"
                spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
              >
                Description
              </Font>
              <Font
                as="th"
                variant="title-small"
                spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
              >
                Type
              </Font>
              <Font
                as="th"
                variant="title-small"
                spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
              >
                Control
              </Font>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                children
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The content of the button.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                string
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Input
                  type="text"
                  name="children"
                  label="Label"
                  placeholder="Type the label of the button"
                  value={children}
                  required
                  onChange={e => dispatch({ children: e.currentTarget.value })}
                  hasError={!children.length}
                  fullWidth
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                variant
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The variant of the button.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                text (default) | outlined | tonal | filled | elevated
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Select
                  name="variant"
                  label="Variant"
                  onChange={value =>
                    dispatch({
                      variant: value as ButtonVariant,
                    })
                  }
                  value={variant}
                  options={[
                    { label: 'text', value: 'text' },
                    { label: 'outlined', value: 'outlined' },
                    { label: 'tonal', value: 'tonal' },
                    { label: 'filled', value: 'filled' },
                    { label: 'elevated', value: 'elevated' },
                  ]}
                  fullWidth
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                size
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The size of the button.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                xs | sm (default) | md | lg | xl
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Select
                  name="size"
                  label="Size"
                  onChange={value =>
                    dispatch({
                      size: value as ButtonSize,
                    })
                  }
                  value={size}
                  options={[
                    { label: 'xs', value: 'xs' },
                    { label: 'sm', value: 'sm' },
                    { label: 'md', value: 'md' },
                    { label: 'lg', value: 'lg' },
                    { label: 'xl', value: 'xl' },
                  ]}
                  fullWidth
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                icon
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                An icon to be displayed before the text.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                ReactNode
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Input
                  name="icon"
                  label="Icon"
                  fullWidth
                  value={icon}
                  onChange={e => dispatch({ icon: e.target.value })}
                />
                <Font
                  variant="label-small"
                  as="p"
                  spacing={{ paddingBlockStart: 'xs', paddingInline: 'lg' }}
                  textAlign="left"
                >
                  Input an icon name from{' '}
                  <a href="https://fonts.google.com/icons">Material Icons</a>
                </Font>
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                ref
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                A ref to the underlying <code>&lt;button&gt;</code> element.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                colSpan={2}
              >
                React.Ref&lt;HTMLButtonElement&gt;
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                ...props
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                colSpan={3}
              >
                All other standard HTML <code>&lt;button&gt;</code> attributes
                are accepted.
              </Font>
            </tr>
          </tbody>
        </table>
      </Content>
    </article>
  );
}
