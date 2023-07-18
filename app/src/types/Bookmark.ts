import type { Category } from './Category'

export type Bookmark = {
	_id: string
	location: string
	title: string
	categories: Category[]
	_createdAt: Date
	_updatedAt: Date
}
