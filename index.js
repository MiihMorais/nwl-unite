let participantes = [
    {
      nome: 'Diego Fernandes',
      email: 'diego@gmail.com',
      dataInscricao: new Date(2024, 2, 23, 19, 23),
      dataCheckIn: new Date(2024, 2, 25, 20, 20)
    },
    {
      nome: 'Mayk Brito',
      email: 'mayk@gmail.com',
      dataInscricao: new Date(2024, 0, 3, 19, 23),
      dataCheckIn: new Date(2024, 0, 4, 22, 20)
    },
    {
      nome: 'Ana Souza',
      email: 'ana@gmail.com',
      dataInscricao: new Date(2023, 11, 4, 19, 23),
      dataCheckIn: new Date(2023, 11, 5, 20, 20)
    },
    {
      nome: 'João Silva',
      email: 'joão@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      nome: 'Maria Oliveira',
      email: 'maria@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      nome: 'Pedro Santos',
      email: 'pedro@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      nome: 'Carla Lima',
      email: 'carla@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      nome: 'Lucas Souza',
      email: 'lucas@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      nome: 'Paula Costa',
      email:'paula@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      nome:'Gabriel Almeida',
      email: 'gabriel@gmail.com',
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 20)
    }
  ]
   
  
  const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
    if(participante.dataCheckIn == null) {
     dataCheckIn = `
      <button 
       data-email="${participante.email}"
       onclick="fazerCheckIn(event)"
       >
       Confirmar check-in
       </button>
       `
    }
    
    return `
     <tr>
        <td>
          <strong>
           ${participante.nome}
          </strong>
          <br>
          <small>
            ${participante.email}
          </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
      </tr>
    `
  }
  
  const atualizarLista =(participantes) => {
    let output = ""
    for(let participante of participantes)
    output = output + criarNovoParticipante(participante)
    //substituir informação do HTML
  document.querySelector('tbody').innerHTML = output
  } 
  
  atualizarLista(participantes)
  
  const adicionarParticipante = (event) => {
    event.preventDefault()
  
    const dadosDoFormulario = new FormData(event.target)
  
    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null
    }
     //verificar se o participante já existe
     const participanteExiste = participantes.find((p) => p.email == participante.email
     )
  
     if(participanteExiste){
      alert('Email já cadastrado!')
      return
     }
  
    participantes = [participante, ...participantes]
    atualizarLista(participantes)
    //limpar formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
  }
  
  const fazerCheckIn = (event) => {
    //confirmar se realmente quer o check-in
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
    if(confirm(mensagemConfirmacao) == false) {
      return
    }
    //encontrar o participante dentro da lista
    const participante = participantes.find((p) => p.email == event.target.dataset.email
    ) 
    //atualizar o check-in do participante
    participante.dataCheckIn = new Date()
    //atualizar a lista de participantes
    atualizarLista(participantes)
  }