import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonAPI";

interface PokemonNameProps {
  params: { pokemonName: string };
}

const PokemonPage = async ({ params }: PokemonNameProps) => {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <>
      <h1 className="pt-4 text-4xl font-bold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
      <div className="m-4 relative w-[300px] h-[300px]">
        <PokemonImage
          image={pokemonObject.sprites.other.home.front_default}
          name={`Picture name ${pokemonName}`}
        />
      </div>
      <h3>Weight: {pokemonObject.weight}</h3>
      <div className="flex-col">
        {
          pokemonObject.stats.map((statObject:any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;
            return (
              <div className="flex items-stretch w-[500px]" key={statName} >
                <h3 className="w-2/4 p-3">{statName}: {statValue}</h3>
                <Progress className="w-2/4 m-auto" value={statValue} />
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default PokemonPage;
