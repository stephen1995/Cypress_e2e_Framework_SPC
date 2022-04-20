const report = require('multiple-cucumber-html-reporter');

let today = new Date();
let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear()
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

report.generate({
    jsonDir: './cypress/cucumber-json',
    reportPath: './reports/cucumber-htmlreport.html',
    metadata: {
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info ' + date,
        data: [
            { label: 'Project', value: 'E2E Framework SPC' },
            { label: 'Release', value: '1' },
            { label: 'Cycle', value: 'V1' },
            { label: 'Execution Start Time', value: time },
        ]
    }
});