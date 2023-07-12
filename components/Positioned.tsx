import { styled, HTMLStyledProps } from '../styled-system/jsx';

type PositionedProps = Pick<
  HTMLStyledProps<'div'>,
  'top' | 'right' | 'bottom' | 'left' | 'inset' | 'position'
> &
  HTMLStyledProps<'div'>;

export const Positioned: React.FC<PositionedProps> = ({
  children,
  ...rest
}) => (
  <styled.div
    {...rest}
    position={rest.position ?? 'absolute'}
    inset={rest.inset ?? 0}
  >
    {children}
  </styled.div>
);

export default Positioned;
