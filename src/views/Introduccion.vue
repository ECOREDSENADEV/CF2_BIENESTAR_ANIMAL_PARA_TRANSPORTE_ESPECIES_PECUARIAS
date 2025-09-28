<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") El bienestar animal en el transporte es hoy un aspecto central de la producción pecuaria moderna. La movilización de bovinos, porcinos, aves, equinos, ovinos y caprinos no solo implica un reto logístico, sino también una responsabilidad ética y legal que influye directamente en la productividad, la inocuidad y la sostenibilidad del sector agropecuario.
        
            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    p.mb-0(data-aos="fade-up") En la práctica, garantizar condiciones de transporte adecuadas demanda planificación previa, vehículos en óptimo estado, personal capacitado y el cumplimiento de normas nacionales e internacionales. Estas acciones permiten reducir el sufrimiento de los animales, prevenir pérdidas en la cadena productiva y fortalecer la confianza del consumidor frente a la calidad de los productos de origen pecuario.
        
        .bg-full-width.bg-color-2
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este componente formativo busca que los aprendices reconozcan la importancia de aplicar buenas prácticas durante el transporte, comprendan las diferencias entre especies y asuman un compromiso con el bienestar animal. El curso integra conceptos técnicos, normativos y casos de aplicación que contribuyen a una movilización segura, humanitaria y ajustada a los principios de sostenibilidad y bioseguridad.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
