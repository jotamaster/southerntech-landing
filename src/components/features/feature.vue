<template>
     <section id="features-wrap" class="features_wrap p-t-b-80">
                <b-container>
                    <b-row>
                        <b-col md="12" class="section-header mb-5">
                            <h2 class="font-weight-bold">ACERCA DE NOSOTROS</h2>
                            <p>
                                Somos una empresa nueva compuesta de profesionales jovenes, altamente capacitados en las Ciencias del Mar y contamos con una amplia experiencia en la utilización de instrumentos científicos (tanto en laboratorio como en terreno) y en el análisis de datos.
                            </p>

                        </b-col>


                        <b-col md="6" lg="6" sm="12" class="mb-4 mb-lg-0">
                            <b-row>
                                <b-col md="6" lg="4" sm="6" class=" mb-4" v-for="(feature, key) in features" :key='key'>
                                    <b-card class=" text-center">
                                        <i class="eva text-30" v-bind:class=feature.icon ></i>
                                        <h4 class="card-title pt-2 text-16">{{feature.name}}</h4>
                                    </b-card>
                                </b-col>
                            </b-row>
                        </b-col>
                        
                        <!-- end of col-6 -->
                        <b-col md="6" lg="5" sm="12" class="offset-lg-1 d-flex align-items-center">

                            <img src="http://southerntech.cl/images/bg/sensor.jpg" class="img-responsive w-100" alt="">

                        </b-col>

                    </b-row>
                </b-container>
            </section>
</template>
<script>
export default {
    data(){
        return{
            
            
            features:[
                {
                  name:'Caracterización Oceanográfica',
                  icon:'eva-globe-2-outline'

                },
                {
                    name:'Desarrollo de proyectos',
                    icon:'eva-file-text-outline'
                },
                {
                    name:'Análisis de datos y series de tiempo',
                    icon:'eva-trending-up-outline'
                },
                {
                    name:'Asesorías Científicas-tecnológicas.',
                    icon:'eva-people-outline'
                }
               

            ]
        }
    }
}
</script>

