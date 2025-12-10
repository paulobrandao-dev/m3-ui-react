import {
  Content,
  IconButton,
  NavRail,
  Tooltip,
  useMediaQuery,
  usePopoverControl,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useRef, useState } from 'react';
import { RAIL_ID } from '../constants';
import CompleteNavigation from './CompleteNavigation';
import MainNavigation from './MainNavigation';

export default function DocsNavRail() {
  const media = useMediaQuery();
  const rail = useRef<HTMLElement>(null);
  const { hidePopover } = usePopoverControl(RAIL_ID);
  const [isOpen, openRail] = useState<boolean>(false);

  useEffect(() => {
    openRail(media.isGreaterThanLarge);
  }, [media.isGreaterThanLarge]);

  useEffect(() => {
    const links =
      rail.current?.querySelectorAll<HTMLAnchorElement>('a.m3-navlink');
    if (media.isLessThanExpanded) {
      links?.forEach(link => {
        link.addEventListener('click', hidePopover);
      });
    } else {
      links?.forEach(link => {
        link.removeEventListener('click', hidePopover);
      });
    }
  }, [hidePopover, media.isLessThanExpanded, isOpen]);

  return (
    <NavRail
      ref={rail}
      variant={media.isLessThanExpanded ? 'modal' : 'standard'}
      id={RAIL_ID}
      isExpanded={isOpen}
      header={
        <Content
          role="toolbar"
          flexbox={{
            direction: 'column',
            alignItems:
              isOpen || media.isLessThanExpanded ? 'flex-start' : 'center',
            alignSelf: 'stretch',
          }}
          spacing={{
            marginInline: isOpen || media.isLessThanExpanded ? 'lg' : undefined,
          }}
        >
          <Tooltip text={isOpen || media.isLessThanExpanded ? 'Close' : 'Open'}>
            <IconButton
              onClick={() => {
                if (media.isGreaterThanMedium) {
                  openRail(current => !current);
                }
              }}
              popoverTarget={media.isLessThanExpanded ? RAIL_ID : undefined}
              popoverTargetAction={
                media.isLessThanExpanded ? 'hide' : undefined
              }
              aria-label={
                isOpen || media.isLessThanExpanded ? 'Close rail' : 'Open rail'
              }
            >
              <Icon
                symbol={
                  isOpen || media.isLessThanExpanded ? 'menu_open' : 'menu'
                }
              />
            </IconButton>
          </Tooltip>
        </Content>
      }
    >
      {isOpen || media.isLessThanExpanded ? (
        <CompleteNavigation />
      ) : (
        <MainNavigation />
      )}
    </NavRail>
  );
}
