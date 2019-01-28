declare var appVersion: string;
declare var nativeImage: any; // electron nativeImage object
declare var store: any; //storejs
declare var profilesDB: any; //lowDB instance
declare var got: {
  get(url: string, cookieUrl: string, cookies: any[]): Promise<any>
}

declare function openUrlInBrowser(url: string): void;
declare function getCookies(persistId: string, url: string): Promise<any[]>;
declare function getFileIcon(path: string, opts: any, callback: any): any;