<template>
	<b-container fluid>
		<data-table-server :apiurl="apiurl" :headers="headers" 
			@editItem="editItem"
			@deleteItem="deleteItem"></data-table-server>
 	</b-container>
</template>

<script>
  
export default {
   	data: () => ({
		headers : [
			{ key: 'id', label: 'Id Usuario', sortable: true, sortDirection: 'desc' },
			{ key: 'name', label: 'Nombre', sortable: true, sortDirection: 'desc' },
			{ key: 'email', label: 'Correo Electrónico', sortable: true, class: 'text-center' },
			{ key: 'created_at', label: 'F. Creación', sortable: true, class: 'text-center' },
			{ key: 'actions', label: '', sortable: false, class: 'text-center' }
		],
		apiurl : '/api/users/'
		
	}),
    methods: {
		deleteItem(registro,index){
			alert(registro);
		},
		editItem(registro,index){
			alert(registro);
		}
	}
}
</script>
