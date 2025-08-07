import { Content, Font, IconButton, Toolbar } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import CompleteNavigation from './CompleteNavigation';
import MainNavigation from './MainNavigation';

export default function DocsNavRail({
  isOpen,
  openRail,
}: Readonly<{
  isOpen?: boolean;
  openRail: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  return (
    <Toolbar
      dockedAt="left"
      bgColor="surface"
      startNode={
        <Content
          role="toolbar"
          flexbox={{
            direction: 'row',
            alignItems: 'center',
            justifyContent: isOpen ? 'flex-start' : 'center',
            alignSelf: 'stretch',
          }}
          spacing={{ paddingInlineStart: isOpen ? 'lg' : undefined }}
        >
          <IconButton
            onClick={() => openRail(current => !current)}
            icon={<Icon icon={isOpen ? 'menu_open' : 'menu'} />}
          />
        </Content>
      }
      centerNode={
        <Content
          as="nav"
          flexbox={{
            direction: 'column',
            alignItems: isOpen ? 'flex-start' : undefined,
            rowGap: isOpen ? 'none' : 'md',
          }}
        >
          {isOpen ? <CompleteNavigation /> : <MainNavigation />}
        </Content>
      }
      endNode={
        <>
          <Font scale="label-small">{import.meta.env.PACKAGE_VERSION}</Font>
        </>
      }
    />
  );
}
