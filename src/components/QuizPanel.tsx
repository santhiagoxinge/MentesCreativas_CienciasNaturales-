import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import type { QuizQuestion } from "../data/lessons";

type QuizPanelProps = {
  questions: QuizQuestion[];
  answers: Record<number, string>;
  onAnswer: (index: number, value: string) => void;
  onReset: () => void;
};

const QuizPanel = ({ questions, answers, onAnswer, onReset }: QuizPanelProps) => {
  const answeredCount = Object.keys(answers).length;
  const score = questions.filter((question, index) => answers[index] === question.answer).length;

  return (
    <section className="quiz-panel" aria-labelledby="quiz-title">
      <div className="section-heading">
        <p className="eyebrow">Prueba de aceptacion del aprendizaje</p>
        <h2 id="quiz-title">Reto rapido</h2>
      </div>

      <div className="score-strip" aria-live="polite">
        <span>
          Puntaje: <strong>{score}</strong> de {questions.length}
        </span>
        <span>
          Respondidas: <strong>{answeredCount}</strong>
        </span>
      </div>

      <div className="question-list">
        {questions.map((question, index) => {
          const selected = answers[index];
          const isCorrect = selected === question.answer;

          return (
            <article className="question-card" key={question.prompt}>
              <h3>{question.prompt}</h3>
              <div className="option-grid">
                {question.options.map((option) => (
                  <button
                    className={`option-button ${selected === option ? "is-selected" : ""}`}
                    key={option}
                    onClick={() => onAnswer(index, option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {selected && (
                <p className={`feedback ${isCorrect ? "feedback-ok" : "feedback-error"}`} role="status">
                  {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                  {question.explanation}
                </p>
              )}
            </article>
          );
        })}
      </div>

      <button className="ghost-button" onClick={onReset} type="button">
        <RotateCcw size={18} />
        Reiniciar reto
      </button>
    </section>
  );
};

export default QuizPanel;
