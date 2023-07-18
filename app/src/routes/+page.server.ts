import { getBookmarks } from '../data/repositories/bookmarks'

export const load = async () => {
	const bookmarks = await getBookmarks()

	return {
		bookmarks,
	}
}
