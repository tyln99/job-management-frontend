import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ExpandableText = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {text.length > maxLength && !isExpanded ? (
        <>
          <span>{`${text.slice(0, maxLength)}...`}</span>
          <Button size="sm" variant="link" onClick={toggleExpanded}>
            More
          </Button>
        </>
      ) : (
        <span>
          {text}
          {text.length > maxLength && (
            <Button size="sm" variant="link" onClick={toggleExpanded}>
              Less
            </Button>
          )}
        </span>
      )}
    </div>
  );
};

export default ExpandableText;
