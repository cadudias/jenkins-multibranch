node { /// <1> -  allocates an executor and workspace in the Jenkins environment.
    stage('Checkout') { // <2> -  describes distinct parts of the Pipeline for better visualization of progress/status.
        
         bat 'git pull origin master'

         bat 'npm install'

        echo 'Builded!'

    }
    stage('Test') {
        bat 'npm run --silent lint > TEST_RESULTS/eslint.xml'
    }
}