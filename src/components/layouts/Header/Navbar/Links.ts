import { Pages, Routes } from "@/components/constants/enums";

const links = [
  { id: crypto.randomUUID(), title: "Menu", href: `/${Routes.MENU}` },
  { id: crypto.randomUUID(), title: "About", href: `/${Routes.ABOUT}` },
  { id: crypto.randomUUID(), title: "Contact", href: `/${Routes.CONTACT}` },
  {
    id: crypto.randomUUID(),
    title: "Login",
    href: `${Routes.AUTH}/${Pages.LOGIN}`,
  },
];

export default links;
