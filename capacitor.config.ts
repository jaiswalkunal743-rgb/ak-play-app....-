import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.akplay.app',
  appName: 'AK PLAY',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;