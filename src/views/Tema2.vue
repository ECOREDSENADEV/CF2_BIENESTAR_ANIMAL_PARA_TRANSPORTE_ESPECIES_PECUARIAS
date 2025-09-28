<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tipos de transporte de animales vivos
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.bg-color-7.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El transporte de animales vivos forma parte esencial de la cadena pecuaria y debe realizarse bajo principios de bienestar animal, bioseguridad y eficiencia logística. La elección del tipo de transporte depende de diversos factores: especie, distancia, condiciones climáticas, estado fisiológico de los animales y accesibilidad geográfica. <br><br>
            p.mb-0 En Colombia se utilizan principalmente tres modalidades: terrestre, fluvial y aérea, cada una con requerimientos técnicos específicos. A continuación, se detallan sus características, responsabilidades asociadas y consideraciones por especie.

        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Transporte terrestre
        
        .bg-color-1.tarjeta.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/2.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") El transporte terrestre es el más utilizado en el país y representa la vía principal para la movilización diaria de animales hacia centros de producción, subastas, plantas de beneficio o exportación. Este tipo de transporte implica una responsabilidad compartida entre criadores, intermediarios, transportadores, cuidadores, gestores de instalaciones y autoridades sanitarias.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Responsabilidades por actor
        
        p.mb-5 Cada actor involucrado en el transporte tiene funciones específicas que deben cumplirse rigurosamente para garantizar un traslado seguro, legal y humanitario.

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Propietarios y criadores
              p Verificar el estado de salud, aptitud para el viaje, disponibilidad de personal capacitado y recursos veterinarios.Debe ser antideslizante y estar en buen estado. Evitar acumulación de estiércol o agua. Puede usarse goma ranurada, metal con relieve o cama (viruta/paja) seca y sin exceso.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Agentes comerciales o intermediarios
              p Seleccionar animales aptos para viajar y asegurar infraestructura adecuada para carga, descanso y descarga.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Operarios cuidadores o conductor
              p Manipular con respeto, registrar ruta, responder ante imprevistos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Empresas transportadoras y conductores
              p Planificar el viaje, elegir vehículos adecuados, capacitar al personal y aplicar planes de contingencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestores de instalaciones
              p Garantizar espacios adecuados, disponibilidad de alimento, agua, protección climática y zonas de limpieza.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Autoridad competente
              p Regular y fiscalizar el transporte, emitir certificados sanitarios, vigilar condiciones y coordinar con autoridades internacionales.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Transporte fluvial
    
    p.mb-5 El transporte fluvial es una alternativa común en regiones con difícil acceso terrestre, como la Amazonía, la Orinoquía y zonas ribereñas del Magdalena. Se utiliza para movilizar animales en barcazas o embarcaciones adaptadas, cumpliendo con criterios de seguridad, ventilación y protección climática.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Requisitos técnicos generales

        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Las embarcaciones deben cumplir condiciones mínimas de seguridad, ventilación y confort animal durante el trayecto.
        
            .bg-color-13.tarjeta.p-4(data-aos="fade-left")
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema2/10.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Superficie antideslizante y seca, con materiales absorbentes como aserrín, paja o viruta.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Divisiones internas para evitar amontonamiento y caídas.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Protección contra el clima mediante techos o cobertizos.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Ventilación natural sin corrientes directas que generen estrés.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Rampas con pendiente menor a 20°, sin huecos.

        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Consideraciones por especie

        p.mb-5.mt-5 Cada especie transportada por vía fluvial presenta particularidades que deben atenderse en el diseño del espacio y la operación logística.

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/11.svg', alt='Texto que describa la imagen')
              h4.text-center Bovinos y búfalos
              p.text-center Mayor espacio por tamaño. Barandas laterales resistentes (mínimo 1,5 m).

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/12.svg', alt='Texto que describa la imagen')
              h4.text-center Porcinos
              p.text-center Muy sensibles al calor. Evitar horas de alta radiación. Requiere nebulización o ventilación adicional.
        
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/13.svg', alt='Texto que describa la imagen')
              h4.text-center Aves
              p.text-center Jaulas apilables con ventilación lateral. Evitar exposición directa al sol.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/14.svg', alt='Texto que describa la imagen')
              h4.text-center Equinos, ovinos/caprinos
              p.text-center Transportar en grupos pequeños, separados por tabiques para evitar aglomeraciones y peleas.
    
    separador
    
    .bg-full-width.bg-color-4-2
      .px-4.px-md-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3 Transporte aéreo
        
        p.mb-5 El transporte aéreo se reserva para animales de alto valor genético, reproductores, caballos deportivos y aves ornamentales. También es fundamental en procesos de exportación, bajo regulaciones internacionales estrictas.

        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Normativa aplicable

        .bg-color-1.tarjeta.mb-5.mt-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/15.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La movilización aérea de animales debe cumplir con las directrices internacionales y nacionales vigentes.
                p.mb-0 Está regulado por el Live Animals Regulations (LAR) de la International Air Transport Association (IATA) y en Colombia por el ICA y la Aeronáutica Civil.
        
        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Requisitos técnicos generales
      
        p.mb-5.mt-5 Los contenedores, condiciones ambientales y manejo deben asegurar comodidad, higiene y protección para los animales.

        .row.justify-content-center
          .col-lg-10
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/16.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Contenedores específicos por especie que permitan ponerse de pie, acostarse y moverse.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Ventilación en todas las caras del guacal o caja.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Estructura resistente: madera tratada, plástico reforzado o metal.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Superficie absorbente: cama de viruta o material seco.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Etiquetado obligatorio con “<em>Live Animals</em>”, flechas de orientación y datos del remitente.
        
        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Consideraciones por especie
      
        p.mb-5.mt-5 Cada grupo animal requiere condiciones particulares durante el transporte aéreo para evitar estrés y garantizar su integridad.
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 6.
      span Requisitos específicos para el transporte aéreo de animales

    .tabla-a.color-acento-contenido.mb-5.pst
      table
        thead
          tr
            th.bg-color-6 Especie
            th.bg-color-6 Requisitos específicos en transporte aéreo
        tbody
          tr.bg-color-sintesis
            th Bovinos y búfalos
            td Generalmente se transportan terneros. Contenedores amplios y aireación reforzada.
          tr.bg-color-white
            th Porcinos
            td Extremadamente sensibles al calor. Cabina entre 16–22 °C, con baja humedad.
          tr.bg-color-sintesis
            th Aves
            td Jaulas ventiladas, densidad reducida. Pollitos de un día pueden viajar hasta 72 h sin alimento ni agua.
          tr.bg-color-white
            th Equinos
            td Contenedores individuales tipo air stall, con piso antideslizante, paredes acolchadas y acceso lateral para el operario.
          tr.bg-color-sintesis
            th Ovinos/caprinos
            td Grupos homogéneos, con espacio para echarse, separados por tabiques.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Condiciones especiales para la carga
    
    p.mb-5 A continuación, se presenta un video  que aborda las condiciones especiales para la carga y transporte de animales vivos, destacando las prácticas recomendadas y los marcos normativos que garantizan su bienestar durante el traslado.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 




</template>

<script>
export default {
  name: 'Tema2',
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
