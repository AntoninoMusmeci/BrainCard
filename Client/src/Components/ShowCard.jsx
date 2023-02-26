import React from "react";
import { Editor, convertFromRaw } from "draft-js";
import { EditorState } from "draft-js";
export const ShowCard = ({ card }) => {
  let textToRender = convertFromRaw(JSON.parse(card));
  textToRender = EditorState.createWithContent(textToRender);

  return (
    <div className="readonly-editor">
      <Editor editorState={textToRender} readOnly={true} />
    </div>
  );
};
