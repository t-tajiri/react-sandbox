#!groovy

pipeline {
  stages {
    stage('scm') {
      steps {
        scm
      }
    }
    stage('unit test') {
      steps {
        sh 'yarn run test'
      }
    }
    stage('code analyze') {
      steps {
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
}