import { MdOutlineSaveAlt } from 'react-icons/md';
import styled from 'styled-components';

export const SaveIcon = styled(MdOutlineSaveAlt)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 3px;
  `;