### **Creating a New React Vite TypeScript Tailwind 4 Project Using ShadCN UI**  

---

## **1️⃣ Install Node.js**  
🔗 [Download Node.js](https://nodejs.org/en/download)  
- **Must install version `22.14.0` (LTS)**
- Download and install from the official site.  

## **2️⃣ Install PNPM**  
Enable PNPM with the following command:  
```sh
corepack enable pnpm
```

## **3️⃣ Install TypeScript**  
🔗 [Download TypeScript](https://www.typescriptlang.org/download)  

---

## **4️⃣ Install Project Dependencies**
After pulling the repository, run:  
```sh
pnpm install
```
🚀 This will install all required dependencies.  

---

## **5️⃣ (Optional) Create Your Own Project**
**If you want to create your own project, follow these steps:**  

1. Create a Vite project with React and TypeScript:  
   ```sh
   pnpm create vite --template=react-ts
   ```
2. Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) inside your project to set up **Tailwind CSS v4**.

---

## **6️⃣ Install & Configure ShadCN UI**  
Follow the **official ShadCN Vite setup**:  
1. **Start from Step 3** of the [ShadCN UI Vite setup](https://ui.shadcn.com/docs/installation/vite)  
2. Follow **everything up to Step 7**  
3. **Step 8 is only an example** of how to add a ShadCN component.

---

## **7️⃣ Using Custom Components**
Custom components are used **just like ShadCN components**:  
```tsx
import { Footer } from "@/components/footer";
```
✅ If a component is being modified, **feel free to use the original ShadCN version** until the custom one is ready.

---

## **8️⃣ Adding ShadCN Blocks**
ShadCN UI provides **pre-built blocks and charts**:  
🔗 [ShadCN Blocks & Charts](https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/new-york-v4)  

### **To add a block:**
```sh
pnpm dlx shadcn@canary add block_name
```
✅ **Select `--force`**  
✅ **DO NOT overwrite existing components if prompted**  
✅ **Adjust colors & fonts to match your theme** (see "Tailwind Classes" section)

---

## **9️⃣ Adding New ShadCN Components**
ShadCN UI provides **pre-built UI components**:  
🔗 [ShadCN Components](https://ui.shadcn.com/docs/components)  

### **To add a component:**
```sh
pnpm dlx shadcn@canary add component_name
```
✅ **Select `--force`**  
✅ **DO NOT overwrite existing components if prompted**  
✅ **Adjust colors & fonts to match your theme** (see "Tailwind Classes" section)

---

## **🔤 Typography**
ShadCN UI provides **pre-defined typography styles**:  
🔗 [ShadCN Typography](https://ui.shadcn.com/docs/components/typography)  

✅ **Copy-paste styles from the link above**  
✅ **Adjust fonts & colors to match our theme** (see "Tailwind Classes" section)

---

## **🎨 Tailwind Classes**
### **📌 Colors**
All colors are defined in **`index.css`** inside the `@theme` section.  
- **Color names are defined after `--color`**, e.g., `--color-background` → `background`.

### **📌 Using Colors**
- `bg-color_name` → Changes the **background** color  
- `text-color_name` → Changes the **text** color  
- `ring-ring` → Changes the **border color**  

---

### **📌 Using Fonts**
Add **`font-font_name`** where `font_name` is one of the following:  

| Font Name | Usage |
|-----------|------------------------------|
| `display` | **Largest text** (main titles) |
| `heading` | **Headings & subheadings** |
| `paragraph` | **Smaller text, buttons, inputs** |

✅ **Use the correct font for consistency!**  

---

🚀 **Now your project is ready with React, Vite, TypeScript, Tailwind 4, and ShadCN UI!** 🚀
