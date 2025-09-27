import { Snippet } from '@/docs/shared/Snippet';
import { Appbar, Content, Font, IconButton, Switch } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { Reducer, useMemo, useReducer } from 'react';

type VariantValue = 'small' | 'medium' | 'large';
type NavActionValue = 'arrow_back' | 'menu';
type ActionsValues = 'search' | 'notifications' | 'account_circle';
type PropsState = {
  variant?: VariantValue;
  navAction?: NavActionValue;
  actions?: Array<ActionsValues>;
  customContent?: boolean;
  headline?: string;
  subtitle?: string;
  centeredText?: boolean;
  isScroll?: boolean;
  isFluid?: boolean;
};

const reducer: Reducer<
  PropsState,
  Partial<PropsState & { changeAction: ActionsValues }>
> = (state, change) => {
  if (!change.changeAction) {
    return { ...state, ...change };
  }
  const current = [...(state.actions || [])];
  if (current?.includes(change.changeAction)) {
    return {
      ...state,
      actions: current.filter(entry => entry !== change.changeAction),
    };
  }
  return { ...state, actions: [...(state.actions || []), change.changeAction] };
};

export default function ComponentAppbarArtcile() {
  const [
    {
      actions,
      centeredText,
      customContent,
      headline,
      isFluid,
      isScroll,
      navAction,
      subtitle,
      variant,
    },
    setState,
  ] = useReducer(reducer, {
    actions: ['account_circle'],
    centeredText: false,
    customContent: false,
    headline: 'Headline',
    isFluid: false,
    isScroll: false,
    navAction: 'arrow_back',
    subtitle: 'Subtitle',
    variant: 'small',
  });

  const actionsCodeString = useMemo(() => {
    return actions
      ?.sort((a, b) => (a > b ? -1 : 1))
      .map(
        icon => `
      <IconButton>
        <Icon symbol="${icon}" />
      </IconButton>
      `,
      )
      .join('\n');
  }, [actions]);

  return (
    <article id="component_appbar_article">
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
          Appbar
        </Font>{' '}
        component provides a consistent header for your application, featuring
        navigation, titles, and actions. It can be configured with different
        variants to suit various screen sizes and contexts.
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
          Appbar
        </Font>{' '}
        component, import it from the library:
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> <samp>Appbar</samp> <kbd>from</kbd>{' '}
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
        code={`
<Appbar
  ${variant ? `variant="${variant}"` : ''}
  ${headline ? `headline="${headline}"` : ''}
  ${subtitle ? `subtitle="${subtitle}"` : ''}
  ${
    navAction
      ? `
  navAction={
    <IconButton>
      <Icon symbol="${navAction}" />
    </IconButton>
  }
  `
      : ''
  }
  ${
    actionsCodeString
      ? `
  actions={
    <>
      ${actionsCodeString.trim()}
    </>
  }`
      : ''
  }
  ${centeredText ? `centeredText` : ''}
  ${
    customContent
      ? `
  customContent={<img src="m3-ui-react.png" alt="M3 UI" height={48} />}
  `
      : ''
  }
  ${isScroll ? `isScroll` : ''}
  ${isFluid ? `isFluid` : ''}
/>
        `}
        lang="js"
        title="Playground"
      >
        <Appbar
          variant={variant}
          headline={headline}
          subtitle={subtitle}
          navAction={
            navAction ? (
              <IconButton>
                <Icon symbol={navAction} />
              </IconButton>
            ) : undefined
          }
          actions={
            <>
              {actions &&
                actions.length > 0 &&
                actions?.map(icon => (
                  <IconButton key={icon}>
                    <Icon symbol={icon} />
                  </IconButton>
                ))}
            </>
          }
          centeredText={centeredText}
          customContent={
            customContent ? (
              <img src="/m3-ui-react.png" alt="M3 UI" height={48} />
            ) : undefined
          }
          isFluid={isFluid}
          isScroll={isScroll}
          style={{ zIndex: 'initial' }}
        />
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
                variant
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The variant of the Appbar. It determines the size and layout of
                the component.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                small (default) | medium | large
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <select
                  name="variant"
                  onChange={e =>
                    setState({ variant: e.currentTarget.value as VariantValue })
                  }
                >
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="large">large</option>
                </select>
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                navAction
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The navigation action element, typically an{' '}
                <Font variant="code" as="code">
                  IconButton
                </Font>
                , displayed on the left.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                React.ReactElement
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <select
                  name="navAction"
                  value={navAction}
                  onChange={e => {
                    if (e.currentTarget.value === 'None') {
                      setState({ navAction: undefined });
                    } else {
                      setState({
                        navAction: e.currentTarget.value as NavActionValue,
                      });
                    }
                  }}
                >
                  <option>None</option>
                  <option value="arrow_back">Back button</option>
                  <option value="menu">Menu button</option>
                </select>
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                headline
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The main title text of the Appbar.
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
              >
                <input
                  type="text"
                  name="headline"
                  value={headline}
                  onChange={e => setState({ headline: e.target.value })}
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                subtitle
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The subtitle text displayed below the headline.
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
              >
                <input
                  type="text"
                  name="subtitle"
                  value={subtitle}
                  onChange={e => setState({ subtitle: e.target.value })}
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                centeredText
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                If{' '}
                <Font variant="code" as="code">
                  true
                </Font>
                , the headline and subtitle are centered.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                boolean
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Switch
                  checked={centeredText}
                  onChange={centeredText => setState({ centeredText })}
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                customContent
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Custom content that can be displayed in the center of the
                Appbar, replacing the headline and subtitle.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                React.ReactNode
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <select
                  name="customContent"
                  value={customContent ? 'active' : undefined}
                  onChange={e => {
                    if (e.currentTarget.value === 'None') {
                      setState({ customContent: undefined });
                    } else {
                      setState({
                        customContent: e.currentTarget.value === 'active',
                      });
                    }
                  }}
                >
                  <option>None</option>
                  <option value="active">Logo</option>
                </select>
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                actions
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Action elements displayed on the right side of the Appbar.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                React.ReactNode
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <select
                  name="actions"
                  multiple
                  value={actions}
                  onChange={e => {
                    if (e.target.value === 'None') {
                      setState({ actions: [] });
                    } else {
                      setState({
                        changeAction: e.target.value as ActionsValues,
                      });
                    }
                  }}
                >
                  <option>None</option>
                  <option value="search">Search</option>
                  <option value="notifications">Notifications</option>
                  <option value="account_circle">Account</option>
                </select>
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                isScroll
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                If{' '}
                <Font variant="code" as="code">
                  true
                </Font>
                , applies styles for a scrolled state, affecting the Appbar's
                appearance.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                boolean
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Switch
                  checked={isScroll}
                  onChange={isScroll => setState({ isScroll })}
                />
              </Font>
            </tr>
            <tr>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                isFluid
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                If{' '}
                <Font variant="code" as="code">
                  true
                </Font>
                , the Appbar's content will span the full width of its
                container.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                boolean
              </Font>
              <Font
                as="td"
                variant="body-medium"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                textAlign="center"
              >
                <Switch
                  checked={isFluid}
                  onChange={isFluid => setState({ isFluid })}
                />
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
                A ref to the underlying <code>&lt;header&gt;</code> element.
              </Font>
              <Font
                as="td"
                variant="code"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
                colSpan={2}
              >
                React.Ref&lt;HTMLElement&gt;
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
                All other standard HTML <code>&lt;header&gt;</code> attributes
                are accepted.
              </Font>
            </tr>
          </tbody>
        </table>
      </Content>
    </article>
  );
}
