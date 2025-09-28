<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Monitoreo
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El monitoreo del bienestar animal en el transporte es una herramienta fundamental para prevenir, detectar y corregir condiciones que puedan poner en riesgo la salud y la vida de los animales movilizados. Este proceso debe aplicarse antes, durante y después del viaje, y contemplar tanto indicadores clínicos y conductuales como la aplicación de acciones correctivas, protocolos de contingencia y verificación de competencias del personal. <br><br>
        p.mb-0 Los lineamientos internacionales (OMSA/WOAH - Cap. 7.3) y la normativa colombiana (Resolución ICA 136 de 2020 y Ley 1774 de 2016) establecen procedimientos y responsabilidades claras para asegurar el cumplimiento de estándares éticos, técnicos y sanitarios.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Procedimientos antes del viaje
    
    p.mb-5 Antes de iniciar cualquier trayecto, es necesario garantizar que los animales están en condiciones óptimas para ser transportados y que se han cumplido los requisitos logísticos, documentales y técnicos. Los aspectos clave a verificar son:

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema5/2.png")
            .col-lg-7
              h5 Evaluación clínica y sanitaria
              p Descartar animales enfermos, lesionados, débiles, recién paridos o en estado avanzado de gestación. Confirmar esquemas de vacunación, desparasitación y planes sanitarios vigentes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-7
              h5 Documentación oficial
              p Portar la Guía Sanitaria de Movilización Interna (GSMI) expedida por el ICA. Llevar certificados veterinarios de inspección. Disponer de plan de viaje y protocolo de gestión de emergencias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-7
              h5 Preparación de los animales
              p Garantizar descanso previo en corrales adecuados. Realizar adaptación previa si habrá cambios en dieta o suministro de agua durante el trayecto. Evitar alimentación justo antes de la carga (según especie).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-7
              h5 Condiciones del vehículo y equipos
              p Asegurar limpieza, desinfección, ventilación e iluminación adecuadas. Contar con pisos antideslizantes, cubiertas protectoras y divisiones internas. Usar rampas con inclinación no mayor a 20°.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-7
              h5 Selección de grupos compatibles
              p Evitar mezclar especies, animales agresivos o con diferencias marcadas de tamaño. Mantener juntos animales criados en grupo o del mismo lote.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-o
              figure
                img(src="@/assets/curso/tema5/7.png")
            .col-lg-7
              h5 Verificación de aptitud para el viaje
              p Solicitar evaluación por médico veterinario en caso de duda. Declarar la inaptitud de animales ciegos, con fracturas, recién nacidos sin cicatrización o hembras en el último 10 % de gestación.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Procedimientos durante el viaje
    
    p.mb-5 Durante la movilización, se deben realizar controles sistemáticos que permitan detectar y atender problemas de forma inmediata. Los componentes esenciales del monitoreo en tránsito son:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.align-items-start.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/8.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-lg-1
        
            AcordionA(tipo="a").colr
              .div(titulo="Indicadores clínicos y conductuales")
                p Vigilar síntomas como jadeo, salivación, sudoración, heridas, vocalizaciones, agresividad, apatía o intentos de tumbarse.
        
              .div(titulo="Observación y registros operativos")
                p inspecciones 
        
              .div(titulo="Satisfacción de necesidades básicas")
                p Proveer agua y alimento en trayectos prolongados (obligatorio si superan 12 horas). Programar descansos en lugares sombreados, ventilados y seguros.
        
              .div(titulo="Conducción del vehículo")
                p Evitar frenadas abruptas, giros violentos y aceleraciones innecesarias. Usar sistemas de monitoreo como GPS, sensores de temperatura y cámaras.

        separador
        
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.3 Procedimientos después del viaje
        
        p.mb-5 Una vez los animales han llegado a destino, es crucial asegurar un desembarque adecuado, atención inmediata y control post-transporte. Las medidas obligatorias en la fase final del transporte son:

        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Descarga controlada" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.order-lg-2.mb-3.mb-lg-0
                h4 Descarga controlada
                p Supervisar el proceso con personal capacitado. Utilizar rampas antideslizantes e iluminación uniforme. Evitar gritos, golpes o manipulaciones bruscas.
              .col-lg-6.order-lg-1
                figure
                  img(src='@/assets/curso/tema5/9.png', alt='')
          .py-4.py-md-5(titulo="Recuperación" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.order-lg-2.mb-3.mb-lg-0
                h4 Recuperación
                p Proporcionar agua, alimento y descanso inmediato. Mantener a los animales en instalaciones limpias, amplias, ventiladas y protegidas.
              .col-lg-6.order-lg-1
                figure
                  img(src='@/assets/curso/tema5/10.png', alt='')
          .py-4.py-md-5(titulo="Atención a casos especiales" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.order-lg-2.mb-3.mb-lg-0
                h4 Atención a casos especiales
                p Brindar atención veterinaria inmediata a animales enfermos o lesionados. Aplicar sacrificio humanitario cuando no exista posibilidad de recuperación.
              .col-lg-6.order-lg-1
                figure
                  img(src='@/assets/curso/tema5/11.png', alt='')
          .py-4.py-md-5(titulo="Medidas sanitarias" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.order-lg-2.mb-3.mb-lg-0
                h4 Medidas sanitarias
                p Realizar limpieza y desinfección de vehículos, corrales y jaulas. Eliminar estiércol, camas sucias o cadáveres de forma segura, conforme a la normativa ambiental.
              .col-lg-6.order-lg-1
                figure
                  img(src='@/assets/curso/tema5/12.png', alt='')
    
    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Contingencia
    
    p.mb-5 En situaciones imprevistas, los actores responsables deben contar con planes de contingencia que permitan reducir los impactos negativos sobre los animales y restablecer condiciones seguras de inmediato. Los elementos clave de los protocolos de contingencia son:

    .bg-full-width.bg-fondo-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.p-lg-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ajustes logísticos
                p.text-center.mb-0 Redistribuir animales, reducir densidad, separar individuos agresivos
                p.text-center.mb-0 Modificar ruta o acortar tiempo en condiciones climáticas extremas.

              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protocolos escritos
                p.text-center.mb-0 Acciones ante accidentes, enfermedades, fallas mecánicas o climas extremos.
                p.text-center.mb-0 Roles asignados a cuidadores, transportistas y autoridades.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Inspección
                p.text-center.mb-0 Revisión inicial del vehículo y animales antes del viaje.
                p.text-center.mb-0 Controles en paradas intermedias.

              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Maniobras seguras
                p.text-center.mb-0 Conducción prudente.
                p.text-center.mb-0 Uso de equipos autorizados para movilización (banderas, paneles, bolsas plásticas).
                p.text-center.mb-0 Descarga pausada, sin sobresaltos.

              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Recuperación de animales afectados
                p.text-center.mb-0 Hidratación, descanso y aislamiento si es necesario.
                p.text-center.mb-0 Aplicación de eutanasia humanitaria si hay fracturas graves u otras condiciones incompatibles con la vida.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/13.png', alt='')
    
    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Acciones correctivas
    
    .bg-full-width.bg-color-11
      .px-4.px-md-5
        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/19.png", data-aos="zoom-in")
          .col-lg-8
            p Las acciones correctivas permiten responder en tiempo real a cualquier alteración en las condiciones del transporte, garantizando que el viaje continúe de forma segura.
            .bg-color-7.tarjeta.p-4(data-aos="fade-left").mb-5
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema5/20.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    p Los principales tipos de acción correctiva son:
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Ajuste de densidad o redistribución.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Separación de animales en conflicto.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Mejora de ventilación o condiciones térmicas.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Intervención veterinaria.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Activación de protocolos de emergencia.
        
        separador
        
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.6 Competencia del personal responsable
        
        p.mb-5 La idoneidad del personal a cargo del transporte es un factor determinante. Todos los responsables deben contar con formación oficial o experiencia práctica comprobada. Los ámbitos mínimos de competencia son:
    
        .row.justify-content-center
          .col-lg-10
            .bg-color-8.tarjeta.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema5/21.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    ol.lista-ol--cuadro
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span a
                        | Planificación del viaje (alimentación, densidad, ventilación).
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span b
                        | Cumplimiento de obligaciones durante carga, transporte y descarga.
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span c
                        | Identificación de fuentes de ayuda veterinaria o técnica.
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span d
                        | Reconocimiento de signos de dolor, enfermedad o estrés.
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span e
                        | Evaluación de aptitud para viajar.
            
            .bg-color-1.tarjeta.mb-3(data-aos="fade-left")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/22.png', alt='')
                .col-lg
                  .p-4
                    ol.lista-ol--cuadro.mb-0
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span f
                        | Conocimiento normativo (ICA, WOAH, Ley 1774).
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span g
                        | Prevención sanitaria (bioseguridad).
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span h
                        | Técnicas de manejo y movilización seguras.
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span i
                        | Respuesta a emergencias (accidentes, enfermedades, sacrificio humanitario).
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span j
                        | Especificidades por especie, edad y estado fisiológico.
                      li.d-flex.mb-2
                        .lista-ol--cuadro__vineta.bg-color-10
                          span k
                        | Mantenimiento de registros de ruta, incidentes y condiciones ambientales.
</template>

<script>
export default {
  name: 'Tema5',
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
