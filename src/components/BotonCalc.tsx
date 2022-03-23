import { Text, View, TouchableOpacity } from "react-native";

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = "#2D2D2D",
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          height: 80,
          width: ancho ? 180 : 80,
          backgroundColor: color,
          borderRadius: 100,
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            padding: 10,
            fontSize: 30,
            color: color === "#9B9B9B" ? "black" : "white",
            fontWeight: "300",
          }}
        >
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
