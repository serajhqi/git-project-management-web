import { Container, Content, Header } from 'rsuite'

function App() {

  return (
    <Container className='w-full h-full'>
      <Header className='bg-red-100'>Header</Header>
      <Content className='p-4'>

        Projects:
        <div className="flex gap-3">
          <a href='/project/admin-service'>Admin Service</a>
          <a href='/project/price-service'>Price Service</a>
        </div>

        Some Reports are here from the:
        Time, number of tasks and activities that each user has

      </Content>

    </Container>
  )
}

export default App
