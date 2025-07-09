// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./pages/home/Home";
// import RootLayOut from "./components/RootLayOut";

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayOut />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

//-----------------------//
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import RootLayOut from "./components/RootLayOut";
import MealItems from "./pages/meal_items/MealItems";
import Meal from "./pages/meal/Meal";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "mealCategory/:category",
          element: <MealItems />,
        },
        {
          path: "meal/:id",
          element: <Meal />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
