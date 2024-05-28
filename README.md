<p align="center">
  <a href="https://github.com/Reuben-Victoria/bento-assessment">
  <img src="./public/book.jpeg" alt="Online Book Store" width="200">
  </a>
</p>

<h1 align="center">
  Online Book Store
</h3>

<p align="center">
  Bento assesment.
</p>

---

### Project Setup

Clone this repo to your local machine and install the dependencies.

```bash
yarn install
```

Node commands for respective repositories can be run from the root directory. Under the scripts section in the `package.json` of the root directory.

- The project can be started with

```bash
  yarn run dev
```

## Project Structure 📦

### Component Folder

Components folder typically contains the apps component files:

```bash
index.ts
demo.tsx            # component source code
```

for `index.ts` components are exported from this file.

### Pages Folder

Pages folder typically contains the apps cpages files:

```bash
index.ts
demo.tsx            # Pages source code
```

for `index.ts` pages are exported from this file.

### Layout Folder

Layouts folder typically contains the apps layouts files:

```bash
index.ts
demo.tsx            # Layout source code
```

for `index.ts` layouts are exported from this file.

### Code Style 🧑🏽‍💻

The code was styled with SCSS.

Styles folder typically contains the apps styles files:

### Thoughts

- **Initial Approach** : Broke down tasks into manageable parts and focused on component reusability and consistent styling with SCSS.
- **Component Reusability** : Ensured components were reusable to maintain a scalable codebase.
- **Styling Consistency**: Focused on maintaining a uniform look and feel through consistent styling.

### Assumptions

- **Data Structure** : Assumed the API data structure would remain consistent as documented.
-  **Responsive Design** : Assumed the need for a fully responsive application, emphasizing media queries and flexible layouts.
- **Browser Compatibility** : Optimized for modern browsers, not focusing on older ones.

### Issues Faced

- **API Integration**: Encountered challenges with data handling from the API, resolved through robust error handling.
- **Styling Synchronization** : Fixed asynchronous pulsating animations in the skeleton loader by standardizing animation properties.
- **TypeScript Errors**: Addressed type issues especially in the `BookCard` component by refining type definitions and ensuring correct data types.
- **Responsive Design**: Achieved consistent layout through iterative testing and adjustments using media queries and flexbox.

## Thanks

Thank you! 🎉
