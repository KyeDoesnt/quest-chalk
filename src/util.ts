// #REGION // Declarations. ///////////////////////////////////////////////////

import 'os';

declare global {
    /**
     * @global
     * The platform the app's running on. Only think i'll use like- 3 of them? oh well.
     */
    type Platform = 'aix' | 'android' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32';

    /**
     * @global
     * Specifies dimensions of a window or display.
     */
    interface Dimensions {
        x?      : number;
        y?      : number;
        width?  : number;
        height? : number;
    }

    /**
     * @global
     * Fetches platform, and spits it out with the Platform type.
     */
    function getPlatform(): Platform;

    /**
     * @global
     * Check if the platform is AIX.
     */
    export function isPlatformAIX(): boolean;

    /**
     * @global
     * Check if the platform is Android.
     */
    function isPlatformAndroid(): boolean;

    /**
     * @global
     * Check if the platform is Darwin. ( Macintosh )
     */
    function isPlatformDarwin(): boolean;

    /**
     * @global
     * Check if the platform is FreeBSD.
     */
    function isPlatformFreeBSD(): boolean;

    /**
     * @global
     * Check if the platform is Linux.
     */
    function isPlatformLinux(): boolean;

    /**
     * @global
     * Check if the platform is OpenBSD.
     */
    function isPlatformOpenBSD(): boolean;

    /**
     * @global
     * Check if the platform is SunOS.
     */
    export function isPlatformSunOS(): boolean;

    /**
     * @global
     * Check if the platform is Windows.
     */
    export function isPlatformWindows(): boolean;
}

// #ENDREGION Declarations. ///////////////////////////////////////////////////





// #REGION // Definitions. ////////////////////////////////////////////////////



global.getPlatform = (): Platform => { return process.platform as Platform; }

global.isPlatformAIX     = (): boolean => { return process.platform === 'aix'; }
global.isPlatformAndroid = (): boolean => { return process.platform === 'android'; }
global.isPlatformDarwin  = (): boolean => { return process.platform === 'darwin'; }
global.isPlatformFreeBSD = (): boolean => { return process.platform === 'freebsd'; }
global.isPlatformLinux   = (): boolean => { return process.platform === 'linux'; }
global.isPlatformOpenBSD = (): boolean => { return process.platform === 'openbsd'; }
global.isPlatformSunOS   = (): boolean => { return process.platform === 'sunos'; }
global.isPlatformWindows = (): boolean => { return process.platform === 'win32'; }

// #ENDREGION Definitions. ////////////////////////////////////////////////////


export {};