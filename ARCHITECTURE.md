# Arquitectura del Proyecto

## Enfoque

Este proyecto fue reorganizado bajo la metodología Atomic Design para mejorar mantenibilidad, escalabilidad y reutilización de UI.

La composición se organiza desde unidades pequeñas (atoms) hasta ensamblados de página (pages).

## Estructura de Carpetas

```text
app/
  layout.tsx
  page.tsx

components/
  atoms/
    CarouselArrowButton.tsx
    CarouselDotButton.tsx
    LanguageButton.tsx
    NavItemLink.tsx
    ProjectActionLink.tsx
    SocialIconLink.tsx
    TechBadge.tsx
  molecules/
    HeaderNavigation.tsx
    LanguageSwitcher.tsx
    ProjectActions.tsx
    ProjectCarousel.tsx
    SocialLinks.tsx
  organisms/
    AboutMeSection.tsx
    Footer.tsx
    Header.tsx
    ProjectCard.tsx
    ProjectsSection.tsx
  templates/
    PortfolioTemplate.tsx
  pages/
    HomePage.tsx

data/
  projects.ts
  technologies.tsx

lib/
  i18n.tsx

locales/
  en.json
  es.json

types/
  project.ts
```

## Capas Atomic Design

### Atoms

Elementos base de UI sin conocimiento del contexto global:

- Botones de idioma.
- Enlaces de navegación.
- Enlaces de redes.
- Badge de tecnología.
- Controles de carrusel.
- Acción individual de proyecto.

Responsabilidad: renderizar piezas visuales pequeñas y reutilizables.

### Molecules

Agrupaciones de atoms con una intención concreta:

- Navegación de cabecera.
- Selector de idioma.
- Bloque de redes sociales.
- Carrusel de proyecto.
- Lista de acciones del proyecto.

Responsabilidad: encapsular patrones de interacción repetibles.

### Organisms

Secciones completas del sitio construidas con molecules/atoms:

- Header.
- AboutMeSection.
- ProjectsSection.
- ProjectCard.
- Footer.

Responsabilidad: orquestar estado local y estructura principal de cada bloque de interfaz.

### Templates

Composición estructural de página:

- PortfolioTemplate.

Responsabilidad: definir layout global de la vista (header, main, footer) sin acoplarse al enrutamiento.

### Pages

Entrada de UI para el enrutamiento de Next:

- HomePage.

Responsabilidad: conectar la capa de plantilla con la ruta de aplicación.

## Flujo de Render

1. `app/page.tsx` invoca `HomePage`.
2. `HomePage` renderiza `PortfolioTemplate`.
3. `PortfolioTemplate` organiza organisms (`Header`, `AboutMeSection`, `ProjectsSection`, `Footer`).
4. Cada organism compone molecules y atoms según la necesidad visual y funcional.

## Datos y Tipos

- `data/projects.ts` contiene catálogo de proyectos.
- `data/technologies.tsx` centraliza tecnologías, colores e iconos.
- `types/project.ts` define contratos de datos (`Tech`, `Action`, `Project`) para desacoplar tipos de la capa de componentes.

## Internacionalización

- `lib/i18n.tsx` expone `I18nProvider` y `useTranslation`.
- `locales/en.json` y `locales/es.json` almacenan los textos.
- Componentes de las capas superiores consumen la traducción; atoms se mantienen lo más agnósticos posible cuando aplica.

## Beneficios del Refactor

- Menor acoplamiento entre datos y presentación.
- Reutilización más clara de piezas UI.
- Ruta de crecimiento limpia para nuevas secciones.
- Mejor legibilidad para mantenimiento y onboarding.
