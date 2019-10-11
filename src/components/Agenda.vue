<template>
 
<div>
 <div class="container-fluid">
  <div class="row">
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="https://getbootstrap.com/docs/4.3/examples/dashboard/#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://getbootstrap.com/docs/4.3/examples/dashboard/#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
          </li>
         
        </ul>

        
      </div>
    </nav>
 <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
     <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
   
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <div class="btn-toolbar mb-2 mb-md-0">
          <JqxScheduler ref="myScheduler"
           style="display: block; width: 1078px; height: 455px"
                :source="dataAdapter" :date="date"  
                :view="'weekView'" :appointmentsMinHeight="20" :showLegend="true"
                :appointmentDataFields="appointmentDataFields" :views="views" :exportSettings="exportSettings"  
                :ready="ready"
            />

        </div>
      </div>

      <canvas class="my-4 w-100 chartjs-render-monitor" id="myChart" width="1078" height="455" style="display: block; width: 1078px; height: 455px;"></canvas>

     
    </main>
  </div>
</div> 
<div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right"
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
    <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right"
                    @click="criarTarefaTeste">
                        <i class="fa fa-plus mr-2"></i>
                        <span>salvar</span>
                </button>
            </div>  
<div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right"
                    @click="deletarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Deletar</span>
                </button>
            </div>  


                  


    
    </div> 
   
</template>

<script>
import axios from './../axios'
import store from './../store'

    import JqxScheduler from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxscheduler.vue'

    export default {
        components: {
            JqxScheduler
        },
        data: function () {
            return {
                exportSettings: { fileName: null},
				getWidth: '90%',
                date: new jqx.date(2019, 10, 4),
                apontamentosLista: [],
                appointmentDataFields: 
                {
                    from: 'start',
                    to: 'end',
                    id: 'id',
                    description: 'about',
                    location: 'address',
                    subject: 'name',
                    style: 'style',
                    status: 'status'
                },
                views:
                [
                    'dayView',
                    'weekView',
                    'monthView'
                ],
                url: '../sampledata/appointments.txt'
            }
        },
        created() {
        axios.get(`/apontamentos`)
            .then((response) => {
                console.log('GET /apontamentos', response)
                this.tarefas = response.data
                this.$store.commit('listarApontamentos', response.data)
                return 'Axios'
            }, error => {
                console.log('Erro capturado no then: ', error)
                return Promise.reject(error)
            }).catch(error => {
                console.log('Erro capturado no catch: ', error)
                if (error.response) {
                    this.mensagemErro = `Servidor retornou um erro: ${error.message} ${error.response.statusText}`
                    console.log('Erro [resposta]: ', error.response)
                } else if (error.request) {
                    this.mensagemErro = `Erro ao tentar comunicar com o servidor: ${error.message}`
                    console.log('Erro [requisição]: ', error.request)
                } else {
                    this.mensagemErro = `Erro ao fazer requisição ao servidor: ${error.message}`
                }
                return 'Curso VueJS'
            }).then((algumParametro) => {
                console.log('Sempre executado!', algumParametro)
            })
        },
        beforeCreate: function () {
            const generateAppointments =  function () {
                const appointments = new Array();
                const appointment1 = {
                    "id": "id5",
                    "description": "Interview withrrrr James",
                    "location": "",
                    "subject": "Peter",
                    "calendar": "Room 1",
                    "start": "2019-10-04 09:00",
                    "end": "2019-10-4 15:00"
                }
//console.log("testsssssssssssssse");
//console.log(appointment1);
               // appointments.push(appointment1);
//localData:this.$store.getters.apontamentos// generateAppointments()
                //this.$store.getters.getApontamentos;
                //var teste = this.$store.state.apontamentos;
               // console.log(teste);
               // appointments.push(teste);

                //appointments.push(this.$store.getters.apontamentos);
                // $store.state.apontamentos;
              // console.log("testsssssssssssssse");
              //  console.log( $store.state.apontamentos);    
                return  appointments;
            }

             this.source =
                {
                    dataType: 'json',
                    dataFields: [
                        { name: 'id', type: 'string' },
                        { name: 'status', type: 'string' },
                        { name: 'subject', type: 'string' },
                        { name: 'about', type: 'string' },
                        { name: 'address', type: 'string' },
                        { name: 'company', type: 'string' },
                        { name: 'name', type: 'string' },
                        { name: 'style', type: 'string' },
                        { name: 'calendar', type: 'string' },
                        { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
                        { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
                    ],
                    id: 'id',
                    localData: generateAppointments(),
                    url: '../sampledata/appointments.txt'
                };
            this.dataAdapter = new jqx.dataAdapter(this.source);
        },
        mounted: function () {
            this.$refs.myScheduler.ensureAppointmentVisible('id1');

            
         },
        methods: {
                criarTarefa(apontamento) {
                    console.log(apontamento)
                    axios.post(`/apontamentos`, apontamento)
                        .then((response) => {
                            console.log('POST /apontamentos', response)
                            this.apontamentos.push(response.data)
                            this.resetar()
                        })
                },
                criarTarefaTeste(event) {

                     //var jsonObj;
                    // this.$refs.myScheduler.exportData('json');
                     
                    const value2 = this.$refs.myScheduler.getDataAppointments();
                   // const value3 = this.$refs.myScheduler.getAppointments();
                   var i;
                    for (i = 0; i < value2.length; i++) {                              
                           
                             var value22 = JSON.stringify(value2[i]);
                            // var value33 = JSON.stringify(value3[0]);
                            //console.log(value2[0]);
                            console.log(value22);
                            //debugger;
                            var teste = JSON.parse(value22);
                                axios.post(`/apontamentos`, teste)
                                    .then((response) => {
                                        console.log('POST /apontamentos', response)
                                        this.apontamentos.push(response.data)
                                        this.resetar()
                                    })        
                        }

                   
                },
                async deletarTarefa(event) {
                    const confirmar = window.confirm(`Deseja deletar a tarefa ?`)
                    if (confirmar) {
                        debugger
                        axios.delete(`/apontamentos/2630-30-26-17-22`)
                            .then(response => {
                                console.log(`DELETE /apontamentos/2630-30-26-17-22`, response)
                               // const indice = this.tarefas.findIndex(t => t.id === apontamento.id)
                               const indice = this.$store.state.apontamentos.findIndex(t => t.id === '2630-30-26-17-22')
                               this.$refs.myScheduler.deleteAppointment('2630-30-26-17-22');
                               this.$store.state.apontamentos.splice(indice, 1)
                            })
                    }
                },
                editarTarefa(apontamento) {
                    this.$store.state.apontamentos
                    console.log('Editar: ', apontamento)
                    axios.put(`/apontamentos/${apontamento.id}`, apontamento)
                        .then(response => {
                            console.log(`PUT /apontamentos/${apontamento.id}`, response)
                            const indice = this.apontamentos.findIndex(t => t.id === apontamento.id)
                            this.apontamentos.splice(indice, 1, apontamento)
                            this.resetar()
                        })
                },
         exibirFormularioCriarTarefa(event) {   
              var myJSON = JSON.stringify(this.$store.state.apontamentos)          
              var obj = JSON.parse(myJSON);
              console.log(obj[0]);           
              
               var  i;             
               
                for (i = 0; i < obj.length; i++) {
               // console.log(obj[i]);
                const appointment1 =(obj[i]); 
                this.$refs.myScheduler.addAppointment(appointment1);
                //this.$refs.myScheduler.addAppointment(obj[i]);
                }

            },
            deletarTodosApontmentos(event) {
                var obj = this.$store.state.apontamentos;
                var  i; 
                debugger;
                 for (i = 0; i < obj.length; i++) {
                 this.$refs.myScheduler.ensureAppointmentVisible(obj[i].id);
                 this.$refs.myScheduler.deleteAppointment( obj[i].id);
                 }
               
            }
        }
    }
</script>