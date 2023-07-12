import { styled, HTMLStyledProps } from '../styled-system/jsx';

// @todo do I need to omit properties like 'color' from React.HTMLAttributes<HTMLDivElement> ?

type PositionedProps = Merge<
  React.HTMLAttributes<HTMLDivElement>,
  Pick<
    HTMLStyledProps<'div'>,
    'top' | 'right' | 'bottom' | 'left' | 'inset' | 'position' | 'css'
  >
>;

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
