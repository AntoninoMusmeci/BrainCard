import React from "react";
import styled from "styled-components";
function Answare({answare}) {
  return (
    <AnswareStyle>
      <p>{answare}</p>
    </AnswareStyle>
  );
}
const AnswareStyle = styled.div`
margin: 5px 10px;
p{margin: 0}
 `
export default Answare;
