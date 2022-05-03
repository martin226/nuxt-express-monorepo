declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      DATABASE_URI: string;
      PORT?: number;
    }
  }
}

export {};
