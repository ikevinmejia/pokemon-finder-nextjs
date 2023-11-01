"use client"

import Image from "next/image";

interface PokemonImageProps {
    image: string;
    name: string;
}

export const PokemonImage = ({ image, name }:PokemonImageProps) => {
  return (
    <Image
    src={image}
    alt={`Picture name ${name}`}
    priority
    fill
    style={{'objectFit': 'contain'}}
    className="transition-opacity opacity-0 duration-[2s]"
    onLoadingComplete={(image)=> image.classList.remove('opacity-0')}
    />
  )
}
