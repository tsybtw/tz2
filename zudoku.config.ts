export default {
  title: "Conference App Technical Specification",
  description: "Technical Requirements and Specifications for Conference Registration System Development",
  basePath: "/tz2/",
  features: {
    apiReference: {
      path: "/reference"
    },
    tryItOut: true,
  },
  
  build: {
    outDir: './dist/tz2',
    emptyOutDir: true
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Requirements", href: "/requirements" },
    { label: "Technical Stack", href: "/tech-stack" },
    { label: "System Design", href: "/system-design" },
    { label: "Data Model", href: "/data-model" },
    { label: "API Specification", href: "/api-spec" }
  ],
  sidebar: {
    "/": [
      { type: "doc", id: "index", label: "Home" },
      { type: "doc", id: "requirements", label: "Requirements" },
      { type: "doc", id: "tech-stack", label: "Technical Stack" },
      { type: "doc", id: "system-design", label: "System Design" },
      { type: "doc", id: "data-model", label: "Data Model" },
      { type: "doc", id: "api-spec", label: "API Specification" }
    ]
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
    root: "pages"
  },
  redirects: [
    { from: "/", to: "/index" },
    { from: "/tz2", to: "/tz2/" }
  ],
  meta: {
    title: 'Conference App - Technical Specification',
    description: 'Technical Requirements and Specifications for Conference Registration System Development'
  }
}; 