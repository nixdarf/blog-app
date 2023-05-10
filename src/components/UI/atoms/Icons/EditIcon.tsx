import { CgPen } from 'react-icons/cg';
import styled from 'styled-components';

export const EditIcon = styled(CgPen)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 3px;
  `;