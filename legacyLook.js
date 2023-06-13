let none = "0px";
let br5 = "5px"; //rounded border radius

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
var log = function (){     
        var args = Array.prototype.slice.call(arguments); // Convert args to a normal array
        args.unshift("[legacyLook.js]: "); // Prepend log prefix log string
        console.log.apply(console, args);// Pass along arguments to console.log
}

const tweakPlaylistTitleAlignment = ()=>{try {document.querySelector(`.main-topBar-topbarContent.main-entityHeader-topbarContentFadeIn > span`).style.transform = "translate(12px)"} catch (error) {}} // adds a bit of extra padding to playlist titles

document.body.onload = function() {
    waitForElm(".Root__now-playing-bar").then(()=>{ //wait for playing bar to exist
        log("Playbar exists, waiting for sidebar to exist...")
        waitForElm(`#spicetify-sticky-list`).then(() => { //wait for sidebar to exist
            log("Sidebar exists, waiting for navbtns to exist...")
            waitForElm(`[aria-label="Go back"]`).then(()=>{//wait for "GO BACK" button to exist
                // assuming everything has loaded
                log("Assuming spotify is fully loaded...")
                //since navbuttons are loaded we can now turn them into rounded rectangles
                for(const element of document.querySelector(`.main-topBar-historyButtons`).children){borderRound(element, br5); log("Turning nav buttons into rounded rectangles...Done")} //turns navigation buttons into rounded rectangles

                injectRefreshUIButton();

                spotifyConnectBarTweaks();
                waitForElm(`#spicetify-sticky-list`).then((stickyList)=>{//ensures that the list is loaded to avoid errors;
                   
                    tryAppendLikesSongsHyperlink(stickyList); //appends "Liked songs option" only if list is loaded;
                    

                   

                    waitForElm(`[aria-label="Enlarge Your Library"]`).then(el=>{el.remove(); log("Removed \"Expand Sidebar\" arrow...")});// removes that dumb arrow next to "create new playlist" button
                    



                waitForElm(`[aria-label="Friend Activity"]`).then(()=>{
                    log("Turned \"Friends button\" to rounded rectangle")
                    borderRound(document.querySelector(`[aria-label="Friend Activity"]`), br5); //friends button to rounded rectangle
                }) 

                waitForElm(`[data-encore-id="buttonTertiary"]`).then(()=>{
                    log("Turned \"Your Profile\" button to rounded rectangle")
                    borderRound(document.querySelector(`[data-encore-id="buttonTertiary"]`), br5); //profile button to rounded rectangle
                }) 
                
                genericUItweaks();
                
                
                
                })






             

               
let collapse1 ='<path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path>';
let collapse2 = '<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon"><path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path></svg>'


let enlarge1 = '<path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path>';
let enlarge2 = '<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon"><path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path></svg>'  
let enlarge3 = '<path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path>'

document.body.addEventListener( 'click', function ( event ) {
    
    if(event.target.innerHTML == collapse1 
    || event.target.innerHTML == collapse2 
    || event.target.parentElement.innerHTML == collapse1
    || event.target.parentElement.innerHTML == collapse2
    ){
        log("Collapsing cover image...")
        collapseCover();
    }else{
            if(event.target.innerHTML == enlarge1 
            || event.target.innerHTML == enlarge2 
            || event.target.innerHTML == enlarge3 
            || event.target.parentElement.innerHTML == enlarge1 
            || event.target.parentElement.innerHTML == enlarge2 
            || event.target.parentElement.innerHTML == enlarge3){
        enlargeCover();
        log("Expanding cover image...")
    }
    }

} );


            
            const enlargeCover = () =>{
                
                    document.querySelector(".main-coverSlotExpanded-containerExpanding").style.width = "var(--left-sidebar-width)";
                    document.querySelector(`.os-viewport.os-viewport-native-scrollbars-invisible`).style.height = "calc(100% - var(--left-sidebar-width))";
                    waitForElm(".main-coverSlotExpanded-containerExpanding").then(()=>{
                        squareCovers();
                    })
                    
                    
                
            }
            const collapseCover = () =>{
                document.querySelector(`.os-viewport.os-viewport-native-scrollbars-invisible`).style.height = "";
                squareCovers();
            }

            waitForElm(".main-coverSlotExpanded-containerExpanding").then(enlargeCover); //if spotify starts up with large cover, ensure that it looks right

            })
        })
    })
}
 

const injectRefreshUIButton = () => {
let Snippet = `
<svg role="img" height="16"
        width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon"
        viewBox="0 0 128 128" data-encore-id="icon" style="fill:white;">
        <path
            d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"
            style="fill:whiteSmoke;opacity:0.8"></path>
    </svg>`
//let Snippet = `<svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>`

let refButtonElement = document.createElement("button");
refButtonElement.classList = "main-topBar-button main-topBar-forward";
refButtonElement.style="border-radius: 5px;";
refButtonElement.onclick = function(){location.reload();}
/*
let svgElement = document.createElement("svg");
svgElement.role = "img";
svgElement.height = 16;
svgElement.width = 16;
svgElement.ariaHidden="true";
svgElement.class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon";
svgElement.viewBox="0 0 128 128";
svgElement.setAttribute("data-encore-id","icon");
svgElement.style="fill:white;";

let svgPath = document.createElement("path");
 
svgPath.setAttribute("d","M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z");
svgPath.style="fill:whiteSmoke;opacity:0.8";
svgElement.appendChild(svgPath);

*/
const toNodes = html =>
new DOMParser().parseFromString(html, 'text/html').body.childNodes[0]



refButtonElement.appendChild(toNodes(Snippet));



    document.querySelector(`.main-topBar-historyButtons`).appendChild(refButtonElement)
    log("Appended a refresh button to navbuttons")
}




setInterval(()=>{
    try {
                   if(document.querySelector(`.main-coverSlotExpanded-containerExpanding`).style.width != 'var(--left-sidebar-width)'){
        document.querySelector(`.main-coverSlotExpanded-containerExpanding`).style.width = 'var(--left-sidebar-width)';
        squareCovers();
        log("Ensured correct cover size...")
            } 
           if(document.querySelector(`.cover-art`) == null && !document.querySelector(`.os-viewport.os-viewport-native-scrollbars-invisible`).style.height == ""){
            document.querySelector(`.os-viewport.os-viewport-native-scrollbars-invisible`).style.height = "";
            log("Reset sticky list size to default height...")
           }

    } catch(err){};

    try { spotifyConnectBarTweaks(); } catch (error) {}
  
        tweakPlaylistTitleAlignment()
        playlistSpecificPlaybuttonRounding();
    

},24)


const playlistSpecificPlaybuttonRounding = () =>{// run only if you sure that buttons exist
    try {
        document.querySelectorAll(`.main-playButton-PlayButton`).forEach(i=>{
            if(i.firstChild.firstChild.style.borderRadius!="10px"){
                i.firstChild.firstChild.style.borderRadius="10px";
                log("Playlist 'PLAY' buttons turned into rounded rectangles...")
            }
            
    }) //change the border radius of play/pause buttons in a playlist
        
    } catch (error) {}
}



const genericUItweaks = ()=>{
    document.querySelector(`.Root`).style.setProperty("--panel-gap", "0px", "important"); //removes gaps between panels
    document.querySelector(`[aria-label="Main"]`).style.gap = none; // removes gap between panels 
    tweakPlaylistTitleAlignment()
    log("Gaps between panels are removed...")

    tweakColors();
    removeRoundedBorders();
    squareCovers();
        let filterAreaInterval = setInterval(()=>{
            
            try {
                document.querySelectorAll(`[role="checkbox"][data-encore-id="chip"]`)[0].remove();  //"playlists, podcasts and shows" div removal
                if(document.querySelectorAll(`[role="checkbox"][data-encore-id="chip"]`)[0] == null){clearInterval(filterAreaInterval); log("Removed filter area checkbox buttons...")}
            } catch (error) {
                //console.error(error)
            }
           
           


        },30)
        
    
    
        


}

const tweakColors = ()=>{

    document.querySelector(`.main-nowPlayingBar-container`).style.backgroundColor = "#1f1f1f";   //playbar color tweak
    document.querySelector(`.Root__top-container`).style.backgroundColor = "#1f1f1f";
    document.querySelector(`.Root__nav-bar`).style.backgroundColor = "#1f1f1f";
    log("Colors have been tweaked")
}

const removeRoundedBorders = ()=>{
                    document.querySelector(`#spicetify-sticky-list`).parentElement.style.borderRadius = none;//top sidebar part
                    waitForElm(`.Root__main-view`).then((el)=>{document.querySelector(`.Root__main-view`).style.borderRadius = none;})//main view div
                    document.querySelector(`.main-yourLibraryX-entryPoints.main-yourLibraryX-library`).style.borderRadius = none; //bottom sidebar part

}


    waitForElm(`.main-view-container div.os-padding > [style="overflow-y: scroll;"]`).then((el)=>{el.addEventListener("scroll", removeRowThumbnails)})
    try {
        removeRowThumbnails();
    } catch (error) {
        
    }
    log("Attached 'scroll' event listener for removing images from playlists");

const removeRowThumbnails = ()=>{
    document.querySelectorAll(`.main-trackList-rowImage`).forEach(i=>i.remove())
}

     
        
const tryAppendLikesSongsHyperlink = (el)=>{
  try {
    log("trying to append 'Liked Songs' to sidebar list")
    if(!document.querySelector(`#customLikedSongs`)){

        //insert html snippet for "Likes songs" below marketplace hyperlink
        let likesSongsLink = `<li class="main-yourLibraryX-navItem InvalidDropTarget" id="customLikedSongs">
                                                                                                                                                                    ${/* this is fugly but it works*/""}
            <a draggable="false" aria-label="Liked Songs" class="link-subtle main-yourLibraryX-navLink" href="#" aria-expanded="false" onclick="${"document.querySelector(`[aria-describedby='onClickHintspotify:collection:tracks']`)"}.click()">
        
            <svg role="img" height="35"
                width="35" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-medium-icon search-icon" viewBox="0 -5 24 24"
                data-encore-id="icon">
                <path
                    d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z">
                </path>
            </svg>
            
            <svg role="img" height="24" width="24" aria-hidden="true"
                class="Svg-sc-ytk21e-0 Svg-img-medium-icon search-active-icon" viewBox="0 0 24 24" data-encore-id="icon">
                <path
                    d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z">
                </path>
                <path
                    d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z">
                </path>
            </svg>
            
            <span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 TypeElement-balladBold-type" style="transform:translateX(-11px) ;">
                Liked Songs
            </span>
        
            </a>
        
        </li>
        `
        el.insertAdjacentHTML("beforeend", likesSongsLink);

    }
    if(document.querySelector(`#customLikedSongs`)){
  log("successfully inserted a hyperlink");
        
    }else{
        log("failed to insert a hyperlink");
    }

    } catch (error) {
        log("failed to insert a hyperlink, got an error:", error);
    }
}
    


/* coming soon...
if(document.querySelector(`.main-home-homeHeader`)){ //if homescreen

}
if(document.querySelector(`[aria-label="Spotify – Search"]`)){ //if search screen

}
*/


const spotifyConnectBarTweaks = ()=>{
    try {    
        if(document.querySelector(`.main-connectBar-connected`).style.borderRadius != "0px"){
    document.querySelector(`.main-connectBar-connected`).style.borderRadius = "0px" //removes rounded corners
    log("Spotify Connect bar has been corrected, borderRadius=0")
    }
        
    } catch (error) {
        
    }

}


const borderRound = (element, radius)=>{
element.style.borderRadius = radius;
}


const squareCovers = ()=>{
    borderRound(document.querySelector(`.main-coverSlotCollapsed-container.main-coverSlotCollapsed-navAltContainer`),none)
}