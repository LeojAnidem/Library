const _ = (x) => {return document.querySelector(x);}

const deleteChild = (child) => {
    const father = _(child).parentNode;
    father.removeChild(_(child));
}

const createElement = (place, domElement, ...args) => {
    let className, text, tipe;

    (domElement != undefined && domElement != '') ? null : domElement = 'p';
    const newElement = document.createElement(domElement);
    
    if (domElement == 'label'){
        let text, fo;

        if (args.length >= 1){
            text = args[0];

            (args.length > 1) ? fo = args[1] : null;
        }

        (text != '') ? newElement.textContent = text : null;
        (fo != '') ? newElement.setAttribute('for', fo) : null;
    }

    if (domElement == 'img'){
        let src, alt;

        if(args.length >=1){
            src = args[0];

            (args.length > 1) ? alt = args[1]: null;
        }

        (src != '') ? newElement.src = src : null ;
        (alt != '') ? newElement.alt = alt : null ;
    }

    if (domElement == 'input'){
        let type;

        if(args.length >=1){
            type = args[0];
            tipe = type;

            if (type == 'radio'){
                let id, name, className, value, requiredBoolean;

                if (args.length >= 2){
                    id = args[1];
			
                    (args.length > 2) ? name = args[2] : null;
		    (args.length > 3) ? className = args[3] : null;
		    (args.length > 4) ? value = args[4] : null;
                    (args.length > 5) ? requiredBoolean = args[5] : null;
                }                

                (type != '') ? newElement.type = type : null ;
                (id != '') ? newElement.id = id : null;
                (name != '') ? newElement.name = name : null;
		(className != '') ? newElement.className = className : null;
		(value != '') ? newElement.value = value : null;
                (requiredBoolean != '') ? newElement.required = requiredBoolean : null ;
            }

            else{

                let  placeHolder, minLength, maxLength;

                (args.length > 1) ? className = args[1]: null;
                (args.length > 2) ? placeHolder = args[2]: null;
                (args.length > 3) ? minLength = args[3]: null;
                (args.length > 4) ? maxLength = args[4]: null;

                (type != '') ? newElement.type = type : null ;
                (placeHolder != '') ? newElement.placeholder = placeHolder : null ;
                (minLength != '') ? newElement.minlength = minLength : null ;
                (maxLength != '') ? newElement.maxlength = maxLength : null ;
            }   
        }
    }

    if (args.length >= 1 && (domElement != 'input' && domElement != 'label' && domElement != 'img' )) {
        className = args[0];

        (args.length > 1) ? text = args[1] : null; 
        
        (text != '') ? newElement.textContent = text : null;
    }

    (className != '') ? newElement.className = className : null ;

    if(place == 'body' || place == '' || place == undefined) { place = 'body'; document.body.appendChild(newElement)} 
    else {_(place).append(newElement);}


    if (domElement != 'input') {
        console.log(`Se ha agregado correctamente [${domElement}] a --> '${place}'`);
    }
    else {
        console.log(`Se ha agregado correctamente [${domElement} ${tipe}] a --> '${place}'`);
    }
}

//Devuelve blanco o negro dependiendo del color de entrada
const getContrast = function (hexcolor){

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? '#272727' : '#ffffff';

};

// Previsualizar la imagen seleccionada
const imgPreview = function (inputId, imgId){
    const inputSelect = _(inputId),
        imgPrev = _(imgId);
    
    inputSelect.addEventListener('change', function(){
        const files = inputSelect.files;

        if(!files || !files.length){
            imgPrev.src = '';
            return;
        }

        const firstFile = files[0];
        const objectUrl = URL.createObjectURL(firstFile);
        imgPrev.src = objectUrl;
    });

}

const refreshCSS = () => {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href')
                                    .split('?')[0];
            
            let newHref = href + '?version=' 
                        + new Date().getMilliseconds();
            
            links[i].setAttribute('href', newHref);
        }
    }
}

export {_, deleteChild, createElement, getContrast, imgPreview, refreshCSS};
