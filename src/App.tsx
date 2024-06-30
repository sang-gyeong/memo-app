import styled from 'styled-components';
import './App.css';
import './normalize.css';
import Header from './components/header';
import Input from './components/input';
import MemoContainer from './components/memoContainer';
import { RecoilRoot } from 'recoil';
import Modal from './components/modal';

function App() {
  return (
    <RecoilRoot>
      <Container>
        <Header />
        <Main>
          <Input />
          <MemoContainer />
        </Main>
      </Container>
      <Modal />
    </RecoilRoot>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  background-color: #f2f2f2;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  // border: 3px solid green;
  flex-direction: column;
  padding: 24px;
  gap: 18px;
  box-sizing: border-box;
`;
