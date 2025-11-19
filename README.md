# 🧡 ING Bank Design Tokens

Kompletny system design tokens dla ING Bank - wszystko czego potrzebujesz do tworzenia aplikacji w stylu ING.

## 📋 Spis treści

- [O projekcie](#o-projekcie)
- [Instalacja](#instalacja)
- [Szybki start](#szybki-start)
- [Kolory](#kolory)
- [Typografia](#typografia)
- [Spacing i Layout](#spacing-i-layout)
- [Komponenty](#komponenty)
- [Użycie w różnych technologiach](#użycie-w-różnych-technologiach)
- [Zasady projektowania ING](#zasady-projektowania-ing)
- [Przykłady](#przykłady)

## 🎯 O projekcie

Ten pakiet zawiera oficjalne design tokens ING Bank, obejmujące:

- ✅ **Kolory brandowe** - ING Orange (#FF6200), Navy Blue (#000066) i wszystkie odcienie
- ✅ **Typografię** - font ING Me z fallbackami, rozmiary, wagi
- ✅ **Spacing** - konsystentny system odstępów
- ✅ **Komponenty** - gotowe style dla przycisków, inputów, kart i więcej
- ✅ **Layout** - breakpointy, kontenery, grid
- ✅ **Shadows, borders, transitions** - wszystkie detale

### 🎨 Zasady projektowania ING

System design ING opiera się na trzech filarach:

1. **Ekspresywny** (Expressive) - śmiałe, wyraziste elementy
2. **Optymistyczny** (Optimistic) - pozytywne, przyjazne interfejsy
3. **Czytelny** (Clear) - przejrzyste, łatwe w użyciu rozwiązania

Kluczowe wartości:
- **Digital-first** - projektowane z myślą o interfejsach cyfrowych
- **Accessibility** - dostępność dla wszystkich użytkowników
- **Legibility** - maksymalna czytelność w każdej sytuacji

## 📦 Instalacja

```bash
# NPM
npm install @ing/design-tokens

# Yarn
yarn add @ing/design-tokens

# PNPM
pnpm add @ing/design-tokens
```

## 🚀 Szybki start

### CSS Variables

Najprostszy sposób - zaimportuj CSS i używaj zmiennych:

```css
/* Zaimportuj w swoim głównym CSS */
@import '@ing/design-tokens/css';

/* Użyj w swoich stylach */
.button {
  background-color: var(--ing-color-brand-orange);
  color: var(--ing-color-brand-white);
  padding: var(--ing-spacing-4);
  border-radius: var(--ing-radius-base);
  font-family: var(--ing-font-primary);
}
```

### JavaScript / TypeScript

```javascript
// Import całego pakietu
import tokens from '@ing/design-tokens';

// Lub importuj tylko potrzebne tokeny
import { colors, typography, spacing } from '@ing/design-tokens';

// Użycie
const primaryColor = colors.brand.primary.orange; // '#FF6200'
const buttonPadding = spacing[4]; // '1rem'
```

### React / Styled Components

```jsx
import styled from 'styled-components';
import { colors, spacing, borderRadius, shadows } from '@ing/design-tokens';

const Button = styled.button`
  background-color: ${colors.brand.primary.orange};
  color: ${colors.brand.neutral.white};
  padding: ${spacing[3]} ${spacing[6]};
  border-radius: ${borderRadius.base};
  box-shadow: ${shadows.orange};
  font-weight: 600;

  &:hover {
    background-color: ${colors.semantic.interactive.hover};
  }
`;
```

### Tailwind CSS

Dodaj do `tailwind.config.js`:

```javascript
const ingTokens = require('@ing/design-tokens');

module.exports = {
  theme: {
    extend: {
      colors: {
        'ing-orange': ingTokens.colors.brand.primary.orange,
        'ing-navy': ingTokens.colors.brand.secondary.navyBlue,
        // ... więcej kolorów
      },
      fontFamily: {
        'ing': ingTokens.typography.fontFamily.primary.split(','),
      },
      spacing: ingTokens.spacing,
    },
  },
};
```

## 🎨 Kolory

### Kolory brandowe

ING wykorzystuje charakterystyczny pomarańczowy i granatowy:

```css
/* ING Orange - główny kolor marki */
--ing-color-brand-orange: #FF6200

/* ING Navy Blue - drugorzędny kolor */
--ing-color-brand-navy-blue: #000066
--ing-color-brand-deep-blue: #091C5A
```

**Użycie:**
- **Orange (#FF6200)** - CTA buttons, linki, aktywne stany, akcenty
- **Navy Blue (#000066)** - nagłówki, tekst, elementy UI, footery

### Kolory semantyczne

```javascript
// Tekst
colors.semantic.text.primary     // '#1A1A1A' - główny tekst
colors.semantic.text.secondary   // '#4D4D4D' - tekst pomocniczy
colors.semantic.text.link        // '#FF6200' - linki

// Tła
colors.semantic.background.primary    // '#FFFFFF' - główne tło
colors.semantic.background.secondary  // '#F5F5F5' - sekcje
colors.semantic.background.brand      // '#FF6200' - tło brandowe

// Stany
colors.semantic.state.success    // '#00A03E' - sukces
colors.semantic.state.warning    // '#F59E00' - ostrzeżenie
colors.semantic.state.error      // '#D0021B' - błąd
colors.semantic.state.info       // '#0066CC' - informacja
```

### Gradienty

```css
/* Gradient pomarańczowy */
background: var(--ing-gradient-orange);
/* linear-gradient(135deg, #FF6200 0%, #CC4E00 100%) */

/* Gradient brandowy (pomarańczowo-niebieski) */
background: var(--ing-gradient-brand);
/* linear-gradient(135deg, #FF6200 0%, #000066 100%) */
```

## ✍️ Typografia

### Font ING Me

ING używa własnego fontu **ING Me** - ultra-czytelnego, zaprojektowanego z myślą o dostępności.

```css
font-family: var(--ing-font-primary);
/* 'ING Me', -apple-system, BlinkMacSystemFont, 'Segoe UI', ... */
```

**Charakterystyka:**
- Zaokrąglone od wewnątrz, ostre od zewnątrz
- Wyjątkowo czytelny w aplikacjach cyfrowych
- Wspiera użytkowników z trudnościami w czytaniu
- Oparty na FS Me od Fontsmith

### Hierarchia tekstowa

```css
/* Nagłówki */
.ing-h1 { font-size: 3.75rem; }  /* 60px - Hero headings */
.ing-h2 { font-size: 3rem; }     /* 48px - Główne nagłówki */
.ing-h3 { font-size: 2.25rem; }  /* 36px - Nagłówki sekcji */
.ing-h4 { font-size: 1.875rem; } /* 30px - Podsekcje */
.ing-h5 { font-size: 1.5rem; }   /* 24px - Małe nagłówki */
.ing-h6 { font-size: 1.25rem; }  /* 20px - Najmniejsze nagłówki */

/* Tekst podstawowy */
.ing-body-large { font-size: 1.125rem; } /* 18px - Lead paragraphs */
.ing-body { font-size: 1rem; }           /* 16px - Podstawowy tekst */
.ing-body-small { font-size: 0.875rem; } /* 14px - Tekst pomocniczy */
```

### Wagi fontów

```javascript
typography.fontWeight.light      // 300
typography.fontWeight.regular    // 400 - podstawowy tekst
typography.fontWeight.medium     // 500 - subheadings
typography.fontWeight.semibold   // 600 - ważne informacje
typography.fontWeight.bold       // 700 - nagłówki, przyciski
```

### Gotowe style tekstowe

```javascript
// Użycie w CSS-in-JS
const headingStyle = {
  fontSize: typography.textStyles.h1.fontSize,
  lineHeight: typography.textStyles.h1.lineHeight,
  fontWeight: typography.textStyles.h1.fontWeight,
  letterSpacing: typography.textStyles.h1.letterSpacing,
};
```

## 📏 Spacing i Layout

### System odstępów

Oparty na skali 4px:

```javascript
spacing[0]  // 0
spacing[1]  // 0.25rem (4px)
spacing[2]  // 0.5rem (8px)
spacing[3]  // 0.75rem (12px)
spacing[4]  // 1rem (16px) - podstawowy
spacing[6]  // 1.5rem (24px)
spacing[8]  // 2rem (32px)
spacing[12] // 3rem (48px)
spacing[16] // 4rem (64px)
```

**Przykład użycia:**

```css
/* Padding karty */
padding: var(--ing-spacing-6);

/* Margines między sekcjami */
margin-bottom: var(--ing-spacing-12);

/* Gap w flexbox */
gap: var(--ing-spacing-4);
```

### Breakpointy

```javascript
breakpoints.sm   // '640px' - duże telefony, małe tablety
breakpoints.md   // '768px' - tablety
breakpoints.lg   // '1024px' - desktopy
breakpoints.xl   // '1280px' - duże desktopy
breakpoints['2xl'] // '1536px' - bardzo duże ekrany
```

### Kontenery

```css
.ing-container {
  max-width: var(--ing-container-lg); /* 1024px */
  margin: 0 auto;
  padding: 0 var(--ing-spacing-4);
}
```

### Zaokrąglenia (Border Radius)

```javascript
borderRadius.sm    // '0.125rem' (2px) - subtlne
borderRadius.base  // '0.25rem' (4px) - przyciski, inputy
borderRadius.lg    // '0.5rem' (8px) - karty
borderRadius.xl    // '0.75rem' (12px) - duże karty
borderRadius.full  // '9999px' - pills, badges, awatary
```

### Cienie (Shadows)

```javascript
shadows.sm      // Małe karty
shadows.base    // Standardowe komponenty
shadows.md      // Podniesione karty, dropdowny
shadows.lg      // Modale
shadows.orange  // '0 4px 14px 0 rgba(255, 98, 0, 0.39)' - CTA buttons
```

## 🧩 Komponenty

### Przyciski (Buttons)

#### Primary Button

```html
<button class="ing-button ing-button-primary">
  Zaloguj się
</button>
```

```javascript
// W styled-components
const PrimaryButton = styled.button`
  background-color: ${components.button.primary.background.default};
  color: ${components.button.primary.text.default};
  padding: ${components.button.primary.padding.medium};
  border-radius: ${components.button.primary.borderRadius};
  box-shadow: ${components.button.primary.shadow.default};
  font-weight: ${components.button.primary.fontWeight};

  &:hover {
    background-color: ${components.button.primary.background.hover};
    box-shadow: ${components.button.primary.shadow.hover};
  }
`;
```

#### Secondary Button

```html
<button class="ing-button ing-button-secondary">
  Więcej informacji
</button>
```

**Tokeny:**
- `components.button.primary` - główne CTA
- `components.button.secondary` - akcje drugorzędne
- `components.button.tertiary` - akcje trzeciorzędne (text buttons)
- `components.button.danger` - akcje destrukcyjne

### Inputy (Form Fields)

```html
<div>
  <label class="ing-label">Email</label>
  <input type="email" class="ing-input" placeholder="twoj@email.pl">
  <p class="ing-helper">Podaj swój adres email</p>
</div>
```

**Tokeny:**
- `components.input.background` - kolory tła (default, focus, error)
- `components.input.border` - kolory ramki
- `components.input.padding` - wewnętrzne odstępy
- `components.input.height` - wysokości (small, medium, large)
- `components.input.shadow.focus` - cień przy fokusie

### Karty (Cards)

```html
<div class="ing-card">
  <h3>Konto osobiste</h3>
  <p>Zarządzaj swoimi finansami</p>
</div>
```

**Tokeny:**
- `components.card.background` - tło karty
- `components.card.padding` - wewnętrzne odstępy
- `components.card.shadow` - cienie (default, hover)
- `components.card.borderRadius` - zaokrąglenia

### Odznaki (Badges)

```html
<span class="ing-badge ing-badge-primary">Nowe</span>
<span class="ing-badge ing-badge-success">Aktywne</span>
<span class="ing-badge ing-badge-warning">Oczekujące</span>
<span class="ing-badge ing-badge-error">Błąd</span>
```

### Alerty (Alerts)

```html
<div class="ing-alert ing-alert-success">
  Operacja zakończona sukcesem
</div>

<div class="ing-alert ing-alert-error">
  Wystąpił błąd podczas przetwarzania
</div>
```

**Tokeny:**
- `components.alert.success` - komunikaty sukcesu
- `components.alert.warning` - ostrzeżenia
- `components.alert.error` - błędy
- `components.alert.info` - informacje

## 💻 Użycie w różnych technologiach

### React + CSS Modules

```jsx
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary' }) => (
  <button className={`${styles.button} ${styles[variant]}`}>
    {children}
  </button>
);
```

```css
/* Button.module.css */
@import '@ing/design-tokens/css';

.button {
  font-family: var(--ing-font-primary);
  font-weight: var(--ing-font-weight-semibold);
  border-radius: var(--ing-radius-base);
  padding: var(--ing-spacing-3) var(--ing-spacing-6);
  transition: var(--ing-transition-base);
}

.primary {
  background-color: var(--ing-color-brand-orange);
  color: var(--ing-color-brand-white);
  box-shadow: var(--ing-shadow-orange);
}
```

### Vue 3 + Composition API

```vue
<template>
  <button :class="buttonClass" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
});

const buttonClass = computed(() => `ing-button ing-button-${props.variant}`);
</script>

<style scoped>
@import '@ing/design-tokens/css';
</style>
```

### Angular

```typescript
// button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [class]="'ing-button ing-button-' + variant">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
```

```css
/* styles.css - globalnie */
@import '@ing/design-tokens/css';
```

### Svelte

```svelte
<script>
  export let variant = 'primary';
</script>

<button class="ing-button ing-button-{variant}">
  <slot />
</button>

<style>
  @import '@ing/design-tokens/css';
</style>
```

## 🎯 Zasady używania design tokens

### ✅ Dobre praktyki

1. **Zawsze używaj tokenów zamiast hardcodowanych wartości**
   ```css
   /* ✅ Dobrze */
   color: var(--ing-color-brand-orange);

   /* ❌ Źle */
   color: #FF6200;
   ```

2. **Używaj semantycznych nazw dla kontekstu**
   ```css
   /* ✅ Dobrze - semantyczne */
   color: var(--ing-color-text-primary);
   background: var(--ing-color-bg-secondary);

   /* ⚠️ Unikaj - specyficzne */
   color: #1A1A1A;
   background: #F5F5F5;
   ```

3. **Konsystentny spacing**
   ```css
   /* ✅ Dobrze - używaj skali spacing */
   padding: var(--ing-spacing-4) var(--ing-spacing-6);

   /* ❌ Źle - arbitrary values */
   padding: 13px 19px;
   ```

4. **Używaj gotowych komponentów jako bazy**
   ```javascript
   // ✅ Dobrze - bazuj na tokenach komponentów
   const CustomButton = styled.button`
     ${components.button.primary};
     /* twoje customowe dodatki */
   `;
   ```

### 🎨 Kiedy używać jakich kolorów

**ING Orange (#FF6200):**
- Główne przyciski CTA
- Linki
- Aktywne stany (focus, selected)
- Ikony akcji
- Progressy i loadery

**Navy Blue (#000066):**
- Główne nagłówki
- Footer
- Dark mode backgrounds
- Drugorzędne elementy UI

**Szarości:**
- Tekst: primary (#1A1A1A), secondary (#4D4D4D), tertiary (#767676)
- Tła: primary (#FFFFFF), secondary (#F5F5F5), tertiary (#E8E8E8)
- Ramki: default (#D1D1D1), hover (#B3B3B3)

**Kolory stanów:**
- Sukces: #00A03E (zielony)
- Ostrzeżenie: #F59E00 (żółty/pomarańczowy)
- Błąd: #D0021B (czerwony)
- Info: #0066CC (niebieski)

## 📱 Przykłady kompletnych komponentów

### Card z informacją o koncie

```html
<div class="ing-card">
  <div style="display: flex; justify-content: space-between; align-items: start;">
    <div>
      <span class="ing-badge ing-badge-success">Aktywne</span>
      <h3 class="ing-h4" style="margin: var(--ing-spacing-2) 0;">
        Konto osobiste
      </h3>
      <p class="ing-body-small" style="color: var(--ing-color-text-secondary);">
        1234 5678 9012 3456
      </p>
    </div>
    <button class="ing-button ing-button-secondary" style="padding: var(--ing-spacing-2) var(--ing-spacing-4); font-size: var(--ing-font-size-sm);">
      Szczegóły
    </button>
  </div>
  <div style="margin-top: var(--ing-spacing-6);">
    <p class="ing-body-small" style="color: var(--ing-color-text-tertiary);">
      Dostępne środki
    </p>
    <p class="ing-h3" style="color: var(--ing-color-text-primary); margin: var(--ing-spacing-1) 0;">
      12 345,67 PLN
    </p>
  </div>
</div>
```

### Formularz logowania

```html
<form class="ing-card" style="max-width: 400px; margin: var(--ing-spacing-8) auto;">
  <h2 class="ing-h3" style="margin-bottom: var(--ing-spacing-6);">
    Zaloguj się
  </h2>

  <div style="margin-bottom: var(--ing-spacing-4);">
    <label style="display: block; font-size: var(--ing-font-size-sm); font-weight: var(--ing-font-weight-medium); margin-bottom: var(--ing-spacing-2);">
      Email
    </label>
    <input
      type="email"
      class="ing-input"
      placeholder="twoj@email.pl"
      required
    >
  </div>

  <div style="margin-bottom: var(--ing-spacing-6);">
    <label style="display: block; font-size: var(--ing-font-size-sm); font-weight: var(--ing-font-weight-medium); margin-bottom: var(--ing-spacing-2);">
      Hasło
    </label>
    <input
      type="password"
      class="ing-input"
      placeholder="••••••••"
      required
    >
    <p style="font-size: var(--ing-font-size-xs); color: var(--ing-color-text-tertiary); margin-top: var(--ing-spacing-1);">
      Minimum 8 znaków
    </p>
  </div>

  <button type="submit" class="ing-button ing-button-primary" style="width: 100%;">
    Zaloguj się
  </button>

  <p style="text-align: center; margin-top: var(--ing-spacing-4); font-size: var(--ing-font-size-sm);">
    Nie masz konta? <a href="#" class="ing-link">Zarejestruj się</a>
  </p>
</form>
```

### Hero section

```html
<section style="background: var(--ing-gradient-brand); padding: var(--ing-spacing-20) var(--ing-spacing-4); text-align: center; color: var(--ing-color-brand-white);">
  <div class="ing-container">
    <h1 class="ing-h1" style="margin-bottom: var(--ing-spacing-6); color: var(--ing-color-brand-white);">
      Bankowość, która Cię nie ogranicza
    </h1>
    <p class="ing-body-large" style="max-width: 600px; margin: 0 auto var(--ing-spacing-8); color: var(--ing-color-brand-white); opacity: 0.95;">
      Otwórz konto w 10 minut, zarządzaj finansami z aplikacji i ciesz się pełną kontrolą nad swoimi pieniędzmi.
    </p>
    <div style="display: flex; gap: var(--ing-spacing-4); justify-content: center; flex-wrap: wrap;">
      <button class="ing-button" style="background: var(--ing-color-brand-white); color: var(--ing-color-brand-orange); padding: var(--ing-spacing-4) var(--ing-spacing-8); font-size: var(--ing-font-size-lg); font-weight: var(--ing-font-weight-semibold); border-radius: var(--ing-radius-base);">
        Otwórz konto
      </button>
      <button class="ing-button" style="background: transparent; color: var(--ing-color-brand-white); border: 2px solid var(--ing-color-brand-white); padding: var(--ing-spacing-4) var(--ing-spacing-8); font-size: var(--ing-font-size-lg); font-weight: var(--ing-font-weight-semibold); border-radius: var(--ing-radius-base);">
        Dowiedz się więcej
      </button>
    </div>
  </div>
</section>
```

## 🔧 Dostosowywanie (Customization)

Jeśli potrzebujesz dostosować tokeny do swoich potrzeb, możesz nadpisać CSS variables:

```css
:root {
  /* Nadpisz tylko te zmienne, które chcesz zmienić */
  --ing-spacing-custom: 2.5rem;
  --ing-color-brand-orange-custom: #FF7020; /* jaśniejszy orange */
}

.custom-component {
  padding: var(--ing-spacing-custom);
  background: var(--ing-color-brand-orange-custom);
}
```

## 📚 Struktura plików

```
loaders/
├── tokens/
│   ├── colors.json          # Wszystkie kolory w formacie JSON
│   ├── typography.json      # Tokeny typograficzne
│   ├── spacing.json         # Spacing i layout
│   ├── components.json      # Tokeny komponentów
│   ├── tokens.css           # CSS Variables
│   ├── tokens.js            # JavaScript/TypeScript export
│   └── tokens.d.ts          # TypeScript definitions
├── package.json
└── README.md               # Ta dokumentacja
```

## 🤝 Contributing

Chcesz pomóc w rozwoju? Świetnie!

1. Fork projektu
2. Stwórz branch dla swojej funkcji (`git checkout -b feature/AmazingFeature`)
3. Commit zmian (`git commit -m 'Add some AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

MIT License - możesz używać tego projektu w dowolny sposób.

## 🔗 Przydatne linki

- [ING Brand Guidelines](https://www.ing.com/Newsroom/Media-kit.htm)
- [ING Me Font - Fontsmith](https://www.fontsmith.com/case-studies/ing)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## ❓ FAQ

### Czy mogę użyć tych tokenów w projekcie komercyjnym?

Tak! Projekt jest dostępny na licencji MIT.

### Jak mogę zainstalować font ING Me?

Font ING Me jest własnością ING i wymaga licencji. W tokenach używamy fallbacków systemowych dla zgodności.

### Czy design tokens wspierają dark mode?

Obecna wersja zawiera tokeny dla light mode. Dark mode można zaimplementować poprzez nadpisanie zmiennych CSS w media query `prefers-color-scheme: dark`.

### Czy mogę używać tylko części tokenów?

Tak! Możesz importować tylko potrzebne pliki JSON lub wybrane części z JavaScript/TypeScript.

---

Stworzone z 🧡 dla społeczności ING
