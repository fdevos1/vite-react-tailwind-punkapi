function BeerBox({ imgUrl, name, description, first_brewed }: any) {
  return (
    <div className="flex flex-col max-w-[300px] border mb-2">
      <img src={imgUrl} alt="" />

      <p>{name}</p>
      <span>{description}</span>
      <span>{first_brewed}</span>
    </div>
  );
}

export default BeerBox;
