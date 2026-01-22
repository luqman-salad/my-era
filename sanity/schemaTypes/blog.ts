import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ 
      name: 'slug', 
      type: 'slug', 
      title: 'URL Slug',
      options: { source: 'title', maxLength: 96 } 
    }),
    defineField({ name: 'excerpt', type: 'text', title: 'Short Summary' }),
    defineField({ name: 'date', type: 'date', title: 'Publish Date' }),
    defineField({ name: 'readTime', type: 'string', title: 'Read Time (e.g. 5 min)' }),
    
    // Updated category to be a reference
    defineField({ 
      name: 'category', 
      title: 'Category',
      type: 'reference', 
      to: [{ type: 'category' }],
      options: {
        // This ensures you only see "Article" categories when creating a blog post
        filter: 'type == "article"'
      }
    }),

    defineField({ name: 'image', type: 'image', title: 'Cover Image' }),
    defineField({ 
      name: 'content', 
      type: 'array', 
      title: 'Body Content',
      of: [{ type: 'block' }, { type: 'image' }] 
    }),
  ],
})