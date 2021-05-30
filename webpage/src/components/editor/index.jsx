import React from "react";

import { Editor as DraftEditor, EditorState } from "draft-js";

import "draft-js/dist/Draft.css";

import { Line } from "./editor-block";

const Editor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const blockRenderer = () => {
    return {
      component: Line,
    };
  };

  return (
    <DraftEditor
      editorState={editorState}
      onChange={setEditorState}
      blockRendererFn={blockRenderer}
    />
  );
};

export default Editor;
