import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../states/modalState';
import MemoModal from './memoModal';

function MemoItem({ memo }: { memo: Memo }) {
  const [, setModalState] = useRecoilState(modalState);

  const clickHandler = () => {
    setModalState({ isOpen: true, component: <MemoModal memo={memo} /> });
  };

  return (
    <Container onClick={clickHandler}>
      <Title>{memo.title}</Title>
      <Content>{memo.content}</Content>
    </Container>
  );
}

export default MemoItem;

const Container = styled.div`
  box-shadow: 2px 2px 5px gray;
  background-color: #ffff99;
  height: 240px;
  transition: all 0.1 ease-in;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 14px;
  &:hover {
    box-shadow: 4px 4px 6px gray;
  }
  line-height: 1.1em;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 1em;
  margin-top: 4px;
`;

const Content = styled.text`
  font-size: 0.9em;
  box-sizing: border-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 100%;
  width: 100%;
  display: block;
`;
