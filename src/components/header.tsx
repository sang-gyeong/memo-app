import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <Title>MEMO ✏️</Title>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #1a66cc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  font-weight: bold;
`;
