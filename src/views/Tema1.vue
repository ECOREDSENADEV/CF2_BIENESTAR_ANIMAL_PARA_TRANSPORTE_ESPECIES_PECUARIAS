<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Transporte según especie pecuaria
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") DEl transporte de animales es un factor determinante en su bienestar y en la calidad de la carne. Un manejo inadecuado, como tiempos prolongados de ayuno, golpes, sobrecarga o condiciones inapropiadas, genera altos niveles de estrés, pérdida de peso, hematomas y alteraciones fisiológicas que disminuyen la calidad del producto final.
        
            .bg-color-1.mb-5.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/2.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Uno de los principales efectos del estrés es el aumento de cortisol durante el transporte, lo cual modifica el pH muscular, el color de la carne y su capacidad de retención de agua. Esto reduce la vida útil y la aceptación del producto por parte del consumidor.
        p.mb-5 Para garantizar condiciones adecuadas durante el transporte, se deben aplicar una serie de medidas técnicas y de manejo:

        .row.justify-content-center
          .col-lg-10
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/3.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Uso de vehículos con pisos antideslizantes y buena ventilación cruzada.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Instalación de rampas con inclinación menor a 20 grados, evitando cambios bruscos de luz o ruido que puedan asustar a los animales.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Realización del embarque y desembarque en calma, sin gritos ni picanas eléctricas.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Asegurar el correcto acople del camión al desembarcadero, previniendo lesiones.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Ajuste de la densidad de carga según el peso, especie y distancia del viaje.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Limitación del tiempo de transporte a máximo ocho horas, seguido de descanso, suministro de agua y alimento.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Mantenimiento del confort térmico entre 5 y 25 °C, especialmente en animales jóvenes, para evitar jadeo, salivación, temblores o incluso mortalidad.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Normativa vigente en Colombia

        p.mb-5 El transporte animal en Colombia está respaldado por un marco normativo que <b>protege el bienestar animal</b> y establece condiciones técnicas obligatorias:

        .row.align-items-start.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-lg-1
        
            AcordionA(tipo="a").colr
              .div(titulo="Ley 1774 de 2016")
                p Reconoce a los animales como seres sintientes y establece medidas de protección.
              .div(titulo="Resolución ICA 136 de 2020")
                p Define densidades máximas y condiciones técnicas de los vehículos de transporte animal.
              .div(titulo="Decreto 1500 de 2007 y Resoluciones 240, 241 y 242 de 2013")
                p Establecen lineamientos de bienestar en procesos de beneficio y pre faenado.
              .div(titulo="Guía Sanitaria de Movilización Interna (GSMI) del ICA")
                p Documento obligatorio para movilizar animales dentro del país.
              .div(titulo="Capacitación de transportadores y operarios")
                p Exigida en buenas prácticas de manejo animal para garantizar viajes seguros y responsables.
        
        p.mb-5 El cumplimiento de estas disposiciones asegura un transporte alineado con los principios de bienestar animal, minimizando los impactos negativos sobre la salud de los animales y la calidad del producto final.

    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Tabla 1. Espacio y densidad animal durante el transporte según especie y peso
              p.text-small Se invita a leer el documento Tabla 1. Espacio y densidad animal durante el transporte según especie y peso, donde se aborda la relación entre el peso de distintas especies animales y el espacio requerido para su transporte en función del tiempo del viaje (menor o mayor a 12 horas). 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Bovinos: clasificación, densidad y requerimientos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El transporte de bovinos constituye una de las etapas más críticas en la cadena productiva pecuaria, ya que de su adecuada planificación y ejecución depende el bienestar animal, la bioseguridad y la calidad de la carne y la leche. Durante este proceso es indispensable garantizar condiciones óptimas de espacio, ventilación, densidad, descanso y manipulación, así como cumplir con la normatividad vigente, en particular la Resolución ICA 136 de 2020 y la Ley 1774 de 2016, las cuales buscan prevenir el estrés, reducir lesiones y minimizar pérdidas económicas.
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Densidad recomendada (según Resolución ICA 136 de 2020)" :icono="require('@/assets/componentes/2.svg')").p-5
        h4 Densidad recomendada (según Resolución ICA 136 de 2020)
        p La densidad de carga debe adaptarse al peso de los animales para evitar lesiones, fatiga o estrés térmico. A continuación se presentan los valores técnicos recomendados:
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-2 Terneros de levante
                  p.mb-0 Menor de 200 kg.

          .col-lg-6.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-2 Bovinos de engorde
                  p.mb-0 Entre 300 y 500 kg.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-2 Bovinos lecheros adultos
                  p.mb-0 Generalmente más de 500 kg.

          .col-lg-6.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-2 Reproductores
                  p.mb-0 Machos o hembras de alto valor genético.
      .py-4.py-md-5(titulo="Clasificación de bovinos según destino" :icono="require('@/assets/componentes/2.svg')").p-5
        h4 Clasificación de bovinos según destino
        p Esta clasificación permite ajustar el diseño del transporte en cuanto a espacio, densidad y manejo, dado que cada grupo presenta requerimientos fisiológicos y de bienestar específicos:
        
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Capacidad de transporte según categoría de bovinos.

        .tabla-a.color-acento-contenido.mb-5.pst 
          table
            thead
              tr
                th.bg-color-6 Clasificación
                th.bg-color-6 Peso vivo (kg)
                th.bg-color-6 Área mínima por animal (m²)
                th.bg-color-6 Capacidad estimada por camión de 12 m
            tbody
              tr.bg-color-sintesis
                th Terneros
                td Hasta 200
                td 0.40 - 0.60
                td 25 - 30 animales
              tr.bg-color-white
                th Novillos de engorde
                td 300 - 500
                td 0.90 - 1.20
                td 12 - 20 animales
              tr.bg-color-sintesis
                th Reproductores y vacas adultas
                td Más de 500
                td 1.20 - 1.50
                td 8 - 12 animales

        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Requerimientos técnicos y de manejo en el transporte de bovinos
    
    .bg-color-1.tarjeta.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El transporte de bovinos requiere un conjunto de medidas técnicas y de manejo que garanticen el bienestar animal, la bioseguridad y la calidad del producto. A continuación se describen los principales aspectos que deben ser tenidos en cuenta durante este proceso.
    
    h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Vehículo e instalaciones: diseño y equipamiento

    p.mb-5.mt-5 El diseño estructural del vehículo y sus condiciones internas influyen directamente en la seguridad, el confort y el estrés de los animales durante el traslado.

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Piso
              p Debe ser antideslizante y estar en buen estado. Evitar acumulación de estiércol o agua. Puede usarse goma ranurada, metal con relieve o cama (viruta/paja) seca y sin exceso.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Rampas
              p Inclinación ≤ 20 °, con listones transversales y barandas laterales continuas. Evitar escalones y huecos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ventilación
              p Flujo cruzado, natural o asistido. No cerrar completamente los laterales; usar cortinas o mallas que permitan circulación de aire y protejan del sol o la lluvia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Divisiones internas
              p Ayudan a estabilizar la carga, evitar caídas y separar categorías (terneros, toros, vacas preñadas).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Altura libre
              p Debe permitir la postura natural de los animales y disipar el calor. Evitar salientes cortantes o tornillos expuestos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Iluminación
              p Suficiente para embarque y desembarque, con transiciones suaves entre luz y sombra.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Limpieza
              p Implementar un plan de bioseguridad que contemple lavado, desinfección y secado del vehículo entre viajes.

    h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Condiciones de viaje: planificación y operación

    p.mb-5.mt-5 Una adecuada planificación del transporte permite prevenir riesgos, reducir el estrés y optimizar el tiempo y las condiciones del viaje.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-8.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/19.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Elegir horarios más frescos (noche o madrugada en clima cálido).
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Seleccionar rutas sin obras o riesgos evidentes y minimizar paradas.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Contar con un kit de contingencias: agua, herramientas, barreras, botiquín, teléfonos de emergencia.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Considerar la duración del viaje: aunque la WOAH (Organización Mundial de Sanidad Animal) no impone un límite fijo, en Colombia se recomienda seguir la Resolución ICA 136 de 2020.
            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema1/20.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Garantizar descansos, acceso a agua y alimentación si el viaje se prolonga.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Manejar y arrear con calma: sin golpes, ni picanas. Usar banderines y separar categorías.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Conducir suavemente, evitando frenadas o virajes bruscos.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Mantener registros durante todo el viaje: estado de los animales, condiciones ambientales, incidencias.

        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Registro y permisos (Colombia)

        p.mb-5.mt-5 El cumplimiento documental es un requisito legal obligatorio que permite garantizar la trazabilidad y legalidad del transporte de animales.

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/21.svg', alt='Texto que describa la imagen')
              h4.text-center Guía Sanitaria de Movilización Interna (GSMI)
              p.text-center Documento obligatorio expedido por el ICA, gestionado en los sistemas SINIGAN o SIGMA.
        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen')
              h4.text-center Registro del vehículo y del transportador
              p.text-center Requiere habilitación formal ante el Ministerio de Transporte y cumplimiento de requisitos técnicos.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/23.svg', alt='Texto que describa la imagen')
              h4.text-center Capacitación del personal
              p.text-center Conductores y auxiliares deben estar formados en bienestar animal, manejo y contingencias.
    
    h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Factores de estrés y regulación térmica

    p.mb-5.mt-5 La temperatura, la humedad, la densidad y el manejo influyen significativamente en la fisiología y la salud del animal durante el transporte.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="a").colr
          .div(titulo="Zona termoneutral")
            p Entre 5 y 25 °C. Por debajo: aumento del gasto energético. Por encima: dificultad para disipar el calor. Ajustar densidad, programar viajes en horas frescas, asegurar ventilación y acceso a agua.
    
          .div(titulo="Estrés por calor")
            p Jadeo, salivación, lengua afuera, decúbito, hipertermia. Puede llevar a la muerte en casos graves. Reducir densidad, mejorar ventilación, paradas cortas en sombra, hidratación al final del viaje.
    
          .div(titulo="Estrés por frío")
            p Temblores, postura encorvada, piloerección, especialmente en terneros o animales mojados. Usar cortinas laterales, cama seca, proteger de corrientes de aire, reducir exposición a la intemperie.
    
          .div(titulo="Respuesta fisiológica")
            p Aumento de cortisol, inmunosupresión, pérdida de peso (encogimiento) de entre 3 y 7 %. Optimizar condiciones de transporte y minimizar duración del viaje.
    
    h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Densidad y espacio: recordatorio operativo

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5
        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El espacio asignado por animal debe permitir estabilidad, confort y evitar lesiones durante el transporte.
        
            .bg-color-1.tarjeta.p-4(data-aos="fade-left")
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema1/26.png", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Usar tablas oficiales, como las de la Resolución ICA 136 de 2020, para calcular área mínima por peso vivo.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Si no se dispone de tablas, garantizar que todos los animales puedan estar de pie con estabilidad y cambiar de apoyo sin amontonamiento.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Ajustar densidad en climas cálidos o ante animales grandes, astados o gestantes.

        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Listas de chequeo mínimas

        p.mb-5.mt-5 Aplicar listas de verificación operativas en cada etapa del transporte permite detectar y corregir errores que afectan el bienestar animal.

        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/27.png", alt="alt")
              .crd_hover_txt--body.text-center
                h4.mb-3.text-white Antes de cargar
                p.mb-0 Verificar documentación (GSMI), condiciones del vehículo, particiones, estado mecánico, ruta, densidad, kit de emergencia.

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/28.png", alt="alt")
              .crd_hover_txt--body.text-center
                h4.mb-3.text-white Durante el viaje
                p.mb-0 Mantener conducción suave, monitorear temperatura y ventilación, evitar paradas innecesarias y fugas.

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/29.png", alt="alt")
              .crd_hover_txt--body.text-center
                h4.mb-3.text-white Al llegar
                p.mb-0 Descargar por rampa segura, proporcionar agua y descanso inmediato, revisar lesiones y registrar cualquier incidencia.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Porcinos: temperatura, ruido y sensibilidad al estrés
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Los cerdos son una de las especies pecuarias más vulnerables durante el transporte debido a su fisiología particular. Poseen una capacidad limitada de sudoración, lo que los hace altamente susceptibles al estrés térmico. Además, presentan una alta sensibilidad al ruido y a la manipulación brusca, factores que pueden desencadenar miedo, accidentes, lesiones graves o incluso la muerte.
    
        .bg-color-3.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Durante la carga y descarga, es esencial reducir al mínimo los factores de estrés. El diseño o adecuación de las instalaciones debe favorecer un flujo continuo y seguro, evitando obstáculos o estímulos que provoquen retrocesos, detenciones o resistencia. Estas medidas mejoran el bienestar animal y disminuyen los riesgos laborales y las pérdidas económicas por mortalidad o daños a la canal.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Requerimientos ambientales
    
    p.mb-5 El ambiente térmico y la calidad del aire son factores determinantes en la supervivencia y el confort de los cerdos durante el transporte.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center.p-lg-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Temperatura ideal
                p.text-center Entre 16 y 22 °C
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estrés por calor
                p.text-center Comienza a >28 °C, con síntomas como jadeo intenso y riesgo de colapso
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estrés por frío
                p.text-center Se presenta a <10 °C, generando temblores y aumento del gasto energético.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Humedad relativa
                p.text-center No debe superar el 80 %, ya que disminuye la capacidad de disipar calor.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ventilación
                p.text-center Obligatoria; debe ser natural o mecánica, evitando corrientes directas sobre los animales.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/32.png', alt='')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Factores críticos durante el transporte
        
        p.mb-5 Identificar y controlar los factores de riesgo permite evitar lesiones, estrés fisiológico y pérdidas productivas.
    
    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-3.py-md-4.px-4(titulo="Estrés por calor")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Estrés por calor
            p Jadeo, salivación, pérdida de peso, riesgo de colapso o muerte. Mantener el ambiente por debajo de 28 °C.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/38.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-4(titulo="Estrés por frío")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Estrés por frío
            p Temblores, inmunosupresión, mayor gasto energético. Mantener el ambiente por encima de 10 °C.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/39.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-4(titulo="Ruido")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Ruido
            p Aumento del ritmo cardíaco y del cortisol, agitación, accidentes. Evitar gritos, golpes metálicos o silbidos fuertes.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/40.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-4(titulo="Densidad de carga")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Densidad de carga
            p Asfixias, aplastamientos, estrés y lesiones. Ajustar densidad según peso vivo.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/41.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-4(titulo="Mezcla de lotes")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Mezcla de lotes
            p Peleas, heridas, competencia por espacio. No mezclar animales de diferente edad, tamaño o procedencia.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/42.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-4(titulo="Manejo brusco")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Manejo brusco
            p Sufrimiento, fracturas, hematomas, deterioro de la canal. Prohibido el uso de picanas eléctricas o golpes.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/43.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Densidad recomendada de transporte
    
    p.mb-5 El cálculo adecuado del espacio por animal es esencial para prevenir asfixias, reducir el estrés y garantizar un viaje seguro.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Capacidad de transporte según categoría de cerdos

    .tabla-a.color-acento-contenido.mb-5.pst 
      table
        thead
          tr
            th.bg-color-6  Clasificación
            th.bg-color-6  Peso vivo (kg)
            th.bg-color-6  Área mínima por animal (m²)
            th.bg-color-6  Capacidad estimada por camión (12 m)
        tbody
          tr.bg-color-sintesis
            th Lechones de levante
            td 50 - 85
            td 0.35 - 0.40
            td 40 - 50 animales
          tr.bg-color-white
            th Cerdos en crecimiento
            td 100 - 150
            td 0.50 - 0.55
            td 25 - 35 animales
          tr.bg-color-sintesis
            th Cerdos de ceba / engorde
            td 150 - 250
            td 0.60 - 0.70
            td 15 - 20 animales
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Recomendaciones prácticas de bienestar en el transporte de porcinos
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/44.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") A continuación, se presenta un pódcast sobre las principales recomendaciones prácticas para garantizar el bienestar de los porcinos durante su transporte, con base en criterios técnicos y normativos vigentes.
        
            .bg-color-10.mb-5.tarjeta
              .p-3.p-md-3
                .row.justify-content-center.align-items-center
                  .col-md-6.col-lg-5.mb-3.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema1/45.svg", data-aos="zoom-in")
                  .col-lg-7
                    h3(data-aos="fade-left").mb-4.text-white  Pódcast:
            
                    TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                      texto="Recomendaciones prácticas de bienestar en el transporte de porcinos"
                      tiempo
                      :audio="require('../assets/curso/podcast/podcast1.mp3')"
                    )

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Normatividad aplicable
        
        p.mb-5 El transporte de porcinos en Colombia está regulado por normas nacionales e internacionales que establecen parámetros técnicos, éticos y operativos para garantizar el bienestar animal:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/46.svg', alt='Texto que describa la imagen')
              h4.text-center Resolución ICA 136 de 2020
              p.text-center Establece condiciones técnicas, densidades máximas y requisitos del vehículo.

        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/46.svg', alt='Texto que describa la imagen')
              h4.text-center Ley 1774 de 2016
              p.text-center Reconoce a los animales como seres sintientes y sanciona el maltrato.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-9.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/46.svg', alt='Texto que describa la imagen')
              h4.text-center WOAH (2023)
              p.text-center Código Sanitario para los Animales Terrestres. Estándares internacionales de transporte.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Aves: jaulas, densidad y control térmico en el transporte
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/47.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") El transporte de aves, como pollos de engorde, gallinas ponedoras y gallos reproductores, constituye una de las etapas más críticas de la cadena avícola. Estas especies son altamente sensibles al estrés térmico, la manipulación brusca y la alta densidad de carga. Condiciones inadecuadas durante el viaje pueden provocar altas tasas de mortalidad, lesiones, pérdida de peso, deterioro de la canal y rechazo en planta de beneficio.
            p.mb-0 A continuación, se presentan las consideraciones esenciales para garantizar un transporte seguro y respetuoso con el bienestar animal.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Jaulas y contenedores
    
    p.mb-5 El tipo de jaula utilizada influye directamente en la ventilación, la comodidad y la seguridad física de las aves durante el viaje.

    .bg-full-width.bg-fondo-4
      .px-4.px-md-5
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Diseño y material" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                h4 Diseño y material
                p Jaulas específicas para aves, fabricadas en materiales resistentes, lavables y con buena ventilación.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/48.png', alt='')
          .py-4.py-md-5(titulo="Piso antideslizante" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                h4 Piso antideslizante
                p Evita fracturas o lesiones en patas y alas.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/49.png', alt='')
          .py-4.py-md-5(titulo="Entrada y salida rápida" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                h4 Entrada y salida rápida
                p El diseño debe permitir movimientos ágiles para reducir el tiempo de manipulación y el riesgo de lesiones.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/50.png', alt='')
          .py-4.py-md-5(titulo="Prohibición de guacales improvisados" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                h4 Prohibición de guacales improvisados
                p No deben usarse elementos en mal estado o no diseñados para aves, ya que comprometen el bienestar y la bioseguridad.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/51.png', alt='')
          .py-4.py-md-5(titulo="Postura natural y circulación de aire" :icono="require('@/assets/componentes/2.svg')").p-5
            .row.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                h4 Postura natural y circulación de aire
                p Según la Resolución ICA 136 de 2020, las aves deben poder adoptar una posición natural de descanso, sin compresión ni obstrucción del flujo de aire.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/52.png', alt='')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Densidad de carga
        
        p.mb-5 Una densidad inadecuada puede causar asfixia, acumulación de calor, muertes por aplastamiento y deterioro en la calidad del producto.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Densidad de carga

            .tabla-a.color-acento-contenido.mb-5.pst 
              table
                thead
                  tr
                    th.bg-color-6 Tipo de ave
                    th.bg-color-6 Peso vivo (kg)
                    th.bg-color-6 Aves recomendadas por m²
                tbody
                  tr.bg-color-sintesis
                    th Pollito de un día
                    td 0.04
                    td 80 - 100
                  tr.bg-color-white
                    th Pollo de engorde
                    td 1.5 - 2.0
                    td 35 - 40
                  tr.bg-color-sintesis
                    th Gallina ponedora
                    td 1.8 - 2.2
                    td 25 - 30
                  tr.bg-color-white
                    th Gallo reproductor
                    td 3.5 - 4.5
                    td 15 - 20

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Control térmico y consideraciones específicas
    
    p.mb-5 El manejo de la temperatura y otros factores ambientales es fundamental para la supervivencia y estabilidad fisiológica de las aves durante el transporte.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/53.svg', alt='Texto que describa la imagen')
          h4.text-center Temperatura ambiente
          p.text-center Ajustar densidad según temperatura. En climas cálidos, reducir número de aves por m².

      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/54.svg', alt='Texto que describa la imagen')
          h4.text-center Pollitos de un día
          p.text-center Requieren temperatura inicial entre 32 y 35 °C y evitar corrientes de aire.
    
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/55.svg', alt='Texto que describa la imagen')
          h4.text-center Gallinas y gallos reproductores
          p.text-center Más sensibles al estrés y a lesiones por patas o alas. Deben manipularse con precaución.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/56.svg', alt='Texto que describa la imagen')
          h4.text-center Ventilación del vehículo y jaulas
          p.text-center Debe ser cruzada, uniforme y constante, sin corrientes directas. Evitar bordes cortantes.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/57.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la siguiente figura se presenta de forma comparativa la densidad recomendada de aves por metro cuadrado durante el transporte, según el tipo y peso del animal. 

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Densidad recomendada de aves en transporte

    .bg-full-width.bg-color-4-2
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            figure
              img(src="@/assets/curso/tema1/58.svg", data-aos="zoom-in")
        
        .row.mb-5.mt-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/59.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Se evidencia claramente que:
        
            .bg-color-6.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-5
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.order-2
                    img(src="@/assets/curso/tema1/60.svg", style="max-width: 240px").mx-auto
                  .col-lg.order-1.mb-3.mb-lg-0
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Los pollitos de un día pueden transportarse a una densidad mucho mayor (entre 80 y 100 aves/m²), dado su bajo peso y tamaño reducido.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Los pollos de engorde, con un peso promedio entre 1.5 y 2.0 kg, requieren una densidad de 35 a 40 aves/m², ya que generan mayor carga térmica.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Las gallinas ponedoras deben ser transportadas a una densidad inferior, de 25 a 30 aves/m², debido a su tamaño, fragilidad ósea y mayor sensibilidad al estrés.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Los gallos reproductores, por su mayor peso y agresividad potencial, exigen el espacio más amplio: entre 15 y 20 aves/m².

            p Es fundamental que la densidad sea ajustada en función del clima, reduciéndola en condiciones de alta temperatura y humedad, para evitar el riesgo de asfixia, acumulación de calor y mortalidad. Esta práctica, junto con el diseño adecuado de jaulas y la ventilación cruzada eficiente, permite mantener el bienestar fisiológico y conductual de las aves durante el transporte.
    
    h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Control térmico, ventilación y recomendaciones prácticas en el transporte de aves

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/61.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El control térmico y la ventilación son factores críticos para la supervivencia de las aves durante el transporte. Dado que no poseen glándulas sudoríparas, las aves regulan su temperatura mediante el jadeo y la extensión de las alas. Esto las hace altamente vulnerables al estrés térmico, especialmente en climas cálidos, en condiciones de hacinamiento o durante viajes prolongados. A continuación, se presentan las condiciones térmicas recomendadas, así como una serie de buenas prácticas para garantizar el bienestar animal y el cumplimiento normativo.
    
    h4(data-aos="fade-left") Control térmico y ventilación
    p.mb-5 Mantener una temperatura adecuada y una ventilación efectiva es esencial para prevenir el golpe de calor, el estrés por frío y la mortalidad en tránsito.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center.p-lg-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/63.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Zona de confort térmico
                p.text-center Entre 18 °C y 24 °C, con humedad relativa del 60 – 70 
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/64.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Riesgo de golpe de calor
                p.text-center A partir de 30 °C, aumenta significativamente la mortalidad.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/65.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estrés por frío
                p.text-center Temperaturas inferiores a 10 °C afectan el metabolismo y la salud general del ave.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/66.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ventilación del vehículo
                p.text-center Debe ser cruzada, natural o mecánica, cubriendo todas las filas de jaulas.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/67.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Horario de transporte recomendado
                p.text-center En climas cálidos, se recomienda viajar de noche o en horas de menor radiación solar.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/68.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Apilamiento de jaulas
                p.text-center Debe permitir espacios para el flujo de aire, evitando obstrucciones que generen muertes.

          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/62.png', alt='')
        
        h4(data-aos="fade-left") Recomendaciones prácticas de manejo
        p.mb-5 El manejo cuidadoso del personal y el cumplimiento normativo son claves para evitar lesiones, reducir el estrés y garantizar un transporte ético y eficiente.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/69.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="a").colr
          .div(titulo="Capacitar al personal de carga y descarga")
            p Minimiza el tiempo de manipulación, previene fracturas y mejora la eficiencia operativa.
    
          .div(titulo="Evitar gritos, ruidos fuertes y movimientos bruscos")
            p Reduce el estrés agudo, que puede desencadenar pánico, golpes y mortalidad.
    
          .div(titulo="Mantener un plan de contingencia")
            p Permite responder ante retrasos o emergencias con puntos de descanso y agua fresca disponibles.
    
          .div(titulo="Usar vehículos registrados y autorizados por el ICA")
            p Garantiza el cumplimiento de las normas de bioseguridad exigidas por FENAVI y la legislación nacional.
          .div(titulo="Portar la Guía Sanitaria de Movilización Interna (GSMI)")
            p Documento obligatorio, gestionado a través de SIGMA/SINIGAN, que certifica la legalidad del transporte.
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Equinos: densidad, estabilidad y comportamiento en el transporte
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/70.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El transporte de equinos representa una de las prácticas más delicadas dentro del manejo pecuario, debido a las características fisiológicas y etológicas de esta especie. Como animales de presa, los caballos reaccionan con rapidez a estímulos externos, lo que los hace particularmente propensos al estrés, miedo y accidentes si no se aplican buenas prácticas de manejo.
    
        .bg-color-3.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/71.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En Colombia, el transporte de equinos está regulado por la Resolución ICA 136 de 2020, mientras que entidades como la WOAH (2023) y la Federación Ecuestre Internacional (FEI) aportan lineamientos complementarios.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Densidad recomendada en el transporte
    
    p.mb-5 El espacio asignado a cada animal debe permitirle mantener el equilibrio, adoptar una postura natural y evitar el contacto forzado con otros individuos.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      span Capacidad de transporte según categoría de equinos

    .tabla-a.color-acento-contenido.mb-5.pst
      table
        thead
          tr
            th.bg-color-6 Clasificación
            th.bg-color-6 Peso vivo (kg)
            th.bg-color-6 Área mínima por animal (m²)
            th.bg-color-6 Capacidad estimada por vehículo (12 m²)
        tbody
          tr.bg-color-sintesis
            td Potros jóvenes
            td 200 - 300
            td 1.2 - 1.4
            td 6 - 8
          tr.bg-color-white
            td Equinos adultos (monta)
            td 350 - 500
            td 1.7 - 2.0
            td 4 - 6
          tr.bg-color-sintesis
            td Equinos pesados (tiro)
            td 500 - 700
            td 2.2 - 2.5
            td 2 - 4
    
    .bg-color-2.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/72.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0  La Resolución ICA 136 de 2020 prohíbe el sobrecupo, exige divisiones internas y establece que los animales deben poder pararse cómodamente sin contacto forzado entre ellos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estabilidad y condiciones técnicas del vehículo
    
    p.mb-5 Un vehículo mal diseñado puede causar caídas, lesiones musculoesqueléticas y estrés intenso en los caballos durante el transporte.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.p-lg-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/74.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Piso antideslizante
                p.text-center Recubrimiento de caucho o viruta absorbente. Previene resbalones y reduce las vibraciones.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/75.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Divisiones internas
                p.text-center Tabiques o separadores para el transporte individual, especialmente en machos enteros.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/76.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Altura mínima interior
                p.text-center Mínimo 2.3 metros para permitir que el animal mantenga la cabeza en posición natural.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/77.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ventilación cruzada
                p.text-center Imprescindible para evitar acumulación de calor, gases y humedad.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/78.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Rampas seguras
                p.text-center Inclinación máxima de 20 °, superficie antideslizante y barandas laterales para evitar caídas.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/79.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Iluminación adecuada
                p.text-center Evitar contrastes bruscos entre luz y sombra, que pueden bloquear o asustar al animal durante el embarque.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/73.png', alt='')
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Comportamiento y bienestar durante el transporte
        
    p.mb-5 Los equinos manifiestan su malestar a través de signos conductuales y fisiológicos que deben ser monitoreados por el personal a cargo.

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3
        .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/80.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4.mb-2 Sudoración excesiva
              p.mb-0 Señal de estrés o sobrecalentamiento.

      .col-lg-4.mb-3
        .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/81.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4.mb-2 Movimientos bruscos, patadas
              p.mb-0 Reacción al miedo o incomodidad. Riesgo de autolesión.

      .col-lg-4.mb-3
        .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/82.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4.mb-2 Relinchos, mordidas a estructuras
              p.mb-0 Indicadores de ansiedad o frustración.
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/83.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-2 Intento de tumbarse
                  p.mb-0 Desequilibrio o búsqueda de alivio ante el estrés.

          .col-lg-4.mb-3
            .bg-color-3.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/84.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4.mb-2 Aumento de frecuencia cardíaca
                  p.mb-0 Respuesta fisiológica al miedo o la fatiga.


          .col-lg-4.mb-3
            img(src="@/assets/curso/tema1/85.svg").mx-auto
    
        h3.mb-0.bg-color-7.p-3.tarjeta.d-lg-inline.mb-5 Buenas prácticas y factores de estrés en el transporte de equinos

        .bg-color-1.mb-5.mt-5.tarjeta(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/86.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") El transporte adecuado de equinos implica más que simplemente mover un animal de un punto a otro. Requiere una planificación que considere su fisiología, comportamiento gregario, sensibilidad al estrés y necesidad de estabilidad física. Aplicar buenas prácticas de manejo reduce riesgos, mejora el bienestar animal y garantiza el cumplimiento normativo.

        h4(data-aos="fade-left") Buenas prácticas de manejo
        p.mb-5 Estas acciones operativas minimizan el sufrimiento animal y mejoran la eficiencia del transporte.

        .row.justify-content-center.mb-5
          .col-lg-10
            .bg-color-8.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/87.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Transportarlos individualmente en compartimentos.</b> Mejora la estabilidad y evita peleas, salvo potros que deben viajar junto a la madre.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Reducir estímulos estresantes.</b> Evita reacciones de miedo, ansiedad y posibles accidentes.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>Programar paradas cada 8 horas (WOAH, 2023).</b> Permite hidratación, descanso y recuperación fisiológica.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 <b>No transportar animales enfermos o en mala condición corporal.</b> Protege al individuo vulnerable y evita complicaciones durante el viaje.

        h4(data-aos="fade-left") Factores de estrés y riesgos asociados
        p.mb-5 Reconocer y mitigar estos factores es clave para preservar la salud física y emocional del equino durante el viaje.

        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Factores de estrés en el transporte equino y medidas de prevención

        .tabla-a.color-acento-contenido.mb-5.pst
          table
            thead
              tr
                th.bg-color-6 Factor de estrés
                th.bg-color-6 Descripción / Riesgo
                th.bg-color-6 Recomendación
            tbody
              tr.bg-color-sintesis
                th Estrés térmico
                td Zona de confort: 5-25 °C. A partir de 28 °C, riesgo de jadeo, cólicos y fatiga.
                td Programar viajes nocturnos en climas cálidos.
              tr.bg-color-white
                th Privación de agua y alimento
                td Favorece la deshidratación y úlceras gástricas, sobre todo en viajes largos.
                td Proporcionar agua cada 8 h y alimento cada 12 h (WOAH).
              tr.bg-color-sintesis
                th Movimientos del vehículo
                td Vibraciones, frenadas y giros bruscos provocan pérdida de equilibrio y caídas.
                td Uso de divisiones internas y densidad adecuada para mejorar la estabilidad.
              tr.bg-color-white
                th Aislamiento social
                td El aislamiento total puede generar ansiedad, ya que son animales gregarios.
                td Evitarlo siempre que sea posible, salvo en el caso de machos enteros.

    .bg-full-width.bg-color-11
      .px-4.px-md-5
        .row.mb-5
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/88.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            p(data-aos="fade-left") El transporte de equinos debe ser considerado una actividad especializada, que exige conocimientos sobre comportamiento animal, fisiología, diseño de vehículos y normativas vigentes. La correcta densidad de carga, el uso de divisiones internas, la implementación de ventilación adecuada y un manejo humanitario son condiciones mínimas para garantizar la seguridad y el bienestar.

            .bg-color-2.tarjeta.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/89.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Cumplir con la Resolución ICA 136 de 2020, la Ley 1774 de 2016, y los lineamientos del Ministerio de Transporte, así como con los estándares de la WOAH (2023) y la Federación Ecuestre Internacional (FEI), no solo protege a los animales, sino también a los operarios, transportadores y al sistema productivo.
            p Un transporte deficiente representa pérdidas económicas, sanciones legales y daño ético para quienes participan en la cadena pecuaria. Por tanto, la planificación, el respeto al comportamiento animal y la aplicación rigurosa de las buenas prácticas deben ser la norma, no la excepción.
        
        separador
        
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.5 Ovinos y caprinos: densidad, estabilidad y comportamiento en el transporte
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/90.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El transporte de ovinos y caprinos representa una fase crítica dentro de la cadena pecuaria, especialmente por sus características anatómicas, fisiológicas y etológicas. Estas especies, al ser animales gregarios, de menor tamaño corporal y altamente sensibles al aislamiento, la sobrecarga y la manipulación brusca, requieren condiciones específicas que aseguren su bienestar durante el desplazamiento.
        
            .bg-color-3.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/91.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El manejo inadecuado puede provocar estrés severo, lesiones, pérdidas de peso, mortalidad y deterioro en la calidad del producto final (carne o leche). En Colombia, estos aspectos están regulados por la Resolución ICA 136 de 2020, complementada por las recomendaciones de la WOAH (2023).

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Densidad recomendada
        
        p.mb-5 El espacio asignado por animal debe permitir que se mantengan de pie con estabilidad, sin amontonamiento, y que puedan realizar ajustes posturales sin riesgo de caídas o asfixia.
  
    .titulo-sexto.color-acento-contenido
      h5 Tabla 6.
      span Capacidad de transporte según categoría de ovinos y caprinos

    .tabla-a.color-acento-contenido.mb-5.pst
      table
        thead
          tr
            th.bg-color-6 Clasificación
            th.bg-color-6 Peso vivo (kg)
            th.bg-color-6 Área mínima por animal (m²)
            th.bg-color-6 Capacidad estimada por vehículo (12 m²)
        tbody
          tr.bg-color-sintesis
            td Corderos y cabritos
            td 15 - 25
            td 0.20 - 0.25
            td 45 - 55
          tr.bg-color-white
            td Ovinos/caprinos medianos
            td 30 - 45
            td 0.30 - 0.35
            td 30 - 40
          tr.bg-color-sintesis
            td Ovinos/caprinos adultos
            td 50 - 70
            td 0.40 - 0.50
            td 20 - 25
          tr.bg-color-white
            td Machos adultos de mayor tamaño
            td 75 - 90
            td 0.55 - 0.60
            td 15 - 18

    .bg-color-8.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/92.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La Resolución ICA 136 de 2020 prohíbe sobrepasar estas densidades y exige el uso de vehículos con piso antideslizante, ventilación natural y divisiones internas para separar animales según edad, peso o condición fisiológica.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estabilidad y condiciones técnicas del vehículo
    
    p.mb-5 El diseño del vehículo y sus componentes internos deben garantizar la seguridad, evitar caídas o lesiones, y mantener una ventilación adecuada.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.p-lg-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/93.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Piso antideslizante
                p.text-center Puede recubrirse con paja, viruta o caucho. Absorbe humedad y previene caídas.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/94.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ventilación
                p.text-center Ventanas laterales o rejillas que permitan circulación constante de aire y eviten acumulación de gases.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/95.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Rampas de carga
                p.text-center Inclinación máxima de 20°, con superficie antideslizante y sin huecos donde puedan quedar atrapadas las patas.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/96.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Divisiones internas
                p.text-center Separar animales por peso, sexo o condición. Indispensables para hembras gestantes.
              .bg-color-12.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/97.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Altura mínima del vehículo
                p.text-center Al menos 1.8 m para permitir postura natural y buena ventilación.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/93.png', alt='')
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Comportamiento y bienestar animal
        p.mb-5 La organización del grupo, la interacción social y la reducción de estímulos estresantes son fundamentales para mantener el equilibrio emocional de ovinos y caprinos.
    
    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/98.png")
            .col-lg-7
              h5 Comportamiento gregario
              p Deben viajar en grupos pequeños y homogéneos. El aislamiento genera ansiedad y desorientación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/99.png")
            .col-lg-7
              h5 Mezcla de lotes desconocidos
              p Puede provocar peleas, estrés y lesiones. Evitar mezclar animales de distinta procedencia o tamaño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/100.png")
            .col-lg-7
              h5 Ruido, golpes y cambios bruscos de luz
              p Aumentan la liberación de cortisol y el riesgo de accidentes. Mantener entorno silencioso y con iluminación suave.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/101.png")
            .col-lg-7
              h5 Manipulación brusca
              p Prohibido el uso de gritos, picanas eléctricas o golpes. Favorecer el uso de movimientos suaves y calmados.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Factores de estrés frecuentes y sus consecuencias
    
    p.mb-5 Identificar y controlar estos factores permite proteger la integridad física y emocional del animal.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/102.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="a").colr
          .div(titulo="Estrés térmico (> 28 °C)")
            p Jadeo, hipertermia, colapsos, mayor vulnerabilidad en corderos y cabritos. Transportar en horas frescas y garantizar ventilación adecuada.
    
          .div(titulo="Privación de agua/alimento")
            p Deshidratación, disminución del rendimiento, úlceras. Proveer agua cada 8 h en viajes prolongados.
    
          .div(titulo="Ayuno prolongado")
            p Pérdida de peso en canal, debilidad, trastornos digestivos. Minimizar tiempo sin alimento antes del transporte.
    
          .div(titulo="Manipulación agresiva")
            p Aumento del cortisol, inmunosupresión, conductas de evasión. Capacitar al personal en manejo ético y uso de herramientas apropiadas.
    
    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/103.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Señales de incomodidad y estrés en ovinos/caprinos:
    
        .bg-color-1.tarjeta.p-4(data-aos="fade-left")
          .bg-color-white.tarjeta.p-5
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.order-2
                img(src="@/assets/curso/tema1/104.svg", style="max-width: 346px").mx-auto
              .col-lg.order-1.mb-3.mb-lg-0
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Jadeo constante.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Vocalización excesiva.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Agitación o comportamiento errático.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Intentos de saltar, tumbarse o escapar.
                  li.mb-0.d-flex
                    i.fa-solid.fa-circle-check.bg-color-5
                    p.mb-0 Actitud apática o inmóvil.

          
       
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
