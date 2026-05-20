# Migration & Setup Guide: React + Tailwind CSS + TypeScript + shadcn/ui

This guide explains how to convert this static homestay website into a modern React application utilizing Tailwind CSS, TypeScript, and the shadcn/ui components system.

---

## 1. Why the Current Project Structure is Different
Currently, this website is a single-page static site consisting of:
- An `index.html` file containing layout structure and inline CSS styles.
- Static asset folders (`white lotus`, `blue lilly room photos`, `rose gold room photos`, etc.).
- A vanilla JavaScript section at the bottom of the HTML.

Because it does not run on Node.js or utilize a Javascript build bundler, it cannot natively execute React components, TypeScript files, or dynamic NPM packages (like `framer-motion`). 

---

## 2. Setting Up a New React Project
To use the `SparklesText` React component, you need a compiler like Vite or Next.js. We recommend **Next.js** for SEO-sensitive websites like homestays, or **Vite** for simple single-page applications.

### Option A: Initialize with Next.js (Recommended for SEO)
Run the following command in your terminal:
```bash
npx create-next-app@latest opendoor-homestay-react
```
When prompted, select the following options:
* **Would you like to use TypeScript?** Yes
* **Would you like to use ESLint?** Yes
* **Would you like to use Tailwind CSS?** Yes
* **Would you like to use `src/` directory?** Yes
* **Would you like to use App Router?** Yes
* **Would you like to customize the default import alias (`@/*`)?** Yes (use default `@/*`)

### Option B: Initialize with Vite (Lighter single-page app)
Run:
```bash
npm create vite@latest opendoor-homestay-react -- --template react-ts
```
Then navigate to the folder, install Tailwind CSS:
```bash
cd opendoor-homestay-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 3. Setting Up shadcn/ui
Once your project is created and you are inside the project folder, initialize shadcn/ui:

```bash
npx shadcn@latest init
```

You will be prompted to configure your project layout:
* **Style:** Default
* **Base color:** Slate / Neutral
* **CSS variables for colors:** Yes
* **Location of global CSS file:** `src/app/globals.css` (or `src/index.css` for Vite)
* **Location of components:** `src/components` (or `@/components`)
* **Location of utility functions:** `src/lib/utils`
* **React Server Components support:** Yes (if using Next.js)

---

## 4. Why the `components/ui` Folder is Crucial
shadcn/ui is not a traditional npm library package. Instead, it copies component files directly into your codebase. By standardizing on `components/ui/`:
1. **CLI Commands:** The shadcn CLI (e.g., `npx shadcn@latest add button`) automatically targets this folder. Having it configured correctly allows you to quickly download and update building blocks (buttons, inputs, cards) with single-line commands.
2. **Clean separation:** Keeps low-level, reusable visual primitives (like `Button`, `Dialog`, or custom animations like `SparklesText`) isolated from your high-level layout containers or pages.
3. **Automated import paths:** Let's you import components cleanly using import aliases, for example:
   ```tsx
   import { SparklesText } from "@/components/ui/sparkles-text";
   ```

---

## 5. Installing the Component & Dependencies
To run `SparklesText`, install the required physics and animation package:

```bash
npm install framer-motion clsx tailwind-merge
```

### Component Placement
Copy the two files already generated in this directory:
- Place [sparkles-text.tsx](file:///c:/Users/chitr/Downloads/my%20websites/opendoorhomestay/components/ui/sparkles-text.tsx) into `<your-project-src>/components/ui/sparkles-text.tsx`.
- Place [demo.tsx](file:///c:/Users/chitr/Downloads/my%20websites/opendoorhomestay/components/ui/demo.tsx) into `<your-project-src>/components/ui/demo.tsx` (or directly inside your main landing page).

---

## 6. How to Use the SparklesText Component
Import it inside any page (e.g. `src/app/page.tsx`):

```tsx
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#F9F5EE]">
      {/* Example 1: Large Headline */}
      <SparklesText 
        text="Homely Warmth, Right in Dibrugarh" 
        className="text-5xl font-bold text-[#1B4332]"
        colors={{ first: "#C8972B", second: "#A67C1E" }}
      />
    </main>
  );
}
```
