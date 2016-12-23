node { // <1> -  allocates an executor and workspace in the Jenkins environment.
    stage('Checkout') { // <2> -  describes distinct parts of the Pipeline for better visualization of progress/status.
         checkout scm
    }
    stage('Test') {
        sh 'node -v'
    }
}