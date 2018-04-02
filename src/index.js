import _ from 'lodash';
// import Print from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

function component() {
	var element = document.createElement('pre');
    element.innerHTML = [
      'Hello webpack!',
      '6 cubed is equal to ' + cube(6)
    ].join('\n\n');

	return element;
}


  function component2() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
  }

let element = component(); 
document.body.appendChild(element);

let element2 = component2(); 
document.body.appendChild(element2);




if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // Re-render the "component" to update the click handler
     document.body.appendChild(element);
   })
}
