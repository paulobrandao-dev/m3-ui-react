import { Icon } from '@/lib/icon/rounded'
import {
  Appbar,
  AppbarContent,
  AppbarHeading,
  AppbarRow,
  AppbarSubtitle,
  AppbarTitle,
} from '@/lib/components/appbar'
import { useSettings } from './settings/hook'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { title, subtitle, navAction } = useSettings()

  return (
    <>
      <div role='presentation'>
        <Appbar>
          <AppbarRow>
            {navAction !== undefined && (
              <AppbarContent variant='start'>
                {navAction === 'menu' && <Icon symbol='menu' />}
                {navAction === 'back' && <Icon symbol='arrow_back' />}
              </AppbarContent>
            )}
            <AppbarContent variant='end'>
              <Icon symbol='search' />
              <Icon symbol='more_vert' />
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
