async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Sabe o que significa te amar?

Deixa eu te explicar rapidinho...

Significa aturar suas risadas e gostar muito. A ponto de sentir falta de todas elas.

É como sentir uma leve brisa, sem saber quando vai voltar para essa linda praia.

É olhar para outras pessoas e desejar que todas fossem você.

É saber que não existe pessoa mais fantástica que você.

E sentir que ainda falta muito para te dar o que você sempre vai merecer.

Olha, eu sou bobo e muito infantil às vezes. 

E grande parte do tempo, eu me demonstro frágil por isso: 

Por que eu quero que você saiba que você é tudo pra mim!

Pois, como diria Fernando Pessoa:

"Todas as cartas de amor são
Ridículas.
Não seriam cartas de amor se não fossem
Ridículas.Também escrevi em meu tempo cartas de amor,
Como as outras,
Ridículas.As cartas de amor, se há amor,
Têm de ser
Ridículas.Mas, afinal,
Só as criaturas que nunca escreveram
Cartas de amor
É que são
Ridículas.Quem me dera no tempo em que escrevia
Sem dar por isso
Cartas de amor
Ridículas.A verdade é que hoje
As minhas memórias
Dessas cartas de amor
É que são
Ridículas.(Todas as palavras esdrúxulas,
Como os sentimentos esdrúxulos,
São naturalmente
Ridículas)."

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
