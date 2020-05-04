import React, {useState} from 'react';
import './NewsCard.css';

function NewsCard({ story }) {

const [more, setMore] = useState(false);

const clickHandler = () => {
  console.log('was clik')
  setMore((state) => !state);
}

  return (
    <div className="card">
      <div className="card_content-wrapper">
      <div className="card_source">{story.source.name}</div>
       <div className="card_headline">{story.title}</div>
       {!more ? <div className="card_standfirst">{story.description &&  story.description.split('.', 2).join('')}</div>
       : <div>{story.content.split('[')[0]}</div> }
       {!more && story.content
       ?<div className='card_btn' onClick={clickHandler}>READ MORE </div>
       :<a className='card_btn' href={story.url} target='_blank'>FULL STORY </a>
       }

       </div>
    </div>
  );
}

export default NewsCard;