```
npm install tailwind-theme-toggle-buttons
```

or

```
yarn add tailwind-theme-toggle-buttons
```

### Usage

# Step 1.

`tailwind.config.js`

```js
module.exports = {
  darkMode: "class",
  // others
};
```

# Step 2.

```js
import Toggle from "tailwind-theme-toggle-buttons";

export default function App() {
  return (
    <div>
      // button style 1
      <Toggle style="A" />

      // button style 2
      <Toggle style="B" />

      // button style 3
      <Toggle style="C" />
    </div>
  );
}
```

`OR` You can use your custom button

```js
import { toggleFunc } from "tailwind-theme-toggle-buttons";

export default function App() {
  return (
    <div>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
```

### Also you can check theme

```js
const theme = localStorage.getItem("theme");
const isDark = theme === "dark";
```
