import { Card, List, Typography } from "@material-tailwind/react";
import React from "react";

export default function MealCategoryLoader() {
  return (
    <div className="p-10">
      <Card className="p-5 animate-pulse">
        <List>
          <ListLoad />
          <ListLoad />
          <ListLoad />
          <ListLoad />
        </List>
      </Card>
    </div>
  );
}

function ListLoad() {
  return (
    <div className="space-y-3 mb-5">
      <div className="flex items-center gap-4">
        <div className="h-[70px] w-[70px] rounded-full bg-gray-300"></div>
        <Typography
          variant="h6"
          className="bg-gray-300 h-2 w-[70px] rounded-full"
        ></Typography>
      </div>

      <div>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
    </div>
  );
}
