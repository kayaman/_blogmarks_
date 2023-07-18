import { error } from '@sveltejs/kit'
import { getBookmarksByCategory } from '../../../data/repositories/bookmarks'

export const load = async ({ params }) => {
	try {
		const bookmarks = await getBookmarksByCategory(params.name)

		return {
			bookmarks,
		}
	} catch (e) {
		throw error(404, `Category not found ${params.name}`)
	}
}
