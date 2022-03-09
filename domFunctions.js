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
        (fo != '') ? newElement.for = fo : null;
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
                let id, name, requiredBoolean;

                if (args.length >= 1){
                    id = args[0];

                    (args.length > 1) ? name = args[1] : null;
                    (args.length > 2) ? requiredBoolean = args[2] : null;
                }                

                (id != '') ? newElement.id = id : null;
                (name != '') ? newElement.name = name : null;
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