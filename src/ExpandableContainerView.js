import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const ExpandableContainer = ({title, content, expandFx, expandIcon}) => {
    return (
      <div className="expandable-container">
        <div className="expandable-container-header">
          <div className="expandable-container-header-title">
            <FontAwesomeIcon icon={faFreeCodeCamp} />
            <p style={{ paddingLeft: "5px" }}>{title}</p>
          </div>      
          <button onClick={expandFx}><FontAwesomeIcon icon={expandIcon}/></button>
        </div>
        {content}
      </div>
    );  
  }

export { ExpandableContainer };