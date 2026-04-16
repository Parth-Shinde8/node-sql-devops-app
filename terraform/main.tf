terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "devops-tf-state-bucket-12345"
    key    = "terraform.tfstate"
    region = "ap-south-1"
  }
}