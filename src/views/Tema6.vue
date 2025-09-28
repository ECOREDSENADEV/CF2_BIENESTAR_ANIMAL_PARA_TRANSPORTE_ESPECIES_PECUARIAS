<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Casos prácticos
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema6/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El estudio de casos reales o simulados representa una herramienta clave para fortalecer el bienestar animal durante el transporte. Analizar situaciones críticas, identificar errores y aplicar soluciones oportunas permite implementar mejoras continuas y garantizar el cumplimiento de la normativa nacional (Resolución ICA 136 de 2020, Ley 1774 de 2016) e internacional (OMSA/WOAH, Capítulo 7.3). Este enfoque práctico contribuye a reducir pérdidas económicas, prevenir impactos sanitarios y fortalecer una ganadería responsable y sostenible.
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Análisis de casos
    
    p.mb-5 El análisis estructurado de un evento ocurrido antes, durante o después del transporte debe partir de una recolección objetiva de datos, documentada en formatos oficiales y acompañada por la participación de los actores involucrados: transportistas, veterinarios, operarios y propietarios. Los elementos clave para el análisis de casos son:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="a").colr
          .div(titulo="Situación inicial")
            p Especie transportada, número de animales, peso promedio y edad. Condiciones del vehículo: ventilación, densidad y diseño de rampas. Ruta planificada, duración estimada y condiciones climáticas.
    
          .div(titulo="Incidencia ocurrida")
            p Lesiones físicas (fracturas, heridas). Mortalidad durante el trayecto. Episodios de estrés térmico. Agresiones entre animales. Accidentes viales o fallas mecánicas.
    
          .div(titulo="Causas probables")
            p Sobrecarga o densidad inadecuada. Falta de ventilación. Ruta mal planificada o sin paradas. Personal no capacitado o manejo brusco. Incumplimiento normativo.
    
          .div(titulo="Impactos identificados")
            p Bienestar animal: dolor, sufrimiento, fatiga o muerte. Económicos: decomisos, pérdidas productivas y sanciones. Legales: infracción de normas del ICA y de la Ley 1774. Sanitarios: transmisión de enfermedades y deterioro de la calidad de carne, leche o huevos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ejemplo práctico:
      
    
    .bg-full-width.bg-fondo-4
      .px-4.px-md-5
        .bg-color-3.tarjeta.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/3.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Un lote de bovinos presentó mortalidad por golpe de calor en un viaje diurno en clima cálido. Se evidenció falta de ventilación, ausencia de paradas para hidratación y exceso de animales por m².
        
        separador
        
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.2 Toma de decisiones
        
        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/4.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-5 La toma de decisiones durante el transporte debe enfocarse en resolver de forma inmediata los eventos críticos que afectan el bienestar animal. Estas decisiones deben estar alineadas con los protocolos establecidos y respaldadas por la normativa vigente.
            .bg-color-1.tarjeta.p-4(data-aos="fade-left").mb-5
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema6/5.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    p Ejemplos de decisiones correctivas en ruta:
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Redistribución de animales</b>: cuando se detecta hacinamiento o caídas.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Paradas adicionales:</b> hidratación, alimentación o descanso en trayectos prolongados.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Cambio de ruta:</b> evitar zonas con clima extremo o alto tránsito.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Atención veterinaria:</b> intervención inmediata en casos de enfermedad o lesiones.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Sacrificio compasivo:</b> ante lesiones irreversibles o sufrimiento extremo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Consideración clave
    
    p.p-3.bg-color-7.mb-0.tarjeta Todas las decisiones deben estar registradas en el diario de ruta y estar fundamentadas en protocolos oficiales (ICA, OMSA/WOAH).

    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Mejora continua
    
    p.mb-5 La mejora continua es un componente esencial en la gestión del transporte pecuario. Implica aprender de los errores, institucionalizar buenas prácticas y adoptar tecnologías que optimicen la movilización de animales. Las estrategias para implementar mejora continua son:

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema6/6.png")
            .col-lg-7
              h5 Evaluación post-transporte
              p Aplicar listas de chequeo. Analizar registros de mortalidad, lesiones y temperatura ambiental.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema6/7.png")
            .col-lg-7
              h5 Retroalimentación colaborativa
              p Realizar reuniones periódicas con conductores, veterinarios y operarios. Identificar oportunidades de mejora en equipo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema6/8.png")
            .col-lg-7
              h5 Capacitación permanente
              p Brindar formación en bienestar animal, bioseguridad, lectura de signos clínicos y normatividad internacional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema6/9.png")
            .col-lg-7
              h5 Adopción tecnológica
              p Implementar sensores de temperatura, GPS y cámaras. Usar vehículos con ventilación cruzada y pisos antideslizantes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema6/10.png")
            .col-lg-7
              h5 Análisis de tendencias e indicadores
              p Evaluar mortalidad (%), animales lesionados (%), tiempo promedio de viaje y número de incidentes por trayecto.
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5 
        p El análisis de casos, la toma de decisiones en tiempo real y la mejora continua forman un ciclo de gestión estratégica para el transporte de animales vivos. Aplicar esta metodología permite:

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema6/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-3.px-3.d-inline.bg-color-6 01
                  p.mb-0 Prevenir riesgos asociados al transporte.


          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema6/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-3.px-3.d-inline.bg-color-6 02
                  p.mb-0 Cumplir con las normas colombianas e internacionales.


          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema6/13.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-3.px-3.d-inline.bg-color-6 03
                  p.mb-0 Proteger el bienestar animal.

        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema6/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-3.px-3.d-inline.bg-color-6 04
                  p.mb-0 Reducir pérdidas económicas.


          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema6/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-3.px-3.d-inline.bg-color-6 05
                  p.mb-0 Generar confianza en los consumidores y en el mercado.



          .col-lg-4.mb-3
            img(src="@/assets/curso/tema6/16.svg").mx-auto

        p.p-4.bg-color-13.mb-0.tarjeta Promover una ganadería basada en la evidencia, el aprendizaje y la ética es fundamental para consolidar una producción pecuaria moderna, eficiente y humanitaria.
          





</template>

<script>
export default {
  name: 'Tema6',
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
