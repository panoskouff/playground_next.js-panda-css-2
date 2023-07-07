import { styled, HTMLStyledProps } from "../styled-system/jsx";

type PositionedProps = HTMLStyledProps<"div">;

export const Positioned: React.FC<PositionedProps> = ({
  children,
  ...rest
}) => (
  <styled.div
    {...rest}
    position={rest.position ?? "absolute"}
    inset={rest.inset ?? "inset"}
  >
    {children}
  </styled.div>
);

export default Positioned;
