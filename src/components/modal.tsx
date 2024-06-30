import { useRecoilState } from 'recoil';
import { modalState } from '../states/modalState';
import { useOutsideClick } from '../hooks/UseOutsideClick';
import styled from 'styled-components';
import { useRef } from 'react';

function Modal() {
  const [{ isOpen, component }, setModalState] = useRecoilState(modalState);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: modalRef,
    handler: () => setModalState({ component: null, isOpen: false }),
  });

  return (
    <>
      {isOpen && component ? (
        <DimmedBackground>
          <Component ref={modalRef}>{component}</Component>
        </DimmedBackground>
      ) : null}
    </>
  );
}

export default Modal;

const DimmedBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: rgb(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Component = styled.div`
  width: 70%;
  height: 300px;
`;
