import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content, ListItem } from '@/lib';
import { useEffect, useState } from 'react';
import Major1Minor1Patch0 from './v-1-1-0';
import Major1Minor1Patch1 from './v-1-1-1';
import Major1Minor0Patch3 from './v1-0-3';

export default function ReleaseNotesPage() {
  const { isFluidContent, setSubtitle } = useSettings();
  const [current, setCurrent] = useState<string>(
    import.meta.env.PACKAGE_VERSION,
  );

  useEffect(() => {
    setSubtitle('Release notes');
    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Release notes"
        element={
          <CardIcon color="primary" icon="release_alert" size={200} isFilled />
        }
      />
      <CanonicalLayout
        variant="list-detail"
        spacing={{
          paddingBlock: 'xl',
          marginInline: 'auto',
        }}
        gap={{ gap: 'xl' }}
        isFluid={isFluidContent}
      >
        <Content as="menu">
          <ListItem
            headline="1.1.1"
            supportingText="🔧 Fixes"
            onClick={() => setCurrent('1.1.1')}
            isSelected={current === '1.1.1'}
          />
          <ListItem
            headline="1.1.0"
            supportingText="🧐 Documentation is necessary."
            onClick={() => setCurrent('1.1.0')}
            isSelected={current === '1.1.0'}
          />
          <ListItem
            headline="1.0.3"
            supportingText="🤩 The first official release"
            onClick={() => setCurrent('1.0.3')}
            isSelected={current === '1.0.3'}
          />
        </Content>
        <Content>
          <Major1Minor1Patch1 isActive={current === '1.1.1'} />
          <Major1Minor1Patch0 isActive={current === '1.1.0'} />
          <Major1Minor0Patch3 isActive={current === '1.0.3'} />
        </Content>
      </CanonicalLayout>
    </Content>
  );
}
