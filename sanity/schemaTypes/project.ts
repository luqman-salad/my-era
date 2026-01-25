import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    
    // NEW: Priority/Ordering field
    defineField({ 
      name: 'orderId', 
      type: 'number', 
      title: 'Sort Order', 
      description: '1 = First, 2 = Second, 3 = Third. Use low numbers to show projects at the top.' 
    }),

    // NEW: Featured toggle
    defineField({ 
      name: 'isFeatured', 
      type: 'boolean', 
      title: 'Featured Project', 
      description: 'If enabled, this project can be prioritized in "Featured" sections.',
      initialValue: false 
    }),

    defineField({ name: 'year', type: 'string', title: 'Year (e.g. 2024)' }),
    
    defineField({ 
      name: 'category', 
      title: 'Category',
      type: 'reference', 
      to: [{ type: 'category' }],
      options: {
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
  // Optional: This makes the Sanity Studio preview show the Sort Order next to the title
  preview: {
    select: {
      title: 'title',
      order: 'orderId',
      media: 'image'
    },
    prepare({ title, order, media }) {
      return {
        title: `${order !== undefined ? `[${order}] ` : ''}${title}`,
        media
      }
    }
  }
})