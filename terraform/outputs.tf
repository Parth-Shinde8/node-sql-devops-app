output "ec2_ip" {
  value = aws_instance.devops_ec2.public_ip
}

output "rds_endpoint" {
  value = aws_db_instance.mysql.endpoint
}