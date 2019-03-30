#!groovy

pipeline {
  stages {
    stage('scm') {
      scm
    }
    stage('unit test') {
      sh 'yarn run test'
    }
    stage('code analyze') {
      sh '''
        sonar-scanner ¥
          -Dsonar.projectKey=test ¥
          -Dsonar.sources=. ¥
          -Dsonar.host.url=http://localhost:9000 ¥
          -Dsonar.login=82d92f75025604ba66852e21e8315ffe2a3fef2a ¥
          -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
      '''
    }
  }
}