/**********************************************
*                                             *
*       .o#@@@@@@@@@@@@@@@#o.                 *
*    *@@@@@@@@@@@@@@@@@@@@@@@@@*              *
*   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@             *
*  @@@@@@@*               *@@@@@@@            *
* .@@@@@@°                 °@@@@@@.           *
*  @@@@@@@*               *@@@@@@@            *
*   @@@@@@@@@@@@@*   @@@@@@@@@@@@             *
*    *@@@@@@@@@@@   O@@@@@@@@@@*              *
*       °o#@@@@@@   O@@@@@@O°                 *
*                   O@@@@@@                   *
*                   o@@@@@@                   *
*   chalk for quest *@@@@@@                   *
*                   °######                   *
*            v0.0.0 .oooooo                   *
* stay hydration'd! .o*****                   *
*       .       .   .°°°°°°                   *
*      ( \ ___ / )  °.°.°.°                   *
*      \  '   '  /  .°.°.°.                   *
*   !  /\\\   ///\   . . .     .--            *
*     /\\(o) (o)//\ . . . .  /\ \ | \         *
*  -. _-._( @ )_.-_   .  .  /  \/\   )        *
**LL***************************** | / ********/
/*                                '/

CREDITS
Kye Cedar - Design, Programming

*/

/**
 * @author Kye Cedar
 * @version 0.0.0
 */

import { app, BrowserWindow } from 'electron';
import { platform } from 'os';
import * as path from 'path';



// #region // Global scope.
declare global {
    /**
     * @global
     */
    var default_window_config: WindowState;
    /**
     * @global
     */
    var min_window_size: Dimensions;
}

global.default_window_config = {
    width  : 900,
    height : 750,
    mode   : 'normal',
};

global.min_window_size = {
    width  : 500,
    height : 400,
};
// #endregion Global scope.


import './util';
import { Window } from './window';



// #region // Window.
let win: Window = new Window();

// Inial creation of window.
app.whenReady().then(() => {
    win.createWindow();

    let target_path = app.isPackaged ? path.join(__dirname, '../build/index.html') : `http://localhost:4328`;

    if(app.isPackaged) win.load('file', target_path);
    else win.load('url', target_path);

    console.log(target_path);
});

// Quit app if all windows are closed.
app.on('window-all-closed', () => {
    // On OS X, it's common for applications and their menu bar
    // to stay active until the user quits explicitly with CMD + Q.
    if(process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    // On OS X, it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if(!BrowserWindow.getAllWindows().length) win.createWindow();
});

// #endregion Window.