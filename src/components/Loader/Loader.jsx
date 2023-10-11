import { Oval } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <Oval color="#00004b" secondaryColor="#00004b" />
    </Wrapper>
  );
};
