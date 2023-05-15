import styled from "styled-components";

export const ButtonLogin = styled.button`
  padding: 0 2rem;
  height: 40px;
  border: none;
  background-color: white;
  color: ${(props) => (props.purple ? "purple" : "orange")};
  font-weight: 600;
  border-radius: 8px;
`;

export const ButtonLoginDiferent = styled(ButtonLogin)`
  background-color: blue;
  color: red;
`;
