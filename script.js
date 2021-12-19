const a = document.querySelectorAll('.content')


a.forEach(Element => {
    Element.addEventListener('click', () =>{
        Element.classList.toggle('circle')
    } )
})
    
    

