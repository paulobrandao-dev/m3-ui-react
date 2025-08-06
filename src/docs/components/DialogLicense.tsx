import { Button, CardContent, Dialog, Font, useDialogControl } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';

export default function DialogLicense() {
  const { closeDialog } = useDialogControl();

  return (
    <Dialog id="dialog-license">
      <CardContent
        as="section"
        flexbox={{ direction: 'column', alignItems: 'center', gap: 'lg' }}
        spacing={{ paddingBlockEnd: 'xl' }}
      >
        <Icon icon="balance" />
        <Font scale="headline-small" as="h2">
          License
        </Font>
        <Font
          scale="body-medium"
          as="p"
          flexbox={{ direction: 'row', alignSelf: 'stretch' }}
        >
          Copyright 2024 Paulo Brandão
        </Font>
        <Font
          scale="body-medium"
          as="p"
          flexbox={{ direction: 'row', alignSelf: 'stretch' }}
        >
          Permission to use, copy, modify, and/or distribute this software for
          any purpose with or without fee is hereby granted, provided that the
          above copyright notice and this permission notice appear in all
          copies.
        </Font>
        <Font
          scale="body-medium"
          as="p"
          flexbox={{ direction: 'row', alignSelf: 'stretch' }}
        >
          THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL
          WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
          WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
          AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
          DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
          PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
          TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
        </Font>
      </CardContent>
      <CardContent
        as="footer"
        flexbox={{ direction: 'row', justifyContent: 'flex-end' }}
      >
        <Button label="Close" onClick={() => closeDialog('dialog-license')} />
      </CardContent>
    </Dialog>
  );
}
