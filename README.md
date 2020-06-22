# jitsi-meet-clean-output-for-broadcast
Javascript console utilities to hide UI elements and mute sound effects for use in broadcast workflows using default jitsi-meet servers.

By default jitsi-meet has UI overlays, popups and sounds that make it unsuitable for clean capture.
The javascript methods can toggle on or off those elements in any meeting using a default jitsi-meet server from the browser's development console.

This could be useful for those who don't want to deploy their own custom jitsi-meet server.
Note that this will hide the entire UI, i.e. controls such as kicking participants
Use at your own peril!

Usage:
- copy and paste all of the code in the file into a developer console launched from a jitsi-meet meeting
  (Ctrl/Cmd+Shift+J in Chrome, Ctrl/Cmd+Shift+K in Firefox)
- use toggle(); command to toggle between clean and default
- bonus tip: pop-out the developer window to a separate window to keep the meeting window clear

Note that this is not a customised jitsi-meet server installation, but a simple hack to turn a default installation's meeting room into a "clean" meeting room.
