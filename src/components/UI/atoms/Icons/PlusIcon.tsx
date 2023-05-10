import { MdAddCircleOutline } from 'react-icons/md';
import styled from 'styled-components';

export const PlusIcon = styled(MdAddCircleOutline)
  .attrs(p => ({ style: { color: p.color ?? 'white' } })) <{ color?: string; }>`
    margin-bottom: 3px;
  `;