"use client";

import { useCartSyncFromLocalStorage } from "./useCartSyncFromLocalStorage";

export default function CartInitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useCartSyncFromLocalStorage(); 
  return <>{children}</>;
}
