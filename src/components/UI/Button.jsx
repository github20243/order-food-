import styled from "styled-components";
import { getVariantButton } from "../../helpers/styling";

export const Button = ({
  children,
  icon,
  variant,
  disabled,
  onClick,
  type,
  ...rest
}) => {
  const withIcon = icon ? (
    <>
      <StyledIcon>{icon}</StyledIcon>
      {children}
    </>
  ) : (
    children
  );

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      type={type}
      {...rest}
    >
      {withIcon}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${getVariantButton}
`;

const StyledIcon = styled.span`
  margin-right: 10px;
`;
