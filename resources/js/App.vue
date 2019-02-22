<template>

	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">

			<b-link 
					:to="{ name: 'inicio', params: {  } }" 
					class="navbar-brand">Sistema Gestión</b-link>
			<b-navbar-toggle target="nav_collapse" />

			<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				
				<li class="nav-item"> <b-link 
					:to="{ name: 'contacto', params: {  } }" 
					class="nav-link">Contacto</b-link></li>
				<li class="nav-item"> <b-link 
					:to="{ name: 'users', params: {  } }" 
					class="nav-link">Usuarios</b-link></li>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
			
				<b-nav-item-dropdown right>
					<!-- Using button-content slot -->
					<template slot="button-content"><em>Deibis Joel</em></template>
					<b-dropdown-item href="#">Mi Perfil</b-dropdown-item>
					<b-dropdown-item href="#">Salir</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<main>
			<div class="container">
				<div class="row">
					<div class="col-md-12 ">
						<transition name="fade" mode="out-in">
							<router-view 	></router-view>
						</transition>
					</div>
				</div>
			</div>
		</main>
	</div>

</template>
<script>
export default {
	name: 'App',

	data(){
		return {
		
		}
	},
	methods : {

	}
}

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.fade-enter-active {
  transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

body {
    margin: 0;
    font-family: "Nunito" !important;

}
</style>
