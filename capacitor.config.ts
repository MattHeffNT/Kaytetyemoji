import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.kaytetyemoji.app",
  appName: "Kaytetyemoji",
  webDir: "build",
  plugins: {
    SplashScreen: {
      // Android launch screen (plain orange on Android 12+) shows for 0.5s,
      // then the full artwork overlay from index.html takes over.
      launchShowDuration: 500,
      launchAutoHide: true,
      launchFadeOutDuration: 300,
      backgroundColor: "#D47732",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
