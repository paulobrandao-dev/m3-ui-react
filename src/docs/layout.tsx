import {
  Appbar,
  AppbarContent,
  AppbarHeading,
  AppbarRow,
  AppbarSubtitle,
  AppbarTitle,
} from '@/lib/components/appbar'
import { IconButton } from '@/lib/components/icon-button'
import { Icon } from '@/lib/icon/rounded'
import { useSettings } from './settings/hook'
import { useState } from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { title, subtitle, navAction } = useSettings()
  const [settingsIsOpen, toggleSettings] = useState(false)

  return (
    <>
      <div role='presentation'>
        <Appbar>
          <AppbarRow>
            {navAction !== undefined && (
              <AppbarContent variant='start'>
                {navAction === 'menu' && (
                  <IconButton>
                    <Icon symbol='menu' />
                  </IconButton>
                )}
                {navAction === 'back' && (
                  <IconButton>
                    <Icon symbol='arrow_back' />
                  </IconButton>
                )}
              </AppbarContent>
            )}
            <AppbarContent variant='end'>
              <IconButton>
                <Icon symbol='search' />
              </IconButton>
              <IconButton
                variant='filled'
                onClick={() => toggleSettings(current => !current)}
                isTogglable
                isSelected={settingsIsOpen}
              >
                <Icon symbol='settings' />
              </IconButton>
            </AppbarContent>
          </AppbarRow>
          {(title || subtitle) && (
            <AppbarRow>
              <AppbarHeading variant='large'>
                {title && <AppbarTitle>{title}</AppbarTitle>}
                {subtitle && <AppbarSubtitle>{subtitle}</AppbarSubtitle>}
              </AppbarHeading>
            </AppbarRow>
          )}
        </Appbar>
        <main style={{ padding: '1.5rem 1rem' }}>{children}</main>
      </div>
    </>
  )
}
