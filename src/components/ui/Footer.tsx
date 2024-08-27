import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-7 py-5 mt-10 text-center text-gray-0">
      <Container>
        &copy; {currentYear} Holy Words. All rights reserved.
      </Container>
    </footer>
  );
}

export default Footer;
