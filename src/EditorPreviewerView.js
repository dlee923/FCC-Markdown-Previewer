import { ExpandableContainer } from './ExpandableContainerView.js'

const EditorInput = ({onChangeFx, value}) => {
    return (
        <textarea className="editor-input" onChange={onChangeFx} placeholder="markdown text" cols="100" value={value} id="editor"
        />
    );
}
  
const Editor = ({onChangeFx, value, expandFx, expandIcon}) => {
    return (
        <div className="editor">
        <ExpandableContainer title="Editor" content={<EditorInput onChangeFx={onChangeFx} value={value}/>} expandFx={expandFx} expandIcon={expandIcon} />
        </div>    
    );
}

const Previewer = ({content, expandFx, expandIcon}) => {
    return (
        <div className="previewer"> 
        <ExpandableContainer title="Previewer" content=<div className="previewer-output" id="preview" dangerouslySetInnerHTML={{ __html: content}}></div> expandFx={expandFx} expandIcon={expandIcon} />
        </div>    
    );
}

export { Editor, Previewer };