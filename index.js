let fila = []
let opcoes = ""

do{
  let pacientes = 0
  //cada vez que aumentar um nome na fila aumenta um número do índice 1º 2º 3º, repetir enquanto i < que o tamanho da fila
  for(i = 0; i < fila.length; i++){
    pacientes += (1 + i) + "º - " + fila[i] + "\n"
  }

  opcoes = prompt(
    "Pacientes: \n" + pacientes + "\n" +
    "\nEscolha uma opção abaixo:\n" +
    "\n1. Novo Paciente" +
    "\n2. Consultar Paciente" +
    "\n3. Sair"
    )
  
  switch(opcoes){
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break

    case "2":
      const pacienteAtendido = fila.shift()
      //verificar se a variável está vazia
      if(pacienteAtendido){
        alert(pacienteAtendido + " foi atendido(a) e removida da fila")
      }else{
        alert("Não há pacientes na fila")
      }
      break
      
    case "3":
      alert("Encerrando...")
      break

    default:
      alert("Opção Inválida")
      break

  }
}while(opcoes !== "3")