import { Outlet, Router } from 'react-router-dom'
import { Container, Content, Nav, Navbar } from 'rsuite'

function App() {

  return (
    <Container className='w-full h-full'>
      <Navbar>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item href='projects'>Projects</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item >Settings</Nav.Item>
        </Nav>
      </Navbar>
      <Content className='p-4'>

        <Outlet />

      </Content>

    </Container>
  )
}

export default App
