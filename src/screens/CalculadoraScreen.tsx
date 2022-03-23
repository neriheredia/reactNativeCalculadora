import { Text, View } from "react-native";
import { BotonCalc } from "../components/BotonCalc";
import { useCalculadora } from "../hooks/useCalculadora";
import { styles } from "../theme/appTheme";

export const CalculadoraScreen = () => {
  const {
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
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numberAnterior !== "0" && (
        <Text style={styles.resultadoPequeño}>{numberAnterior}</Text>
      )}

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {number}
      </Text>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" action={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" action={btnDividir} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="7" action={armarNumber} />
        <BotonCalc texto="8" action={armarNumber} />
        <BotonCalc texto="9" action={armarNumber} />
        <BotonCalc texto="x" color="#FF9427" action={btnMultiplicar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="4" action={armarNumber} />
        <BotonCalc texto="5" action={armarNumber} />
        <BotonCalc texto="6" action={armarNumber} />
        <BotonCalc texto="-" color="#FF9427" action={btnRestar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="1" action={armarNumber} />
        <BotonCalc texto="2" action={armarNumber} />
        <BotonCalc texto="3" action={armarNumber} />
        <BotonCalc texto="+" color="#FF9427" action={btnSumar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="0" ancho action={armarNumber} />
        <BotonCalc texto="." action={armarNumber} />
        <BotonCalc texto="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
