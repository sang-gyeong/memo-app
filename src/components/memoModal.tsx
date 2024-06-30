import { useState } from 'react';
import styled from 'styled-components';
import memoState from '../states/memoState';
import { useRecoilState } from 'recoil';
import { modalState } from '../states/modalState';

function MemoModal({ memo }: { memo: Memo }) {
  const [title, setTitle] = useState<string>(memo.title || '');
  const [content, setContent] = useState<string>(memo.content);
  const [memos, setMemos] = useRecoilState(memoState);
  const [, setModalState] = useRecoilState(modalState);

  const onClickConfirmBtn = () => {
    if (!content) {
      alert('내용을 입력하세요.');
      return;
    }
    const _memos = memos.map((m) =>
      m.id !== memo.id ? m : { ...m, title, content }
    );

    setMemos(_memos);
    setModalState({ component: null, isOpen: false });
  };

  const onClickDeleteBtn = () => {
    setMemos(memos.filter((m) => m.id !== memo.id));
    setModalState({ component: null, isOpen: false });
  };

  return (
    <Container>
      <TitleInput
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        maxLength={20}
        placeholder={'제목'}
        autoFocus
      />
      <ContentInput
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="내용을 입력하세요"
        maxLength={200}
        rows={5}
      />
      <ButtonWrapper>
        <DeleteButton
          className="material-symbols-outlined"
          onClick={onClickDeleteBtn}
        >
          delete
        </DeleteButton>
        <ConfirmButton onClick={onClickConfirmBtn}>완료</ConfirmButton>
      </ButtonWrapper>
    </Container>
  );
}

export default MemoModal;

const Container = styled.div`
  box-shadow: 2px 2px 5px gray;
  transition: all 0.2s linear;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px 4px;
  height: auto;
`;

const TitleInput = styled.input`
  border: none;
  font-size: 1.1em;
  white-space: pre-wrap;
  outline: none;
  font-weight: bold;
  margin-top: 8px;
  width: 100%;
  height: 56px;
  padding-left: 18px;
  box-sizing: border-box;
`;

const ContentInput = styled.textarea`
  border: none;
  margin-top: 8px;
  white-space: pre-wrap;
  outline: none;
  width: 100%;
  padding-left: 18px;
  box-sizing: border-box;
  resize: none;
  font-weight: normal;
  font-size: 1em;
  padding-top: 0;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  margin-top: 10px;
`;

const DeleteButton = styled.span`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const ConfirmButton = styled.button`
  color: #1a66cc;
  background-color: transparent;
  border: none;
  width: auto;
  align-self: end;
  outline: none;
  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    outline: none;
    border: none;
  }
`;
