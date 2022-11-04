import {
  ErroMessage,
  FormContainer,
  FormContent,
  InputField,
  LabelField,
  RegisterButton,
  SelectField,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerClientFormValidationSchema } from "./validationFormField";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
interface FormDataClient {
  name: string;
  dateBirth: string;
  genero: string;
  cpf: string;
  email: string;
  telphone: string;
  cep: string;
  neighborhood: string | null;
  city: string | null;
  street: string | null;
  state: string | null;
  password: string;
  repeatPassword: string;
}

const validationFormClient = registerClientFormValidationSchema;

export function FormsClient() {
  const [values, setValues] = useState<{
    localidade: string | null;
    uf: string | null;
    bairro: string | null;
    logradouro: string | null;
  }>({
    localidade: "",
    uf: "",
    bairro: "",
    logradouro: "",
  });

  const [isFetching, setIsFetching] = useState<boolean>();
  const { register, handleSubmit, formState, reset, setValue } =
    useForm<FormDataClient>({
      resolver: zodResolver(validationFormClient),
      defaultValues: {
        name: "",
        dateBirth: "",
        genero: "",
        cpf: "",
        email: "",
        telphone: "",
        cep: "",
        password: "",
        repeatPassword: "",
      },
    });

  const handleRegisterClient = (data: FormDataClient) => {
    toast.success("Usuario registrado como sucesso!");
    reset();
  };

  const searchAddress = (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    api
      .get(`${cep}/json/`)
      .then((response) => {
        setValues(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    setValue("street", values?.logradouro);
    setValue("neighborhood", values?.bairro);
    setValue("city", values?.localidade);
    setValue("state", values?.uf);
  }, [values]);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleRegisterClient)} action="">
        <FormContent>
          <LabelField htmlFor="name">Nome completo *</LabelField>
          <InputField
            type="text"
            id="name"
            {...register("name")}
            tabIndex={0}
            alt="Campo para inserir o nome completo"
          />
          <ErroMessage>{formState.errors?.name?.message}</ErroMessage>

          <LabelField htmlFor="dateBirth">Data de nascimento *</LabelField>
          <InputField
            type="text"
            id="dateBirth"
            {...register("dateBirth")}
            placeholder="DD/MM/AAAA"
            tabIndex={0}
            alt="Campo para inserir a sua data de nascimento"
          />
          <ErroMessage>{formState.errors?.dateBirth?.message}</ErroMessage>

          <LabelField htmlFor="genero">Gênero *</LabelField>
          <SelectField id="genero" {...register("genero")} tabIndex={0}>
            <option value="NotInformed">Prefiro não informar</option>
            <option value="Female">Feminino</option>
            <option value="Male">Masculino</option>
            <option value="Others">Outros</option>
          </SelectField>

          <LabelField htmlFor="cpf">CPF *</LabelField>
          <InputField
            type="string"
            id="cpf"
            placeholder="XXXXXXXXXXX"
            {...register("cpf")}
            tabIndex={0}
            alt="Campo para inserir o CPF"
          />
          <ErroMessage>{formState.errors?.cpf?.message}</ErroMessage>

          <LabelField htmlFor="email">Email *</LabelField>
          <InputField
            type="string"
            id="email"
            placeholder="exemple@exemple.com"
            {...register("email")}
            tabIndex={0}
            alt="campo para inserir o email"
          />
          <ErroMessage>{formState.errors?.email?.message}</ErroMessage>

          <LabelField htmlFor="telphone">Telefone *</LabelField>
          <InputField
            type="string"
            id="telphone"
            placeholder="(DDD) + 99999-9999"
            {...register("telphone")}
            tabIndex={0}
            alt="campo para inserir o telefone"
          />
          <ErroMessage>{formState.errors?.telphone?.message}</ErroMessage>
          <LabelField htmlFor="cep">CEP *</LabelField>
          <InputField
            type="string"
            id="cep"
            placeholder="XXXXX-XXX"
            {...register("cep")}
            onBlur={searchAddress}
            tabIndex={0}
            alt="campo para inserir o CEP. Com CEP inserido os campos Rua, Bairro, Cidade e Estado serão preenchidos automaticamente."
          />
          {isFetching && <ErroMessage>Carregando...</ErroMessage>}
          <ErroMessage>{formState.errors?.cep?.message}</ErroMessage>

          <LabelField htmlFor="street">Rua</LabelField>
          <InputField
            type="string"
            id="street"
            {...register("street")}
            tabIndex={0}
            alt="campo rua"
          />

          <LabelField htmlFor="neighborhood">Bairro</LabelField>
          <InputField
            type="string"
            id="neighborhood"
            {...register("neighborhood")}
            tabIndex={0}
            alt="campo bairro"
          />

          <LabelField htmlFor="city">Cidade</LabelField>
          <InputField
            type="string"
            id="city"
            {...register("city")}
            tabIndex={0}
            alt="campo cidade"
          />

          <LabelField htmlFor="state">Estado</LabelField>
          <InputField
            type="string"
            id="state"
            {...register("state")}
            tabIndex={0}
            alt="campo estado"
          />

          <LabelField htmlFor="password">
            Senha *
            <i>
              Senha deverá conter no mínimo uma letra minúscula, uma maiúscula,
              um número, um caractere especial e com o comprimento mínimo de
              oito caracteres.
            </i>
          </LabelField>
          <InputField
            type="password"
            id="password"
            {...register("password")}
            tabIndex={0}
            alt="Insira a sua senha"
          />
          <ErroMessage>{formState.errors?.password?.message}</ErroMessage>

          <LabelField htmlFor="repeatPassword">Repetir a senha *</LabelField>
          <InputField
            type="password"
            id="repeatPassword"
            {...register("repeatPassword")}
            tabIndex={0}
            alt="repita a sua senha inseria no campo anterior."
          />
          <ErroMessage>{formState.errors?.repeatPassword?.message}</ErroMessage>
          <RegisterButton type="submit">Cadastrar</RegisterButton>
        </FormContent>
      </form>
    </FormContainer>
  );
}
