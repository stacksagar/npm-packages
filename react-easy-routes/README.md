# `react-easy-routes`

## Usage

`routes.js`

```jsx
const paths = {
  "/": <Home /> /*__ http://localhost:3000 __*/,

  "/signin": <SignIn /> /*__ http://localhost:3000/signin __*/,

  "/profile": {
    element: <ProfileLayout /> /*__ http://localhost:3000/profile  __*/,

    sub_pages: {
      "/": <Profile /> /*__ http://localhost:3000/profile __*/,
      orders: <MyOrders /> /*__ http://localhost:3000/profile/orders  __*/,
      settings: <Settings /> /*__ http://localhost:3000/profile/settings  __*/,
    },
  },

  // Put NotFound Component Here
  "*": <div>404 Not Found</div>,
};

export default paths;
```

######

`App.jsx`

```jsx
import { Routes, Route } from "react-router-dom";
import EasyRoutes from "react-easy-routes";

import paths from "./routes";

export default function App() {
  return (
    <>
      <header>Header</header>

      <EasyRoutes Routes={Routes} Route={Route} paths={paths} />

      <footer>Footer</footer>
    </>
  );
}
```
