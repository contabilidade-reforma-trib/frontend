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
| `API_URL` | Production, Preview, Development | `https://<seu-app>.up.railway.app` |

Só isso, por enquanto.

**Sem prefixo `NEXT_PUBLIC_`, de propósito.** O front usa o servidor do Next como BFF (D-14): o navegador chama `/api/...` na própria origem, e é o servidor que fala com o Railway. A URL do backend nunca vai para o bundle, e o backend não precisa de CORS.

Sem a variável, o BFF assume `http://localhost:5000` e o teste de comunicação falha em produção com uma mensagem dizendo exatamente isso.

## 3. Conferindo que subiu

Abra o site publicado. No canto inferior direito deve aparecer um toast:

- **"Comunicação com o backend feita com sucesso"** — front e API se enxergam, e o banco respondeu. O toast some em 8 segundos.
- **"Backend no ar, banco indisponível"** — a API respondeu mas o Neon não. Olhe `ConnectionStrings__Principal` no Railway.
- **"Falha ao falar com o backend"** — não chegou na API. As causas, em ordem de probabilidade:
  1. `API_URL` errada ou ausente na Vercel
  2. Serviço do Railway dormindo — a mensagem de tempo limite avisa
  3. Backend fora do ar; confira `/api/saude` direto no Railway

O toast é temporário: existe para provar que os dois ambientes conversam enquanto a POC está sendo montada. Sai quando houver telas de verdade consumindo a API — está registrado no backlog.

## 4. Domínios de preview

Cada branch gera um domínio próprio na Vercel. Com o BFF isso deixou de exigir configuração: o navegador fala com a origem do próprio preview, e o backend não vê origem nenhuma. Basta a `API_URL` estar marcada também para o ambiente Preview.
