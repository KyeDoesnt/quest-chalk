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



// Global scope declarations.
declare global {
    /**
     * @global
     * Get source directory.
     */
    function __srcdir(): string;
}

// Get the source directory.
var current_dir = __dirname + '';
global.__srcdir = (): string => { return current_dir; };




let appWindow: Window;

app.on('ready', () => {
    appWindow = new Window();
});