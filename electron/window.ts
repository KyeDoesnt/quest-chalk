import { screen, BrowserWindow, Display, BrowserWindowConstructorOptions } from 'electron';
import * as path from 'path';

require('@electron/remote/main').initialize();

export class Window {
    private _window: BrowserWindow | null = null;
    private _closed = false;
    private _last_display = -1;

    constructor() {}

    /**
     * Creates BrowserWindow object.
     */
    public createWindow(): void {
        const options: BrowserWindowConstructorOptions = {
            title : 'Chalk',
            // icon  : (process.platform === 'linux') ? path.join(__dirname, 'assets', 'icon.png'),

            autoHideMenuBar : true,
            show            : false,
            // TODO : Create borderless window display.
            // frame           : false,

            // TODO : Get display with lastDisplay and center the window in said display.
            x : 20,
            y : 20,

            width  : default_window_config.width,
            height : default_window_config.height,

            minWidth  : min_window_size.width,
            minHeight : min_window_size.height,

            webPreferences: {
                preload            : path.join(__dirname, 'preload.js'),
                // enableRemoteModule : true,
                nodeIntegration    : true,
                // contextIsolation : false,
            },
        };

        this._window = new BrowserWindow(options);

        this._window.webContents.openDevTools();

        this.registerListeners();
    }

    /**
     * Loads file or url to window.
     * @param path_type {PathType} 'file' or 'url'.
     * @param target_path {string} Path to file or url.
     */
    public load(path_type: PathType, target_path: string): void {
        if(this._window === null) return;

        if(path_type === 'file') this._window.loadFile(target_path);
        else this._window.loadURL(target_path);
    }

    private registerListeners(): void {
        this._window?.on('close', evt => {
            if(!this._closed) {
                evt.preventDefault();
                this._closed = true;
                this._window?.close();
                this._window = null;
            }
        });

        this.window?.on('ready-to-show', this.window?.show);
    }

    public get window(): BrowserWindow | null {
        return this._window;
    }

    public get is_closed(): boolean {
        return this._closed;
    }

    private get last_display(): number {
        if(this._last_display !== -1) return this._last_display;

        // TODO : Fetch config.
        return 0;
    }

    private setLastDisplay(): number {
        // TODO : Store the last display the window was on.
        return this.last_display;
    }
}