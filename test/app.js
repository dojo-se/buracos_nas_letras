var assert = require("assert");

//Resolva o problema
function buracoEmLetras(caracteres){
	var count = 0;
	var valem1 = ['A', 'D', 'O', 'Q', 'P', 'R'];
	var valem2 = ['B'];

  caracteres  =  caracteres.toUpperCase();
	for (var i = 0; i < caracteres.length; i++){
    if(valem1.indexOf(caracteres.charAt(i)) != -1){
      count +=1;
    }
    if(valem2.indexOf(caracteres.charAt(i)) != -1){
      count +=2;
    }    
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
  it('deve retornar 0 quando passar E', function(){
    assert.equal(buracoEmLetras('E'), 0);
  })
  it('deve retornar 0 quando passar C', function(){
    assert.equal(buracoEmLetras('C'), 0);
  })
  it('deve retornar 2 quando passar B', function(){
    assert.equal(buracoEmLetras('B'), 2);
  })
  it('deve retornar 2 quando passar DA', function(){
    assert.equal(buracoEmLetras('DA'), 2);
  })
  it('deve retornar 3 quando passar BAC', function(){
    assert.equal(buracoEmLetras('BAC'), 3);
  })

  it('deve retornar 3 quando passar bac', function(){
    assert.equal(buracoEmLetras('bac'), 3);
  })

  it('Deve retornar 0 quando for vazio', function() {
    assert.equal(buracoEmLetras(''),0);
  })


})

exports.buracoEmLetras = buracoEmLetras;