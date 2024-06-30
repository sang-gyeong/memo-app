import styled from 'styled-components';
import MemoItem from './memoItem';
import { useRecoilState } from 'recoil';
import memoState from '../states/memoState';

function MemoContainer() {
  const [memos] = useRecoilState(memoState);

  return (
    <Container>
      {memos.map((memo, idx) => (
        <MemoItem memo={memo} key={idx} />
      ))}
    </Container>
  );
}

export default MemoContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
`;
