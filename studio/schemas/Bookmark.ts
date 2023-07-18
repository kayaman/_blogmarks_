import {defineType, defineField, defineArrayMember} from 'sanity'

const bookmark = defineType({
  name: 'bookmark',
  type: 'document',
  title: 'Bookmark',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'url',
      options: {
        isUnique: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'private',
      title: 'Private',
      type: 'boolean',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          name: 'category',
          to: [{type: 'category'}],
        }),
      ],
    }),
  ],
  initialValue: {
    private: false,
  },
})

export default bookmark
