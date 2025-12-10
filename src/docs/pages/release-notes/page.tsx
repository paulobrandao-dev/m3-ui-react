import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import {
  CanonicalLayout,
  Content,
  ListItem,
  SideSheet,
  useMediaQuery,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useCallback, useEffect, useState } from 'react';
import Major1Minor1Patch0 from './v-1-1-0';
import Major1Minor1Patch1 from './v-1-1-1';
import Major1Minor0Patch3 from './v1-0-3';

const NoteContent = ({
  children,
  isOpen,
  onClose,
}: Readonly<{
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}>) => {
  const media = useMediaQuery();

  if (media.isLessThanExpanded) {
    return (
      <SideSheet
        variant="modal"
        isOpen={isOpen}
        closeAction={{
          icon: <Icon symbol="close" />,
          onClose,
        }}
      >
        {children}
      </SideSheet>
    );
  }

  return <Content>{children}</Content>;
};

export default function ReleaseNotesPage() {
  const media = useMediaQuery();
  const { isFluidContent, setSubtitle } = useSettings();
  const [current, setCurrent] = useState<string>(
    import.meta.env.PACKAGE_VERSION,
  );
  const [isOpen, toggleNote] = useState<boolean>(false);

  const handleListClick = useCallback(
    (version: string) => {
      setCurrent(version);
      if (media.isLessThanExpanded) {
        toggleNote(true);
      }
    },
    [media.isLessThanExpanded],
  );

  useEffect(() => {
    setSubtitle('Release notes');
    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  useEffect(() => {
    if (media.isGreaterThanMedium) {
      toggleNote(false);
    }
  }, [media.isGreaterThanMedium]);

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
            onClick={() => handleListClick('1.1.1')}
            isSelected={
              current === '1.1.1' && (media.isLessThanExpanded ? isOpen : true)
            }
          />
          <ListItem
            headline="1.1.0"
            supportingText="🧐 Documentation is necessary."
            onClick={() => handleListClick('1.1.0')}
            isSelected={
              current === '1.1.0' && (media.isLessThanExpanded ? isOpen : true)
            }
          />
          <ListItem
            headline="1.0.3"
            supportingText="🤩 The first official release"
            onClick={() => handleListClick('1.0.3')}
            isSelected={
              current === '1.0.3' && (media.isLessThanExpanded ? isOpen : true)
            }
          />
        </Content>
        <NoteContent onClose={() => toggleNote(false)} isOpen={isOpen}>
          <Major1Minor1Patch1 isActive={current === '1.1.1'} />
          <Major1Minor1Patch0 isActive={current === '1.1.0'} />
          <Major1Minor0Patch3 isActive={current === '1.0.3'} />
        </NoteContent>
      </CanonicalLayout>
    </Content>
  );
}
