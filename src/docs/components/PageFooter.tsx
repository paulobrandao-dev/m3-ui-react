import {
  Button,
  Content,
  Divider,
  useDialogControl,
  useMediaQuery,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import DialogLicense from './DialogLicense';

export default function PageFooter() {
  const media = useMediaQuery();
  const { showDialog } = useDialogControl();

  return (
    <Content
      as="footer"
      flexbox={{
        direction: 'column',
        alignItems: media.isCompact ? 'flex-start' : 'flex-end',
        gap: 'sm',
      }}
      spacing={{ paddingBlockEnd: 'sm' }}
    >
      <Divider />
      <Content
        flexbox={
          media.isCompact
            ? { direction: 'column', alignItems: 'flex-start' }
            : undefined
        }
      >
        <Button
          label="License"
          icon={<Icon icon="balance" />}
          onClick={() => showDialog('dialog-license')}
        />
        <Button
          as="a"
          label="NPM package"
          icon={<Icon icon="sdk" />}
          href="https://www.npmjs.com/package/@paulobrandao/react-material"
          target="_blank"
        />
        <Button
          as="a"
          label="Repository"
          icon={<Icon icon="code" />}
          href="https://github.com/paulobrandao-dev/react-material"
          target="_blank"
        />
        <Button
          as="a"
          label="Bug report"
          icon={<Icon icon="bug_report" />}
          href="https://github.com/paulobrandao-dev/react-material/issues"
          target="_blank"
        />
      </Content>
      <DialogLicense />
    </Content>
  );
}
