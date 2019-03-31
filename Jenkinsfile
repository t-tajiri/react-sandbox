#!groovy

pipeline {
  agent {
    docker {
      image 'node:7-alpine'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
    stage('unit test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('code analyze') {
      steps {
        sh '''
          sonar-scanner ¥
            -Dsonar.projectKey=react-sample ¥
            -Dsonar.sources=. ¥
            -Dsonar.host.url=http://localhost:9000 ¥
            -Dsonar.login=e91837c6d03aef639f02c2dae11ebd3282541ff6 ¥
            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
        '''
      }
    }
  }
}