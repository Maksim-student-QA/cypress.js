describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1'); 
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        
        it('Не верный пароль и верный логин', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio21'); 
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })  
           
           it('Проверка что в логине есть @', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1'); 
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })  

           it('верный пароль и не верный логин', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('german@dolnikovм.ru');
            cy.get('#pass').type('iLoveqastudio21'); 
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           }) 
           
           it('проверка востановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#form').contains('Форма логина');
            cy.get('#form > .header').should('be.visible');
            cy.get('#forgotEmailButton').click();
            cy.get('#forgotForm').contains('Восстановите пароль');
            cy.get('#mailForgot').type('german@dolnikov.ru')
            cy.get('#restoreEmailButton').click();
            cy.get('#message').contains('Успешно отправили пароль на e-mail');
           })

           it('проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#form').contains('Форма логина');
            cy.get('#form > .header').should('be.visible');
            cy.get('#mail').type('GerMan@Dolnikov.ru')
            cy.get('#pass').type('iLoveqastudio1')
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Авторизация прошла успешно');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');

           })
 })