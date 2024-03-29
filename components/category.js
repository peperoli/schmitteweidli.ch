import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import RichTextRenderer from "./helpers/rich-text-renderer"
import toSlug from './helpers/to_slug'

const Category = ({blok}) => {
  return (
    <div id={blok.headline && toSlug(blok.headline)} className="col-span-8 lg:col-span-9 pt-5 first:md:pt-0" {...storyblokEditable(blok)}>
      {blok.picture.filename && <div className="aspect-w-2 aspect-h-1 mb-6">
        <Image
          src={blok.picture.filename}
          alt={blok.picture.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blok.picture.filename + '/m/50x0'}
          className="rounded-lg bg-neutral-100"
        />
      </div>}
      {blok.headline && <h2 className="text-center">{blok.headline}</h2>}
      {blok.text && <div className="richtext text-center">
        <RichTextRenderer text={blok.text}/>
      </div>}
      {blok.products && <ul className="grid grid-cols-8 md:grid-cols-9 gap-5 md:gap-6 my-5 md:my-6">
        {blok.products.map(blok => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </ul>}
    </div>
  )
}

export default Category
