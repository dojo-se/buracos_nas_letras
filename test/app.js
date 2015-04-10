var assert = require("assert");

//Resolva o problema
function buracoEmLetras(caracteres) {
  var count = 0;
  var valem1 = ['A', 'D', 'O', 'Q', 'P', 'R', 'a', 'b', 'd', 'e', 'o', 'p', 'q'];
  var valem2 = ['B'];

  for (var i = 0; i < caracteres.length; i++) {
    if (valem1.indexOf(caracteres.charAt(i)) != -1) {
      count +=1;
    }

    if (valem2.indexOf(caracteres.charAt(i)) != -1) {
      count +=2;
    }
  }
  return count;
}

//Descreva e teste
//Para testar, execute: mocha
describe('#buracoEmLetras', function() {
  context('Quando passar A', function() {
    it('deve retornar 1', function() {
      assert.equal(buracoEmLetras('A'), 1);
    })
  })

  context('Quando passar B', function() {
    it('deve retornar 2', function() {
      assert.equal(buracoEmLetras('AD'), 2);
    })
  })

  context('Quando passar E', function() {
    it('deve retornar 0', function() {
      assert.equal(buracoEmLetras('E'), 0);
    })
  })

  context('Quando passar C', function() {
    it('deve retornar 0', function() {
      assert.equal(buracoEmLetras('C'), 0);
    })
  })

  context('Quando passar B', function() {
    it('deve retornar 2', function() {
      assert.equal(buracoEmLetras('B'), 2);
    })
  })

  context('Quando passar DA', function() {
    it('deve retornar 2', function() {
      assert.equal(buracoEmLetras('DA'), 2);
    })
  })

  context('Quando passar BAC', function() {
    it('deve retornar 3', function() {
      assert.equal(buracoEmLetras('BAC'), 3);
    })
  })

  context('Quando passar bac', function() {
    it('deve retornar 2', function() {
      assert.equal(buracoEmLetras('bac'), 2);
    })
  })

  context('Quando for vazio', function() {
    it('deve retornar 0', function() {
      assert.equal(buracoEmLetras(''), 0);
    })
  })

  context('Quando for somente espaços', function() {
    it('deve retornar 0', function() {
      assert.equal(buracoEmLetras('    '), 0);
    })
  })
})

exports.buracoEmLetras = buracoEmLetras;
