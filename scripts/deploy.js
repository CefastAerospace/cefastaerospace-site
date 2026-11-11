#!/usr/bin/env node
// Deploy para os DOIS domínios do site no surge.
// O surge trata "www.dominio" como um projeto separado de "domínio" — publicar
// apenas em um deixa o outro com build antigo (já aconteceu: www ficou desatualizado).
// Uso: npm run build && node scripts/deploy.js
import { execSync } from 'child_process';
import { resolve } from 'path';

const domains = ['cefastaerospace.com.br', 'www.cefastaerospace.com.br'];
const dist = resolve(process.cwd(), 'dist');

for (const domain of domains) {
  console.log(`🚀 Publicando em ${domain}...`);
  execSync(`npx surge ${dist} https://${domain}`, { stdio: 'inherit' });
}
console.log('✅ Deploy concluído nos dois domínios.');
