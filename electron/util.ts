import 'os';

declare global {
    /**
     * @global
     * The platform the app is running on. Though, i'll only use like- 3 of them? oh well.
     */
    type Platform = 'aix' | 'android' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32';

    /**
     * @global
     */
    type WindowMode = 'normal' | 'maximized';

    /**
     * @global
     */
    type PathType = 'file' | 'url';

    /**
     * @global
     * Specified dimensions of a window or display.
     */
    interface Dimensions {
        x?      : number;
        y?      : number;
        width?  : number;
        height? : number;
    }

    interface WindowState {
        x?       : number;
        y?       : number;
        width?   : number;
        height?  : number;
        mode?    : WindowMode;
        display? : number;
    }
}

export {};