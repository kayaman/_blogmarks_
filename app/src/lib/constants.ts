import { dev } from '$app/environment';

export const SANITY_PROJECT_ID = dev
	? process.env.BLOGMARKS_SANITY_PROJECT_ID
	: process.env.SANITY_PROJECT_ID;
export const SANITY_DATASET = dev ? 'production' : 'production'; // must be 'development' or 'production'
