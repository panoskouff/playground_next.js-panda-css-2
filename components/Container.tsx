import { styled } from '../styled-system/jsx';
import type { HTMLStyledProps } from '../styled-system/jsx';

type PositionedProps = {
  additional?: HTMLStyledProps<'div'>;
} & Pick<
  HTMLStyledProps<'div'>,
  'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'
> &
  React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<PositionedProps> = ({
  children,
  additional,
  ...rest
}) => (
  <styled.div {...additional} {...rest}>
    {children}
  </styled.div>
);
