import {defineType, defineField} from 'sanity'

const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category',
    }),
  ],
})

export default category
