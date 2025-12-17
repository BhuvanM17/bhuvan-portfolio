import { create } from 'zustand';

export const useStore = create((set) => ({
  activeApp: null,
  openApps: {}, // { appID: { id, title, isOpen, isMinimized, zIndex, component } }
  maxZIndex: 1,

  openApp: (appId, title, component) => set((state) => {
    if (state.openApps[appId]) {
      // Bring to front
      return {
        activeApp: appId,
        openApps: {
          ...state.openApps,
          [appId]: { ...state.openApps[appId], isMinimized: false, zIndex: state.maxZIndex + 1 }
        },
        maxZIndex: state.maxZIndex + 1
      };
    }
    return {
      activeApp: appId,
      openApps: {
        ...state.openApps,
        [appId]: { id: appId, title, isOpen: true, isMinimized: false, zIndex: state.maxZIndex + 1, component }
      },
      maxZIndex: state.maxZIndex + 1
    };
  }),

  closeApp: (appId) => set((state) => {
    const newOpenApps = { ...state.openApps };
    delete newOpenApps[appId];
    return { openApps: newOpenApps, activeApp: null };
  }),

  minimizeApp: (appId) => set((state) => ({
    openApps: {
      ...state.openApps,
      [appId]: { ...state.openApps[appId], isMinimized: true }
    },
    activeApp: null
  })),

  focusApp: (appId) => set((state) => ({
    activeApp: appId,
    openApps: {
        ...state.openApps,
        [appId]: { ...state.openApps[appId], zIndex: state.maxZIndex + 1, isMinimized: false }
    },
    maxZIndex: state.maxZIndex + 1
  })),
  
  toggleApp: (appId, title, component) => set((state) => {
    if (state.openApps[appId]) {
      if (state.openApps[appId].isMinimized) {
        // Restore
         return {
            activeApp: appId,
            openApps: {
                ...state.openApps,
                [appId]: { ...state.openApps[appId], zIndex: state.maxZIndex + 1, isMinimized: false }
            },
            maxZIndex: state.maxZIndex + 1
        };
      } else {
        // Minimize? Or focus if not focused?
        // Behavior: If active, minimize. If inactive, focus.
        if (state.activeApp === appId) {
             return {
                openApps: {
                ...state.openApps,
                [appId]: { ...state.openApps[appId], isMinimized: true }
                },
                activeApp: null
            }
        } else {
             return {
                activeApp: appId,
                openApps: {
                    ...state.openApps,
                    [appId]: { ...state.openApps[appId], zIndex: state.maxZIndex + 1, isMinimized: false }
                },
                maxZIndex: state.maxZIndex + 1
            };
        }
      }
    }
    // Open
    return {
      activeApp: appId,
      openApps: {
        ...state.openApps,
        [appId]: { id: appId, title, isOpen: true, isMinimized: false, zIndex: state.maxZIndex + 1, component }
      },
      maxZIndex: state.maxZIndex + 1
    };
  })
}));
