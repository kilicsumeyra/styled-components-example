import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Logo, Nav, Image } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.webp" />
          <div>
            <Button color="rgb(52, 182, 237)">Apply Courses</Button>
            <Button bg="rgb(52, 182, 237)">Talk to Adviser</Button>
          </div>
        </Nav>
        <Flex>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Eypes is a leading international software Bootcamp. Join a
              micro class online with other trainees and learn coding skills
              with a highly-skilled instructor.
            </p>
            <Button bg="rgb(52, 182, 237)">Start Your New Carier</Button>
          </div>
          <Image src="./images/hero.jpg" alt="hero" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;