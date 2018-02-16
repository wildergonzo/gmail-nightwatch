require('nightwatch-cucumber')({
  cucumberArgs: [
  '--require', 'features/step_definitions',
  '--format', 'json:reports/cucumber.json', 
  'features'
  ],
  nightwatchOutput: true
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: "./bin/selenium-server-standalone-3.9.1.jar",
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': "./bin/chromedriver"
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    chrome: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "reports/screenshots"
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}