import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Mentes Creativas Ciencias Naturales", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "SpeechSynthesisUtterance", {
      configurable: true,
      value: jest.fn().mockImplementation((text: string) => ({
        text,
        lang: "",
        rate: 1
      }))
    });

    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        cancel: jest.fn(),
        speak: jest.fn()
      }
    });
  });

  test("muestra los tres temas de ciencias naturales", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Ciencias Naturales/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Ecosistemas/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Ciclo del agua/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cuerpo humano/i })).toBeInTheDocument();
  });

  test("permite cambiar de tema y resolver una pregunta", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Ciclo del agua/i }));
    expect(screen.getByRole("heading", { name: /Ciclo del agua/i })).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: /Evaluacion/i }));
    await user.click(screen.getByRole("button", { name: "Evaporacion" }));

    expect(screen.getByText(/Puntaje:/i)).toHaveTextContent("1 de 2");
    expect(screen.getByText(/La evaporacion ocurre/i)).toBeInTheDocument();
  });

  test("activa el recurso de audio con Web Speech API", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Escuchar guia/i }));

    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1);
  });

  test("muestra el laboratorio sin indicador de carga permanente", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("tab", { name: /Laboratorio/i }));

    expect(screen.getByRole("heading", { name: /Laboratorio interactivo/i })).toBeInTheDocument();
    expect(screen.getByText(/Simulacion lista/i)).toBeInTheDocument();
    expect(screen.queryByText(/cargando/i)).not.toBeInTheDocument();
  });
});
