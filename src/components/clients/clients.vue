<template>
  <section id="services-wrap" class="services-wrap light-gray">
    <b-container>
      <b-row>
        <b-col md="12" class="section-header mb-5">
          <h2 class="font-weight-bold">Cliente</h2>
          <p>
          </p>
        </b-col>

        <div
          class="service-wrap col-md-6 mb-4 col-lg-2 col-sm-12"
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
          serviceImage: "https://www.uach.cl/uach/_imag/logo.jpg",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        },
        {
          serviceImage: "https://lh3.googleusercontent.com/proxy/0GI8MPLNmMcCB3L4bcysKM5B-Xy4Xp3gqwCz4LJQgum1hqD3zDvosFc7kXzHQ_czy2yYsPYQTOmp1zZDvVZZA260wVpcb9doXLp8EA",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        },
        {
          serviceImage: "https://preuniversitariopreutech.cl/wp-content/uploads/2016/12/Universidad-de-los-Lagos.png",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        },
        {
          serviceImage: "https://pbs.twimg.com/profile_images/3638587011/a3f30c410aadc07ebfcef055cefa7d27_400x400.png",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        },
        {
          serviceImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg/1200px-Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg.png",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        },
        {
          serviceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfW-mVUVl7hQ3L7Bvjazgi4yacFFEAO89Cx2gzosIJvBRQSsc&s",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        },
        {
          serviceImage: "https://www.ifop.cl/wp-content/uploads/2017/09/logo_ifop_sitio.jpg",
          serviceName: "Universidad Austral de Chile",
          serviceText:
            ""
        }
      ]
    };
  }
};
</script>
<style  scoped>
.services-wrap .service-wrap .card .card-header{
    height: unset;
}
.services-wrap .service-wrap .card .card-header img {
    height: 100%;
    width: 100%;
    max-width: 160px;
    max-height: 196px;
    object-fit: unset;
}
.card{
    background: unset;
    border: unset;
    box-shadow: unset;
}
</style>

