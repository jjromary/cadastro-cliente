import { FormContainer, FormContent, RegisterButton } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerClientFormValidationSchema } from "./validationFormField";

interface FormDataClient {
  name: string;
  dataNascimento: string;
  genero: string;
  cpf: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  senha: string;
  repeatPassword: string;
}

const validationFormClient = registerClientFormValidationSchema;

export function FormsClient() {
  const { register, handleSubmit, formState, reset } = useForm<FormDataClient>({
    resolver: zodResolver(validationFormClient),
    defaultValues: {
      name: " ",
      dataNascimento: " ",
      genero: " ",
      cpf: " ",
      email: " ",
      telefone: " ",
      cep: " ",
      endereco: " ",
      senha: " ",
      repeatPassword: " ",
    },
  });

  function handleRegisterClient(data: FormDataClient) {
    console.log(data);
    reset();
  }

  console.log(formState.errors);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleRegisterClient)} action="">
        <FormContent>
          <label htmlFor="name">Nome completo *</label>
          <input type="text" id="name" {...register("name")} />
          <p>{formState.errors?.name?.message}</p>

          <label htmlFor="dataNascimento">Data de nascimento *</label>
          <input
            type="text"
            id="dataNasciomento"
            {...register("dataNascimento")}
            placeholder="DD/MM/AAAA"
          />
          <p>{formState.errors?.dataNascimento?.message}</p>

          <label htmlFor="genero">Gênero</label>
          <select id="genero" {...register("genero")}>
            <option value="Default"></option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outros">Outros</option>
          </select>

          <label htmlFor="cpf">CPF *</label>
          <input type="string" id="cpf" {...register("cpf")} />
          <p>{formState.errors?.cpf?.message}</p>

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" {...register("email")} />
          <p>{formState.errors?.email?.message}</p>

          <label htmlFor="telefone">Telefone</label>
          <input
            type="string"
            id="telefone"
            placeholder="(DDD)+99999-9999"
            {...register("telefone")}
          />
          <p>{formState.errors?.telefone?.message}</p>

          <label htmlFor="cep">CEP *</label>
          <input type="string" id="number" {...register("cep")} />
          <p>{formState.errors?.cep?.message}</p>

          <label htmlFor="endereço">Endereço *</label>
          <input type="string" id="endereço" {...register("endereco")} />
          <p>{formState.errors?.endereco?.message}</p>

          <label htmlFor="senha">
            Senha *{" "}
            <i>
              Senha deverá conter no mínimo uma letra minúscula, uma maiúscula,
              um número, um caractere especial e com o comprimento mínimo de
              oito caracteres.
            </i>
            .
          </label>
          <input type="password" id="senha" {...register("senha")} />
          <p>{formState.errors?.senha?.message}</p>

          <label htmlFor="repeatPassword">Repetir a senha *</label>
          <input
            type="password"
            id="repeatPassword"
            {...register("repeatPassword")}
          />
          <p>{formState.errors?.repeatPassword?.message}</p>

          <RegisterButton type="submit">Cadastrar</RegisterButton>
        </FormContent>
      </form>
    </FormContainer>
  );
}

