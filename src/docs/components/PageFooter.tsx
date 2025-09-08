import { Button, Content, Divider, useMediaQuery } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import DialogLicense from './DialogLicense';
import SettingsMenu from './SettingsMenu';

export default function PageFooter() {
  const media = useMediaQuery();

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
      <SettingsMenu />
    </Content>
  );
}
