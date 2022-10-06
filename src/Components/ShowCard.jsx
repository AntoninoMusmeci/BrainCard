import React,{useState} from "react";
import { Editor, convertFromRaw } from "draft-js";
import { EditorState } from "draft-js";
export const ShowCard = ({ card }) => {
  // const [editorValue, setEditorValue] = useState(EditorState.createWithContent(card));
 
  let textToRender = convertFromRaw(JSON.parse(card));
  console.log("fsfsf",textToRender)
  textToRender = EditorState.createWithContent(textToRender);

  return (
    <div className="readonly-editor">
     <Editor editorState={textToRender} readOnly={true} /> 
    </div>
  );
};
