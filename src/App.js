import React from 'react';
import './App.css';
import { faExpandAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
// import ExpandableContainer from './ExpandableContainerView.js'
import { Editor, Previewer } from './EditorPreviewerView';

let editorText = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\xa0- Some are bulleted.\n\xa0\xa0- With different indentation levels.\n\xa0\xa0\xa0- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"





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
      document.documentElement.style.setProperty("--previewer-max-height", "infinite");
      document.documentElement.style.setProperty("--previewer-height", "30vh");
      document.documentElement.style.setProperty("--previewer-margin-bottom", "20px");
    } else {
      // change height to large
      document.documentElement.style.setProperty("--editor-height", "100vh");
      document.documentElement.style.setProperty("--previewer-max-height", "0");
      document.documentElement.style.setProperty("--previewer-height", "0");
      document.documentElement.style.setProperty("--previewer-margin-bottom", "0");
    }
    this.setState({
      isEditorExpanded: !this.state.isEditorExpanded
    });
  }

  expandFxPreviewer = () => {
    console.log(this.state.isPreviewerExpanded);
    if (this.state.isPreviewerExpanded) {
      // change height to small
      document.documentElement.style.setProperty("--previewer-height", "30vh");
      document.documentElement.style.setProperty("--editor-max-height", "infinite");
      document.documentElement.style.setProperty("--editor-margin-top", "20px");
    } else {
      // change height to large
      document.documentElement.style.setProperty("--previewer-height", "100vh");
      document.documentElement.style.setProperty("--editor-max-height", "0");
      document.documentElement.style.setProperty("--editor-margin-top", "0");
    }
    this.setState({
      isPreviewerExpanded: !this.state.isPreviewerExpanded
    });
  }

  componentDidMount() {
    this.setState({
      previewerText: editorText
    });
  }

  render() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      breaks: true,
    });
    return (
      <div className="App">
        <Editor onChangeFx={this.handleTextChange} value={this.state.previewerText} expandFx={this.expandFxEditor} expandIcon={this.state.isEditorExpanded ? faExpandAlt : faExpandArrowsAlt} />
        <Previewer content={marked.parse(this.state.previewerText)} expandFx={this.expandFxPreviewer} expandIcon={this.state.isPreviewerExpanded ? faExpandAlt : faExpandArrowsAlt} />
      </div>
    );
  }
}

export default App;
