## `easy-router-react`

### Usage

`routes.jsx`

```js
const routes = {
  // pages
  "/": <Home /> /*__ http://localhost:3000 __*/,
  "/signin": <SignIn /> /*__ http://localhost:3000/signin __*/,

  // If sub pages
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

export default routes;
```

######

`App.jsx`

```jsx
import EasyRoutes from "easy-router-react";
import routes from "./routes";

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
