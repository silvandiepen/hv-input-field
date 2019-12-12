import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'hv-input-field',
	plugins: [
		sass({
			injectGlobalPaths: [
				'node_modules/hv-color/hv/transavia.scss',
				'node_modules/hv-style/src/scss/index.scss'
			]
		})
	],
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www',
			serviceWorker: null // disable service workers
		}
	]
};
