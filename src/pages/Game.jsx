import { Container } from '../components/Container'
import { Layout } from '../layout/Layout'
import { Header } from '../components/Board/Header'
import { Board } from '../components/Board/Board'
import { Footer } from '../components/Board/Footer'

export const Game = () => {
  return (
    <Layout className="py-10">
      <Container>
        <Header />
        <Board />
      </Container>
      <Footer />
    </Layout>
  )
}
