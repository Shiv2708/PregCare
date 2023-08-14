import { useState } from "react";
import './ReadMoreLess.css'

const ReadMoreLess = ({child2,limit})=>{
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleButton = ()=>{
    setReadMoreShown(prevState => !prevState)
  }

  return (
    <div>
      {isReadMoreShown?child2:child2.substr(0,limit)}
      <button className="read-more-less" onClick={toggleButton}>{isReadMoreShown?'  show less': '...Read More'}</button>
    </div>
  )
}

export default ReadMoreLess