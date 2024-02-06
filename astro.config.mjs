import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { custom } from 'zod';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nk Nagar',
			customCss: ['./src/content/custom-styles/custom.css'],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Pages',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
