export type Project = {
  slug: string;
  name: string;
  terminalPath: string;
  tagline: string;
  description: string;
  role: string;
  timeline: string;
  status: string;
  tags: string[];
  overview: string[];
  challenges: { id: string; text: string }[];
  output: { label: string; value: string }[];
  log: string;
};

export const projects: Project[] = [
  {
    slug: "mcdonalds-database-reverse-engineering",
    name: "McDonald's App — DB Reverse Engineering",
    terminalPath: "~/projects/mcd-schema-audit.sh",
    tagline:
      "Reconstructing a relational schema, ERD, and query layer from an existing food-ordering application.",
    description:
      "Reverse-engineered the McDonald's ordering app's data layer: mapped entities, drew the ERD, wrote the DDL, and authored twelve production-style SQL queries covering orders, menu items, and transactions.",
    role: "Database Engineer (team of 3)",
    timeline: "Semester 4",
    status: "COMPLETED",
    tags: ["PostgreSQL", "ERD", "SQL", "DDL"],
    overview: [
      "Working with two teammates, I helped reverse-engineer the data model behind a McDonald's-style ordering app — starting from app behavior and screens, then working backward to a normalized relational schema.",
      "The output was a full makalah (academic paper) and presentation covering the ERD, DDL statements, and twelve SQL queries handling common operations: order history, menu availability, and revenue-style aggregations.",
    ],
    challenges: [
      {
        id: "01_ERD",
        text: "Inferring entity relationships (orders, items, branches, customers) purely from app UI and flow, without direct schema access.",
      },
      {
        id: "02_NORM",
        text: "Keeping the schema normalized while still matching real-world ordering behavior, like combo items and modifiers.",
      },
      {
        id: "03_TEAM",
        text: "Splitting slide and section ownership across three people while keeping the ERD and DDL internally consistent.",
      },
    ],
    output: [
      { label: "ENTITIES_MAPPED", value: "9" },
      { label: "SQL_QUERIES", value: "12" },
      { label: "TEAM_SIZE", value: "3" },
    ],
    log: "The hardest part wasn't writing the SQL — it was agreeing on what the entities actually were before any code got written.",
  },
  {
    slug: "absolute-cinema-rest-api",
    name: "Absolute Cinema — REST API",
    terminalPath: "~/projects/absolute-cinema/api.sh",
    tagline: "A Spring Boot REST API for browsing and booking cinema showtimes.",
    description:
      "Built a REST API in Java with Spring Boot for a cinema booking use case — covering movies, showtimes, and booking endpoints with a clean layered architecture.",
    role: "Backend Developer",
    timeline: "Semester 4",
    status: "COMPLETED",
    tags: ["Java", "Spring Boot", "REST API"],
    overview: [
      "Absolute Cinema is a REST API built to practice backend fundamentals in Java: controller-service-repository layering, DTOs, and proper HTTP semantics.",
      "The API exposes endpoints for movies, showtimes, and bookings, with validation and structured error responses so the API behaves predictably for any frontend consuming it.",
    ],
    challenges: [
      {
        id: "01_LAYER",
        text: "Keeping a clean separation between controller, service, and repository layers instead of collapsing logic into controllers.",
      },
      {
        id: "02_VALID",
        text: "Designing consistent request validation and error responses across every endpoint.",
      },
    ],
    output: [
      { label: "ENDPOINTS", value: "10+" },
      { label: "LANGUAGE", value: "Java" },
      { label: "FRAMEWORK", value: "Spring Boot" },
    ],
    log: "This project was where Spring Boot's conventions finally clicked — once the layering made sense, adding new endpoints got fast.",
  },
  {
    slug: "dashboard-backbone-dapodik",
    name: "Dashboard Backbone Dapodik",
    terminalPath: "~/projects/backbone-dapodik/skpl.sh",
    tagline:
      "SKPL documentation and class diagram design for a Dapodik-facing analytics dashboard.",
    description:
      "Contributed to a 5-person team building the software requirements specification (SKPL) for a web dashboard on top of Dapodik data, owning the Class Diagram section and its supporting design documentation.",
    role: "Requirements & Class Diagram Owner (team of 5)",
    timeline: "Semester 4–5",
    status: "IN PROGRESS",
    tags: ["React.js", "FastAPI", "PostgreSQL"],
    overview: [
      "Backbone Dapodik is a dashboard concept for visualizing education data sourced from Dapodik, built with a React.js frontend, FastAPI backend, and PostgreSQL database.",
      "My primary contribution was the Class Diagram section of the SKPL: translating written class descriptions into a formal diagram and embedding it into the project's documentation.",
    ],
    challenges: [
      {
        id: "01_SPEC",
        text: "Translating loosely-written class descriptions from teammates into a consistent, formally correct class diagram.",
      },
      {
        id: "02_DOC",
        text: "Generating the diagram programmatically (Python/matplotlib) and embedding it cleanly into a DOCX deliverable.",
      },
    ],
    output: [
      { label: "TEAM_SIZE", value: "5" },
      { label: "STACK", value: "3 layers" },
      { label: "STATUS", value: "SKPL" },
    ],
    log: "Turning prose class descriptions into a diagram that five people would all recognize as 'correct' took more negotiation than code.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
