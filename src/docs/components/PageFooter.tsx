import { Content, Divider, Font, useMediaQuery } from '@/lib';
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
        as="address"
        flexbox={
          media.isCompact
            ? { direction: 'column', alignItems: 'flex-start' }
            : {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }
        }
      >
        <Font
          as="a"
          scale="label-large"
          href="https://www.npmjs.com/package/@paulobrandao/react-material"
          target="_blank"
          flexbox={{ direction: 'row', gap: 'xs', alignItems: 'center' }}
          spacing={{ paddingInline: 'lg' }}
          textColor="primary"
        >
          <Icon icon="sdk" />
          NPM package
        </Font>
        <Font
          as="a"
          scale="label-large"
          href="https://github.com/paulobrandao-dev/react-material"
          target="_blank"
          flexbox={{ direction: 'row', gap: 'xs', alignItems: 'center' }}
          spacing={{ paddingInline: 'lg' }}
          textColor="primary"
        >
          <Icon icon="code" />
          Repository
        </Font>
        <Font
          as="a"
          scale="label-large"
          href="https://github.com/paulobrandao-dev/react-material/issues"
          target="_blank"
          flexbox={{ direction: 'row', gap: 'xs', alignItems: 'center' }}
          spacing={{ paddingInline: 'lg' }}
          textColor="primary"
        >
          <Icon icon="bug_report" />
          Bug report
        </Font>
      </Content>
      <DialogLicense />
      <SettingsMenu />
    </Content>
  );
}
