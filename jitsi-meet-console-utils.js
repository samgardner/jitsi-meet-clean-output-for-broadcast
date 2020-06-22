` Javascript developer console utilities to make Jitsi-meet "clean" for use in broadcast workflows.

  By default jitsi-meet has UI overlays, popups and sounds that make it unsuitable for clean capture.
  The javascript methods below can toggle on or off those elements in any meeting using a default jitsi-meet server from the browser.
  This could be useful for those who don't want to deploy their own custom jitsi-meet server.

  Note that this will hide the entire UI, i.e. controls such as kicking participants
  Use at your own peril!

  Usage:
  - copy and paste all of the code below into a developer console 
    (Ctrl/Cmd+Shift+J in Chrome, Ctrl/Cmd+Shift+K in Firefox)
  - use toggle(); command to toggle between clean and default
  - bonus tip: pop-out the developer window to a separate window to keep the meeting window clear
`

var jitsiIsClean = false;

// create a new stylesheet that hides specified elements
if (!styleOverrides)
    $("body").append("<style id=\"styleoverrides\"/>");
var styleOverrides = $('#styleoverrides');

// HIDE
function hide() {

    // the style overrides catch static UI elements and also dynamically created ones
    // such as the user joined and raise hand popups     
    $(styleOverrides)[0].innerHTML = `
        /* remove the chrome extension popup - TODO add rules for other browsers with extensions */
        .chrome-extension-banner { display: none !important; }

        /* remove top toolbar (meeting name, timer) */
        .subject { display: none !important; }

        /* remove bottom toolbar */
        .new-toolbox { display: none !important; }

        /* hide the ui elements over each participant video */
        .videocontainer__toptoolbar { display: none !important; }
        .videocontainer__toolbar { display: none !important; }
        .videocontainer__hoverOverlay  { display: none !important; }
        .displayNameContainer { display: none !important; }
        .audioindicator-container { display: none !important; }
        .popover-trigger { display: none !important; }
        .avatar-container { display: none !important; }

        /* remove the "invite more participants" when only 1 person present */
        .invite-more-container {display:none !important;}

        /* remove popups such as hand raising */
        .atlaskit-portal-container{display:none !important;}

        /* remove the outline on the currently speaking participant */
        .tile-view .active-speaker { box-shadow: 0 0 0px 0px #165ECC;}
        
        /* remove vertical filmstrips in non-tile mode */
        .vertical-filmstrip .filmstrip { display: none !important;}
        .large-video-labels { display: none !important;}

        /* hide dominant speaker elements */
        #dominantSpeaker { display: none !important;}

        /* remove rounded corners */
        #localVideoWrapper object, #localVideoWrapper video  { border-radius: 0px !important; }
        .videocontainer__background { border-radius: 0px !important; }
        .filmstrip__videos .videocontainer>video { border-radius: 0px !important; }
    `;

    interfaceConfig.DISABLE_RINGING = true;
    // mute all audio elements, but not the elements in the voice chat!
    Array.from(document.getElementsByTagName('audio')).forEach(a=>{ if (a.hasAttribute("preload")) { a.muted=true; } });
    
    jitsiIsClean = true;
    return "Jitsi is now clean";
}

// SHOW
function show() {
    // clear the style overrides, restoring default styles
    $(styleOverrides)[0].innerHTML = "";

    interfaceConfig.DISABLE_RINGING = false;
    // unmute all audio elements, but not the elements in the voice chat!
    Array.from(document.getElementsByTagName('audio')).forEach(a=>{ if (a.hasAttribute("preload")) { a.muted=false; } });

    jitsiIsClean = false;
    return "Jitsi restored to default interface";
}

function toggle() {
    if (jitsiIsClean == true) return show(); else return hide();
}
