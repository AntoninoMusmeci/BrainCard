import React from "react";
import Editor from "./Editor";

export const EditCard = ({ editorState, setEditorState }) => {


  return (
    <div>
      <Editor editorState = {editorState} setEditorState = {setEditorState}/>
    </div>
  );
};
