# ShadCN Dashboard Studies

### Roteiro
- Criar um botão com o comando do shadcn
- Atualizar propriedades para ele ter um size "xl"
- Buscar icone la do lucide-react (CirclePlus)
- Adicionar custom color (--custom-color) no .css global (.6 .2 150)
- Adicionar --color-custom-color (var) e aplicou a --custom-color e usa um text-custom-color


### O que é CN?
- É um utilitário usado para concatenar classes CSS de forma condicional

Posso usar da seguinte maneira, por exemplo:
```bash
import { cn } from '@/lib/utils'

function Button({ isActive }: { isActive: boolean }) {
  return (
    <button className={cn('px-4 py-2', isActive && 'bg-blue-500')}>
      Clique
    </button>
  );
}
```


### App com ShadCN
- Criar componentes Sidebar e Navbar
- Modificar o layout em app/ substituindo o children por ambos os novos 2 componentes (inclua Navbar e children em um main tag)
- Navbar é uma tag nav e recebe um collapse button e Links (Dashboard com icon Moon)
- Adicionar Collpase Button da lib e os icones respectivos


### asChild
Propriedade do Radux UI que em vez de renderizar o próprio elemento, passa seu comportamento para a teg filha, como por exemplo:
```bash
import { Link } from "react-router-dom"; // ou de next/link no Next.js
import { Button } from "@/components/ui/button";

<Button asChild>
  <Link to="/dashboard">Ir para o dashboard</Link>
</Button>

```

`<button><a></a></button>` é inválido para o html, passando o asChild no `button`, a tag `a` recebe as caracteristicas da tag `button`.


### ShadCN Darkmode

Instalar `npm install next-themes`

O componente `ThemeProvider`, que é um provider, vai no root-layout (Descrito em `https://ui.shadcn.com/docs/dark-mode/next`).
Após importar podemos usar a estrutura padrão que a página também exemplifica para os botões de mudança do tema, usando a paleta do arquivo global.


### Sidebar

