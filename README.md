# jitsi-meet - Clean output console scripts for broadcast workflows

By default jitsi-meet has UI overlays, popups and sounds that make it unsuitable for clean capture.
The javascript methods in jitsi-meet-console-utils.js can be used to toggle on or off those elements in any meeting using a default jitsi-meet server from the browser's development console.

This could be useful for those who don't want to deploy their own custom jitsi-meet server, and allows customisation by a single participant in a meeting without affecting anyone else's interface.

Note that this will hide the entire UI, i.e. controls such as kicking participants. Use at your own peril!


Usage:
- copy and paste all of the code in the file into a developer console launched from a jitsi-meet meeting
  (Ctrl/Cmd+Shift+J in Chrome, Ctrl/Cmd+Shift+K in Firefox)
- use toggle(); command to toggle between clean and default
- bonus tip: pop-out the developer window to a separate window to keep the meeting window clear

Note that this is not a customised jitsi-meet server installation, but a simple hack to turn a default installation's meeting room into a "clean" meeting room.
