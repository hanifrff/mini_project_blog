import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="Bisnis" id="Bisnis" />
            <label htmlFor="Bisnis">Bisnis</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Ekonomi" id="Ekonomi" />
            <label htmlFor="Ekonomi">Ekonomi</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Teknologi" id="Teknologi" />
            <label htmlFor="Teknologi">Teknologi</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Olahraga" id="Olahraga" />
            <label htmlFor="Olahraga">Olahraga</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Kuliner" id="Kuliner" />
            <label htmlFor="Kuliner">Kuliner</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="Internasional"
              id="Internasional"
            />
            <label htmlFor="Internasional">Internasional</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Fiksi" id="Fiksi" />
            <label htmlFor="Fiksi">Fiksi</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
