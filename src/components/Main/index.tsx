import * as S from './styles';

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      ></S.Logo>
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      ></S.Illustration>
    </S.Wrapper>
  );
}
