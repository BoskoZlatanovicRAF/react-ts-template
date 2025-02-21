React Vite TypeScript Tailwind 4 Project Setup with Shadcn UI
Prerequisites

Install Node.js

Download from https://nodejs.org/en/download
Required version: 22.14.0 (LTS)


Install pnpm
bashCopycorepack enable pnpm

Install TypeScript

Follow instructions at https://www.typescriptlang.org/download



Project Setup
Initial Setup
bashCopypnpm install
Creating New Project (For Reference)
bashCopypnpm create vite --template=react-ts
Shadcn UI Integration

Follow Tailwind CSS 4 installation guide for your project
Follow Shadcn UI Vite setup instructions (steps 3-7)
Note: Step 8 is just an example of adding a Shadcn component

Using Custom Components
Use custom components the same way as Shadcn components:
typescriptCopyimport { Footer } from "@/components/footer";
Note: If a component is being modified, you can use the original Shadcn component until the custom version is ready.
Adding Shadcn Blocks

Browse available blocks and charts at:
https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/new-york-v4
Install blocks using:
bashCopypnpm dlx shadcn@canary add block_name

Select --force option
Important: Decline overwriting existing components if prompted
Adjust colors and fonts to match your theme (see "Tailwind Classes" section)



Adding New Shadcn Components

Browse components at https://ui.shadcn.com/docs/ under "Components"
Install components using:
bashCopypnpm dlx shadcn@canary add component_name

Select --force option
Important: Decline overwriting existing components if prompted
Adjust colors and fonts to match your theme (see "Tailwind Classes" section)



Typography
Copy-paste text styling examples are available at:
https://ui.shadcn.com/docs/components/typography
Adjust fonts and colors according to your theme (see "Tailwind Classes" section)
Tailwind Classes
Colors
Colors are defined in the main index.css file under @theme section.
Color names follow the pattern: --color-{name}
Example usage:

bg-{color_name}: Changes background color
text-{color_name}: Changes text color
ring-ring: Changes component border color

Fonts
Use fonts by adding font-{font_name}, where font_name can be:

display: Use for largest text/main headlines
heading: Use for titles/subtitles
paragraph: Use for smaller text, including button and input text


