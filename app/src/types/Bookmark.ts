import Tag from './Category';

type Bookmark = {
	_id: string;
	link: string;
	title: string;
	tags: Tag[];
	_createdAt: Date;
	_updatedAt: Date;
};

export default Bookmark;
