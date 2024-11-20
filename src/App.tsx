import { Outlet } from 'react-router-dom'
import { Affix, Container, Content, Nav, Navbar } from 'rsuite'

function App() {

  return (
    <Container className='w-full h-full'>
      <Affix>
        <Navbar>
          <Navbar.Brand href="/">GIT PROJ</Navbar.Brand>
          <Nav>
            <Nav.Item href='/'>Home</Nav.Item>
            <Nav.Item href='/projects'>Projects</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item >Settings</Nav.Item>
          </Nav>
        </Navbar>
      </Affix>
      <Content className='p-4 flex justify-center'>

        <Outlet />

      </Content>

    </Container>
  )
}

export default App
