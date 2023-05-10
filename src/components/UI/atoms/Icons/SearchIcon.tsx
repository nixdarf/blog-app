import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';

export const SearchIcon = styled(CgSearch)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 1px;
  `;