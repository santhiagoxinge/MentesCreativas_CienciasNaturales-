import { Droplets, HeartPulse, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LessonId = "ecosistemas" | "ciclo-agua" | "cuerpo-humano";

export type QuizQuestion = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type Lesson = {
  id: LessonId;
  title: string;
  shortTitle: string;
  grade: string;
  icon: LucideIcon;
  summary: string;
  multimedia: string;
  objectives: string[];
  keywords: string[];
  labSteps: string[];
  audioScript: string;
  quiz: QuizQuestion[];
};

export const lessons: Lesson[] = [
  {
    id: "ecosistemas",
    title: "Ecosistemas vivos",
    shortTitle: "Ecosistemas",
    grade: "4 y 5",
    icon: Leaf,
    summary:
      "Los estudiantes identifican relaciones entre seres vivos, suelo, agua, luz y temperatura dentro de un ecosistema cercano.",
    multimedia:
      "Explorador visual con capas del suelo, vegetacion, agua y animales para explicar factores bioticos y abioticos.",
    objectives: [
      "Diferenciar factores bioticos y abioticos.",
      "Explicar una cadena alimenticia simple.",
      "Reconocer acciones que protegen un ecosistema local."
    ],
    keywords: ["Biotico", "Abiotico", "Habitat", "Productor", "Consumidor"],
    labSteps: [
      "Observa el grafico 3D y ubica el agua, el suelo y los seres vivos.",
      "Selecciona dos factores bioticos y dos abioticos.",
      "Escribe una accion para cuidar el ecosistema del colegio."
    ],
    audioScript:
      "Un ecosistema esta formado por seres vivos y elementos no vivos que interactuan. Las plantas producen alimento, los animales consumen energia y el agua, la luz y el suelo permiten que la vida se mantenga.",
    quiz: [
      {
        prompt: "Que elemento es un factor abiotico?",
        options: ["Luz solar", "Rana", "Arbol"],
        answer: "Luz solar",
        explanation: "La luz solar no esta viva, pero influye en la vida del ecosistema."
      },
      {
        prompt: "Que organismo suele iniciar una cadena alimenticia?",
        options: ["Productor", "Depredador final", "Descomponedor"],
        answer: "Productor",
        explanation: "Los productores, como las plantas, fabrican alimento usando energia solar."
      }
    ]
  },
  {
    id: "ciclo-agua",
    title: "Ciclo del agua",
    shortTitle: "Ciclo del agua",
    grade: "4 y 5",
    icon: Droplets,
    summary:
      "El modulo muestra como el agua cambia de estado y se mueve entre superficie, atmosfera y suelo.",
    multimedia:
      "Animacion tipo video con fases del ciclo del agua y ruta visual de evaporacion, condensacion, precipitacion e infiltracion.",
    objectives: [
      "Ordenar las etapas principales del ciclo del agua.",
      "Relacionar calor solar con evaporacion.",
      "Explicar por que el agua se conserva en el planeta."
    ],
    keywords: ["Evaporacion", "Condensacion", "Precipitacion", "Infiltracion", "Escorrentia"],
    labSteps: [
      "Reproduce la animacion y sigue la ruta del agua.",
      "Relaciona cada etapa con un cambio observable.",
      "Describe que pasaria si disminuyeran las lluvias en tu comunidad."
    ],
    audioScript:
      "El ciclo del agua es un recorrido continuo. El sol calienta rios y mares, el agua se evapora, forma nubes, cae como lluvia y vuelve a rios, lagos o al suelo.",
    quiz: [
      {
        prompt: "Que proceso forma vapor por accion del calor?",
        options: ["Evaporacion", "Precipitacion", "Infiltracion"],
        answer: "Evaporacion",
        explanation: "La evaporacion ocurre cuando el agua liquida pasa a vapor por el calor."
      },
      {
        prompt: "Como se llama la caida de agua desde las nubes?",
        options: ["Condensacion", "Precipitacion", "Fotosintesis"],
        answer: "Precipitacion",
        explanation: "La precipitacion incluye lluvia, granizo o nieve."
      }
    ]
  },
  {
    id: "cuerpo-humano",
    title: "Cuerpo humano",
    shortTitle: "Cuerpo humano",
    grade: "4 y 5",
    icon: HeartPulse,
    summary:
      "Los estudiantes reconocen sistemas del cuerpo humano y los relacionan con funciones vitales como respirar, moverse y transportar nutrientes.",
    multimedia:
      "Modelo 3D simplificado con organos y paneles de sistemas para apoyar la exploracion visual.",
    objectives: [
      "Relacionar organos con sistemas del cuerpo.",
      "Explicar una funcion vital con palabras propias.",
      "Reconocer habitos saludables para cuidar el cuerpo."
    ],
    keywords: ["Respiratorio", "Circulatorio", "Digestivo", "Muscular", "Salud"],
    labSteps: [
      "Observa el modelo y selecciona un sistema.",
      "Relaciona el sistema con una funcion vital.",
      "Propone un habito saludable asociado al sistema elegido."
    ],
    audioScript:
      "El cuerpo humano funciona por sistemas. El respiratorio permite tomar oxigeno, el circulatorio transporta sustancias, el digestivo aprovecha nutrientes y los musculos ayudan al movimiento.",
    quiz: [
      {
        prompt: "Que sistema transporta oxigeno y nutrientes por la sangre?",
        options: ["Circulatorio", "Digestivo", "Oseo"],
        answer: "Circulatorio",
        explanation: "El sistema circulatorio mueve la sangre por el cuerpo."
      },
      {
        prompt: "Que habito ayuda al sistema respiratorio?",
        options: ["Evitar humo", "No beber agua", "Dormir poco"],
        answer: "Evitar humo",
        explanation: "Evitar humo y contaminantes protege los pulmones."
      }
    ]
  }
];

export const getLesson = (lessonId: LessonId) =>
  lessons.find((lesson) => lesson.id === lessonId) ?? lessons[0];
