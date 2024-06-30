import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/UseOutsideClick';
import memoState from '../states/memoState';
import { useRecoilState } from 'recoil';

function Input() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [memos, setMemos] = useRecoilState(memoState);

  const inputRef = useRef<HTMLInputElement>(null);
  useOutsideClick({ ref: inputRef, handler: () => setIsEditMode(false) });

  const focusHandler = (_: any) => {
    setIsEditMode(true);
  };

  const clickHandler = () => {
    if (!content) {
      alert('내용을 입력하세요.');
      return;
    }

    const newMemo = { id: crypto.randomUUID(), title, content };

    setMemos([...memos, newMemo]);
    setIsEditMode(false);
  };

  useEffect(() => {
    if (isEditMode === false) {
      setTitle('');
      setContent('');
    }
  }, [isEditMode]);

  return isEditMode ? (
    <EditContainer ref={inputRef}>
      <TitleInput
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        maxLength={20}
        placeholder={'제목'}
        onFocus={focusHandler}
        autoFocus
      />
      <ContentInput
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="내용을 입력하세요"
        maxLength={200}
        rows={5}
      />
      <Button onClick={clickHandler}>완료</Button>
    </EditContainer>
  ) : (
    <InitialContainer ref={inputRef}>
      <InsertComponent
        isEditMode={isEditMode}
        placeholder={'메모를 입력하세요'}
        onFocus={focusHandler}
      />
    </InitialContainer>
  );
}

export default Input;

const InitialContainer = styled.div`
  height: 56px;
  box-shadow: 2px 2px 5px gray;
  transition: all 0.2s linear;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const InsertComponent = styled.input<{ isEditMode?: boolean }>`
  border: none;
  font-size: 1.1em;
  white-space: pre-wrap;
  outline: none;
  font-weight: ${({ isEditMode }) => (isEditMode ? 'bold' : 'normal')};
  width: 100%;
  height: 56px;
  padding-left: 18px;
  box-sizing: border-box;
`;

const EditContainer = styled(InitialContainer)`
  padding: 8px 4px;
  height: 135px;
  animation-duration: 0.2s;
  animation-name: expend;

  @keyframes expend {
    from {
      height: 56px;
    }

    to {
      height: 135px;
    }
  }
`;

const Button = styled.button`
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

const TitleInput = styled(InsertComponent)<{ isEditMode?: boolean }>`
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
