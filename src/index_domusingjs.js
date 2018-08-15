function component(){
    const myHeading =document.createElement('h1');
    myHeading.innerHTML = 'Welcome to React!' ;
    const rootElement=document.getElementById('root');
    rootElement.appendChild(myHeading);
  }
  window.onload = component;