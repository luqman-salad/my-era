import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'year', type: 'string', title: 'Year (e.g. 2024)' }),
    
    // Updated category to be a reference
    defineField({ 
      name: 'category', 
      title: 'Category',
      type: 'reference', 
      to: [{ type: 'category' }],
      options: {
        // This ensures you only see "Project" categories when creating a project
        filter: 'type == "project"'
      }
    }),

    defineField({ name: 'description', type: 'text', title: 'Short Description' }),
    defineField({ 
      name: 'image', 
      type: 'image', 
      title: 'Project Image',
      options: { hotspot: true } 
    }),
    defineField({ 
      name: 'tags', 
      type: 'array', 
      title: 'Tech Stack',
      of: [{ type: 'string' }] 
    }),
    defineField({ name: 'github', type: 'url', title: 'GitHub Link' }),
    defineField({ name: 'link', type: 'url', title: 'Live Preview Link' }),
  ],
})