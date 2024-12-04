import React from "react";
import styled from "styled-components";
const Editor = ({ editorState, setEditorState }) => {
  // return <Text defaultValue={editorState}></Text>;
  return <Text>{editorState}</Text>
};

const Text = styled.div`
  width: 100%;
  height: 100%;
`;

export default Editor;
