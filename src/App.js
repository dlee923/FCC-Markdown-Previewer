import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const ExpandableContainer = ({title, content}) => {
  return (
    <div className="expandable-container">
      <div className="expandable-container-header">
        <div className="expandable-container-header-title">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <p style={{ paddingLeft: "5px" }}>{title}</p>
        </div>      
        <button><FontAwesomeIcon icon={faExpandArrowsAlt}/></button>
      </div>
      {content}
    </div>
  );  
}

const EditorInput = () => {
  return (
    <textarea className="editor-input" placeholder="markdown text" cols="100"
    />
  );
}

const Editor = () => {
  return (
    <div className="editor">
      <ExpandableContainer title="Editor" content={<EditorInput />}/>      
    </div>    
  );
}

const Previewer = () => {
  return (
    <div className="previewer">
      <ExpandableContainer title="Previewer" />      
    </div>    
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }
    
}

export default App;
