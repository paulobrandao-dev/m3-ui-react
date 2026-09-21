import { Font } from '@/lib/components/font'
import { BASE_PATH } from './constants'
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

export default function routes(path: string) {
  switch (path) {
    case `${BASE_PATH}/`:
      return <Home components={components} />
    default:
      return <NotFound components={components} />
  }
}
