// #REGION // Configuration. //////////////////////////////////////////////////

/**
 * The default state of the window. Will start with this every time.
 */
const default_window_state: WindowState = {
    width  : 900,
    height : 750,
    mode   : 'normal',
};

const min_window_size: Dimensions = {
    width  : 500,
    height : 400,
};

// #ENDREGION Configuration. //////////////////////////////////////////////////



// #REGION // Declaration. ////////////////////////////////////////////////////

import { screen, BrowserWindow, BrowserWindowConstructorOptions, Display, nativeImage } from 'electron';

const path = require('path');
const os   = require('os');

type WindowMode = 'normal' | 'maximized';

type Platform = 'aix' | 'android' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32';

/**
 * Placeholder window for typescript, so it stops screaming at me, even though I declared it. 😭
 */
const placeholder_window = {} as BrowserWindow;

/**
 * Specifies dimensions of a window or display.
 */
export interface Dimensions {
    x?      : number;
    y?      : number;
    width?  : number;
    height? : number;
};

/**
 * Keeps the state the window was in, like sizing, positioning, and which display it was on.
 */
 export interface WindowState {
    x?       : number;
    y?       : number;
    width?   : number;
    height?  : number;
    mode?    : WindowMode;
    display? : number;
}

// #ENDREGION Declaration. ////////////////////////////////////////////////////



// TODO : Make a prefs folder somewhere, depending on the OS. ( like %appdata% )

/**
 * 
 */
export class Window {
    private _window: BrowserWindow = placeholder_window;
    private _last_display = -1;
    private _is_closed = false;

    constructor() {
        this.createWindow();
        this.registerListeners();
    }

    public createWindow(): void {
        let icon_path: string = path.join(__srcdir, 'assets', 'icon.png');

        switch(getPlatform()) {
            case 'win32':
                icon_path = path.join(__srcdir, 'assets', 'icon48.ico');
                break;
            case 'darwin':
                icon_path = '';
                break;
        }

        const options: BrowserWindowConstructorOptions = {
            title : 'Chalk for Quest',
            icon  : isPlatformLinux() ? icon_path : undefined,

            autoHideMenuBar: true,
            show: false,
            // TODO : Create borderless window display.
            // frame : false,

            // TODO : Get display with lastDisplay and center the window in the display.
            x : 20,
            y : 20,

            width  : default_window_state.width,
            height : default_window_state.height,
            minWidth  : min_window_size.width,
            minHeight : min_window_size.height,

            webPreferences: {
                nodeIntegration  : true,
                contextIsolation : false,
            },
        };

        this._window = new BrowserWindow(options);

        // this._window.setIcon(icon_path);

        // Show window, if not already shown.
        if(!this._window.isVisible()) this._window.show();
    }

    private registerListeners(): void {
        this._window.on('close', evt => {
            if(!this._is_closed) {
                evt.preventDefault();
                this._is_closed = true;
                this._window.close();
            }
        });

        this._window.on('ready-to-show', this._window.show);
    }



    // #REGION // Getters, setters. ///////////////////////////////////////////

    public get window(): BrowserWindow {
        return this._window;
    }

    public get is_closed(): boolean {
        return this._is_closed;
    }

    private get last_display(): number {
        if(this._last_display !== -1) return this._last_display;
        
        // TODO : Fetch in config.
        return 0;
    }

    private set last_display( display: number ) {
        // TODO : Store the last display the window was on.
    }

    // #ENDREGION Getters, setters. ///////////////////////////////////////////
}