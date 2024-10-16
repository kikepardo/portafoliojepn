const projects=
[
    {
        idproject:1,
        imgProject:'img/warehouse.jpg',
        titleProject:'Warehouse management software',
        descriptionProject:'Software especializado en control de inventarios de multiples bodegas, para tener información veridica en tiempo relacionados',
        linkProject:'https://www.interdynamics.com/'  
    },
    {
        idproject:2,
        imgProject:'img/laundry.jpg',
        titleProject:'industrial laundry production software',
        descriptionProject:'Software especializado en control de produccion de lavanderias industriales, desarrollo de muestras, control de PQ ',
        linkProject:'https://www.defontana.com/' 
    },
    {
        idproject:3,
        imgProject:'img/confeccion.jpg',
        titleProject:'Garment manufacturing software',
        descriptionProject:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum natus cum aliquam saepe, voluptatum facere a ',
        linkProject:'https://loggro.com/' 
    }
]   
const experience=
[
    {
        idlang:1,
        langname:"HTML5",
        percentprog:90 ,
        imglang:'img/html.png'
    }, 
    {
        idlang:2,
        langname:"CSS3",
        percentprog:75,
        imglang: "img/css.png"
    } ,
    {
        idlang:3,
        langname:"JavaScript" ,
        percentprog: 55,
        imglang: "img/JavaScript_logo_PNG_(13).png"
    } ,
    {
        idlang:4,
        langname:"NodeJs" ,
        percentprog: 45,
        imglang: "img/node1.png"
    } ,
    {
        idlang:5,
        langname: "React",
        percentprog:45,
        imglang: "img/React-icon.svg.png"
    } ,
    {
        idlang:6,
        langname: "PostgreSQL",
        percentprog:75,
        imglang: "img/postgresql-plain-wordmark.256x254.png"
    } 
]
const linkWithHash =document.querySelectorAll('a[href^="#"]');
linkWithHash.forEach(link=>{
    link.addEventListener('click', function(event){
        event.preventDefault();
        const targetId= this.getAttribute('href').substring(1);
        const targetElement=document.getElementById(targetId);
        if (targetElement) {
            // Mueve el scroll hasta el elemento destino
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Crea un nuevo elemento para el mensaje
            const message = document.createElement('div');
            message.textContent = `Scroll ejecutado hacia: ${targetId}`;
            message.style.position = 'fixed';
            message.style.bottom = '50px';
            message.style.left = '10px';
            message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.color = 'white';
            message.style.padding = '10px';
            message.style.borderRadius = '5px';

            // Añade el mensaje al cuerpo del documento
            document.body.appendChild(message);

            // Elimina el mensaje después de 3 segundos
            setTimeout(() => {
                document.body.removeChild(message);
            }, 3000);
        }
    })
})
function CreateCardsProjects(project)
{
    /*alert('iniciando funcion')*/
    const cardProyect = document.createElement('div');
    cardProyect.classList.add('columna','columna-33','columna-mobile-100');
        
    const bloqueservicio=document.createElement('div');
        bloqueservicio.classList.add('bloque-servicio');

            const cuadradoPerfecto=document.createElement('div');
                cuadradoPerfecto.classList.add('bloque-img-servicio','cuadrado-perfecto');

                const imgcard=document.createElement('img');
                imgcard.src=project.imgProject;
                imgcard.alt=project.titleProject;
                imgcard.classList.add('zoom');

        const bloqueContenido=document.createElement('div');
        bloqueContenido.classList.add('bloque-contenido-servicio');
    
            const titleCard=document.createElement('h3');
            titleCard.textContent=project.titleProject;

            const descriptionCard=document.createElement('p');
            descriptionCard.textContent=project.descriptionProject;

            const linkproject=document.createElement('a');
            linkproject.classList.add('boton','boton-blanco');
            linkproject.href=project.linkProject;
            linkproject.setAttribute('target' , '_blank');
            linkproject.textContent=('ver más')
           
            cardProyect.appendChild(bloqueservicio);
            
            bloqueservicio.appendChild(cuadradoPerfecto);
                cuadradoPerfecto.appendChild(imgcard);
            
            cardProyect.appendChild(bloqueContenido);
                bloqueContenido.appendChild(titleCard);
                bloqueContenido.appendChild(descriptionCard);
                bloqueContenido.appendChild(linkproject);

    document.querySelector('.row').appendChild(cardProyect);
}
function loadSectionProjects()
{
    projects.forEach(project=>CreateCardsProjects(project));
    /*alert('final de funcion loadsectionprojects');  */
}
loadSectionProjects();