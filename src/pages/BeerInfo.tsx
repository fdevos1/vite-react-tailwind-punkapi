import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { IBeer } from "../interfaces/beerInterface";
import BeerInfoText from "../components/BeerInfoText";
import BeerInfoFlexBox from "../components/BeerInfoFlexBox";
import { BeersContext } from "../contexts/beersContext";
import { getSingleBeer } from "../services/getSingleBeer";
import DiscoverNewBeer from "../components/DiscoverNewBeer";

interface IBeerContext {
  beersList: IBeer[];
}

function BeerInfo() {
  const { id } = useParams();

  const [beerInfo, setBeerInfo] = useState<IBeer[] | undefined>();

  const { beersList } = useContext(BeersContext) as IBeerContext;

  const getBeer = async () => {
    if (id && parseInt(id) <= 80) {
      const getBeerInfo = beersList.filter((beer) => parseInt(id) === beer.id);
      setBeerInfo(getBeerInfo);
    } else {
      const requestBeerInfo = await getSingleBeer(id!);

      setBeerInfo(requestBeerInfo);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className="flex flex-col h-full w-full border items-center p-8 ">
      {beerInfo &&
        beerInfo.map((beer) => (
          <div className="w-full" key={beer.id}>
            <div className="flex justify-center">
              <img
                className="h-[300px] lg:h-[400px]"
                src={beer.image_url}
                alt=""
              />
            </div>

            <div className="bg-neutral-100 p-4 rounded mt-2">
              <h4 className="text-2xl font-bold text-emerald-200 uppercase truncate mt-2 lg:text-4xl">
                {beer.name}
              </h4>
              <div className="mt-2">
                <BeerInfoFlexBox gap="gap-4">
                  <span className="text-md text-gray-700 lg:text-2xl">
                    {beer.tagline}
                  </span>

                  <BeerInfoText text={`Description: ${beer.description}`} />

                  <BeerInfoText text={`Alcohol by volume: ${beer.abv}`} />

                  <BeerInfoText
                    text={`International Bitterness Units: ${beer.ibu}`}
                  />

                  <BeerInfoText text={`First brewed: ${beer.first_brewed}`} />

                  <BeerInfoText text={`Brewer tips: ${beer.brewers_tips}`} />

                  <BeerInfoText
                    text={`European Brewery Convention: ${beer.ebc}`}
                  />

                  <BeerInfoText
                    text={`Standard Reference Method: ${beer.srm}`}
                  />

                  <BeerInfoText
                    text={`Volume: ${beer.volume.value} ${beer.volume.unit}`}
                  />

                  <BeerInfoText
                    text={`Boil volume: ${beer.boil_volume.value}
                    ${beer.boil_volume.unit}`}
                  />

                  <BeerInfoText text={`Ph: ${beer.ph}`} />

                  <BeerInfoText>
                    <BeerInfoFlexBox>
                      <span>Food Pairing</span>

                      {beer.food_pairing.map((item, i) => (
                        <span key={i}>- {item}</span>
                      ))}
                    </BeerInfoFlexBox>
                  </BeerInfoText>

                  <BeerInfoText>
                    <span className="font-light">Ingredients</span>
                    <div>
                      <span className="font-bold">Malt </span>
                      <BeerInfoFlexBox gap="gap-2">
                        {beer.ingredients.malt.map((item, i) => (
                          <BeerInfoFlexBox key={i}>
                            <span>Name: {item.name}</span>
                            <span>
                              Amount: {item.amount.value} {item.amount.unit}
                            </span>
                          </BeerInfoFlexBox>
                        ))}
                      </BeerInfoFlexBox>
                    </div>
                    <div>
                      <span className="font-bold">Hops </span>
                      <BeerInfoFlexBox gap="gap-2">
                        {beer.ingredients.hops.map((item, i) => (
                          <BeerInfoFlexBox key={i}>
                            <span>Name: {item.name}</span>
                            <span>
                              Amount: {item.amount.value} {item.amount.unit}
                            </span>
                          </BeerInfoFlexBox>
                        ))}
                      </BeerInfoFlexBox>
                    </div>
                    <BeerInfoFlexBox>
                      <span className="font-bold">Yeast </span>
                      <span>{beer.ingredients.yeast}</span>
                    </BeerInfoFlexBox>
                  </BeerInfoText>

                  <BeerInfoText>
                    <>
                      <span className="font-light">Method</span>
                      <div>
                        <span className="font-bold">Mash temperature</span>
                        <div>
                          {beer.method.mash_temp.map((item, i) => (
                            <BeerInfoFlexBox key={i}>
                              <span>
                                Temperature: {item.temp.value} °{" "}
                                {item.temp.unit}
                              </span>
                              <span>Duration: {item.duration} minutes</span>
                            </BeerInfoFlexBox>
                          ))}
                        </div>
                      </div>
                      <BeerInfoFlexBox>
                        <span className="font-bold">Fermentation</span>
                        <span>
                          {beer.method.fermentation.temp.value} °{" "}
                          {beer.method.fermentation.temp.unit}
                        </span>
                      </BeerInfoFlexBox>
                    </>
                  </BeerInfoText>
                </BeerInfoFlexBox>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BeerInfo;
