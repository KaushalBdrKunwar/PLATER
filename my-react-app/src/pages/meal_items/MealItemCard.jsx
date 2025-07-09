import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import { useNavigate } from "react-router";

export function MealItemCard({ meal }) {
  const nav = useNavigate();
  return (
    <Card
      onClick={() => nav(`/meal/${meal.idMeal}`)}
      className=" overflow-hidden"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          className="w-full"
          src={meal.strMealThumb}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {meal.strMeal}
        </Typography>
      </CardBody>
    </Card>
  );
}
