import React from "react";

type MovieCardProps = {
  id: number,
  title: string,
  posterUrl?: string,
  description?: string,
}

export default function MovieCard({id, title, posterUrl, description}: MovieCardProps){

  return (
    <>
      <p>
        {id}
        {title}
        {posterUrl}
        {description}
      </p>
    </>
  )
}