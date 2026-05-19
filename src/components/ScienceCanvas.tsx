import type { LessonId } from "../data/lessons";

type ScienceCanvasProps = {
  lessonId: LessonId;
};

const ScienceCanvas = ({ lessonId }: ScienceCanvasProps) => {
  return (
    <div className={`science-canvas science-canvas--${lessonId}`} aria-label="Grafico 3D educativo">
      {lessonId === "ecosistemas" && <EcosystemModel />}
      {lessonId === "ciclo-agua" && <WaterCycleModel />}
      {lessonId === "cuerpo-humano" && <HumanBodyModel />}
    </div>
  );
};

const EcosystemModel = () => (
  <div className="ecosystem-model" data-testid="ecosystem-model">
    <span className="layer layer-sky">Luz</span>
    <span className="layer layer-trees">Productores</span>
    <span className="layer layer-water">Agua</span>
    <span className="layer layer-soil">Suelo</span>
    <span className="model-badge">Biotico + abiotico</span>
  </div>
);

const WaterCycleModel = () => (
  <div className="water-model" data-testid="water-model">
    <span className="sun" aria-label="Sol" />
    <span className="cloud cloud-one" />
    <span className="cloud cloud-two" />
    <span className="water-path path-up">Evaporacion</span>
    <span className="water-path path-down">Precipitacion</span>
    <span className="surface-water">Infiltracion</span>
  </div>
);

const HumanBodyModel = () => (
  <div className="human-model" data-testid="human-model">
    <span className="head" />
    <span className="torso">
      <span className="lungs" />
      <span className="heart" />
      <span className="stomach" />
    </span>
    <span className="system-label system-label-top">Respirar</span>
    <span className="system-label system-label-bottom">Transportar energia</span>
  </div>
);

export default ScienceCanvas;
