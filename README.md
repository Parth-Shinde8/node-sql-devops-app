# 🚀 End-to-End DevOps Pipeline on AWS with Terraform, Kubernetes (K3s), CI/CD & Monitoring

## 📌 Overview
Designed and implemented a production-style DevOps pipeline to deploy and monitor a containerized Node.js application using AWS, Terraform, Kubernetes (K3s), and GitHub Actions.

This project demonstrates real-world DevOps practices including Infrastructure as Code (IaC), CI/CD automation, container orchestration, and monitoring.

---

## 🏗️ Architecture

- Infrastructure provisioned using **Terraform**
- Application containerized using **Docker**
- Deployed on **K3s (Lightweight Kubernetes)** running on AWS EC2
- CI/CD pipeline implemented using **GitHub Actions**
- Monitoring with **Prometheus & Grafana**
- Remote Terraform state stored in **S3** with **DynamoDB state locking**

---

## ⚙️ Tech Stack

- **Cloud:** AWS (EC2, VPC, RDS, S3, DynamoDB)
- **IaC:** Terraform
- **Containerization:** Docker
- **Orchestration:** Kubernetes (K3s)
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus, Grafana
- **Database:** MySQL (AWS RDS)

---

## 🚀 Features

- Infrastructure as Code using Terraform (VPC, EC2, RDS)
- Automated CI/CD pipeline (build → push → deploy)
- Dockerized Node.js application
- Kubernetes-based deployment using K3s
- Real-time monitoring with Grafana dashboards
- Prometheus metrics collection
- Remote Terraform state management with S3
- State locking using DynamoDB to prevent concurrent changes

---

## 🔄 CI/CD Workflow

1. Developer pushes code to GitHub
2. GitHub Actions builds Docker image
3. Image pushed to DockerHub
4. GitHub Actions SSH into EC2 instance
5. Kubernetes deployment updated using:
   ```bash
   kubectl rollout restart deployment node-app