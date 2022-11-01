import { FormContainer, FormContent, RegisterButton } from "./styles";

export function FormsClient() {
  return (
    <FormContainer>
      <form action="">
        <FormContent>
          <label htmlFor="name">Nome completo</label>
          <input type="text" id="name" />

          <label htmlFor="dataNascimento">Data de nascimento</label>
          <input type="date" id="dataNasciomento" placeholder="DD/MM/AAAA" />

          <label htmlFor="genero">Gênero</label>
          <select name="genero" id="genero">
            <option value="Default"></option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outros">Outros</option>
          </select>

          <label htmlFor="cpf">CPF</label>
          <input type="string" id="cpf" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="telefone">Telefone</label>
          <input type="string" id="telefone" />

          <label htmlFor="cep">CEP</label>
          <input type="string" id="number" />

          <label htmlFor="endereço">Endereço</label>
          <input type="string" id="endereço" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" />

          <label htmlFor="repeatPassword">Repetir a senha</label>
          <input type="password" id="repeatPassword" />

          <RegisterButton type="submit">Cadastrar</RegisterButton>
        </FormContent>
      </form>
    </FormContainer>
  );
}

