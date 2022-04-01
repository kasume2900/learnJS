import React from 'react'
import s from './contentItem.module.scss'

const ContentItem = ({img,text}) => {
  return (
    <div className={s.item}>
      <div className="image">{img}</div>
      <p>{text}</p>
    </div>
  )
}

export default ContentItem