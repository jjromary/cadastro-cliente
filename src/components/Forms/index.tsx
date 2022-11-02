import { FormContainer, FormContent, RegisterButton } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

interface IFormInputs {
  name: string;
  dataNascimento: string;
  genero: string;
  cpf: string;
  email: string;
  telefone: string;
  cep: string;
  endereço: string;
  senha: string;
  repeatPassword: string;
}

export function FormsClient() {
  const { register, handleSubmit } = useForm<IFormInputs>({});

  function handleRegisterClient(data: IFormInputs) {
    console.log(data);
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleRegisterClient)} action="">
        <FormContent>
          <label htmlFor="name">Nome completo *</label>
          <input
            type="text"
            id="name"
            {...(register("name"),
            {
              required: true,
              minLength: 3,
            })}
          />

          <label htmlFor="dataNascimento">Data de nascimento *</label>
          <input
            type="date"
            id="dataNasciomento"
            {...(register("dataNascimento"),
            {
              required: true,
              valueAsDate: true,
            })}
            placeholder="DD/MM/AAAA"
          />

          <label htmlFor="genero">Gênero</label>
          <select id="genero" {...register("genero")}>
            <option value="Default"></option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outros">Outros</option>
          </select>

          <label htmlFor="cpf">CPF *</label>
          <input
            type="string"
            id="cpf"
            {...(register("cpf"),
            {
              required: true,
            })}
          />

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            {...(register("email"),
            {
              required: true,
            })}
          />

          <label htmlFor="telefone">Telefone</label>
          <input type="string" id="telefone" {...register("telefone")} />

          <label htmlFor="cep">CEP *</label>
          <input
            type="string"
            id="number"
            {...(register("cep"),
            {
              required: true,
            })}
          />

          <label htmlFor="endereço">Endereço *</label>
          <input type="string" id="endereço" {...register("endereço")} />

          <label htmlFor="senha">Senha *</label>
          <input
            type="password"
            id="senha"
            {...(register("senha"),
            {
              required: true,
            })}
          />

          <label htmlFor="repeatPassword">Repetir a senha *</label>
          <input
            type="password"
            id="repeatPassword"
            {...register("repeatPassword")}
          />

          <RegisterButton type="submit">Cadastrar</RegisterButton>
        </FormContent>
      </form>
    </FormContainer>
  );
}

