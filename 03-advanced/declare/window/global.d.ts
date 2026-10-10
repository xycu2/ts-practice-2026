declare global {
  interface Window {
    myCustomAppConfig: {
      apiEndpoint: string;
      debugMode: boolean;
    };
  }
}
export {}