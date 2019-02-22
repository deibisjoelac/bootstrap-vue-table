<template>
	<b-container fluid>
		<!-- User Interface controls -->
		
		<b-row class="my-4">
			<b-col md="5" class="my-1">
				<b-form-group label-cols-sm="3" label="Búsqueda" class="mb-0">
				<b-input-group>
					<b-form-input v-model="filter" placeholder="¿Qué desea búscar?" />
					<b-input-group-append>
						<b-button variant="warning" :disabled="!filter" @click="filter = ''"
							class="text-white">Limpiar</b-button>
					</b-input-group-append>
				</b-input-group>
				</b-form-group>
			</b-col>

			<b-col md="5" class="my-1">
				<b-form-group label-cols-sm="5" label="Registros por Página" class="mb-0">
					<b-form-select :options="pageOptions" v-model="perPage" />
				</b-form-group>
			</b-col>
		</b-row>

		<!-- Main table element -->
	
		<transition name="table" mode="out-in">
			
			<b-table v-if="!loading"
				stacked="sm"
				show-empty
				:hover="true"
				:fields="fields"
				:current-page="currentPage"
				:per-page="perPage"
				:filter="filter"
				:sort-by.sync="sortBy"
				:sort-direction="sortDirection"
				:empty-text="emptyText"
				:empty-filtered-text="emptyFilterText"
				:busy.sync="isBusy"
				:items="myProvider"
				:no-provider-sorting="false"
				@sort-changed="sortingChanged"
				>

				<template slot="actions" slot-scope="row">
					<b-button size="sm"  variant="outline-primary"  
						@click="editItem(row.item, row.index, $event.target)" 
						class="mr-1">
						Editar
					</b-button>
				
					<b-button size="sm" variant="outline-danger" 
						@click="deleteItem(row.item, row.index, $event.target)">
						Eliminar
					</b-button>
				</template>
			</b-table>
		</transition >
		<b-row >
			<b-col md="6" class="my-2 mx-auto">
				<b-pagination align="center"	
				:total-rows="totalRows"
				:prev-text="'Anterior'"
				:next-text="'Siguiente'"
				:first-text="'Primera'"
				:last-text="'última'"
				:per-page="perPage"
				:limit="1"
				v-model="currentPage"
				class="my-0"
				/>
			</b-col>
		</b-row>
	
		
  </b-container>
</template>

<script>
  
  export default {
	props : [
		'headers',
		'apiurl',

	],
   	data() {
		return {
			loading: true,
			isBusy: false,
			fields: this.headers,
			currentPage: 1,
			perPage: 5,
			totalRows: 0,
			pageOptions: [
				{ value: 5, text: '5' },
				{ value: 10, text: '10' },
				{ value: 25, text: '25' },
				{ value: 50, text: '50' },
				{ value: 100, text: '100' },
				{ value: -1, text: 'Todos' },
			],
			sortBy: 'id',
			sortDirection: 'asc',
			sortDesc : false,
			filter: '',
			emptyText : 'No Hay Registros para mostrar , Intente Nuevamente',
			emptyFilterText : 'No hay registros que coincidan con su solicitud'
		}
	},
	created(){
		this.myProvider(null);
	},
    methods: {
		myProvider(ctx){
			let promise = axios.get(`${this.apiurl}?page=${this.currentPage ? this.currentPage : 1}
				&per_page=${this.perPage}
				&sortBy=${this.sortBy}&order=${this.sortDesc ? 'DESC' : 'ASC' }
				&search=${this.filter ? this.filter : ''}`);
			return promise.then((response) => {
					const items =response.data.data;
					this.totalRows = response.data.total;
					this.loading = false;
					return(items)
				}).catch(error => {
					return []
				})
		},
		sortingChanged (ctx) {
			this.sortDesc  = ! this.sortDesc ;
		},
		editItem(item, index, button) {
			let registro = JSON.stringify(item, null, 2);
			this.$emit('editItem',registro,index);
		},
		deleteItem(item, index, button) {
			let registro = JSON.stringify(item, null, 2);
			this.$emit('deleteItem',registro,index);
		}
	},
	watch: {
		perPage(){
			if(this.perPage < this.totalRows){
				this.currentPage = 1;
			}
		},
		filter(){
			if(this.perPage < this.totalRows){
				this.currentPage = 1;
			}
		}

	}
  }
</script>
<style scoped>
.table-enter-active,
.table-leave-active {
  transition: opacity 1s
}

.table-enter,
.table-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
</style>