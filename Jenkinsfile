node { /// <1> -  allocates an executor and workspace in the Jenkins environment.
    stage('Checkout') { // <2> -  describes distinct parts of the Pipeline for better visualization of progress/status.
         
         echo 'Builded!'

         bat 'git pull origin master'

         bat 'npm install'

    }
    stage('Test') {
        bat 'npm run --silent lint > TEST_RESULTS/eslint.xml'
        

        //sh echo "TEST!"
    }
}