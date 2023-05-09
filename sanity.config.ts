import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "4cv5qz6b",
  dataset: "production",

  title: "Next Sanity Studio",
  apiVersion: "2023-05-05",

  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
