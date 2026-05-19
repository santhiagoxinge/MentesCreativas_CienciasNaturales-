import { useMemo, useState } from "react";
import { BookOpen, CheckCircle2, ClipboardList, ExternalLink, PlayCircle, Volume2 } from "lucide-react";
import QuizPanel from "./components/QuizPanel";
import ScienceCanvas from "./components/ScienceCanvas";
import { getLesson, lessons, type LessonId } from "./data/lessons";

type Tab = "explorar" | "laboratorio" | "evaluacion";

const App = () => {
  const [lessonId, setLessonId] = useState<LessonId>("ecosistemas");
  const [activeTab, setActiveTab] = useState<Tab>("explorar");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const lesson = useMemo(() => getLesson(lessonId), [lessonId]);

  const speakLesson = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(lesson.audioScript);
    utterance.lang = "es-CO";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const handleLessonChange = (nextLessonId: LessonId) => {
    setLessonId(nextLessonId);
    setAnswers({});
    setActiveTab("explorar");
  };

  return (
    <main className="app-shell">
      <aside className="side-panel" aria-label="Menu de temas">
        <div className="brand-block">
          <span className="brand-mark">MC</span>
          <div>
            <p>Colegio Mentes Creativas</p>
            <h1>Ciencias Naturales</h1>
          </div>
        </div>

        <nav className="lesson-nav">
          {lessons.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={`lesson-nav-item ${item.id === lessonId ? "is-active" : ""}`}
                key={item.id}
                onClick={() => handleLessonChange(item.id)}
                type="button"
              >
                <Icon size={20} />
                <span>{item.shortTitle}</span>
              </button>
            );
          })}
        </nav>

        <div className="quality-note">
          <ClipboardList size={18} />
          <p>ISO/IEC 25010: usabilidad medida por aprendizaje guiado y operabilidad.</p>
        </div>
      </aside>

      <section className="content-stage">
        <header className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Aplicacion multimedia para grados {lesson.grade}</p>
            <h2>{lesson.title}</h2>
            <p>{lesson.summary}</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={speakLesson} type="button">
                <Volume2 size={18} />
                Escuchar guia
              </button>
              <a className="secondary-button" href="/api/lessons.json" target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                Ver datos
              </a>
            </div>
          </div>
          <ScienceCanvas lessonId={lesson.id} />
        </header>

        <div className="tab-list" role="tablist" aria-label="Secciones del modulo">
          <button
            className={activeTab === "explorar" ? "is-active" : ""}
            onClick={() => setActiveTab("explorar")}
            role="tab"
            type="button"
          >
            <BookOpen size={18} />
            Explorar
          </button>
          <button
            className={activeTab === "laboratorio" ? "is-active" : ""}
            onClick={() => setActiveTab("laboratorio")}
            role="tab"
            type="button"
          >
            <PlayCircle size={18} />
            Laboratorio
          </button>
          <button
            className={activeTab === "evaluacion" ? "is-active" : ""}
            onClick={() => setActiveTab("evaluacion")}
            role="tab"
            type="button"
          >
            <CheckCircle2 size={18} />
            Evaluacion
          </button>
        </div>

        {activeTab === "explorar" && (
          <section className="learning-grid" aria-labelledby="explorar-title">
            <div className="section-heading">
              <p className="eyebrow">Recurso multimedia</p>
              <h2 id="explorar-title">Conceptos clave</h2>
            </div>
            <article className="learning-card learning-card-wide">
              <h3>Objetivos funcionales del tema</h3>
              <ul>
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </article>
            <article className="learning-card">
              <h3>Palabras clave</h3>
              <div className="keyword-list">
                {lesson.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
            <article className="learning-card">
              <h3>Multimedia usado</h3>
              <p>{lesson.multimedia}</p>
            </article>
          </section>
        )}

        {activeTab === "laboratorio" && (
          <section className="lab-panel" aria-labelledby="lab-title">
            <div className="section-heading">
              <p className="eyebrow">Actividad guiada</p>
              <h2 id="lab-title">Laboratorio interactivo</h2>
            </div>
            <ol>
              {lesson.labSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="video-simulation" aria-label="Animacion educativa tipo video">
              <span />
              <p>Animacion multimedia: {lesson.shortTitle}</p>
            </div>
          </section>
        )}

        {activeTab === "evaluacion" && (
          <QuizPanel
            answers={answers}
            onAnswer={(index, value) => setAnswers((current) => ({ ...current, [index]: value }))}
            onReset={() => setAnswers({})}
            questions={lesson.quiz}
          />
        )}
      </section>
    </main>
  );
};

export default App;
