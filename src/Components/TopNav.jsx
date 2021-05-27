import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const TopNav = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const getFirstname = (name) => {
    let result = "";
    let i = 0;
    while(name[i] !== " ") {
      result += name[i];
      i++;
    }
    return result;
  }

  return (
    <Navbar style = {{ backgroundColor: "white"}} expand = "lg">
      <Navbar.Brand href="#home">BestCo</Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" />
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "mr-auto">
          <Nav.Link href="#home" onClick={props.setView}>Home</Nav.Link>
          <Nav.Link href="#about" onClick={props.setView}>About</Nav.Link>
          <Nav.Link href="#perks" onClick={props.setView}>Perks</Nav.Link>
          <Nav.Link href="#reviews" onClick={props.setView}>Reviews</Nav.Link>
          <Nav.Link href="#pricing" onClick={props.setView}>Pricing</Nav.Link>
        </Nav>
        {isAuthenticated ? <Nav.Link>Hey, {getFirstname(user.name)}</Nav.Link>  : <LoginButton />  }
        {isAuthenticated ? <LogoutButton /> : "" }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav;