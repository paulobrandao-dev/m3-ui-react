import { type ReactNode, useEffect } from 'react'
import { useSettings } from '../settings/hook'
import { type NavAction } from '../settings/context'

export const ApplyTitle = ({
  title,
  subtitle,
  navAction,
}: {
  title: ReactNode
  subtitle?: ReactNode
  navAction?: NavAction
}) => {
  const { setTitle, setSubtitle, setNavAction } = useSettings()

  useEffect(() => {
    setTitle(title)
    setSubtitle(subtitle)
    setNavAction(navAction)

    return () => {
      setTitle(undefined)
      setSubtitle(undefined)
      setNavAction(undefined)
    }
  }, [setTitle, setSubtitle, setNavAction, title, subtitle, navAction])

  return null
}
