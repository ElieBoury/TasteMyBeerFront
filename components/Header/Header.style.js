import styled from "styled-components";
import { BLUE } from "../../styles/colors";

export const HeaderWrapper = styled.div`
  display: flex;
  background: ${BLUE};
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 5px 10px grey;

  p, h1 {
    margin: 0px;
  }

  div {
    display: flex;
    align-items: center;
  }

  .title {
    color: white;
    margin-right: 40px;
  }

  .avatar {
    background: grey;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-left: 50px;
  }

  .link {
    margin-left: 50px;
    color: white;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }

  .searchBeer {
    border: none;
    border-radius: 10px;
    height: 35px;
    width: 360px;
    padding: 10px;
  }
`;
