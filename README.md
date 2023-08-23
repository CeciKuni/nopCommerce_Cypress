# Demo Automation - Cypress

Breve prueba con Cypress y Page Objects Model (POM) del tipo e2e. Si bien, Cypress no recomienda utilizar POM ya que está más orientado a que lo utilicen los desarrolladores o bien QAs con acceso al código de la aplicación (Cypress funciona mejor con las apps actions) es decir, utilizar directamente los métodos de Javascript en vez de los elementos en el html como lo hace Selenium.
De todas maneras, el POM funciona y bastante bien, en comparación con la demo que hice de Python con Selenium es un poco más rápido Cypress. A diferencia de ese proyecto, los locators los coloqué en los POM de cada página no en un archivo aparte.


## Datos

1. Página de prueba utilizada: [NonCommerce](https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F)
2. Sistema Operativo: Windows 10.
3. Navegadores disponibles en Cypress: Chrome, Edge, Electron y Firefox.
4. IDE: Visual Studio Code.
5. El proyecto cuenta con capturas de pantalla en formato .png que se guardan sólo si el test falla. Estos se guardan por defecto en la carpeta "screenshots".
6. El reporte html se guarda en la carpeta "reports". Se va pisando con el nombre "index.html". Se puede o no generar, depende el comando utilizado. Se utilizó el plugin "cypress-mochawesome-reporter".
7. El proyecto también cuenta una carpeta "videos". Tener en cuenta que Mocha también genera videos dentro de la carpeta reports, si no se deshabilita se duplicarán los videos (Ver el archivo cypress.config.js).

## Instalaciones realizadas

- [Nodejs](https://nodejs.org/es/download). Configurar la ruta de la carpeta "nodejs" en las variables de entorno de Windows, con esto podremos utilizar el comando npm, para ver las versiones:
```
$ node -v
```
```
$ npm -v
```
- Cypress: instalar desde la carpeta del proyecto. Esto generará la carpeta node_modules.
```
$ npm  install cypress --save-dev
```
- Librería npx (conjuntos de comandos para ejecutar los scripts).
```
$ npm  install -g npx
```

## Estructura del proyecto

- [cypress](cypress) - Carpeta de Cypress con las siguientes sub carpetas:
- [e2e](cypress/e2e) - Los archivos *.cy.js son los tests.
- [fixtures](cypress/fixtures) - Archivos .json utilizados para almacenar las variable utilizadas en las pruebas.
- [pages](cypress/pages) - Carpeta con los POM y locators.
- [reports](cypress/reports) - Reporte generado por Mocha.
- [support](cypress/support) - Archivo commands.js que genera Cypress (para guardar funciones de javascript o typescript personalizados). Archivo e2e.js comandos e instrucciones que utilizan los tests.
- [videos](cypress/videos) - Video en formato .mp4 de las pruebas que se generan junto a Mocha.
- [cypress.config.js](cypress.config.js) - Archivo de Cypress con las configuraciones generales.
- [package.json](package.json) - En este archivo se pueden configurar atajos para ejecutar los scripts y correr los tests. También están las versiones de las dependencias utilizadas en el proyecto.

## Comandos
Este comando permite abrir la ventana de interfaz de Cypress y de allí seleccionar el tipo de test (e2e, browser y spec que vendría a ser el test a ejecutar).
```
$ npx cypress open
```
O bien si se quiere correr un testcase en particular, por ejemplo el de login, sin tener que abrir la interfaz de Cypress:
```
$ cypress run --spec cypress/e2e/test_login.cy.js --browser chrome
```
Para generar el reporte en html.
```
$ npm run html-report
```
Para ejecutar los tests por consola sin abrir el navegador o la interfaz de Cypress:
```
$ npm test
```

