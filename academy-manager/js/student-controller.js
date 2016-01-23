'use strict';

// Criar uma função construtora para ã instanciação de Estudantes que contenha
// os seguintes campos: name, phone, mail, address;

function Student(name, phone, mail, address) {
  this.name = name;
  this.phone = phone;
  this.mail = mail;
  this.address = address;

  this.getReport = function() {
    let report = '';
    report += ' Name: ' + this.name;
    report += ' Phone: ' + this.phone;
    report += ' Mail: ' + this.mail;
    report += ' Address: ' + this.address;
    return report;
  }
};

// document.getElementById('salvar').addEventListener('click', callback)
// document.getElementById('nome').value
// alert('teste');

var inputName = document.getElementById('name')
  , inputPhone = document.getElementById('phone')
  , inputMail = document.getElementById('mail')
  , inputAddress = document.getElementById('address')
  , studentForm = document.getElementById('studentForm');


studentForm.addEventListener('submit', function() {
  let student = new Student(inputName.value, inputPhone.value, inputMail.value, inputAddress.value);
  alert(student.getReport());
});
