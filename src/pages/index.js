import { ABeeZee } from 'next/font/google'
const aBeeZee = ABeeZee({ subsets: ['latin'], weight:'400' })
import { useSelector } from 'react-redux';
import LoginButton from '../../components/LoginButton';
export default function Home() {

  const alert = useSelector(state => state.alert.alert)

  return (
    <main
      className={`flex min-h-screen flex-col gap-4 items-center p-24 ${aBeeZee.className}`}
    >
      <h1>Open Vino</h1>

      <LoginButton />
      {alert && alert}
    </main>
  )
}
