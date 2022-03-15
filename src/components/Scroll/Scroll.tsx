import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { useState } from 'react';
import InfiniteScroll from './infiniteScroll';

export const Scroll = () => {
  const [active, setActive] = useState(false);

  function activeBtn() {
    setActive(!active);
  }

  return (
    <ScrollSection>
      <button className="btn-more" onClick={activeBtn}>
        더보기
      </button>
      {active ? <InfiniteScroll /> : null}
    </ScrollSection>
  );
};
const ScrollSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-more {
    width: 120px;
    height: 32px;
    border-radius: 40px;
    border: 1px solid ${COLOR.main};
    font-size: 14px;
    color: ${COLOR.main};
  }
`;
