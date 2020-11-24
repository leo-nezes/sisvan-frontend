const loadD3PlusScript = (callback) => {
  const existingScript = document.getElementById('d3plus');

  if (!existingScript){
    const script = document.createElement('script');
    script.src = 'https://d3plus.org/js/d3plus.v2.0.0-alpha.30.full.min.js';
    script.id='d3plus';

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    }
  }

  if (existingScript && callback) callback();

}

export default loadD3PlusScript;
