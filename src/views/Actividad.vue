<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Bienestar animal en el transporte de especies pecuarias',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con las buenas prácticas, normatividad, condiciones técnicas y manejo adecuado para el transporte de animales en pie, según especie y tipo de transporte.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la temperatura recomendada para mantener el confort térmico en animales durante el transporte?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5 a 10 °C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5 a 25 °C.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '10 a 30 °C.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '15 a 35 °C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué normativa reconoce a los animales como seres sintientes en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 1500 de 2007.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolución 240 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1774 de 2016.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Resolución ICA 136 de 2020.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el espacio mínimo requerido por un cerdo de engorde de 150-250 kg en transporte?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0.30 - 0.40 m².',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '0.45 - 0.55 m².',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '0.60 - 0.70 m².',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '0.75 - 0.85 m².',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el principal efecto del estrés en bovinos durante el transporte?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento de peso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alteración del pH muscular.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminución de temperatura corporal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción del consumo de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de superficie es obligatoria en los vehículos para evitar caídas durante el transporte?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plataforma de acero liso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Piso antideslizante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rejillas metálicas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Superficie inclinada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de transporte se reserva generalmente para animales de alto valor genético?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transporte fluvial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transporte terrestre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transporte aéreo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Transporte ferroviario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el documento obligatorio para movilizar animales en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formulario Único Pecuario (FUP).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Certificado de vacunación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guía Sanitaria de Movilización Interna (GSMI).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Licencia de transporte agropecuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe evitarse en el manejo de aves durante el transporte?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de guacales improvisados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ventilación cruzada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carga en horas frescas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Separación por especie.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el comportamiento característico del equino que indica estrés durante el transporte?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Golpes contra estructuras o intentos de huida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sueño profundo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Silencio total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alimentación frecuente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la densidad recomendada de gallinas ponedoras por metro cuadrado durante el transporte?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '25 - 30 aves/m².',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '40 - 50 aves/m².',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '15 - 20 aves/m².',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '35 - 45 aves/m².',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El uso de picanas eléctricas está permitido si el animal no coopera.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En trayectos mayores a 8 horas, se deben programar descansos con agua y alimento.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La mezcla de lotes desconocidos de cerdos puede causar peleas y heridas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las aves poseen glándulas sudoríparas para regular su temperatura.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Todos los vehículos utilizados para el transporte animal deben contar con divisiones internas según especie y categoría.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
