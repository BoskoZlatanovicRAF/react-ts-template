# 📌 Kreiranje novog React Vite TypeScript Tailwind 4 projekta sa ShadCN UI

## 🚀 Instalacija osnovnih paketa

### **1️⃣ Instalirajte Node.js**
🔗 [Preuzmite Node.js](https://nodejs.org/en/download)  
- **Verzija: `22.14.0` (LTS)**  
- Preuzmite i instalirajte sa zvaničnog sajta.

### **2️⃣ Instalirajte PNPM**
Omogućite PNPM sa sledećom komandom:

corepack enable pnpm


### **3️⃣ Instalirajte TypeScript**
🔗 [Preuzmite TypeScript](https://www.typescriptlang.org/download)  

---

## ⚙️ **Instalacija projekta**
Nakon što preuzmete projekat (`git pull`), pokrenite sledeću komandu:
```
pnpm install
```

📝 **Ovo nije neophodno, već samo informativno ako želite da kreirate svoj projekat od nule**  
Napravite Vite projekat sa React + TypeScript:
```sh
pnpm create vite --template=react-ts
```
📌 Nakon toga pratite [Tailwind CSS instalaciju](https://tailwindcss.com/docs/installation) unutar projekta kako biste podesili **Tailwind CSS 4**.

---

## 🎨 **Dodavanje ShadCN UI**
🔗 [ShadCN UI - Vite Instalacija](https://ui.shadcn.com/docs/installation/vite)  
📌 **Pratite od tačke 3. do tačke 7.**  
- **Tačka 8. je samo primer kako da dodate ShadCN komponentu.**

---

## 🛠 **Korišćenje naših izmenjenih komponenti**
Način korišćenja je **potpuno isti kao i za ShadCN komponente**.

📌 **Primer importa komponente:**
```tsx
import { Footer } from "@/components/footer";
```

✅ Ako je neka komponenta u procesu izmene, **koristite originalnu ShadCN komponentu** dok se ne završi prilagođena verzija.

---

## 📦 **Dodavanje ShadCN blokova**
🔗 [Lista dostupnih blokova & chart-ova](https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/new-york-v4)

### **Dodavanje novog bloka**
```sh
pnpm dlx shadcn@canary add ime_bloka
```
✅ **Izaberite `--force`**  
✅ **Odbijte overwrite (`Do not overwrite`) za sve komponente**  
✅ **Prilagodite boje i fontove našoj temi** (pogledajte odeljak *Tailwind klase*).

---

## 🆕 **Dodavanje novih ShadCN komponenti**
🔗 [ShadCN UI - Komponente](https://ui.shadcn.com/docs/components)  

### **Dodavanje nove komponente**
```sh
pnpm dlx shadcn@canary add ime_komponente
```
✅ **Izaberite `--force`**  
✅ **Odbijte overwrite (`Do not overwrite`) za sve komponente**  
✅ **Prilagodite boje i fontove našoj temi** (pogledajte odeljak *Tailwind klase*).

---

## 📝 **Typography**
🔗 [ShadCN Typography](https://ui.shadcn.com/docs/components/typography)  

✅ **Stilizacija teksta** – možete koristiti predefinisane stilove.  
✅ **Potrebno je prilagoditi fontove i boje našim standardima** (pogledajte odeljak *Tailwind klase*).

---

## 🎨 **Tailwind klase**
📌 **Sve boje se nalaze u `index.css` fajlu unutar `@theme` sekcije.**  
- **Ime boje je tekst posle `--color`**, npr:  
  ```css
  --color-background => background
  ```

### **Primeri korišćenja boja:**
- `bg-ime_boje` → Menja **boju pozadine** komponente  
- `text-ime_boje` → Menja **boju teksta** komponente  
- `ring-ring` → Menja **boju okvira** komponente  

---

## 🔠 **Kako koristiti fontove?**
Koristite `font-naziv_fonta`, gde `naziv_fonta` može biti:

| **Font Name** | **Koristi se za** |
|--------------|------------------|
| `display` | **Najveće tekstove (glavni naslovi)** |
| `heading` | **Naslovi i podnaslovi** |
| `paragraph` | **Manji tekstovi, uključujući dugmad i input polja** |

✅ **Koristite odgovarajuće fontove za doslednost dizajna!**  

---

🚀 **Sada ste spremni da pokrenete React Vite TypeScript Tailwind 4 projekt sa ShadCN UI!** 🚀
```
