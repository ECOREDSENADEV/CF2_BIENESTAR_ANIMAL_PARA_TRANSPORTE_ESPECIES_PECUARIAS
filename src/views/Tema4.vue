<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Evaluación, monitoreo y mitigación de riesgos
    
    .bg-full-width.bg-fondo-4
      .px-4.px-md-5
        .row
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El transporte pecuario constituye una de las fases más críticas dentro de la cadena productiva, ya que expone a los animales a riesgos físicos (lesiones, caídas, golpes), fisiológicos (estrés térmico, deshidratación, fatiga) y conductuales (agresividad, miedo, apatía), los cuales pueden afectar significativamente su bienestar, rendimiento y la calidad de los productos de origen animal.

            .bg-color-8.tarjeta.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/2.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Por ello, resulta indispensable implementar sistemas estructurados de evaluación, monitoreo y mitigación de riesgos, siguiendo las disposiciones establecidas en la Resolución ICA 136 de 2020, la Ley 1774 de 2016 y los estándares de la WOAH (2023).

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Indicadores clínicos
        
        p.mb-5 Para identificar signos tempranos de deterioro en la salud o bienestar durante el transporte, se utilizan indicadores clínicos observables o medibles. Estos permiten tomar decisiones rápidas, como detener el viaje, intervenir sanitariamente o separar animales afectados.

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.tarjeta.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/3.png', alt='')
                .col-lg
                  .p-4
                    p Los principales indicadores clínicos:
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Respiración acelerada o jadeo (indicativo de estrés térmico en bovinos, porcinos y aves).
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Sudoración excesiva en equinos.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Salivación anormal o presencia de espuma en la boca.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Heridas abiertas, sangrado visible o fracturas.
            .bg-color-1.tarjeta.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema4/4.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Cojeras o dificultad para mantenerse en pie.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Decaimiento, apatía o imposibilidad de moverse.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Ojos hundidos y mucosas secas (signo de deshidratación).
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Temperatura corporal elevada (hipertermia) o baja (hipotermia).
    
    .bg-color-3.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Nota</b>. Estos signos deben observarse antes del embarque, durante paradas intermedias y al finalizar el viaje. Animales con síntomas severos no deben continuar el recorrido.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Indicadores conductuales
    
    .bg-full-width.bg-fondo-11
      .px-4.px-md-5
        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-5 Los cambios en el comportamiento también son señales clave de malestar o sufrimiento durante la movilización. La observación debe hacerse con cuidado, evitando causar más estrés por la presencia del evaluador.
            .bg-color-13.tarjeta.p-4(data-aos="fade-left").mb-5
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema4/7.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    p Los principales indicadores conductuales:
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Agresividad (embestidas, mordiscos, patadas, empujones).
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Vocalizaciones excesivas (balidos, chillidos, relinchos repetidos).
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Intentos de tumbarse, moverse bruscamente o desequilibrio constante.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Aislamiento, apatía o escasa respuesta a estímulos.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Golpes contra estructuras o intentos de huida.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Negativa a embarcarse o descargarse (resistencia al movimiento).

        separador
        
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.3 Listas de chequeo y formatos oficiales
        
        p.mb-5 Antes, durante y después del transporte, deben emplearse formatos oficiales que permitan verificar el cumplimiento de las condiciones de bienestar y bioseguridad.

        .row.justify-content-center
          .col-lg-10
            .bg-color-1.tarjeta.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema4/8.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    p Los documentos y listas más utilizados en Colombia son:
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Guía Sanitaria de Movilización Interna (GSMI):</b> expedida por el ICA, obligatoria en todo traslado.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Actas de inspección sanitaria:</b> elaboradas por funcionarios durante controles en carretera.
                      li.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Listas de chequeo de bienestar animal</b> (ICA, Fedegán, FENAVI), que contemplan:
                      li.mb-0.d-flex.ms-5
                        i.fa-solid.fa-circle.fa-xs.bg-color-5.mt-2
                        p.mb-0 Estado sanitario previo del animal.
                      li.mb-0.d-flex.ms-5
                        i.fa-solid.fa-circle.fa-xs.bg-color-5.mt-2
                        p.mb-0 Cumplimiento de densidad por especie.
                      li.mb-0.d-flex.ms-5
                        i.fa-solid.fa-circle.fa-xs.bg-color-5.mt-2
                        p.mb-0 Condiciones del vehículo (piso, ventilación, rampas).
                      li.mb-0.d-flex.ms-5
                        i.fa-solid.fa-circle.fa-xs.bg-color-5.mt-2
                        p.mb-0 Variables ambientales (temperatura y humedad).
                      li.d-flex.ms-5
                        i.fa-solid.fa-circle.fa-xs.bg-color-5.mt-2
                        p.mb-0 Signos clínicos y conductuales durante el trayecto.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Formatos de contingencia:</b> para emergencias, accidentes o mortalidades.
    
    .bg-color-3.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Importancia</b>. Estas herramientas aseguran trazabilidad, permiten auditoría sanitaria y previenen sanciones por incumplimiento normativo.
    
    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Evaluación de riesgos: fases y medidas
    
    p.mb-5 A continuación, se describen las fases críticas para la evaluación y mitigación de riesgos en el transporte animal.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="a").colr
          .div(titulo="Evaluación inicial (antes del viaje)")
            p Revisión clínica y sanitaria individual (descartar animales enfermos, lesionados o gestantes avanzadas). Confirmación de esquemas sanitarios (vacunación y desparasitación). Revisión y porte de la GSMI y documentos veterinarios. Verificación del vehículo (limpieza, desinfección, ventilación, iluminación, rampas ≤20°). Consideración ambiental: programar viajes nocturnos en climas cálidos.
    
          .div(titulo="Monitoreo durante el trayecto")
            p Revisión en paradas programadas. Control de temperatura interna y humedad relativa. Suministro de agua y alimento en trayectos mayores a 8 horas. Verificación de comportamiento, densidad, condiciones térmicas y signos clínicos.
    
          .div(titulo="Mitigación de riesgos (acciones correctivas)")
            p Redistribuir la carga o reducir la densidad. Separar animales agresivos o vulnerables. Ajustar ventilación o disminuir la velocidad del vehículo. Programar paradas adicionales para descanso. Brindar atención veterinaria inmediata en casos de emergencia. Activar protocolos frente a accidentes, eventos climáticos extremos o brotes sanitarios.
    
    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Requisitos técnicos de las unidades de transporte
    
    p.mb-5 Las unidades de transporte deben garantizar la integridad física y fisiológica del animal en todo momento. A continuación se detallan sus principales características:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7.
      span Requisitos técnicos mínimos de los vehículos de transporte animal

    .tabla-a.color-acento-contenido.mb-5.pst
      table
        thead
          tr
            th.bg-color-6 Elemento
            th.bg-color-6 Requisitos mínimos técnicos
        tbody
          tr.br-color-sintesis
            th Paredes
            td Lisas, sin aristas, fáciles de limpiar. Ventilación: 16 % para especies mayores y 40 % para especies menores.
          tr
            th Pisos
            td Antideslizantes, drenados o con recolector de excretas.
          tr.br-color-sintesis
            th Cubiertas
            td Deben proteger contra sol, lluvia y granizo.
          tr
            th Separadores internos
            td Impiden peleas, reducen amontonamientos y facilitan el manejo en grupos.
          tr.br-color-sintesis
            th Puertas
            td Amplias, resistentes, con cierre seguro.
          tr
            td Bebederos y comederos
            td Obligatorios en viajes superiores a 12 horas.
          tr.br-color-sintesis
            th Contenedores o jaulas
            td Rígidos, ventilados y accesibles en caso de emergencia.
          tr
            th Sistemas de monitoreo
            td Cámaras, GPS, sensores de temperatura, humedad y aceleración (según especie y trayecto).

    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Actividades asociadas al transporte
    
    p.mb-5 Cada modalidad de transporte y cada especie requieren acciones específicas. A continuación, se resumen los principales tipos de transporte y sus consideraciones:

    .bg-full-width.bg-color-4-2
      .px-4.px-md-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema4/11.svg', alt='Texto que describa la imagen')
              h4.text-center Cargue y descargue
              p.text-center Rampas ≤20°, antideslizantes, personal capacitado, sin golpes ni gritos.


          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema4/12.svg', alt='Texto que describa la imagen')
              h4.text-center Transporte fluvial
              p.text-center Embarcaciones con piso seco, divisiones internas y buena ventilación.

        
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema4/13.svg', alt='Texto que describa la imagen')
              h4.text-center Transporte aéreo
              p.text-center Uso de guacales/jaulas aprobadas, temperatura controlada, personal entrenado (IATA).

          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema4/14.svg', alt='Texto que describa la imagen')
              h4.text-center Movilización a pie
              p.text-center Paso natural, sin apuros, uso de banderines o elementos visuales, rutas planificadas.

        separador
        
        #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.7 Proceso completo de embarque y desembarque
        
        p.mb-5 El proceso de embarque y desembarque incluye una secuencia de fases operativas clave que deben ejecutarse de manera ordenada para garantizar el bienestar animal y la eficiencia logística:

        .row.justify-content-center
          .col-lg-10
            .bg-color-1.tarjeta.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/15.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Actividades previas:</b> selección sanitaria, cuarentena si aplica, documentos listos.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Cargue:</b> ingreso ordenado, separación por especie, sexo, edad.
                      li.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Transporte:</b> conducción estable, monitoreo continuo.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Descargue:</b> sin gritos ni golpes, rampas seguras.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Actividades posteriores:</b> alimentación, hidratación, evaluación sanitaria, reubicación.

        separador
        
        #t_4_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.8 Disposiciones finales ante emergencias
        
        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p En caso de eventos graves o imprevisibles durante el transporte, se deben aplicar las siguientes medidas inmediatas:
            .bg-color-13.tarjeta.p-4(data-aos="fade-left").mb-5
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema4/17.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Reportar enfermedades de control oficial al ICA.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Brindar atención veterinaria sin demora.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Realizar sacrificio humanitario en casos de fracturas o sufrimiento irreversible.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Disponer los cadáveres según las normas ambientales vigentes.

            p(data-aos="fade-left") La implementación de un sistema estructurado de evaluación, monitoreo y mitigación de riesgos en el transporte pecuario permite preservar el bienestar animal, evitar pérdidas económicas y garantizar el cumplimiento de la normativa nacional e internacional. Asimismo, fortalece una ganadería más ética, sostenible y competitiva, alineada con los principios de la WOAH, las exigencias de los mercados y la responsabilidad social de los actores del sistema productivo.
    
    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/18.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Tabla 2. Obligaciones relacionadas con el transporte de animales en pie
              p.text-small Se invita a leer el documento Tabla 2. Obligaciones relacionadas con el transporte de animales en pie, donde se abordan las responsabilidades específicas que deben cumplir los distintos actores involucrados en el transporte de animales vivos: empresas de transporte, propietarios de equipos, conductores y remitentes. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
