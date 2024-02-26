import { FlatList, Text, View } from "react-native";

import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import { Avatar } from "@/components/avatar";
import { Email } from "@/components/email";
import { EMAILS } from "@/utils/emails";
import { FloatButton } from "@/components/float-button";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: "https://github.com/BrunoSaibert.png" }}
          size="small"
        />
      </Input>
      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="text-sm uppercase text-gray-400 font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
      <FloatButton />
    </View>
  );
}