import { styled, HTMLStyledProps } from '../styled-system/jsx';

import { PropertyValue } from '../styled-system/types/prop-type';

type PositionedProps = {
  mode?: PropertyValue<'position'>;
  additional?: HTMLStyledProps<'div'>;
} & Pick<
  HTMLStyledProps<'div'>,
  'top' | 'right' | 'bottom' | 'left' | 'inset'
> &
  React.HTMLAttributes<HTMLDivElement>;

export const Positioned: React.FC<PositionedProps> = ({
  children,
  mode = 'absolute',
  inset = 0,
  additional,
  ...rest
}) => (
  <styled.div position={mode} inset={inset} {...additional} {...rest}>
    {children}
  </styled.div>
);

export default Positioned;
