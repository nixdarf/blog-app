import { CgChevronRight } from 'react-icons/cg';
import styled from 'styled-components';

export const ChevronRightIcon = styled(CgChevronRight)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 1px;
  `;