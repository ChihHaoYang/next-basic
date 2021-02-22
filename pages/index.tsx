import { useRouter } from 'next/router';
import Link from 'next/link';

export default function IndexPage() {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your internationalised page!</p>
      <br />
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <Link href="/blog">Blog</Link>
      <Link href="/login">Login</Link>
    </div>
  )
}
