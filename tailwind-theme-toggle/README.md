```
npm install tailwind-theme-toggle
```

**or**

```npm
yarn install tailwind-theme-toggle
```

### Usage

# Step 1.

// tailwind.config.js

```js
module.exports = {
  darkMode: "class",
  // others
};
```

# Step 2.

##### in React.s/Next.js

```jsx
import themeToggler from "tailwind-theme-toggle";

const Button = () => <button onClick={themeToggler}> Toggle </button>;
```

##### in Vue.js/Nuxt.js

```js
import themeToggler from "tailwind-theme-toggle";

<button @click="themeToggler">Greet</button>
```

##### in raw HTML/JavaScript

```js
import themeToggler from "tailwind-theme-toggle";

const button = document.getElementById("togglerButton");
button.addEventListener("click", themeToggler);
```
