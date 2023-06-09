import styled from '@emotion/styled';

type TextProps = Partial<{
  fontSize: string;
  fontWeight: number;
  color: string;
}>;

export const Text = styled.span<TextProps>`
  font-size: ${({ theme, fontSize = theme.fonts.size.body }) => fontSize};
  font-weight: ${({ theme, fontWeight = theme.fonts.weight.regular }) =>
    fontWeight};
  color: ${({ color = 'black' }) => color};
  line-height: 1.5;
`;

export const PrimaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary.default};
`;
