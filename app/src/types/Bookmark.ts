import type Category from './Category'

type Bookmark = {
	_id: string
	link: string
	title: string
	categories: Category[]
	_createdAt: Date
	_updatedAt: Date
}

export default Bookmark
