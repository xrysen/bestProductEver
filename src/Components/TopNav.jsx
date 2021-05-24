import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const TopNav = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar style = {{ backgroundColor: "white"}} expand = "lg">
      <Navbar.Brand href="#home">BestCo</Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" />
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#perks">Perks</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {isAuthenticated ? <Nav.Link>Hey, {user.name}</Nav.Link>  : <LoginButton />  }
        {isAuthenticated ? <LogoutButton /> : "" }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav;