import styled, { keyframes } from "styled-components";

import LoadingIcon from "../../assets/loading.png";

import { Text } from "../Text";

interface Props {
  className?: string;
  children: string;
  isLoading?: boolean;
}

export const Info = ({ isLoading, className, children }: Props) => {
  return (
    <InfoStyled className={className} $bg="#E9F3FF">
      {isLoading ? <img src={LoadingIcon} alt="" className="info_img" /> : null}
      <Text size="md" color="#4F4F4F">
        {children}
      </Text>
    </InfoStyled>
  );
};

const Rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const InfoStyled = styled.div<{ $bg: string }>`
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 5px;
  background-color: ${(props) => props.$bg};

  & .info_img {
    animation: ${Rotate} 0.3s ease infinite;
  }
`;
