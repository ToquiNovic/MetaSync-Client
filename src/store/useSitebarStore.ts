import create from 'zustand'
import { persist } from 'zustand/middleware'

// Define la interfaz para el estado
interface SidebarState {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
  setSidebarVisible: (visible: boolean) => void;
}

// Crear el store con Zustand y persistencia
export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isSidebarVisible: true,
      toggleSidebar: () => set((state: SidebarState) => ({ isSidebarVisible: !state.isSidebarVisible })),
      setSidebarVisible: (visible: boolean) => set({ isSidebarVisible: visible })
    }),
    {
      name: 'sidebar-storage' // Nombre clave en localStorage
    }
  )
)
