import { Layout } from '../layout/Layout'
import { Button } from '../components/Button'
import logo from '../assets/logo.svg'
import playervscpu from '../assets/player-vs-cpu.svg'
import playervsplayer from '../assets/player-vs-player.svg'
import { Container } from '../components/Container'

export const StartGame = () => {
  return (
    <Layout className='flex justify-center items-center'>
      <Container>
        <div className='w-16 mx-auto mb-10'>
          <img src={logo} alt="logo" className='w-full' />
        </div>

        <div className='flex flex-col gap-7'>
          <Button className='text-left flex items-center justify-between' color='primary'>
            PLAY VS CPU
            <img src={playervscpu} alt='player-vs-cpu' />
          </Button>
          <Button className='text-left flex items-center justify-between' to='/game' color='secondary' type='link'>
            PLAY VS PLAYER
            <img src={playervsplayer} alt='player-vs-cpu' />
          </Button>
          <Button className='text-left' color='tertiary' to='/rules' type='link'>
            Game Rules
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
