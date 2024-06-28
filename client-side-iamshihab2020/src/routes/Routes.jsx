import { createBrowserRouter } from "react-router-dom";
import ErrorFour from "./ErrorFour";
import Root from "../layout/Root";
import Home from "../Components/pages/Home/Main/Home";
import Login from "../Components/pages/auth/Login/Login";
import Register from "../Components/pages/auth/Register/Register";
import AllTouristSpot from "../Components/pages/AllTouristSpot/AllTouristSpot";
import AddSpot from "../Components/pages/AddSpot/AddSpot";
import MyList from "../Components/pages/MyList/MyList";
import PrivateRoute from "./PrivateRoute";
import TouristSpotDetails from "../Components/pages/TouristSpotDetails/TouristSpotDetails";
import TouristSpots from "../Components/pages/Home/TouristSpots/TouristSpots";
import UpdateSpot from "../Components/pages/UpdateSpot/UpdateSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorFour />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <TouristSpots />,
        loader: () =>
          fetch(
            "https://tourism-management-server-main.vercel.app/touristSpots"
          ),
      },
      {
        path: "/tourist-spot",
        element: <AllTouristSpot />,
        loader: () =>
          fetch(
            "https://tourism-management-server-main.vercel.app/touristSpots"
          ),
      },
      {
        path: "/tourist-spot-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <TouristSpotDetails />{" "}
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://tourism-management-server-main.vercel.app/touristSpots"
          ),
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-spot/:id",
        element: <UpdateSpot />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tourism-management-server-main.vercel.app/touristSpots/${params.id}`
          );
          const data = await response.json();
          return data;
        },
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
