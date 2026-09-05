# Deploy — frontend na Vercel

## 1. Configuração do projeto

| Campo | Valor |
|---|---|
| Repositório | `contabilidade-reforma-trib/frontend` |
| Framework Preset | Next.js *(detectado sozinho)* |
| Root Directory | *(vazio — o repositório já é o frontend)* |
| Build Command | `npm run build` *(padrão)* |
| Install Command | `npm install` *(padrão)* |
| Output Directory | *(padrão do Next)* |
| Node.js Version | **24.x** |

A versão do Node importa: o projeto usa `@types/node` 24 e o build foi verificado nessa versão.

## 2. Variáveis de ambiente

| Variável | Ambientes | Valor |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Production, Preview, Development | `https://<seu-app>.up.railway.app` |

Só isso, por enquanto.

Duas coisas para não tropeçar:

- **`NEXT_PUBLIC_` é público.** O valor vai no bundle e qualquer pessoa lê no navegador. Serve para a URL da API; nunca para chave.
- **Variável de build.** O Next embute o valor no momento do build, então mudar a variável na Vercel **exige um redeploy** para valer. Alterar e recarregar a página não basta.

Sem a variável, o front assume `http://localhost:5000` e o teste de comunicação vai falhar em produção com uma mensagem dizendo exatamente isso.

## 3. Conferindo que subiu

Abra o site publicado. No canto inferior direito deve aparecer um toast:

- **"Comunicação com o backend feita com sucesso"** — front e API se enxergam, e o banco respondeu. O toast some em 8 segundos.
- **"Backend no ar, banco indisponível"** — a API respondeu mas o Neon não. Olhe `ConnectionStrings__Principal` no Railway.
- **"Falha ao falar com o backend"** — não chegou na API. As causas, em ordem de probabilidade:
  1. `NEXT_PUBLIC_API_URL` errada ou sem redeploy depois de mudar
  2. Domínio da Vercel ausente em `Cors__OrigensPermitidas__0` no Railway
  3. Serviço do Railway dormindo — a mensagem de tempo limite avisa

O toast é temporário: existe para provar que os dois ambientes conversam enquanto a POC está sendo montada. Sai quando houver telas de verdade consumindo a API — está registrado no backlog.

## 4. Domínios de preview

Cada branch gera um domínio próprio na Vercel, e cada um precisa estar no CORS do Railway para o teste de comunicação passar. Enquanto for POC, o backend sem lista de origens aceita qualquer uma, o que resolve o problema — e é a primeira coisa a fechar depois.
