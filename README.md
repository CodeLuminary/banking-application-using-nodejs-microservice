## Banking application using nodejs microservice

This is a microservice and event driven based banking application.

## Technology Stack & Tools

- [NodeJs](https://nodejs.org) (Javascript runtime engine for backend)
- [Vue](https://vuejs.org) (Javascript library for frontend)
- [MongoDB](https://mongodb.com) (A NoSQL database that is highly scalable, highly consistent(strong & eventual) and partition tolerant)
- [Nginx](https://nginx.com) (Web server that can be use as a reverse proxy, load balancer, HTTP cache, mail proxy, API gateway)
- [Kafka](https://kafka.apache.org) (An open-source distributed event streaming platform)
- [Docker](https://docker.com) (Software platform for building, testing & deploying applications quickly in form of containers)
- [Docker Compose](https://docs.docker.com/compose) (Multi container orchestration tool in a single machine or computer)
- [Kubernetes](https://kubernetes.io) (Production grade container orchestration tool)
- [Minikube](https://minikube.sigs.k8s.io) (Local cluster for testing kubernetes deployment)
- [AWS](https://aws.amazon.com) (Cloud provider)

## ARCHITECTURE

This application makes use of the microservice architecture where each part of the application is broken into a separate service. Each service is tested and deployed using a container software which is Docker.

### ADVANTAGES OF MICROSERVICE ARCHITECTURE

- Each service can be scaled differently thus reducing down time & cost
- Each service is isolated from each other thus services can be built using different programming languages.
- 😁😁 Add your own to the list 😁😁

### DISADVANTAGES OF MICROSERVICE ARCHITECTURE

- It's a complex architecture to work with thus suitable for medium to large scale projects
- 😁😁 Add your own to the list 😁😁

### ALTERNATIVE ARCHITECTURE

An alternative architecture is the monolithic architecture which involves everything (services) been build and deploy as a single(mono) unit.

### ADVANTAGES OF MONOLITHIC ARCHITECTURE

- It's easy to work with and deploy
- 😁😁 Add your own to the list 😁😁

### DISADVANTAGES OF MONOLITHIC ARCHITECTURE

- Suitable for small projects
- Each part of the project cannot be scaled separately
- Usually tied to a particular language
- 😁😁 Add your own to the list 😁😁

## Requirements For Initial Setup

This project can be setup using a couple of ways viz:

- Using docker compose: docker compose is use to build,run & manage multiple containers in a single machine or in ones computer.
- Using docker swamp: docker swamp is a container orchestration tool to run & manage containers in multiple machine.
- Using Kubernetes: Kubernetes is a production grade tool for orchestrating multiple containers in cloud environment like AWS, GCP, Azure.
- Using Minikube: Minikube enables the use of kubernetes in ones computer, making ones computer a node in a cluster.

NB: Using docker swamp will not be documented in this project

### USING DOCKER COMPOSE

- [Docker Destop](https://docs.docker.com/desktop) (For building, runing multiple containers in a single machine)

### USING KUBERNETES & MINIKUBE

- [Kubectl](https://kubernetes.io/docs/tasks) (A command line tool for managing kubernetes clusters)
- [Minikube](https://minikube.sigs.k8s.io) (Local cluster for testing kubernetes deployment)