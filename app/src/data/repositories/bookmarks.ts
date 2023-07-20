import sanityClient from '$lib/sanity/client'
import groq from 'groq'
import type { Bookmark, Category } from '../../types'

export const search = async (term: string): Promise<Bookmark[]> => {
	try {
		return await sanityClient.fetch(groq`
			*[_type == 'bookmark' 
    		&& 
      		link match "*" + $searchParam + "*"
    		||
      		title match "*" + $searchParam + "*"
    		|| 
      		$searchParam in categories[]->name
			]{_id, _createdAt, title, link, 'categories': categories[]->{_id, name}} 
			|order(_createdAt desc) 
	`)
	} catch (e) {
		throw new Error(`Something went wrong searching for "${term}"`)
	}
}

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

export const getCategoryBookmarks = async (name: string): Promise<Bookmark[]> => {
	try {
		const categoryBookmarks = await sanityClient.fetch(
			groq`
				*[_type == "category" && name == $name]
					{_id, name, 'bookmarks': *[_type == 'bookmark' && references(^._id)]
						{_id, _createdAt, location, title, 'categories': categories[]->{_id, name}}
					}
				| order(_createdAt desc) 
			`,
			{ name: name },
		)
		return categoryBookmarks[0]['bookmarks']
	} catch (e) {
		throw new Error(`Something went wrong fetching bookmarks for category "${name}"`)
	}
}
