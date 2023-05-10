import { RiDeleteBinLine } from 'react-icons/ri';
import styled from 'styled-components';

export const DeleteIcon = styled(RiDeleteBinLine)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 3px;
  `;