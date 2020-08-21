<template>
  <section id="services-wrap" class="services-wrap light-gray">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">Nuestros Servicios</h2>
          <p>
            Somos una empresa nueva compuesta de profesionales jovenes, altamente capacitados en las Ciencias del Mar y contamos con una amplia experiencia en la utilización de instrumentos científicos (tanto en laboratorio como en terreno) y en el análisis de datos.
          </p>
        </b-col>

        <div
          class="service-wrap col-md-6 mb-4 col-lg-3 col-sm-12"
          v-for="(service, key) in services"
          :key="key"
          :class="[
            key == 4 || key == 5 || key == 6 || key == 7 ? 'mb-lg-0' : ''
          ]"
        >
          <b-card no-body class="o-hidden ">
            <div class="card-header p-0 text-center ">
              <img class="img-responsive" :src="service.serviceImage" />
            </div>
            <b-card-body>
              <h3 class="card-title text-capitalize font-weight-bold  ">
                {{ service.serviceName }}
              </h3>
              <p class="card-text">{{ service.serviceText }}</p>
            </b-card-body>
            <b-card-footer class=" pl-3">
              <a href="#" class="btn btn-lg p-1 mr-1 text-dark">
                Ver más..
              </a>
            </b-card-footer>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          serviceImage: "http://southerntech.cl/images/RBR-white-1.png",
          serviceName: "RBR",
          serviceText:
            ""
        },
        {
          serviceImage: "https://rocklandscientific.com/wp-content/uploads/2015/08/RSI-logo-horiz.png",
          serviceName: "Rockland Scientific",
          serviceText:
            ""
        },
        {
          serviceImage: "http://southerntech.cl/images/SS_Banner_Blue2.jpg",
          serviceName: "Sunburst Sensors",
          serviceText:
            ""
        }
      ]
    };
  }
};
</script>

