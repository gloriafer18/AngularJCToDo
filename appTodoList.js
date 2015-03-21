(function(){
	//Crear el modulo todoList
	var appTodoList=angular.module('todoList',[]);

	//Agregamos un Controlador a nuestra aplicación
	//El nombre del controlador debe ir en mayuscula
	appTodoList.controller('StoreControler', function(){
		//Agregar una property que referencie a la variable creada
		//product is a property of the controller
		this.actividades=actividades;

	});
	var actividades = [
	{
		name: 'Go Monse',
		price: 2.95,
		description:'...',
		done:false,		
	},
	{
		name: 'Go lunch',
		price: 2.95,
		description:'...',
		done:false,
	}
	]
})();
