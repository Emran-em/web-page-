import { Skill, ExperienceItem, EducationItem } from './types';

export const RESUME_DATA = {
  name: "MD Waseem",
  title: "DevOps & Cloud Engineer",
  tagline: "Helping Businesses Accelerate Delivery Through Automation & Cloud Innovation",
  contact: {
    phone: "9652421900",
    email: "mdwaseem.cloudops@gmail.com",
    linkedin: "www.linkedin.com/in/md-waseem-0b432238b",
    location: "Hyderabad, Telangana, India"
  },
  summary: `I’m MD Waseem, a passionate DevOps and Cloud Engineer with a strong drive to simplify complex infrastructure and help teams deliver faster, safer, and smarter. With hands-on experience in AWS, Docker, Kubernetes, Terraform, Ansible, Jenkins, and CI/CD automation, I build scalable, secure, and high-performing environments that let development teams focus on what matters most — innovation.

At MVA Corporate Consultancy Services Pvt Ltd, I’ve worked with enterprise clients to design and automate cloud infrastructure, implement container-based deployments, and optimize release pipelines that reduced manual work and downtime. My approach blends deep technical skill with a practical understanding of business needs — ensuring every automation or optimization directly improves reliability, performance, or cost efficiency.

I’m known for bridging the gap between development and operations, introducing best practices in Infrastructure as Code (IaC), monitoring, and continuous integration. Whether it’s improving deployment velocity, enhancing cloud security, or enabling zero-downtime releases, my goal is to make infrastructure an enabler — not a bottleneck.`,
};

export const SKILLS: Skill[] = [
  { name: "AWS", category: "Cloud", iconName: "Cloud", description: "VPC, EC2, S3, IAM, CloudFormation" },
  { name: "Docker", category: "Containerization", iconName: "Container", description: "Containerization, Multi-stage builds" },
  { name: "Kubernetes", category: "Containerization", iconName: "Network", description: "Orchestration, Helm, Deployments" },
  { name: "Terraform", category: "IaC", iconName: "Database", description: "Infrastructure as Code, State Management" },
  { name: "Ansible", category: "IaC", iconName: "Terminal", description: "Configuration Management, Playbooks" },
  { name: "Jenkins", category: "CI/CD", iconName: "Settings", description: "Pipelines, Groovy Scripting" },
  { name: "GitLab CI/CD", category: "CI/CD", iconName: "GitMerge", description: "CI/CD Pipelines, Runners" },
  { name: "Linux", category: "OS", iconName: "Server", description: "Shell Scripting, Administration" },
  { name: "Prometheus", category: "Monitoring", iconName: "Activity", description: "Metrics Collection, Alerting" },
  { name: "Grafana", category: "Monitoring", iconName: "Monitor", description: "Dashboards, Visualization" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "MVA CORPORATE CONSULTANCY SERVICES PRIVATE LIMITED",
    role: "DevOps Engineer",
    period: "January 2021 - Present (4 years 11 months)",
    location: "Hyderabad, Telangana, India",
    description: [
      "Worked with enterprise clients to design and automate cloud infrastructure.",
      "Implemented container-based deployments using Docker and Kubernetes.",
      "Optimized release pipelines to reduce manual work and downtime.",
      "Bridged the gap between development and operations by introducing best practices in IaC (Terraform) and CI/CD (Jenkins/GitLab).",
      "Managed AWS resources efficiently including VPCs, CloudFormation stacks, and Security Groups.",
      "Ensured efficient, scalable, and secure deployment environments."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Osmania University, Hyderabad",
    degree: "Bachelor's degree, Business/Commerce, computer",
    period: "June 2018 - December 2021"
  }
];
