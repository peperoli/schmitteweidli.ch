import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import RichTextRenderer from "./helpers/rich-text-renderer";

const Intro = ({blok}) => {
    return (
        <div className="intro container" {...storyblokEditable(blok)}>
          <div className="col-span-full md:col-start-3 md:col-span-8 text-center">
            {blok.headline && <h2>{blok.headline}</h2>}
            <div className="richtext lead">
                <RichTextRenderer text={blok.text}/>
            </div>
          </div>
        </div>
    )
}

export default Intro
