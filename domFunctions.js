const _ = (x) => {return document.querySelector(x);}

const deleteChild = (child) => {
    const father = _(child).parentNode;
    father.removeChild(_(child));
}

const createElement = (place, domElement, ...args) => {
    let className, text, tipe;

    (domElement != undefined && domElement != '') ? null : domElement = 'p';
    const newElement = document.createElement(domElement);
    
    if (domElement == 'img'){
        let src, alt;

        if(args.length >=1){
            src = args[0];

            (args.length > 1) ? alt = args[1]: null;
        }
    }

    if (domElement == 'input'){
        let type, placeHolder, minLength, maxLength;

        if(args.length >=1){
            type = args[0];
            tipe = type;

            (args.length > 1) ? className = args[1]: null;
            (args.length > 2) ? placeHolder = args[2]: null;
            (args.length > 3) ? minLength = args[3]: null;
            (args.length > 4) ? maxLength = args[4]: null;
        }

        (type != '') ? newElement.type = type : null ;
        (placeHolder != '') ? newElement.placeholder = placeHolder : null ;
        (minLength != '') ? newElement.minlength = minLength : null ;
        (maxLength != '') ? newElement.maxlength = maxLength : null ;
    }

    if (args.length >= 1 && domElement != 'input') {
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

export {_, deleteChild, createElement};