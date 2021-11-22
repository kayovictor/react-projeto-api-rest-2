import api from './Api.js'
import { useState } from 'react'
import { Title, Main, Section, Infor } from './styled'


function App() {
  const [address, setAddress] = useState({});
  const [cep, setCep] = useState('');

  const handleGetAddress = async (e) => {
    try {
      e.preventDefault();
      console.log('aqui');
      const response = await api.get(`${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      alert('Algo deu errado!')
    }

  }

  return (
    <div>

      <Title>CONSULTAR <span>CEP</span></Title>

      <br />
      <Infor>
        <input type='text' onChange={(e) => setCep(e.target.value)} maxLength='8' />
        <button onClick={handleGetAddress}>-></button>
      </Infor>
      <br />
      <Main>
        <h1>CEP {address.cep}</h1>
        <p>{address.localidade} - {address.uf}</p>
        <Section>
          <article>
            <p>Logradouro:<span> {address.logradouro}</span> </p>
            <p>CEP:<span> {address.cep}</span> </p>
            <p>Bairro: <span> {address.bairro}</span></p>
          </article>
          <div>
            <p>Cidade:<span> {address.localidade}</span> </p>
            <p>UF:<span> {address.uf}</span> </p>
            <p>Código DDD: <span> {address.ddd}</span></p>
          </div>
        </Section>
      </Main>
      <br />
    </div>
  );
}

export default App;
