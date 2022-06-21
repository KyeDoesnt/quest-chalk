/**********************************************
*                                             *
*       .o#@@@@@@@@@@@@@@@#o.        v0.0.0   *
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
*                   *@@@@@@                   *
* Chalk for Quest   °######                   *
* ---------------   .oooooo                   *
* Thanks for check- .o*****                   *
* ing out this pro- .°°°°°°                   *
* ject!  I'm hoping °.°.°.°                   *
* to add more  onto .°.°.°.                   *
* this, but life is  . . .                    *
* not being too ki- . . . .                   *
* nd to  me  or  my   .  .                    *
* significant other         Kinda have to fo- *
* at the moment...          cus on myself and *
*                           my situation rig- *
*                           gt  now.  Though, *
*                           if you  have  any *
*                           suggestions, feel *
* Stay hydration'd!         free  to  let  me *
*       .       .           know!             *
*      ( \ ___ / )                      ~ Kye *
*      \  '   '  /                            *
*   !  /\\\   ///\              .--           *
*     /\\(o) (o)//\           /\ \ | \        *
*  -. _-._( @ )_.-_          /  \/\   )       *
**LL****************************** | / ********
'                                  '/         '

 

 Credits:
 Kye Cedar - Design, Programming

*/

/**
 * @author Kye Cedar
 * @version 0.0.0
 */

import { app } from 'electron';
import { Window } from './window';



// // Defining utility functions.
import './util';
import { BrowserWindow } from 'electron';



// Global scope declarations.
declare global {
    /**
     * @global
     * Get source directory.
     */
    var __srcdir: string;
}

// Get the source directory.
global.__srcdir = __dirname + '';




let win: Window;

app.on('ready', () => {
    win = new Window();
});

app.on('window-all-closed', () => {
    if(!isPlatformDarwin()) app.quit();
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) win.createWindow();
});