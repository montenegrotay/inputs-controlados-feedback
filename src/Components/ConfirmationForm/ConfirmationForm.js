import { React, useState } from 'react'
import { Form } from '../MainPage/styles'

const ConfirmationForm = () => {

  const [nasc, setNasc] = useState("")
  const [tel, setTel] = useState("")
  const [genero, setGenero] = useState("")
  const [raca, setRaca] = useState("")
  const [curso, setCurso] = useState("")
  const [ensino, setEnsino] = useState("")
  const [disponibilidade, setDisponibilidade] = useState("")


  const onChangeNasc = (event) => {
    setNasc(event.target.value)
  }

  const onChangeTel = (event) => {
    setTel(event.target.value)
  }

  const onChangeGenero = (event) => {
    setGenero(event.target.value)
  }

  const onChangeRaca = (event) => {
    setRaca(event.target.value)
  }

  const onChangeCurso = (event) => {
    setCurso(event.target.value)
  }

  const onChangeEnsino = (event) => {
    setEnsino(event.target.value)
  }

  const onChangeDisponibilidade = (event) => {
    setDisponibilidade(event.target.value)
  }

  const criandoNovoUsuario = () => {
    alert("Inscrição confirmada com sucesso!")
    setNasc("")
    setTel("")
    setGenero("")
    setRaca("")
    setCurso(false)
    setEnsino(false)
    setDisponibilidade(false)
  }

  return (
    <Form>
      <h2>Forms exercício 3</h2>

      <label for="nasc">
        Data de Nascimento:
        <input type="date" id="nasc" name="nasc" placeholder='DD/MM/AAAA' value={nasc} onChange={onChangeNasc} />
      </label>

      <label for="tel">
        Contato:
        <input type="tel" id="tel" class="input-padrao" required placeholder="(xx) xxxxx-xxxx" value={tel} onChange={onChangeTel}></input>
      </label>

      <label for="genero">
        Gênero:
        <select id="genero" value={genero} onChange={onChangeGenero}>
          <option value="">Escolher</option>
          <option value="Homem cisgênero">Homem cisgênero</option>
          <option value="Mulher cisgênero">Mulher cisgênero</option>
          <option value="Homem Transsexual">Homem Transsexual</option>
          <option value="Mulher Transsexual">Mulher Transsexual</option>
          <option value="Pessoa não binária">Pessoa não binária</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>

      <label for="raca">
        Raça:
        <select id="raca" value={raca} onChange={onChangeRaca}>
          <option value="">Escolher</option>
          <option value="Negro">Negro</option>
          <option value="Branco">Branco</option>
          <option value="Pardo">Pardo</option>
          <option value="amarelo">Amarelo</option>
          <option value="Indígena">Indígena</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>

      <label for="curso">
        <p> Selecione o modelo de curso: </p>
        <p>
          <input type="radio" id="cursoint" name="curso" value={"Curso Integral"} onChange={onChangeCurso}  />
          Curso integral web fullstack
        </p>
        <p>
          <input type="radio" id="cursonot" name="curso "value={"Curso Noturno"} onChange={onChangeCurso} />
          Curso noturno web fullstack
        </p>
      </label>

      <label for="ensino">
        Selecione:
        <p>
          <input type="checkbox" id="ensino-médio" name="ensino-medio" value={"Ensino Médio"} onChange={onChangeEnsino} />
          <label for="ensino-medio"> Tenho Ensino Médio</label><br/>
        </p>
        <p>
          <input type="checkbox" id="disponibilidade" name="disponibilidade" value={"Disponibilidade"} onChange={onChangeDisponibilidade} />
          <label for="ensino-medio"> Tenho disponibilidade</label><br/>
        </p>
      </label>

      <button onClick={criandoNovoUsuario}> Enviar dados </button>

    </Form>
  )
}
    
export default ConfirmationForm