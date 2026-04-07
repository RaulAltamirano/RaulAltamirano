# README Retro Arcade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar el README de perfil de GitHub con tema Arcade Retro Mix (Space Invaders + Pac-Man), reemplazando los 3 SVGs existentes y actualizando README.md.

**Architecture:** 4 archivos modificados/creados: `banner.svg` (header con Space Invaders animados), `skills.svg` (nuevo, barras Pac-Man por categoría), `contact.svg` (estilo Game Over), `README.md` (integra skills.svg). Todas las animaciones son CSS `@keyframes` + SMIL `<animate>` dentro del SVG — sin JS, sin dependencias externas, funcionan en GitHub.

**Tech Stack:** SVG, CSS animations, SMIL animations, Markdown.

---

## File Map

| Archivo | Acción | Responsabilidad |
|---------|--------|-----------------|
| `banner.svg` | Reemplazar | Header 1200×280: Space Invaders marchando + nombre neón + score arcade |
| `skills.svg` | Crear | Skills 800×320: 4 barras Pac-Man animadas por categoría |
| `contact.svg` | Reemplazar | Contact 1200×200: estilo Game Over/Continue |
| `README.md` | Actualizar | Reemplazar sección Tech stack con skills.svg |

---

## Task 1: Crear banner.svg

**Files:**
- Modify: `banner.svg`

- [ ] **Step 1: Reemplazar banner.svg con el nuevo diseño retro**

Sobreescribir `banner.svg` con el siguiente contenido:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="280" viewBox="0 0 1200 280" role="img" aria-label="Raúl Altamirano — Full-Stack Developer">
  <defs>
    <style>
      .title { font-family: monospace; font-weight: 900; }
      .sub   { font-family: monospace; font-weight: 400; }
      @keyframes march {
        0%  { transform: translateX(0px);  }
        49% { transform: translateX(12px); }
        50% { transform: translateX(12px); scaleX(-1); }
        99% { transform: translateX(0px);  scaleX(-1); }
        100%{ transform: translateX(0px);  }
      }
      .invaders { animation: march 0.7s steps(1) infinite; }
      @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
      .blink { animation: blink 1s infinite; }
    </style>
    <!-- Dot grid pattern -->
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#1a1a1a"/>
    </pattern>
    <!-- Scanlines -->
    <pattern id="scan" x="0" y="0" width="1" height="4" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="1" height="1" fill="#00FF41" opacity="0.03"/>
    </pattern>
    <!-- Neon underline gradient -->
    <linearGradient id="uline" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00FF41"/>
      <stop offset="100%" stop-color="#FF00FF"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="280" fill="#000"/>
  <rect width="1200" height="280" fill="url(#dots)"/>
  <rect width="1200" height="280" fill="url(#scan)"/>

  <!-- Space Invaders row (pixel art, 18 invaders) -->
  <g class="invaders">
    <!-- Each invader: 20×16px, spacing 66px, starting at x=4 -->
    <!-- Invader shape: antenna(2px), head(row), body(row), feet(row) -->
    <g fill="#00FF41">
      <!-- Macro to repeat: translate(n*66, 8) -->
      <!-- n=0 -->
      <g transform="translate(4,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(70,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(136,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(202,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(268,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(334,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(400,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(466,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(532,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(598,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(664,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(730,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(796,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(862,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(928,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(994,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(1060,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
      <g transform="translate(1126,8)">
        <rect x="8" y="0" width="4" height="4"/><rect x="20" y="0" width="4" height="4"/>
        <rect x="4" y="4" width="24" height="4"/><rect x="0" y="8" width="32" height="4"/>
        <rect x="4" y="12" width="8" height="4"/><rect x="20" y="12" width="8" height="4"/>
        <rect x="0" y="16" width="8" height="4"/><rect x="24" y="16" width="8" height="4"/>
      </g>
    </g>
  </g>

  <!-- Separator line under invaders -->
  <line x1="60" y1="46" x2="1140" y2="46" stroke="#00FF41" stroke-width="1" opacity="0.3"/>

  <!-- Name -->
  <text class="title" x="60" y="130" font-size="52" fill="#ffffff"
    style="text-shadow: 0 0 20px #00FF41, 0 0 40px #00FF41;">Raúl Altamirano</text>

  <!-- Neon underline -->
  <rect x="60" y="140" width="330" height="4" fill="url(#uline)" rx="2"
    style="filter: drop-shadow(0 0 6px #00FF41);"/>

  <!-- Subtitle -->
  <text class="sub" x="60" y="178" font-size="20" fill="#FF69B4" letter-spacing="4"
    style="text-shadow: 0 0 10px #FF69B4;">FULL-STACK DEVELOPER</text>

  <!-- Tech keywords -->
  <text class="sub" x="60" y="214" font-size="15" fill="#00FFFF" letter-spacing="1"
    style="text-shadow: 0 0 6px #00FFFF;">React · TypeScript · Node.js · Go · PostgreSQL · AWS · Docker</text>

  <!-- Score — top right -->
  <text class="sub" x="1140" y="36" font-size="11" fill="#FFD700" text-anchor="end" letter-spacing="2">1UP</text>
  <text class="title" x="1140" y="56" font-size="18" fill="#ffffff" text-anchor="end">00000</text>
  <text class="sub" x="1140" y="76" font-size="10" fill="#888888" text-anchor="end" letter-spacing="2">HI-SCORE</text>
  <text class="title" x="1140" y="94" font-size="16" fill="#FFD700" text-anchor="end">99999</text>
</svg>
```

- [ ] **Step 2: Verificar renderizado abriendo el archivo en el navegador**

```bash
xdg-open banner.svg
# O en macOS: open banner.svg
```

Confirmar que se ven los Space Invaders, el nombre con glow, el underline degradado y el score en esquina. La animación de marcha debe verse.

- [ ] **Step 3: Commit**

```bash
git add banner.svg
git commit -m "feat: retro arcade banner with Space Invaders and neon glow"
```

---

## Task 2: Crear skills.svg

**Files:**
- Create: `skills.svg`

- [ ] **Step 1: Crear skills.svg con las 4 barras Pac-Man animadas**

Crear el archivo `skills.svg` con el siguiente contenido:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="320" viewBox="0 0 800 320" role="img" aria-label="Skills — Raúl Altamirano">
  <defs>
    <style>
      .label { font-family: monospace; font-weight: 700; letter-spacing: 3px; }
      .tech  { font-family: monospace; font-weight: 400; }
      .pct   { font-family: monospace; font-weight: 700; }

      /* Pac-Man movement per row */
      @keyframes pm1 { 0%{transform:translateX(0)}   100%{transform:translateX(660px)} }
      @keyframes pm2 { 0%{transform:translateX(0)}   100%{transform:translateX(660px)} }
      @keyframes pm3 { 0%{transform:translateX(0)}   100%{transform:translateX(660px)} }
      @keyframes pm4 { 0%{transform:translateX(0)}   100%{transform:translateX(660px)} }

      .pm1 { animation: pm1 3.2s linear infinite; }
      .pm2 { animation: pm2 3.8s linear infinite; animation-delay: 0.6s; }
      .pm3 { animation: pm3 4.2s linear infinite; animation-delay: 1.1s; }
      .pm4 { animation: pm4 3.5s linear infinite; animation-delay: 0.3s; }
    </style>

    <!-- Track fill gradient per category -->
    <linearGradient id="fill1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00FF41" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#00FF41" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="fill2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF69B4" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#FF69B4" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="fill3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00FFFF" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#00FFFF" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="fill4" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF8C00" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#FF8C00" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="320" fill="#000"/>

  <!-- ── ROW 1: FRONTEND (95%) ── -->
  <text class="label" x="16" y="30" font-size="12" fill="#00FF41">FRONTEND</text>
  <text class="tech"  x="120" y="30" font-size="10" fill="#444">React · Next.js · Vue · Nuxt · TypeScript</text>
  <!-- Track -->
  <rect x="16" y="38" width="730" height="26" rx="3" fill="#0a0a0a" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Filled zone 95% = 693px of 730 -->
  <rect x="16" y="38" width="693" height="26" rx="3" fill="url(#fill1)"/>
  <!-- Remaining dots -->
  <circle cx="702" cy="51" r="3" fill="#00FF41" opacity="0.9"/>
  <circle cx="716" cy="51" r="3" fill="#00FF41" opacity="0.9"/>
  <circle cx="730" cy="51" r="3" fill="#00FF41" opacity="0.9"/>
  <!-- Pac-Man -->
  <g transform="translate(16,38)" class="pm1">
    <circle cx="13" cy="13" r="13" fill="#FFD700"/>
    <path fill="#000">
      <animate attributeName="d"
        values="M13,13 L26,6 A13,13 0 1,0 26,20 Z;M13,13 L26,2 A13,13 0 1,0 26,24 Z;M13,13 L26,6 A13,13 0 1,0 26,20 Z"
        dur="0.25s" repeatCount="indefinite"/>
    </path>
    <circle cx="13" cy="4" r="2" fill="#000"/>
  </g>
  <text class="pct" x="756" y="56" font-size="12" fill="#00FF41">95%</text>

  <!-- ── ROW 2: BACKEND (88%) ── -->
  <text class="label" x="16" y="102" font-size="12" fill="#FF69B4">BACKEND</text>
  <text class="tech"  x="110" y="102" font-size="10" fill="#444">Node.js · Python · Go</text>
  <rect x="16" y="110" width="730" height="26" rx="3" fill="#0a0a0a" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Filled zone 88% = 642px -->
  <rect x="16" y="110" width="642" height="26" rx="3" fill="url(#fill2)"/>
  <circle cx="656" cy="123" r="3" fill="#FF69B4" opacity="0.9"/>
  <circle cx="670" cy="123" r="3" fill="#FF69B4" opacity="0.9"/>
  <circle cx="684" cy="123" r="3" fill="#FF69B4" opacity="0.9"/>
  <circle cx="698" cy="123" r="3" fill="#FF69B4" opacity="0.9"/>
  <circle cx="712" cy="123" r="3" fill="#FF69B4" opacity="0.9"/>
  <circle cx="726" cy="123" r="3" fill="#FF69B4" opacity="0.9"/>
  <g transform="translate(16,110)" class="pm2">
    <circle cx="13" cy="13" r="13" fill="#FFD700"/>
    <path fill="#000">
      <animate attributeName="d"
        values="M13,13 L26,6 A13,13 0 1,0 26,20 Z;M13,13 L26,2 A13,13 0 1,0 26,24 Z;M13,13 L26,6 A13,13 0 1,0 26,20 Z"
        dur="0.25s" repeatCount="indefinite"/>
    </path>
    <circle cx="13" cy="4" r="2" fill="#000"/>
  </g>
  <text class="pct" x="756" y="128" font-size="12" fill="#FF69B4">88%</text>

  <!-- ── ROW 3: DATABASES & CLOUD (82%) ── -->
  <text class="label" x="16" y="174" font-size="12" fill="#00FFFF">DATABASES &amp; CLOUD</text>
  <text class="tech"  x="212" y="174" font-size="10" fill="#444">PostgreSQL · MongoDB · Redis · AWS</text>
  <rect x="16" y="182" width="730" height="26" rx="3" fill="#0a0a0a" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Filled zone 82% = 599px -->
  <rect x="16" y="182" width="599" height="26" rx="3" fill="url(#fill3)"/>
  <circle cx="614" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="628" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="642" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="656" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="670" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="684" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="698" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="712" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <circle cx="726" cy="195" r="3" fill="#00FFFF" opacity="0.9"/>
  <g transform="translate(16,182)" class="pm3">
    <circle cx="13" cy="13" r="13" fill="#FFD700"/>
    <path fill="#000">
      <animate attributeName="d"
        values="M13,13 L26,6 A13,13 0 1,0 26,20 Z;M13,13 L26,2 A13,13 0 1,0 26,24 Z;M13,13 L26,6 A13,13 0 1,0 26,20 Z"
        dur="0.25s" repeatCount="indefinite"/>
    </path>
    <circle cx="13" cy="4" r="2" fill="#000"/>
  </g>
  <text class="pct" x="756" y="200" font-size="12" fill="#00FFFF">82%</text>

  <!-- ── ROW 4: DEVOPS (75%) ── -->
  <text class="label" x="16" y="246" font-size="12" fill="#FF8C00">DEVOPS</text>
  <text class="tech"  x="96" y="246" font-size="10" fill="#444">Docker · Kubernetes · GitHub Actions</text>
  <rect x="16" y="254" width="730" height="26" rx="3" fill="#0a0a0a" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Filled zone 75% = 547px -->
  <rect x="16" y="254" width="547" height="26" rx="3" fill="url(#fill4)"/>
  <circle cx="562" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="576" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="590" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="604" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="618" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="632" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="646" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="660" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="674" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="688" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="702" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="716" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <circle cx="730" cy="267" r="3" fill="#FF8C00" opacity="0.9"/>
  <g transform="translate(16,254)" class="pm4">
    <circle cx="13" cy="13" r="13" fill="#FFD700"/>
    <path fill="#000">
      <animate attributeName="d"
        values="M13,13 L26,6 A13,13 0 1,0 26,20 Z;M13,13 L26,2 A13,13 0 1,0 26,24 Z;M13,13 L26,6 A13,13 0 1,0 26,20 Z"
        dur="0.25s" repeatCount="indefinite"/>
    </path>
    <circle cx="13" cy="4" r="2" fill="#000"/>
  </g>
  <text class="pct" x="756" y="272" font-size="12" fill="#FF8C00">75%</text>

  <!-- Bottom border -->
  <line x1="0" y1="300" x2="800" y2="300" stroke="#1a1a1a" stroke-width="1"/>
  <text class="tech" x="400" y="314" font-size="9" fill="#333" text-anchor="middle" letter-spacing="2">PAC-MAN EATS DOTS — POWERED BY SVG ANIMATIONS</text>
</svg>
```

- [ ] **Step 2: Verificar renderizado en el navegador**

```bash
xdg-open skills.svg
```

Confirmar que los 4 Pac-Man se mueven de izquierda a derecha, la boca abre y cierra, y los dots de cada color están al final de cada barra.

- [ ] **Step 3: Commit**

```bash
git add skills.svg
git commit -m "feat: add skills.svg with animated Pac-Man skill bars"
```

---

## Task 3: Reemplazar contact.svg

**Files:**
- Modify: `contact.svg`

- [ ] **Step 1: Reemplazar contact.svg con diseño Game Over / Continue**

Sobreescribir `contact.svg` con el siguiente contenido:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="200" viewBox="0 0 1200 200" role="img" aria-label="Contact — Raúl Altamirano">
  <defs>
    <style>
      .label { font-family: monospace; font-weight: 700; }
      .info  { font-family: monospace; font-weight: 400; }
      @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
      .blink { animation: blink 1s infinite; }
    </style>
    <linearGradient id="sep" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#000000"/>
      <stop offset="20%"  stop-color="#00FF41"/>
      <stop offset="50%"  stop-color="#FF00FF"/>
      <stop offset="80%"  stop-color="#00FFFF"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="uline2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00FF41"/>
      <stop offset="100%" stop-color="#00000000"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="200" fill="#000"/>

  <!-- Top separator -->
  <rect x="0" y="12" width="1200" height="2" fill="url(#sep)"/>

  <!-- LEFT: Title -->
  <text class="info" x="60" y="70" font-size="10" fill="#444" letter-spacing="3">GAME OVER? NO — LET'S COLLABORATE</text>
  <text class="label" x="60" y="110" font-size="32" fill="#ffffff"
    style="filter: drop-shadow(0 0 8px #00FF41);">CONTACT</text>
  <rect x="60" y="118" width="140" height="3" fill="url(#uline2)" rx="1"/>

  <!-- CENTER: 3 contact blocks -->
  <!-- Email -->
  <text class="label" x="380" y="68" font-size="11" fill="#00FFFF" text-anchor="middle" letter-spacing="2">EMAIL</text>
  <text class="info"  x="380" y="90" font-size="13" fill="#cccccc" text-anchor="middle">altamirano.developer</text>
  <text class="info"  x="380" y="106" font-size="13" fill="#cccccc" text-anchor="middle">@gmail.com</text>

  <!-- Divider -->
  <line x1="460" y1="55" x2="460" y2="120" stroke="#222" stroke-width="1"/>

  <!-- LinkedIn -->
  <text class="label" x="545" y="68" font-size="11" fill="#FF69B4" text-anchor="middle" letter-spacing="2">LINKEDIN</text>
  <text class="info"  x="545" y="90" font-size="13" fill="#cccccc" text-anchor="middle">Raúl Altamirano</text>
  <text class="info"  x="545" y="106" font-size="13" fill="#cccccc" text-anchor="middle">Lozano</text>

  <!-- Divider -->
  <line x1="625" y1="55" x2="625" y2="120" stroke="#222" stroke-width="1"/>

  <!-- Portfolio -->
  <text class="label" x="710" y="68" font-size="11" fill="#FFD700" text-anchor="middle" letter-spacing="2">PORTFOLIO</text>
  <text class="info"  x="710" y="90" font-size="13" fill="#cccccc" text-anchor="middle">my-portfolio</text>
  <text class="info"  x="710" y="106" font-size="13" fill="#cccccc" text-anchor="middle">github repo</text>

  <!-- RIGHT: Arcade / CONTINUE? -->
  <text class="info"  x="1140" y="62" font-size="10" fill="#666" text-anchor="end" letter-spacing="3">LIVES</text>
  <text class="label" x="1140" y="84" font-size="20" fill="#FFD700" text-anchor="end" letter-spacing="6">C  C  C</text>
  <text class="label" x="1140" y="110" font-size="13" fill="#FFD700" text-anchor="end" letter-spacing="3"
    style="filter: drop-shadow(0 0 6px #FFD700);">CONTINUE?</text>
  <text class="label blink" x="1140" y="132" font-size="18" fill="#00FF41" text-anchor="end"
    style="filter: drop-shadow(0 0 8px #00FF41);">9...8...7...</text>

  <!-- Bottom separator -->
  <line x1="0" y1="155" x2="1200" y2="155" stroke="#1a1a1a" stroke-width="1"/>
  <text class="info" x="600" y="174" font-size="9" fill="#333" text-anchor="middle" letter-spacing="2">
    © RAÚL ALTAMIRANO — REPLY WITHIN A FEW DAYS — INSERT COIN TO HIRE
  </text>
</svg>
```

- [ ] **Step 2: Verificar renderizado en el navegador**

```bash
xdg-open contact.svg
```

Confirmar: separador de colores arriba, "CONTACT" con glow verde, los 3 bloques de contacto centrados, "CONTINUE? 9...8...7..." parpadeando a la derecha.

- [ ] **Step 3: Commit**

```bash
git add contact.svg
git commit -m "feat: retro arcade contact section with Game Over style"
```

---

## Task 4: Actualizar README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Reemplazar sección Tech stack con skills.svg**

En `README.md`, encontrar la sección `## Tech stack` (líneas 14–41) y reemplazarla con:

```markdown
## Skills

<p align="center">
  <img src="./skills.svg" alt="Skills — Raúl Altamirano" />
</p>
```

El bloque a eliminar va desde `## Tech stack` hasta (incluyendo) el último badge de GitHub Actions.

- [ ] **Step 2: Verificar que el README queda correcto**

```bash
# Vista previa rápida de la estructura
grep "^##" README.md
```

Salida esperada:
```
## About me
## Skills
## Featured projects
## GitHub overview
## Practice & problem solving
## Contact
```

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "feat: replace tech stack badges with animated Pac-Man skills SVG"
```

---

## Task 5: Push y verificación final en GitHub

**Files:** ninguno (solo git push)

- [ ] **Step 1: Push todos los commits**

```bash
git push origin main
```

- [ ] **Step 2: Verificar en GitHub**

Abrir `https://github.com/RaulAltamirano` en el navegador y confirmar:

- `banner.svg` renderiza con Space Invaders y nombre neón
- `skills.svg` muestra los Pac-Man animados (GitHub soporta CSS + SMIL en SVG `<img>`)
- `contact.svg` muestra el diseño Game Over con "9...8...7..." parpadeando
- La sección `## Skills` muestra el skills.svg centrado
- Los badges de la sección anterior (`## Tech stack`) ya no aparecen

> **Nota:** Si las animaciones no se ven en GitHub, refrescar con Ctrl+Shift+R. GitHub cachea SVGs agresivamente.
