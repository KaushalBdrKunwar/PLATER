import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Meal() {
  const [data, setData] = useState();
  const { id } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php",
        {
          params: {
            i: id,
          },
        }
      );
      setData(response.data);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="p-5">
      {data &&
        data.meals.map((meal) => {
          const youTubeId = meal.strYoutube.split("=")[1];
          return (
            <div key={meal.idMeal} className="space-y-5">
              <h1 className="text-xl">{meal.strMeal}</h1>
              <div className="flex gap-10">
                <img
                  className="h-[300px] w-[300px] object-cover"
                  src={meal.strMealThumb}
                  alt=""
                />
                <iframe
                  width="420"
                  height="300"
                  src={`https://www.youtube.com/embed/${youTubeId}`}
                ></iframe>
              </div>

              <div className="flex gap-10">
                <div>
                  <Typography variant="h6" className="mb-2">
                    Ingredients
                  </Typography>
                  {Object.keys(meal).map((str) => {
                    if (str.includes("strIngredient")) {
                      return <h1>{meal[str]}</h1>;
                    }
                  })}
                </div>

                <div>
                  <Typography variant="h6" className="mb-2">
                    Measurement
                  </Typography>
                  {Object.keys(meal).map((str) => {
                    if (str.includes("strMeasure")) {
                      return <h1>{meal[str]}</h1>;
                    }
                  })}
                </div>
              </div>

              <Typography className="italic">{meal.strInstructions}</Typography>
            </div>
          );
        })}
    </div>
  );
}
