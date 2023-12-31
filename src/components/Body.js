import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;

// import Login from "./Login";
// import Browse from "./Browse";
// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";

// const Body = () => {
//   const dispatch = useDispatch();
//   // const navigate = useNavigate();

//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login />,
//     },
//     {
//       path: "/browse",
//       element: <Browse />,
//     },
//   ]);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         const { uid, email, displayName } = user;
//         dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
//       } else {
//         dispatch(removeUser());
//       }
//     });
//   }, []);

//   return (
//     <div>
//       {/* <Login />
//       <Browse /> */}
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// };
// export default Body;
