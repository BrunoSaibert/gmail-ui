import { CustomOptions } from "@/@types/navigation";
import { DrawerContent } from "@/components/drawer-content";
import { Drawer } from "expo-router/drawer";

type MenuListItemProps = {
  name: string;
  options: CustomOptions;
};

const MENU_LIST: MenuListItemProps[] = [
  {
    name: "(tabs)",
    options: {
      title: "Todas as Caixas de entrada",
      iconName: "all-inbox",
      notifications: 5,
      isDivider: true,
    },
  },
  {
    name: "inbox",
    options: {
      title: "Entrada",
      iconName: "inbox",
      notifications: 3,
      isDivider: true,
    },
  },
  {
    name: "stars",
    options: {
      title: "Com estrela",
      iconName: "star-outline",
    },
  },
  {
    name: "post-poned",
    options: {
      title: "Adiado",
      iconName: "schedule",
    },
  },
  {
    name: "important",
    options: {
      title: "Importante",
      iconName: "label-important-outline",
    },
  },
  {
    name: "send",
    options: {
      title: "Enviado",
      iconName: "send",
    },
  },
  {
    name: "programmed",
    options: {
      title: "Programado",
      iconName: "schedule-send",
    },
  },

  {
    name: "exit-box",
    options: {
      title: "Caixa de saída",
      iconName: "outbox",
    },
  },

  {
    name: "sketch",
    options: {
      title: "Rascunho",
      iconName: "note",
    },
  },

  {
    name: "all-emails",
    options: {
      title: "Todos os e-mails",
      iconName: "email",
    },
  },

  {
    name: "spam",
    options: {
      title: "Spam",
      iconName: "info-outline",
    },
  },

  {
    name: "trash",
    options: {
      title: "Lixeira",
      iconName: "delete-outline",
      isDivider: true,
    },
  },
  {
    name: "read",
    options: {
      title: "Lidos",
      iconName: "label-important-outline",
      sectionTitle: "Marcadores",
    },
  },
  {
    name: "general",
    options: {
      title: "Geral",
      iconName: "label-important-outline",
      isDivider: true,
    },
  },
  {
    name: "new-marker",
    options: {
      title: "Criar novo",
      iconName: "add",
      isDivider: true,
    },
  },
  {
    name: "config",
    options: {
      title: "Configurações",
      iconName: "settings",
    },
  },
  {
    name: "feedback",
    options: {
      title: "Enviar feedback",
      iconName: "feedback",
    },
  },
  {
    name: "help",
    options: {
      title: "Ajuda",
      iconName: "help-outline",
    },
  },
];

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: "75%" },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {MENU_LIST.map((item) => (
        <Drawer.Screen
          key={item.name}
          name={item.name}
          options={item.options}
        />
      ))}
    </Drawer>
  );
}
