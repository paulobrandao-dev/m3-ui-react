import { Font } from '@/lib/components/font'
import { Icon } from '@/lib/icon/sharp'
import { BASE_PATH } from './constants'
import Appbar from './pages/appbar.mdx'
import Components from './pages/components.mdx'
import Home from './pages/home.mdx'
import NotFound from './pages/not-found.mdx'

const components = {
  h1(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <Font as='h1' variant='headline-large' {...props} />
  },
  h2(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <Font as='h2' variant='headline-medium' {...props} />
  },
  h3(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <Font as='h3' variant='headline-small' {...props} />
  },
  h4(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <Font as='h4' variant='title-large' {...props} />
  },
  h5(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <Font as='h5' variant='title-medium' {...props} />
  },
  h6(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return <Font as='h6' variant='title-small' {...props} />
  },
  p(props: React.HTMLAttributes<HTMLParagraphElement>) {
    return <Font as='p' variant='body-large' {...props} />
  },
}

type Route = {
  label: string
  icon: React.ReactNode
  path: string
  render: React.ReactNode
  isGroupRoot?: boolean
  intoGroup?: boolean
}

export const routes: Route[] = [
  {
    label: 'Home',
    icon: <Icon symbol='home' />,
    path: `${BASE_PATH}/`,
    render: <Home components={components} />,
  },
  {
    label: 'Components',
    icon: <Icon symbol='extension' />,
    path: `${BASE_PATH}/components`,
    render: <Components components={components} />,
    isGroupRoot: true,
  },
  {
    label: 'Appbar',
    icon: <Icon symbol='toolbar' />,
    path: `${BASE_PATH}/components/appbar`,
    render: <Appbar components={components} />,
    intoGroup: true,
  },
]

export function currentRoute(path: string) {
  const found = routes.find(route => route.path === path)
  return found ? found.render : <NotFound components={components} />
}
