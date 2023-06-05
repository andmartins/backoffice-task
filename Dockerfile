trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  dockerRegistryServiceConnection: 'office-task-registry-connection'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '14.x'
  displayName: 'Install Node.js'

- script: |
    npm ci
    npm run build
  displayName: 'Build and package ReactJS app'

- task: Docker@2
  inputs:
    containerRegistry: '$(dockerRegistryServiceConnection)'
    repository: 'backoffice-task-docker'
    command: 'build'
    Dockerfile: 'Dockerfile'
    tags: |
      $(Build.BuildId)
      latest
  displayName: 'Build Docker image'

- task: Docker@2
  inputs:
    containerRegistry: '$(dockerRegistryServiceConnection)'
    repository: 'backoffice-task-docker'
    command: 'push'
    Dockerfile: 'Dockerfile'
    tags: |
      $(Build.BuildId)
      latest
  displayName: 'Push Docker image'

- task: Docker@2
  inputs:
    containerRegistry: '$(dockerRegistryServiceConnection)'
    repository: 'backoffice-task-docker'
    command: 'run'
    Dockerfile: 'Dockerfile'
    arguments: '-p 80:80'
    detach: true
  displayName: 'Run Docker container'
