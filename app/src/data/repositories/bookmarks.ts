import sanityClient from '$lib/sanity/client'
import groq from 'groq'
import type { Bookmark, Category } from '../../types'

export const getBookmarks = async (): Promise<Bookmark[]> => {
	return await sanityClient.fetch(groq`
		*[_type == "bookmark"]
			{ _id, location, title, private, categories[]->{name}} 
		| order(_createdAt desc) 
	`)
}

export const getCategories = async (): Promise<Category[]> => {
	return await sanityClient.fetch(groq`
		*[_type == "category"] {_id, name } | order(name asc)
	`)
}

export const getBookmarksByCategory = async (name: string): Promise<Bookmark[]> => {
	try {
		const bookmarks = await sanityClient.fetch(
			groq`
				*[_type == "category" && name == $name]
					{_id, name, 'bookmarks': *[_type == 'bookmark' && references(^._id)]
						{_id, _createdAt, location, title, 'categories': categories[]->{_id, name}}
					}
				| order(_createdAt desc) 
			`,
			{ name: name },
		)
		return bookmarks
	} catch (e) {
		throw new Error(`Something went wrong fetching bookmarks for category "${name}"`)
	}
}
