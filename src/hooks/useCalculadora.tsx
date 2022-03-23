import { useRef, useState } from "react";

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [number, setNumber] = useState("0");
  const [numberAnterior, setNumberAnterior] = useState("0");

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumber("0");
    setNumberAnterior("0");
  };

  const armarNumber = (numeroText: string) => {
    if (number.includes(".") && numeroText === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numeroText === ".") {
        setNumber(number + numeroText);
      } else if (numeroText === "0" && number.includes(".")) {
        setNumber(number + numeroText);
      } else if (numeroText !== "0" && !number.includes(".")) {
        setNumber(numeroText);
      } else if (numeroText === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + numeroText);
      }
    } else {
      setNumber(number + numeroText);
    }
  };

  const positivoNegativo = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (number.endsWith(".")) {
      setNumberAnterior(number.slice(0, -1));
    } else {
      setNumberAnterior(number);
    }
    setNumber("0");
  };

  const btnDelete = () => {
    let negativo = "";
    let numberTemp = number;
    if (number.includes("-")) {
      negativo = "-";
      numberTemp = number.substr(1);
    }
    if (numberTemp.length > 1) {
      setNumber(negativo + numberTemp.slice(0, -1));
    } else {
      setNumber("0");
    }
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(numberAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumber(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setNumber(`${num2 / num1}`);
        break;
    }
    setNumberAnterior("0");
  };

  return {
    number,
    numberAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumber,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
