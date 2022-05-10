import React from 'react'

export const productData =  [
        {
            name:'AGENDA PERSONALIZADA',
            id:'1',
            description:'  Datos personales Calendario 2022 Planificación mensual (12 meses)  Planificación semanal (60 semanas  Pago de cuentas  Contactos Notas  Diseño personalizado  Tamaño A5 Portada y contraportada dura laminada  Anillado metálico lateral'
           ,
            price:'4000',
            img:'https://1.bp.blogspot.com/-1WXU7ByHl7o/YBMUNpIdo3I/AAAAAAAAAl0/onO44NGWJnoj2mP-tE_7ZuZcz1ZlB2CagCLcBGAsYHQ/s16000/slider%2B1.png'
        },
        {
            name:'PLANNER ENFERMEROS',
            id:'2',
            description:'  Datos personales,  Calendario 2022,  Planificación mensual (12 meses),  Planificación semanal (60 semanas),  Mis turnos,  Medicamentos,  Registro pacientes, Diseño personalizado, Tamaño A5, Portada y contraportada dura laminada, Anillado metálico lateral',
            price:'40',
            img:'https://www.estampasionate.cl/wp-content/uploads/2021/04/agendaenfermera1-1.jpg'
        },
        {
            name:'PLANNER MEDICOS',
            id:'3',
            description:'  Datos personales, Calendario 2022, Planificación mensual (12 meses), Planificación semanal (60 semanas), Fechas importantes, Medicamentos, Evaluación de pacientes, Fichas de evaluación, Diseño , Tamaño , Portada y contraportada dura , Anillado metálico lateral',
            price:'50',
            img:'https://cucasana.com/wp-content/uploads/2019/08/agenda-medicos1.jpg'
        },
        {
            name:'PLANNER ED. DE PARVULOS',
            id:'4',
            description:'  Datos personales, Calendario 2022, Cumpleaños, Planificación mensual (12 meses), Planificación semanal (60 semanas), Horario (12 meses), Registro/Datos de niños y niñas, Actividades extra del año, Notas, Diseño personalizado, Tamaño A5, Portada y contraportada dura laminada, Anillado metálico lateral',
            price:'100',
            img:'https://www.estampasionate.cl/wp-content/uploads/2020/11/tiaparvulo8-600x521.jpg'
        },
        {
            name:'PLANNER FONOAUDIOLOGOS',
            id:'5',
            description:'   Datos personales, Calendario 2022, Planificación mensual (12 meses), Planificación semanal (60 semanas), Fechas importantes, Medicamentos, Evaluación de pacientes, Fichas de evaluación, Diseño personalizado, Tamaño A5, Portada y contraportada dura laminada, Anillado metálico lateral',
            price:'200',
            img:'https://www.estampasionate.cl/wp-content/uploads/2021/01/fono1-600x498.jpg'
        },
        {
            name:'PLANNER TERAPEUTA OCUPACIONAL',
            id:'6',
            description:'   Datos personales, Calendario 2022, Planificación mensual (12 meses), Planificación semanal (60 semanas), Planificación talleres, Entrevistas apoderado/tutor, Ficha pacientes, Contacto pacientes, Diseño personalizado, Tamaño A5, Portada y contraportada dura laminada, Anillado metálico lateral',
            price:'100',
            img:'https://www.ceroseisocho.cl/wp-content/uploads/2021/05/ter.jpg'
        },
        {
            name:'PLANNER PYME',
            id:'7',
            description:' Datos personales, Calendario 2022, Metas del año, Planificación mensual (12 meses), Planificación semanal (60 semanas), Hojas de pedidos (Para 100 pedidos), Control de finanzas (12 meses), Diseño personalizado Tamaño A5 Portada y contraportada dura laminada Anillado metálico lateral',
            price:'3000',
            img:'http://decodeti.cl/58-large_default/agenda-de-pedidos.jpg'
        },
        
    ]


const task = new Promise ((resp)=>{
    resp(productData)
},2000)

export const getItemData=()=>{
    return task
}