<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manejo de la especie en el transporte
    
    .bg-full-width.bg-color-4-2
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El manejo adecuado de los animales durante su transporte es esencial para garantizar su bienestar, reducir el estrés y evitar pérdidas productivas. Este proceso abarca desde la preparación previa al viaje hasta la recepción final, y requiere planificación, infraestructura adecuada y personal capacitado.
        
            .bg-color-8.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p En Colombia, este manejo está regulado principalmente por la Resolución ICA 136 de 2020, la Ley 1774 de 2016, que reconoce a los animales como seres sintientes, y los lineamientos internacionales de la WOAH (2023).
                  p.mb-0 El manejo de la especie en el transporte se refiere al conjunto de prácticas técnicas, logísticas y de bienestar orientadas a garantizar que los animales sean trasladados de un lugar a otro de forma segura, ética y eficiente, reduciendo al mínimo el estrés, las lesiones y las pérdidas productivas.

        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.tarjeta.p-4(data-aos="fade-left").mb-3
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema3/4.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    p Esta práctica implica cumplir normas claras sobre:
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Condiciones del vehículo.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Densidad de carga.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Alimentación e hidratación.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Tiempos máximos de viaje.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Criterios de carga y descarga.

            p(data-aos="fade-left") Un manejo correcto no solo protege la salud del animal, sino que asegura la calidad de la carne, leche, huevos y derivados, evitando pérdidas económicas y sanciones legales.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Fases del manejo en el transporte
        
        p.mb-5 El transporte de animales se desarrolla en cinco fases clave, cada una con riesgos particulares y medidas que deben aplicarse para garantizar la seguridad del animal y el cumplimiento normativo.
    
    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Preparación previa al viaje
              p Revisar la condición sanitaria: solo transportar animales sanos y sin lesiones. Emitir y portar la Guía Sanitaria de Movilización Interna (GSMI) del ICA. Planificar ruta, duración y puntos de descanso. Acondicionar el vehículo con limpieza, desinfección, piso antideslizante y ventilación funcional.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Carga o embarque
              p Usar corrales y rampas con pendiente menor a 20°. Evitar gritos, golpes o picanas eléctricas. Cumplir con la densidad máxima por especie. Separar animales por categorías: adultos, jóvenes, gestantes y machos enteros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Transporte o tránsito
              p Mantener condiciones de confort térmico. Conducir sin maniobras bruscas. En viajes mayores a 8 horas, programar paradas para agua y alimento. Vigilar comportamiento para detectar signos de estrés o enfermedad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Descarga o desembarque
              p Utilizar rampas seguras y antideslizantes, sin ángulos pronunciados. Evitar cambios bruscos de luz o ruido. Permitir que los animales bajen con calma. Verificar lesiones visibles o signos de fatiga.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Recepción y recuperación
              p Proporcionar agua limpia y alimento fresco de inmediato. Permitir descanso en corrales amplios, limpios y ventilados. Realizar inspección sanitaria tras el transporte. Registrar información sobre tiempo de viaje, densidad, condiciones y hallazgos sanitarios.

    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8
        p El manejo de los animales durante el transporte debe entenderse como un proceso integral y regulado, en el que cada fase tiene implicaciones directas sobre la salud, la productividad y el bienestar de las especies pecuarias. 
        .bg-color-2.tarjeta.p-4(data-aos="fade-left").mb-5
          .bg-color-white.tarjeta.p-5
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.order-2
                img(src="@/assets/curso/tema3/11.svg", style="max-width: 240px").mx-auto
              .col-lg.order-1.mb-3.mb-lg-0
                p El éxito en la movilización animal requiere:
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Planificación previa.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Infraestructura segura.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Personal capacitado.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Cumplimiento de la normativa nacional (ICA, Ley 1774) e internacional (WOAH, IATA).

        p(data-aos="fade-left") Un manejo deficiente no solo representa un riesgo para los animales, sino también para la legalidad, la reputación y la rentabilidad del sistema productivo.

</template>

<script>
export default {
  name: 'Tema3',
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
