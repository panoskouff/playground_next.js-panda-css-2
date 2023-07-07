import { BoxProps, Box } from '../styled-system/jsx';
import { Positioned } from './Positioned';

type Props = {
  coverOffset?: number;
} & BoxProps;

export const ViewportCover: React.FC<Props> = ({
  children,
  coverOffset = '16px',
  // backgroundColor = '#f9f3e7',
  backgroundColor,
  borderRadius = '16px',
  ...rest
}) => {
  console.log(backgroundColor);
  return (
    <Box width='100%' height='100%' position='relative' {...rest}>
      <Box color='blue'>test</Box>
      <Positioned
        inset='24px'
        // @todo create background element
        css={{
          backgroundColor: 'backgroundSecondary',
          borderRadius: '16px',
          height: '100%',
        }}
      >
        {children}
      </Positioned>
    </Box>
  );
};

export default ViewportCover;
