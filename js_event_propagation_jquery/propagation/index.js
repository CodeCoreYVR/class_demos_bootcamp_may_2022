document.querySelectorAll('*').forEach(node => {
  node.addEventListener('click', event => {
    const tagName = event.currentTarget.tagName;
    const classNames = event.currentTarget.className;
    const eventPhase = event.eventPhase

    // 0,1,2,3
    // 0 none
    // 1 Capture
    // 2 At Target
    // 3 Bubble

    if (event.currentTarget.className == "teams") {
      event.stopPropagation();
    }
    console.log(`Phase: ${eventPhase} - TagName: ${tagName} - ClassNames: ${classNames}`);
  })
  // if you want to use capture phase, you can add {capture: true} as the third argument of addEventListener
})