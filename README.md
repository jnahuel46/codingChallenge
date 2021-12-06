HOLA! Antes que anda me gustaria pedir disculpas por la demora en la entrega,
debo decir que me costo muchisimo construir esta REST API, y aunque no pude cumplir con todos los requisitos,
logre la gran mayoria de ellos y me siento muy orgulloso se las cosas que fui aprendiendo en el camino! con muchas horas de sueño invertidas! lamentablemente me faltaba practica. 
Me costo mucho lograr desarrollar la API y conectarla a la base de datos para lograr el manejo de los mismos, 
pero utilizando MONGO DB ATLAS, pude lograrlo.
REST API desarrollada en NODE JS,
Y el FRONT-END desarrollado en REACT-JS
FRAMEWORK usado= express, 
BASE DE DATOS= MONGO DB ATLAS, 
a su vez use modulos de = nodemon, mongoose, webpack, babel
Librerias use la de css MATERIALIZE,

Basicamente cree una REST API en donde se pueden realizar todas las opreaciones CRUD
cumpliendo con la mayoria de los requisitos del Challenge.

Los endpoints utilizados nos permiten realizar todas las operaciones CRUD, 
CREATE: metodo post al presionar el boton send,
READ: metodo get, al entrar o refrescar la api me trae todos lso elementos guardados,
UPDATED: metodo put, cuando damos en el boton editar, se renderiza el form de acuerdo al id del 
elemento seleccionado y podemos editar cada producto en particular,
DELETED: metodo delete, al dar click en el icono de borrar, nos pregunta si estamos seguros de borrar y
luego se realiza la accion,
Lo que no pude lograr (por falta de tiempo) es lograr filtrar por id de cada producto, 
lograr que se pueda ver en un modal mas informacion sobre el producto y la imagen, y lamentablemente niguno de los extras.

EL REPOSITORIO DE GIT-HUB ES ESTE : https://github.com/jnahuel46/codingChallenge.git

LA API FUE DEPLOYADA EN HEROKU, EN EL SIGUIENTE LINK PUEDEN VERLA : https://coding-challenge-jeremias.herokuapp.com/

En caso de querer desplegarla en entorno local y querer cambiar algo, pueden usar el puerto 3000 en http://localhost:3000/

Para finalizar, en caso de tener mas tiempo, me gustaria poder solucionar los dos puntos que me quedaron pendientes,
generando una funcion para cada uno, una que filtre por id en caso de la primera y el de ver mas detalles con un boton SEE MORE.

Muchas Gracias por esta oportunidad!