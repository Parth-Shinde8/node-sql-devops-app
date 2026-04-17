terraform {
  backend "s3" {
    bucket         = "devops-tf-state-bucket-12345"
    key            = "terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}