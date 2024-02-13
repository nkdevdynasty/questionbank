import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { custom } from 'zod';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: ['./src/content/custom-styles/custom.css'],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Honours',
					autogenerate:{ directory: 'honours'},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Computer Science',
						    items: [
								{ label: 'core-1',
								    items: [
										{ label: '2023', link:'/honours/computer science/core-1/2023'}
									]
							      }
							] 
					      },
					],
				},
			],
		}),
	],
});
