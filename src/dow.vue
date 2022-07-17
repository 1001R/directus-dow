<style scoped>
	.field, .v-button {
		padding: var(--content-padding);
		width: 20rem;
	}
	.label {
		margin-bottom: 8px;
	}

	a {
		color: cornflowerblue;
	}

	.v-table {
		margin-left: var(--content-padding);
	}
</style>

<template>
	<private-view title="DOW">
		<div class="field">
			<div class="label">
				<span class="field-name">ID</span>
			</div>
			<v-input v-model="id" full-width="false" type="number" size="7" />
		</div>
		<v-button v-on:click="search">Search</v-button>
		<div class="layout-tabular">
			<v-table 
				:headers="[
					{
						text: 'ID',
						value: 'id'
					},
					{
						text: 'Name',
						value: 'name'
					},
					{
						text: 'Source',
						value: 'source'
					}
				]"
				:items="results"
			>
				<template #[`item.source`]="{ item }">
					<a :href="item.href">{{item.source}}</a>
				</template>
			</v-table>
		</div>
	</private-view>
</template>

<script>

function searchById(collection, id, nameAttr) {
	return this.api
		.get(`/items/${collection}?filter[id][_eq]=${id}`)
		.then(r => r.data.data.map(item => ({
			id: item.id, 
			name: item[nameAttr], 
			source: collection,
			href: `/admin/content/${collection}/${item.key}`
		})))
}

export default {
	data() {
		return {
			id: 1,
			results: []
		};
	},
	methods: {
		search: function () {
			const results = [
				searchById.call(this, 'amtsblat', this.id, 'name'),
				searchById.call(this, 'kur', this.id, 'familienname')
			]
			Promise.all(results).then(res => {
				this.results = res.reduce((prev, curr) => prev.concat(curr), [])
			})
		},
	},
	inject: ['api'],
	mounted() {

	},
};
</script>