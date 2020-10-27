
const Diego = createNewNote("Penetoide","Soy Diego");


function createNote(){


   var title = document.getElementById(exampleInputEmail1).value
   var text = document.getElementById(exampleInputPassword1).value

    console.log("Tu nota fue creada con el nombre: " + title)
    
    console.log("Tu nota fue creada con el texto: " + text)

    // createNewNote(title,text)
}