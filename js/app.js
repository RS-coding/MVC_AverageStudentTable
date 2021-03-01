

//*Calcula a media por materia de cada aluno e cria uma propriedade chamada media
alunos.forEach(aluno => { 
    aluno.media ={};

    for(let materia in aluno.notas){
        aluno.media[materia] = average(...aluno.notas[materia]);
    }
});


//*inserir no thead "nome" e cada uma das materias
//criar uma tr, depois um td nome e fazer um loop nas materias
// e para cada materia criar uma td de cada uma.

const htmlHeader = document.createElement("tr");
htmlHeader.innerHTML = "<td>Nome</td>";


let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia=>{
    //console.log(materia)
    return `<td>${materia}</td>`;
}).join("");

console.log(htmlHeaderMaterias)
htmlHeader.innerHTML+=htmlHeaderMaterias;

document.querySelector("[data-table-student] thead").appendChild(htmlHeader);


//percorrer cada aluno e gerar o html para incluir no tbody

alunos.forEach( aluno =>{
    const htmlBody = document.createElement("tr");
    let htmlMedias = `<td>${aluno.nome}</td>`;
    
    Object.keys(aluno.notas).forEach( materia =>{
        htmlMedias+= `<td>${aluno.media[materia]}</td>`
    })
    htmlBody.innerHTML = htmlMedias;
    document.querySelector("[data-table-student] tbody").appendChild(htmlBody);
})