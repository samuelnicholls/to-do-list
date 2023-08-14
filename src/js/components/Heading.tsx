import React, { FC } from 'react'

export type HeadingProps = {
  title: string
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className='c-heading'>
      <h1 className='c-heading__text'>{title}</h1>
    </div>
  )
}

export default Heading
