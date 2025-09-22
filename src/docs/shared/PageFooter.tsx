import { Content, Divider, Font, useMediaQuery } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';

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
          variant="label-large"
          href="https://www.npmjs.com/package/m3-ui-react"
          target="_blank"
          flexbox={{ direction: 'row', gap: 'xs', alignItems: 'center' }}
          spacing={{ paddingInline: 'lg' }}
          textColor="primary"
        >
          <Icon symbol="sdk" />
          NPM package
        </Font>
        <Font
          as="a"
          variant="label-large"
          href="https://github.com/paulobrandao-dev/m3-ui-react"
          target="_blank"
          flexbox={{ direction: 'row', gap: 'xs', alignItems: 'center' }}
          spacing={{ paddingInline: 'lg' }}
          textColor="primary"
        >
          <Icon symbol="code" />
          Repository
        </Font>
        <Font
          as="a"
          variant="label-large"
          href="https://github.com/paulobrandao-dev/m3-ui-react/issues"
          target="_blank"
          flexbox={{ direction: 'row', gap: 'xs', alignItems: 'center' }}
          spacing={{ paddingInline: 'lg' }}
          textColor="primary"
        >
          <Icon symbol="bug_report" />
          Bug report
        </Font>
      </Content>
    </Content>
  );
}
