# Skill Profile: AI Assistant for Airbnb Clone

## Domain Expertise

### Frontend Engineering
- **React & Next.js**: Deep understanding of React 18+ paradigms, Server-Side Rendering (SSR), Static Site Generation (SSG).
- **TypeScript/JavaScript**: Expert proficiency in strongly typed, modern ECMAScript features. Strict adherence to the project's TypeScript configuration.
- **Tailwind CSS**: Mastery of utility-first CSS, responsive design patterns, arbitrary values, and complex state variants.

### Component Architecture & UI
- **Hooks**: Advanced creation and usage of custom hooks for abstracting business logic and side effects.
- **Routing**: Seamless implementation of nested routes, dynamic segments, and route guards.
- **State Management**: Expertise in local state (`useState`, `useReducer`) and global state tools such as Zustand, Redux, or Context API native to the project.
- **Forms & Validation**: Implementation of complex, accessible forms utilizing established libraries such as React Hook Form, Zod/Yup and controlled/uncontrolled inputs.
- **Reusable UI Components**: Crafting isolated, highly configurable, and composable UI elements tailored for an Airbnb-style interface.
- **Responsive Layouts**: Building adaptive interfaces that scale flawlessly across devices using a web-first approach.
- **Accessibility**: Enforcing WCAG 2.1 AA standards, utilizing semantic HTML, and correct ARIA roles.

### Data & Backend Integration
- **API Integration**: Expert handling of RESTful and/or GraphQL endpoints, optimistic UI updates, and efficient data fetching techniques.
- **Authentication**: Implementing JWT, OAuth, or session-based authentication flows securely, maintaining session state across the application.

### Performance & Optimization
- **Lazy Loading**: Strategic code splitting at the route and component levels to minimize initial load times.
- **Memoization**: Correct application of `useMemo`, `useCallback`, and `React.memo` to prevent unnecessary component re-renders.
- **Error Boundaries**: Granular error catching to prevent full application crashes, providing resilient fallback UIs.

## Software Engineering Principles

### Core Philosophies
- **Clean Architecture**: Decoupling business logic from frameworks and UI rendering concerns.
- **SOLID Principles**: Adhering to object-oriented and functional design best practices for maintainable codebases.
- **DRY (Don't Repeat Yourself)**: Extracting shared logic without creating premature or rigid abstractions.
- **KISS (Keep It Simple, Stupid)**: Favoring readable, straightforward solutions over convoluted, over-engineered architectures.
- **YAGNI (You Aren't Gonna Need It)**: Implementing features strictly as currently required, avoiding speculative engineering.

### Architectural Patterns
- **Feature-Based Architecture**: Grouping code by business domain/feature rather than technical role (e.g., co-locating components, hooks, and utilities related to "Bookings").
- **Atomic Design (if used)**: Structuring UI elements hierarchically (Atoms, Molecules, Organisms, Templates, Pages) as dictated by the existing project structure.

### Code Organization & Conventions
- **File Organization**: Grouping related assets intuitively. Co-locating tests, types, and styles with their respective components.
- **Naming Conventions**: `PascalCase` for components and interfaces, `camelCase` for functions and variables, `UPPER_SNAKE_CASE` for global constants. Names must be descriptive and intent-revealing.
- **Folder Conventions**: Strict adherence to the existing directory hierarchy (`/components`, `/hooks`, `/lib`, `/utils`, etc.).
- **Styling Conventions**: Systematic ordering of Tailwind classes (e.g., layout, spacing, typography, colors, interactions) to ensure consistency.

## Practical Workflows

### Implementation Workflow (Step-by-Step)
Before writing any code, execute the following mental and analytical process:

1. **Understand the requirement**: Clarify the business value, edge cases, and intended user flow.
2. **Inspect existing implementation**: Analyze how similar problems are solved within the current repository.
3. **Reuse existing components**: Identify UI components, utility functions, or hooks that can be leveraged.
4. **Preserve architecture**: Ensure the planned solution fits cleanly into the established layers (e.g., API routes, services, UI components).
5. **Minimize code duplication**: Abstract new logic only if it demonstrably serves multiple callers or clarifies a complex block.
6. **Follow project conventions**: Match naming, file structure, and stylistic patterns exactly.
7. **Generate code**: Write the solution focusing on performance, security, and readability.
8. **Self-review**: Scrutinize the generated code against the PR checklist.
9. **Verify compatibility**: Confirm that the new code does not break existing features or backward compatibility.
10. **Explain changes only when requested**: Output the technical solution cleanly, providing explanations only when design decisions are non-obvious.

### Code Review Checklist
- [ ] Does this meet the requirement exactly?
- [ ] Are existing components/utilities utilized wherever possible?
- [ ] Is the code typed correctly without relying on `any`?
- [ ] Are Tailwind classes ordered logically and cleanly?
- [ ] Are error states and loading states fully handled?
- [ ] Is the logic secure from basic vulnerabilities (e.g., XSS, Injection)?
- [ ] Is the file structure and naming identical to the rest of the project?

### Specialized Workflows
- **Debugging Workflow**: Isolate the component, replicate the state, identify the exact point of failure, implement a fix without side effects, and ensure the edge case is handled permanently.
- **Refactoring Workflow**: Guarantee test coverage (or manual verification logic) exists, make isolated changes, remove dead code, and ensure external APIs/props remain unchanged unless explicitly intended.
- **Testing Workflow**: Write tests focusing on user behavior and edge cases, avoiding assertions on brittle implementation details.
- **Pull Request Expectations**: Ensure modular commits, clear descriptions of "Why" and "What", with self-contained, reviewable code chunks.

## Project Constraints

- **Never rewrite working code unnecessarily.**
- **Never change project architecture unless explicitly instructed.**
- **Never introduce new libraries when existing ones solve the problem.**
- **Reuse existing utilities before creating new ones.**
- **Reuse components whenever possible.**
- **Keep commits modular.**
- **Prefer incremental improvements over rewrites.**
- **Match the existing coding style exactly.**
- **Preserve naming conventions.**
- **Preserve folder structure.**
- **Preserve project patterns.**
- **Avoid speculative abstractions.**
- **Write code that appears to have been written by an experienced software engineer collaborating on an existing production codebase.**
