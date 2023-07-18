import sanityClient from '$lib/sanity/client';
import groq from 'groq';

export const getBookmarks = async () => {
	const bookmarks = await sanityClient.fetch(groq`
		*[_type == "bookmark"]
		  {_id, location, title, private, categories[]->{name}}
	`);
	return bookmarks;
};
