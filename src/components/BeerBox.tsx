function BeerBox({ imgUrl, name, tagline, description, first_brewed }: any) {
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

        <button className="rounded bg-emerald-300 text-neutral-100 h-10">
          Ver todas informações
        </button>
      </div>
    </div>
  );
}

export default BeerBox;
