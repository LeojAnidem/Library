Element guia:

        element (2 parametros y 'n' argumentos) -> [place, domElement, ...args]

        * ... : Parametros anteriores (ex. place, domElement)
        (+) : nuevo parametro

        --> Siempre y cuando domElement no sea igual a 'input' <--            
            1 argumento(s) -> [... , className (+)]        
            2 argumento(s) -> [... , text (+)]             * ... : (place, domElement, className) 

        --> cuando domElement sea igual a 'input' <-- 
            1 argumento(s) -> [... , type (+)]          
            2 argumento(s) -> [... , className (+)]
            3 argumento(s) -> [... , placeholder (+)]          
            4 argumento(s) -> [... , minLength (+)]
            5 argumento(s) -> [... , maxLength (+)]
            
        glosario:
            place: Hace referencia al lugar* en donde se va a crear el nuevo elemento.
                
                ex. place = 'body'; indica que el elemento se creara dentro de body

                * Por lugar me refiero a el nombre del elemento padre en el que
                  va a ser creado como hijo el nuevo elemento.
            ___________________________________________________________________________________

            domElement: Hace referencia al tipo de elemento que quiero crear. Algunos
                        elementos pueden ser 'p', 'div', 'input', 'button', 'span'.
            ___________________________________________________________________________________

            text: Hace referencia al contenido de tipo texto que va a tener el elemento creado.
            ___________________________________________________________________________________

            className, type, placeHolder, minLength y maxLength hacen referencia a propiedades
            pertenecientes al elemento creado.