import Link from "next/link"

interface PokemonCardProps {
    name: string,
}

export const PokemonCard = ({name}:PokemonCardProps) => {
  return (
    <Link
    href={name}
    className="px-5 py-4 m-3 transition-colors border border-transparent rounded-lg group hover:border-gray-300 dark:border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    key={name + 'Card'}
  >
    <h2 className={`text-2xl font-semibold`}>
    {/*  Esto retorna la primera letra en mayuscula y une lo demás que esta en minuscula */}
    {name.charAt(0).toUpperCase() + name.slice(1)}
    </h2>
  </Link>
  )
}
