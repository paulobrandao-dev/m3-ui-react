import {
  Appbar,
  AppbarContent,
  AppbarHeading,
  AppbarRow,
  AppbarSubtitle,
  AppbarTitle,
} from '@/lib/components/appbar'
import { IconButton } from '@/lib/components/icon-button'
import {
  NavRail,
  NavRailContent,
  NavRailFooter,
  NavRailHeader,
  NavRailItem,
  NavRailItemIcon,
  NavRailItemLabel,
  NavRailSectionHeader,
} from '@/lib/components/nav-rail'
import { Icon } from '@/lib/icon/rounded'
import { useEffect, useState } from 'react'
import { Link } from './router'
import { routes } from './routes'
import { useSettings } from './settings/hook'
import { useMediaQuery } from '@/lib/hooks'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const media = useMediaQuery()
  const { title, subtitle, navAction, toggleDarkMode, isDarkMode } =
    useSettings()
  const [settingsIsOpen, toggleSettings] = useState(false)
  const [railIsOpen, toggleRail] = useState(media.isGreaterThanExpanded)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const routeChangeHandler = () => {
      setCurrentPath(window.location.pathname)
    }
    document.addEventListener('routechange', routeChangeHandler)
    return () => {
      document.removeEventListener('routechange', routeChangeHandler)
    }
  }, [])

  return (
    <>
      <NavRail
        variant='standard'
        state={railIsOpen ? 'expanded' : 'collapsed'}
        onChangeState={state => toggleRail(state === 'expanded')}
      >
        <NavRailHeader>
          <IconButton
            onClick={() => toggleRail(current => !current)}
            style={railIsOpen ? { marginLeft: '1rem' } : undefined}
          >
            <Icon symbol={railIsOpen ? 'menu_open' : 'menu'} />
          </IconButton>
        </NavRailHeader>
        <NavRailContent>
          {routes.map(route => {
            if (route.isGroupRoot && railIsOpen) {
              return (
                <NavRailSectionHeader key={route.path}>
                  {route.label}
                </NavRailSectionHeader>
              )
            }

            if (route.intoGroup && !railIsOpen) {
              return null
            }

            return (
              <NavRailItem
                as={Link}
                to={route.path}
                key={route.path}
                isActive={
                  route.path === currentPath ||
                  (route.isGroupRoot && currentPath.startsWith(route.path))
                }
              >
                <NavRailItemIcon>{route.icon}</NavRailItemIcon>
                <NavRailItemLabel>{route.label}</NavRailItemLabel>
              </NavRailItem>
            )
          })}
        </NavRailContent>
        <NavRailFooter>
          <IconButton
            variant='standard'
            isTogglable
            isSelected={isDarkMode}
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Turn on the lights' : 'Turn off the lights'}
          >
            <Icon symbol={isDarkMode ? 'dark_mode' : 'light_mode'} />
          </IconButton>
        </NavRailFooter>
      </NavRail>
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
        {children}
      </div>
    </>
  )
}
