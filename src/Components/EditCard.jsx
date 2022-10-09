import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const EditCard = ({ editorState, setEditorState }) => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div style = {{backgroundColor: "white", height: "250px", color: "black", padding: "10px"}}>
      <Editor 
        editorState={editorState}
        toolbarClassName="demo-toolbar-custom"
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor-custom"
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "history",
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: {},
        }}
        onEditorStateChange={(e) => setEditorState(e)}
      />
    </div>
  );
};
