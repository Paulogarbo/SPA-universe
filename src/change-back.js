export function changeBackground() {
  const windows = window.location.pathname
  if(windows == '/'){
    document.querySelector('body').style.backgroundImage = 'url(./assets/mountains-universe-1.png)'
  }else if(windows == '/universe'){
    document.querySelector('body').style.backgroundImage = 'url(./assets/mountains-universe-2.png)'
  }else if(windows == '/explore'){
    document.querySelector('body').style.backgroundImage = 'url(./assets/mountains-universe-3.png)'
  }
}