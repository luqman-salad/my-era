import { Tag } from 'lucide-react';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: Tag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Project', value: 'project' },
        ],
        layout: 'radio', // Makes it easy to toggle
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};