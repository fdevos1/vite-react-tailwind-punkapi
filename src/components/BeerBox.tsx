interface IBeerBox {
  imgUrl: string;
  name: string;
  tagline: string;
  description: string;
  first_brewed: string;
  beer_id: number;
  newBeer?: () => void;
  isLogin?: boolean;
}

function BeerBox({
  imgUrl,
  name,
  tagline,
  description,
  first_brewed,
  beer_id,
  newBeer,
  isLogin,
}: IBeerBox) {
  return (
    <div className="flex flex-col w-full h-[600px] border p-4 bg-gray-100 rounded">
      <div className="flex justify-center">
        <img src={imgUrl} alt="" className="w-[100px] h-[300px]" />
      </div>

      <div className="grid grid-rows-5 px-2 h-[300px] items-center">
        <h4 className="text-xl font-bold text-emerald-200 uppercase truncate">
          {name}
        </h4>
        <span className="text-lg text-gray-700">{tagline}</span>
        <span className="line-clamp-2 text-md font-light text-gray-700">
          {description}
        </span>
        <span className="font-bold text-gray-700">{first_brewed}</span>

        {isLogin ? (
          <button
            onClick={newBeer}
            className="text-lg font-light bg-emerald-200 text-white rounded p-2 hover:bg-emerald-300"
          >
            New beer
          </button>
        ) : (
          <a
            className="flex justify-center items-center rounded bg-emerald-300 text-neutral-100 h-10"
            href={`/beer_information/${beer_id}`}
          >
            See more information
          </a>
        )}
      </div>
    </div>
  );
}

export default BeerBox;
