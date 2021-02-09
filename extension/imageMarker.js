// Unique ID for the className.
const MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
let prevDOM = null;
let canActivate = true;
let globalSrcElement = null;
// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
    if(canActivate) {
    let srcElement = e.srcElement;
    if (prevDOM !== srcElement) {

        // For NPE checking, we check safely. We need to remove the class name
        // Since we will be styling the new one after.
        if (prevDOM !== null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        // Add a visited class name to the element. So we can style it.
        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
        globalSrcElement = srcElement;
        // The current element is now the previous. So we can remove the class
        // during the next iteration.
        prevDOM = srcElement;
        console.info(srcElement.currentSrc);
        console.dir(srcElement);
    }
    }
}, false);

document.addEventListener('click', function (e) {
    canActivate = false;
    globalSrcElement.classList.remove(MOUSE_VISITED_CLASSNAME);
})
