import DowComponent from './dow.vue';

export default {
	id: 'custom',
	name: 'Custom',
	icon: 'box',
	routes: [
		{
			path: '',
			component: DowComponent,
		},
	],
};
