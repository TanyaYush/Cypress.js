describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

   afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });


    it('Верный логин и верный пароль', function () {

         cy.get('#mail').type('german@dolnikov.ru'); //ввести логин
         cy.get('#pass').type('iLoveqastudio1'); //ввести пароль
         cy.get('#loginButton').click () //нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
           })

             it('Восстановление пароля', function () {

         cy.get('#forgotEmailButton').click() // нажать забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести логин
         cy.get('#restoreEmailButton').click(); // нажать отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
           })

      it('Верный логин и неверный пароль', function () {

         cy.get('#mail').type('german@dolnikov.ru'); //ввести верный логин
         cy.get('#pass').type('iLoveqastudio11'); //ввести неверный пароль
         cy.get('#loginButton').click () //нажать войти
         cy.get('#message').contains('Такого логина или пароля нет');
           })


             it('Неверный логин и верный пароль', function () {

         cy.get('#mail').type('german11@dolnikov.ru'); //ввести неверный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
         cy.get('#loginButton').click () //нажать войти
         cy.get('#message').contains('Такого логина или пароля нет');
           })

           
             it('Проверка валидации логина на @', function () {

         cy.get('#mail').type('germandolnikov.ru'); //ввести логин без @
         cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
         cy.get('#loginButton').click () //нажать войти
         cy.get('#message').contains('Нужно исправить проблему валидации');
           })

           it('Приведение к строчным буквам в логине', function () {

         cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввести логин в виде заглавных и строчных букв
         cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
         cy.get('#loginButton').click () //нажать войти
         cy.get('#message').contains('Авторизация прошла успешно');
           })
 }) 


 // 