import styled from "styled-components";

export type TextVariant = 'h1' | 'h2' | 'h3' | 'title' | 'body' | 'label' | 'caption' | 'note';

export const variantMap: Record<TextVariant, React.ElementType> = {
  h1: styled.h1`
    font-size: 2rem;
    font-family: ${p => p.theme.fonts.heading};
  `,
  h2: styled.h2`
    font-size: 1.5rem;
    font-family: ${p => p.theme.fonts.heading};
  `,
  h3: styled.h3`
    font-size: 1.17rem;
    font-family: ${(p) => p.theme.fonts.heading};
    color: black;
  `,
  title: styled.h2`
    font-size: 1.5rem;
    font-family: ${p => p.theme.fonts.heading};
    color: ${p => p.theme.colors.primary};
  `,
  body: styled.p`
    font-size: 1rem;
    font-family: ${p => p.theme.fonts.body};
  `,
  label: styled.label`
    font-size: 1rem;
    font-family: ${p => p.theme.fonts.body};
  `,
  caption: styled.span`
    font-size: 0.8rem;
    font-family: ${p => p.theme.fonts.body};
  `,
  note: styled.span`
    font-size: 0.8rem;
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.primary};
  `,
};
