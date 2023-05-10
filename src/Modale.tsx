import React from 'react';
import {Link} from "react-router-dom"

type Props = {
    onClose: () => void;
    imageSrc: any;
    imageName: string;
    text: string;
    linkText?: string | undefined;
    linkPath?: string | undefined 
}

function Modale({onClose, imageSrc, imageName, text, linkText, linkPath}: Props) {
    return (
      <div className='modale'>
          <img src={imageSrc} alt={imageName} onClick={onClose} />
          <p>{text}</p>
          <Link to={linkPath??"/"}>{linkText}</Link>
      </div>
    )
  }

export { Modale };