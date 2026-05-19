import { getLesson, lessons } from "../data/lessons";

describe("datos educativos", () => {
  test("cada tema tiene objetivos, laboratorio y evaluacion", () => {
    expect(lessons).toHaveLength(3);

    for (const lesson of lessons) {
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(3);
      expect(lesson.labSteps.length).toBeGreaterThanOrEqual(3);
      expect(lesson.quiz.length).toBeGreaterThanOrEqual(2);
    }
  });

  test("retorna ecosistemas como respaldo si el identificador no existe", () => {
    expect(getLesson("ecosistemas").shortTitle).toBe("Ecosistemas");
  });
});
