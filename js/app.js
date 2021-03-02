 const alunos = [
        {
          _id: 0,
          nome: "chico melato",
          notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
          },
        },
        {
          _id: 1,
          nome: "talita lima",
          notas: {
            portugues: [4, 4, 4, 4],
            matematica: [4, 4, 5, 5],
            historia: [5, 5, 6, 6],
            ciencias: [7, 7, 8, 9],
          },
        },
      ];


//instances
const alunosService = new AlunosService();

//*Calcula a media por materia de cada aluno e cria uma propriedade chamada media
alunos.forEach(aluno => { 
    alunosService.add(new AlunoModel(aluno));
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

function render(){
    document.querySelector("[data-table-student] tbody").innerHTML="";
    alunos.forEach( aluno =>{
        const htmlBody = document.createElement("tr");
        let htmlMedias = `<td>${aluno.nome}</td>`;
        
        Object.keys(aluno.notas).forEach( materia =>{
            htmlMedias+= `<td>${aluno.media[materia]}</td>`
        })
        htmlBody.innerHTML = htmlMedias;
        document.querySelector("[data-table-student] tbody").appendChild(htmlBody);
    })
}
render()



//adicionar aluno

document.querySelector("form").addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById("first_name").value;
    const newAluno =  {
          _id: 0,
          nome,
          notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
          },
    }

    newAluno.media ={}

    for(let materia in newAluno.notas){
        newAluno.media[materia]= average(...newAluno.notas[materia]);
    }

    alunos.push(newAluno);
    render()
})