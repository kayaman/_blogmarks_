import { error } from '@sveltejs/kit'
import { getCategories } from '../../data/repositories/bookmarks'

export const load = async () => {
	try {
		const categories = await getCategories()

		return {
			categories,
		}
	} catch (e) {
		throw error(404, `Something went wrong`)
	}
}
