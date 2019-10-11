import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 12,
        apontamentos: []
    },
    mutations:{
        /*
       listarTarefas: state =>{
           state.tarefas =  [
            {
                "titulo": "Testes",
                "concluido": false,
                "status": 1,
                "curso": "Vue JS",
                "id": 7
              }
            ]
       }
       */
       listarApontamentos: (state, payload)=>{
        state.apontamentos = payload
        /*state.tarefas =  [
            {
                "titulo": "Título 1",
                "concluido": false,
                "status": 0,
                "curso": "Curso 1",
                "id": 1
              }
            ]*/
        }
        
        
    },
    getters:{


        getApontamentos: (state)=>{
            return state.apontamentos.filter()
        },
        //getApontamentos: state.apontamentos,
       
        //sintaxe alternativa para um parâmetro
        //tarefasConcluidas: state=>state.tarefas.filter(t => t.concluido)
        
    }
})