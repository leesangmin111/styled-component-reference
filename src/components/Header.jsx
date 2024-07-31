import styled from "styled-components";
import { flexMixin, fontMixin } from "../style/style";

//.header-container
const StyledHeader = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })}
  padding: 10px 20px;
  background-color: black;
  ul {
    ${flexMixin({ justify: "center", align: "center", gap: 20 })}
    li {
      ${fontMixin({ size: 13, weight: 400 })}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader className="header-container">
      <h2>OZ코딩스쿨</h2>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}
