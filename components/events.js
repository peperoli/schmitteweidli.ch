import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { useState } from 'react'

const Events = ({ blok }) => {
  const [numberOfItems, setNumber] = useState(3)
  const loadMore = (e) => setNumber(numberOfItems + 3)

  const dateToday = new Date(Date.now())
  const currentEvents = blok.events.filter(blok => dateToday <= new Date(blok.date_end))

  return (
    <div className="events container" {...storyblokEditable(blok)}>
      <div className="col-span-full">
        {blok.headline && <h2 className="text-center">{blok.headline}</h2>}
        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {currentEvents.slice(0, numberOfItems).map(blok => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </ul>
      </div>
      {currentEvents.length > numberOfItems &&
        <div className="col-span-full flex justify-center">
          <button type="button" onClick={loadMore} className="btn -secondary">Mehr anzeigen</button>
        </div>
      }
    </div>
  )
}

export default Events
