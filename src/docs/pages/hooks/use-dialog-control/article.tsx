import { Snippet } from '@/docs/shared/Snippet';
import { Button, Content, Dialog, Font, useDialogControl } from '@/lib';

export default function HookDialogControlArtcile() {
  const { showModal, close } = useDialogControl('my-dialog');

  return (
    <article id="hook_dialog-control_article">
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
          useDialogControl
        </Font>{' '}
        hook is a utility designed to manage the state of a native HTML{' '}
        <Font variant="code" as="code" textColor="secondary">
          &lt;dialog&gt;
        </Font>{' '}
        element within a React application. It abstracts the direct DOM
        manipulation needed to open and close the dialog, providing a clean and
        declarative API.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This hook is intended for use in Client Components, as indicated by the
        <Font variant="code" as="code" textColor="secondary">
          'use client'
        </Font>{' '}
        directive. It directly interacts with the DOM using
        <Font variant="code" as="code" textColor="secondary">
          document.getElementById
        </Font>{' '}
        to find and control the specified dialog element.
      </Font>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlockEnd: 'xl' }}
      >
        How It Works
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        You provide the hook with the unique{' '}
        <Font variant="code" as="code" textColor="secondary">
          id
        </Font>{' '}
        of a{' '}
        <Font variant="code" as="code" textColor="secondary">
          &lt;dialog&gt;
        </Font>{' '}
        element in your component. The hook then returns an object containing
        two memoized functions:{' '}
        <Font variant="code" as="code" textColor="secondary">
          showModal
        </Font>{' '}
        and{' '}
        <Font variant="code" as="code" textColor="secondary">
          close
        </Font>
        .
      </Font>
      <Font
        variant="body-large"
        as="ul"
        spacing={{
          paddingInline: 'xl',
          marginInline: 'xl',
          marginBlockEnd: 'md',
        }}
      >
        <li>
          <Font variant="code" as="code" textColor="secondary">
            showModal
          </Font>
          : When called, this function finds the dialog element by its ID and
          invokes its native{' '}
          <Font variant="code" as="code" textColor="secondary">
            showModal()
          </Font>{' '}
          method. This opens the dialog as a modal, placing it in the top layer
          of the view and disabling interaction with the content underneath.
        </li>
        <li>
          <Font variant="code" as="code" textColor="secondary">
            close
          </Font>
          : This function finds the dialog and calls its native{' '}
          <Font variant="code" as="code" textColor="secondary">
            close()
          </Font>{' '}
          method, closing the dialog.
        </li>
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Using{' '}
        <Font variant="code" as="code" textColor="secondary">
          useCallback
        </Font>{' '}
        ensures that these functions maintain stable references across
        re-renders, preventing unnecessary child component re-renders, as long
        as the{' '}
        <Font variant="code" as="code" textColor="secondary">
          dialogId
        </Font>{' '}
        does not change.
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
          useDialogControl
        </Font>{' '}
        hook, import it from the library:
      </Font>
      <Snippet
        lang="js"
        code="import { useDialogControl } from 'm3-ui-react';"
      />
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        API
      </Font>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Parameter
      </Font>
      <table className="component-reference">
        <thead>
          <tr>
            <Font
              as="th"
              variant="title-small"
              spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
            >
              Name
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              dialogId
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The <code>id</code> attribute of the <code>&lt;dialog&gt;</code>{' '}
              element to be controlled.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              string
            </Font>
          </tr>
        </tbody>
      </table>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Return Value
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The hook returns an object with the following properties:
      </Font>
      <table className="component-reference">
        <thead>
          <tr>
            <Font
              as="th"
              variant="title-small"
              spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
            >
              Name
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              showModal
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              A function that opens the dialog by calling{' '}
              <code>dialog.showModal()</code>.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              () =&gt; void
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              close
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              A function that closes the dialog by calling{' '}
              <code>dialog.close()</code>.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              () =&gt; void
            </Font>
          </tr>
        </tbody>
      </table>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Usage Example
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        To use the hook, import it along with the components you need. In your
        component, call{' '}
        <Font variant="code" as="code" textColor="secondary">
          useDialogControl
        </Font>{' '}
        with the ID you plan to assign to your{' '}
        <Font variant="code" as="code" textColor="secondary">
          &lt;Dialog&gt;
        </Font>{' '}
        component. Then, wire the returned{' '}
        <Font variant="code" as="code" textColor="secondary">
          showModal
        </Font>{' '}
        and{' '}
        <Font variant="code" as="code" textColor="secondary">
          close
        </Font>{' '}
        functions to UI elements like buttons.
      </Font>
      <Snippet
        lang="js"
        code={`
import { Button, Content, Font, useDialogControl } from 'm3-ui-react';

export default function DialogExample() {
  // The string 'my-dialog' must match the id prop of the Dialog component.
  const { showModal, close } = useDialogControl('my-dialog');

  return (
    <>
      <Button onClick={showModal}>Open Dialog</Button>

      <Dialog id="my-dialog">
        <Font
          variant="headline-small"
          spacing={{ marginBlockEnd: 'lg' }}
          textAlign="center"
          as="h2"
        >
          Dialog Title
        </Font>
        <Font variant="body-medium" textAlign="left" as="p">
          This is the content of the dialog. You can put any valid JSX here.
        </Font>
        <Content
          as="footer"
          flexbox={{
            direction: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          spacing={{ paddingBlockStart: 'xl' }}
        >
          <Button onClick={close}>Close</Button>
        </Content>
      </Dialog>
    </>
  );
}
        `}
      >
        <Button onClick={showModal}>Open Dialog</Button>
        <Dialog id="my-dialog">
          <Font
            variant="headline-small"
            spacing={{ marginBlockEnd: 'lg' }}
            textAlign="center"
            as="h2"
          >
            Dialog Title
          </Font>
          <Font variant="body-medium" textAlign="left" as="p">
            This is the content of the dialog. You can put any valid JSX here.
          </Font>
          <Content
            as="footer"
            flexbox={{
              direction: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            spacing={{ paddingBlockStart: 'xl' }}
          >
            <Button onClick={close}>Close</Button>
          </Content>
        </Dialog>
      </Snippet>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlock: 'md' }}
      >
        This hook provides a simple yet effective way to integrate the native{' '}
        <Font variant="code" as="code" textColor="secondary">
          &lt;dialog&gt;
        </Font>{' '}
        element's functionality into your React projects, promoting clean code
        and separation of concerns.
      </Font>
    </article>
  );
}
