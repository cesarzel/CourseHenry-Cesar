class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const id = this.activities.length + 1; // Se incrementa automáticamente, no es necesario llevar un contador separado
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }

    deleteActivity(id) {
        // Verificar si existe una actividad con el ID proporcionado
        const index = this.activities.findIndex(activity => activity.id === id);
        if (index !== -1) {
            // Eliminar la actividad si se encuentra
            this.activities.splice(index, 1);
            console.log(`Actividad con ID ${id} eliminada correctamente.`);
        } else {
            console.log(`No se encontró ninguna actividad con ID ${id}.`);
        }
    }
}

const repository = new Repository();

repository.createActivity('Ir a nadar', 
    'Me encanta nadar',
    'https://img.europapress.es/fotoweb/fotonoticia_20150807140313_1200.jpg'
);
repository.createActivity('Ir a comer', 
    'Me gusta comer pizza',
    'https://hips.hearstapps.com/hmg-prod/images/close-up-of-pizza-on-table-royalty-free-image-995467932-1559051477.jpg?resize=2048:*'
);
repository.createActivity('Ir a jugar fútbol', 
    'Es mi deporte favorito y juego los fines de semana',
    'https://saludycardiologia.com/wp-content/uploads/2021/02/shutterstock_1936196170.jpg'
);

console.log("Actividades antes de eliminar la actividad con el ID 2:");
console.log(repository.getAllActivities());

repository.deleteActivity(2);

console.log("Actividades después de eliminar la actividad con el ID 2:");
console.log(repository.getAllActivities());

//OTRA FORMA DE HACER EL DELETEACTIVITY CON EL SPLICE DIRECTAMENTE SIN ENCONTRAR EL INDICE
//deleteActivity(id) {
//const removed = this.activities.splice(id - 1, 1);
//if (removed.length > 0) {
//  console.log(`Actividad con ID ${id} eliminada correctamente.`);
//} else {
//    console.log(`No se encontró ninguna actividad con ID ${id}.`);
//  }
//}
