import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Icon from './helpers/icon'
import { Item } from 'react-photoswipe-gallery'

const GalleryItem = ({blok}) => {
  const url = blok.picture.filename + '/m/'
  function doNothing(e) {
    e.preventDefault()
  }

  if (url) {
    return (
      <Item
        original={url}
        thumbnail={url}
        alt={blok.picture.name ? blok.picture.name : blok.picture.alt}
        width={url.split('/')[5].split('x')[0]}
        height={url.split('/')[5].split('x')[1]}
      >
        {({ ref, open }) => (
          <a href={blok.picture.filename} ref={ref} onClick={doNothing} className="relative col-span-4 md:col-span-3 lg:col-span-2 aspect-w-1 aspect-h-1 group" {...storyblokEditable(blok)}>
            {blok.picture && (
              <Image
                onClick={open}
                src={url + '400x400'}
                alt={blok.picture.alt}
                title={blok.picture.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blok.picture.filename + '/m/50x0'}
                className="rounded bg-neutral-200"
              />
            )}
            <Icon name="zoom-in-fill" className="absolute flex items-end w-auto h-auto m-4 text-lg text-white text-shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"/>
          </a>
        )}
      </Item>
    )
  }
}

export default GalleryItem
