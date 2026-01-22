import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { blogType } from './blog'
import category from './category' // Import your category file

export const schema: { types: SchemaTypeDefinition[] } = {
  // Add category to the types array
  types: [projectType, blogType, category],
}