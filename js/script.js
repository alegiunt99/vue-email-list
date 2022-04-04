console.log('OK js!')

/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue({

    el: '#app',

    data: {

        // creo un array vuoto che mi servira per stampare le email a schermo
        emailList: [],

        // creo un parametro della mail generata
        emailGen: '',

    },

    mounted() {

        //creo un ciclo per generare 10 email
        for (let i = 0; i < 10; i++){

            // allego il link al sito di boolean per generare email
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                // prendo l'oggetto che arriva come risposta
                const email = response.data; 
                
                // se l'email è true, stampo il suo valore
                this.emailGen = email.success ? email.response : '';
                console.log(this.emailGen)

               //ogni email generata l'aggiungo all'array vuoto
                this.emailList.push(this.emailGen); 
                
            })
        
            
        }

        

        
                
        
        
    }
    
})


