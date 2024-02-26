import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

export function FloatButton() {
  return (
    <TouchableOpacity
      className="px-4 py-3 bg-gray-600 rounded-full absolute right-4 bottom-4 gap-1 flex-row items-center"
      activeOpacity={0.7}
    >
      <MaterialIcons name="edit" size={22} color={colors.orange[500]} />
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </TouchableOpacity>
  );
}
