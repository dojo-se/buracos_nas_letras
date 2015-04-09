var assert = require("assert");

//Resolva o problema
function buracoEmLetras(caracteres){
	var count = 0;
	for (var i = 0; i < caracteres.length; i++){
		if(caracteres.charAt(0) === 'A' || caracteres.charAt(1)=== 'D')
			count++;
	}
	return count;
}

//Descreva e teste
//Para testar, execute: mocha
describe('Buraco em Letras', function(){
  it('deve retornar 1 quando passar A', function(){
    assert.equal(buracoEmLetras('A'), 1);
  })
  it('deve retornar 2 quando passar AD', function(){
    assert.equal(buracoEmLetras('AD'), 2);
  })
})

exports.buracoEmLetras = buracoEmLetras;