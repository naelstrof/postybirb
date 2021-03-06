declare var appVersion: string;
declare function closeAfterPost(): boolean; // flag letting the app know it was only opened to perform a scheduled post and to close once it finishes
declare var nativeImage: any; // electron nativeImage object
declare var store: any; //storejs
declare var descriptionTemplateDB: any; //lowDB instance
declare var tagTemplateDB: any; //lowDB instance
declare var templateDB: any; //lowDB instance
declare var profilesDB: any; //lowDB instance
declare var settingsDB: any; //lowDB instance
declare var loginPanel: any; // login panel hook inserted into window
declare var got: {
  get(url: string, cookieUrl: string, cookies: any[], profileId: string, options?: any): Promise<any>;
  requestGet(url: string, cookieUrl: string, cookies: any[], options?: any): Promise<any>;
  patch(url: string, formData: any, cookieUrl: string, cookies: any[], options?: any): Promise<{ error?: any, success?: { body: any, response: any } }>;
  post(url: string, formData: any, cookieUrl: string, cookies: any[], options?: any): Promise<{ error?: any, success?: { body: any, response: any } }>;
  gotPost(url: string, formData: any, cookieUrl: string, cookies: any[], options?: any): Promise<any>;
  convertCookie(cookie: any): any;
}
declare var ehttp: {
  get(url: string, partition: string, options?: any): Promise<{body: string, headers: any, statusCode: number, statusMessage: string}>;
  post(url: string, partition: string, body: any, options?: any): Promise<{body: string, headers: any, href: string, statusCode: number, statusMessage: string, success: boolean}>;
  browserPost(url: string, partition: string, headers: any, data: any): Promise<string>;
}
declare var chardet: any;
declare var iconv: any;
declare var parse5: any;
declare var sanitize: any;
declare var entities: any;

declare function openUrlInBrowser(url: string): void;
declare function getCookies(persistId: string, url: string): Promise<any[]>;
declare function getCookieAPI(persistId: string): any;
declare function getSession(persistId: string): any;
declare function getFileIcon(path: string, opts: any): Promise<any>;
declare function getClipboardFormats(): any;
declare function readClipboard(): any;
declare function writeToClipboard(data: any): void;
declare function writeJsonToFile(fileName: string, data: any, options?: any): void;
declare function readJsonFile(fileName: string): Promise<any>;
declare function relaunch(): void;
declare function setStartOnLogin(value: boolean): void;
declare var BrowserWindow: any; // Electron BrowserWindow
declare function gifFrames({ url: string, frames: number }): Promise<any>;

declare var auth: {
  deviantart: any;
  mastodon: any;
  tumblr: any;
  twitter: any;
}
declare var AUTH_URL: string;
