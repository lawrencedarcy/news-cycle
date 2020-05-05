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
      <div className="card-sidebar">

      <img className="sidebar_image" src={story.urlToImage && story.urlToImage}></img>

      </div>
      <div className="card_content-wrapper">
      <div className="card_source">{story.source.name}</div>
      <img className="card_image" alt={story.title || story.source.name || 'loading' } src={story.urlToImage != 'null' ? story.urlToImage : 'https://uploads.guim.co.uk/2020/05/05/Screenshot_2020-05-05_at_17.48.31.png'}></img>
       <div className="card_headline">{/-/.test(story.title) ? story.title.split('-').splice(0, story.title.split('-').length-1 ).join('-') : story.title}</div>
       {!more ? <div className="card_standfirst">{story.description &&  story.description.split('.', 2).join('')}</div>
       : <div className="card_standfirst">{story.content.split('[')[0]}</div> }
       {!more && story.content
       ?<div className='card_btn' onClick={clickHandler}>READ MORE </div>
       :<a className='card_btn purple' href={story.url} target='_blank' rel="noopener noreferrer" >FULL STORY </a>
       }

       </div>
    </div>
  );
}

export default NewsCard;