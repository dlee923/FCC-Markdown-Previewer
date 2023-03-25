import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

let editorText = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\xa0- Some are bulleted.\n\xa0\xa0- With different indentation levels.\n\xa0\xa0\xa0- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"

const ExpandableContainer = ({title, content, expandFx}) => {
  return (
    <div className="expandable-container">
      <div className="expandable-container-header">
        <div className="expandable-container-header-title">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <p style={{ paddingLeft: "5px" }}>{title}</p>
        </div>      
        <button onClick={expandFx}><FontAwesomeIcon icon={faExpandArrowsAlt}/></button>
      </div>
      {content}
    </div>
  );  
}

const EditorInput = ({onChangeFx, value}) => {
  return (
    <textarea className="editor-input" onChange={onChangeFx} placeholder="markdown text" cols="100" value={value} id="editor"
    />
  );
}

const Editor = ({onChangeFx, value, expandFx}) => {
  return (
    <div className="editor">
      <ExpandableContainer title="Editor" content={<EditorInput onChangeFx={onChangeFx} value={value}/>} expandFx={expandFx} />
    </div>    
  );
}

const Previewer = ({content, expandFx}) => {
  return (
    <div className="previewer">
      <ExpandableContainer title="Previewer" content=<div className="previewer-output" id="preview">{content}</div> expandFx={expandFx} />
    </div>    
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previewerText: "",
      isEditorExpanded: false,
      isPreviewerExpanded: false
    }
  }

  handleTextChange = (e) => {
    this.setState({
      previewerText: e.target.value
    });
  }

  expandFxEditor = () => {
    console.log(this.state.isEditorExpanded);
    if (this.state.isEditorExpanded) {
      // change height to small
      document.documentElement.style.setProperty("--editor-height", "35vh");
    } else {
      // change height to large
      document.documentElement.style.setProperty("--editor-height", "100vh");
    }
    this.setState({
      isEditorExpanded: !this.state.isEditorExpanded
    });
  }

  expandFxPreviewer = () => {
    console.log(this.state.isPreviewerExpanded);
    if (this.state.isPreviewerExpanded) {
      // change height to small
      document.documentElement.style.setProperty("--previewer-height", "35vh");
    } else {
      // change height to large
      document.documentElement.style.setProperty("--previewer-height", "100vh");
    }
    this.setState({
      isEditorExpanded: !this.state.isEditorExpanded
    });
  }

  componentDidMount() {
    this.setState({
      previewerText: editorText
    });
  }

  render() {
    return (
      <div className="App">
        <Editor onChangeFx={this.handleTextChange} value={this.state.previewerText} expandFx={this.expandFxEditor} />
        <Previewer content={this.state.previewerText} expandFx={this.expandFx} />
      </div>
    );
  }
}

export default App;
