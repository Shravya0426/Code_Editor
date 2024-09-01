import React, { useState } from "react";
import "codemirror/lib/codemirror.css"; //stylerelated to the text editor'
import "codemirror/theme/material.css";
//import the languages in below 3
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";
//Controlled facilitates managing the editor's state and behavior programmatically,
//such as setting initial content, handling user input, and configuring editor options through props.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          //from codemirror library which we have insatlled from new treminal as this terminal was running
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material", //to have the dark theme
          lineNumber: true,
        }}
      />
    </div>
  );
}
