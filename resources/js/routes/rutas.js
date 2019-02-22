import  Inicio from '../views/Inicio';
import  Contacto from '../views/Contacto'
import  Users from '../views/Users'

export default  [
	/* Rutas de Venta venta */
	{ 
		path: '/', 
		name: 'inicio',
		component: Inicio ,
	},
	{ 
		path: '/contacto', 
		name: 'contacto',
		component: Contacto ,
	},
	{ 
		path: '/users', 
		name: 'users',
		component: Users ,
	},




];
