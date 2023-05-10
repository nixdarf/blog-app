import { CgChevronLeft } from 'react-icons/cg';
import styled from 'styled-components';

export const ChevronLeftIcon = styled(CgChevronLeft)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 1px;
  `;