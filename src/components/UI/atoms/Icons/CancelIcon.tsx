import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

export const CancelIcon = styled(MdOutlineCancel)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 3px;
  `;