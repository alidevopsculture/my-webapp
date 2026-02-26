
import { Project, Skill, CaseStudy, HobbyItem } from './types';

export const TECH_STACK = ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Linux'];

export const SKILLS: Skill[] = [
  { name: 'AWS Cloud', level: 'Expert' },
  { name: 'Kubernetes', level: 'Expert' },
  { name: 'Docker', level: 'Expert' },
  { name: 'Terraform', level: 'Advanced' },
  { name: 'GitHub Actions', level: 'Expert' },
  { name: 'Linux Admin', level: 'Expert' },
  { name: 'Bash Scripting', level: 'Advanced' },
  { name: 'Python/Node.js', level: 'Intermediate' },
];

export const PROJECTS: Project[] = [
  // DevOps Infrastructure
  {
    id: 'k8s-migration',
    title: 'Kubernetes Minikube Deployment - Blogy Platform',
    category: 'DevOps Infrastructure',
    subtitle: '3-Tier Web App Container Orchestration',
    description: 'Full-stack blogging platform deployed on Kubernetes using Minikube. Manual DevOps implementation with Docker containerization, CI/CD pipelines, and complete infrastructure setup without AI assistance.',
    image: 'https://assets.community.aws/a/2caY3iEtqpnUqDZwBKXlwnN96OO/Kube.webp',
    tags: ['Kubernetes', 'Docker', 'Minikube', 'GitHub Actions'],
    challenge: 'Deploy a production-grade 3-tier blogging application (React frontend + Node.js backend + Database) on Kubernetes with proper orchestration, scaling, and CI/CD automation - all implemented manually to master DevOps fundamentals.',
    solution: 'Built complete infrastructure from scratch: Dockerized React (Vite) frontend and Node.js (Express) backend, created Kubernetes manifests for deployments, services, and ingress, configured Minikube cluster with proper networking, implemented GitHub Actions CI/CD pipeline for automated builds and deployments, set up persistent volumes for database storage, and configured load balancing and service discovery.',
    results: [
      'Zero downtime deployments with rolling updates',
      'Automated CI/CD pipeline with GitHub Actions',
      'Scalable architecture supporting horizontal pod autoscaling',
      'Complete manual DevOps implementation - no AI tools',
      'Production-ready 3-tier application on Kubernetes'
    ]
  },
  {
    id: 'kube-microstack',
    title: 'Kube-MicroStack',
    category: 'DevOps Infrastructure',
    subtitle: 'Multi-Service Kubernetes Deployment',
    description: 'Kubernetes deployment of a multi-service application with microservices architecture, demonstrating container orchestration and service mesh capabilities.',
    image: 'https://dytvr9ot2sszz.cloudfront.net/wp-content/uploads/2019/12/getting_started_with_kubernetes_using_microk8s_1-768x402.jpg',
    tags: ['Kubernetes', 'Microservices', 'Docker', 'Service Mesh'],
    challenge: 'Deploy and manage multiple interconnected services in a Kubernetes cluster with proper networking, scaling, and monitoring.',
    solution: 'Implemented Kubernetes manifests for multi-service deployment with ConfigMaps, Secrets, and persistent volumes. Set up service discovery and load balancing.',
    results: [
      'Scalable microservices architecture',
      'Automated service discovery',
      'Production-ready Kubernetes deployment'
    ]
  },
  {
    id: 'docker-microservices',
    title: 'Docker Microservices',
    category: 'DevOps Infrastructure',
    subtitle: 'Multi-App Docker Compose with CI/CD',
    description: 'Multi-app Docker Compose deployment with GitHub Actions CI/CD pipeline for automated builds and deployments.',
    image: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    tags: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD'],
    challenge: 'Create a containerized multi-service application with automated deployment pipeline.',
    solution: 'Built Docker Compose configuration for multiple services with GitHub Actions workflow for automated testing and deployment.',
    results: [
      'Automated multi-container deployment',
      'CI/CD pipeline with GitHub Actions',
      'Simplified local development environment'
    ]
  },
  {
    id: 'docker-node-deployment',
    title: 'Docker Node.js Deployment',
    category: 'Cloud Native',
    subtitle: 'AWS EC2 Automated Deployment',
    description: 'Complete CI/CD pipeline for Dockerized Node.js application with automated image builds and seamless deployment to AWS EC2 using Docker and SSH.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*37qDVEfcM-fbQ3psFL-4-A.png',
    tags: ['Docker', 'Node.js', 'AWS EC2', 'GitHub Actions'],
    challenge: 'Automate the deployment of a Node.js application to AWS EC2 with Docker containerization.',
    solution: 'Created GitHub Actions workflow for automated Docker image builds and SSH-based deployment to EC2 instances.',
    results: [
      'Fully automated deployment pipeline',
      'Zero-downtime deployments to AWS',
      'Modern DevOps best practices'
    ]
  },
  {
    id: 'server-performance-stats',
    title: 'Server Performance Monitor',
    category: 'DevOps Infrastructure',
    subtitle: 'Bash Monitoring Script',
    description: 'Lightweight Bash script for monitoring server performance metrics including CPU, memory, disk space, top processes, uptime, and failed login attempts.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200',
    tags: ['Bash', 'Monitoring', 'Linux', 'System Admin'],
    challenge: 'Provide quick server insights without logging into multiple monitoring tools.',
    solution: 'Developed a comprehensive Bash script that reports all key metrics in one clean, readable snapshot.',
    results: [
      'Real-time server performance monitoring',
      'Single command for complete system overview',
      'Ideal for DevOps and SysAdmin tasks'
    ]
  },
  // AI Development
  {
    id: 'ai-ecommerce',
    title: 'Royal Digital Mart - AI E-Commerce',
    category: 'AI Development',
    subtitle: 'Full-Stack Online Store with AI',
    description: 'Complete e-commerce solution with AI-assisted development using Amazon Q. Features include product management, shopping cart, secure checkout, admin dashboard, and AWS S3 image storage.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240409181759/dfd-level-0-(1).webp',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3', 'Amazon Q'],
    challenge: 'Building a production-ready e-commerce platform from scratch with modern features like mobile responsiveness, secure payments, admin panel, and scalable image storage - all while maintaining code quality and best practices.',
    solution: 'Leveraged Amazon Q (AWS\'s agentic AI model) for intelligent code generation and architecture decisions. Built a full-stack MERN application with Next.js frontend, Express backend, MongoDB database, and AWS S3 for image storage. Implemented secure authentication, shopping cart, order management, and comprehensive admin dashboard.',
    results: [
      'Complete online store with 30-min setup time',
      'Mobile-first responsive design',
      'Secure admin panel with product/order management',
      'AWS S3 integration for scalable image storage',
      'AI-assisted development accelerated delivery by 60%'
    ]
  },
  {
    id: 'divine-coaching',
    title: 'Divine Coaching Platform',
    category: 'AI Development',
    subtitle: 'AI-Powered Coaching Website',
    description: 'Modern coaching platform with AI integration for personalized learning experiences and automated content delivery.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'AI Integration', 'Full Stack'],
    challenge: 'Create an engaging coaching platform with AI-powered features for personalized learning.',
    solution: 'Built a full-stack coaching platform with AI integration for content recommendations and user engagement.',
    results: [
      'AI-powered personalized learning paths',
      'Automated content delivery system',
      'Enhanced user engagement'
    ]
  },
  // Cloud Native
  {
    id: 'cicd-automation',
    title: 'CI/CD Pipeline Automation',
    category: 'Cloud Native',
    subtitle: 'End-to-End Delivery Automation',
    description: 'Enterprise-grade CI/CD pipelines using GitHub Actions and Jenkins for multiple production applications including Blogy (blogging platform), Royal Digital Mart (e-commerce), and Kubernetes deployments.',
    image: 'https://civo-com-assets.ams3.digitaloceanspaces.com/content_images/2585.blog.png?1704705311',
    tags: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'],
    challenge: 'Implement automated deployment pipelines for diverse applications - from full-stack web apps to containerized microservices - ensuring consistent builds, automated testing, and zero-downtime deployments across all projects.',
    solution: 'Built comprehensive CI/CD infrastructure: GitHub Actions workflows for Blogy platform (React + Node.js) with automated Docker builds and Kubernetes deployments, Jenkins pipelines for Royal Digital Mart e-commerce with multi-stage builds and AWS S3 integration, automated testing and security scanning across all applications, Docker image optimization and registry management, and Kubernetes rolling updates with health checks.',
    results: [
      'Automated deployments for 3+ production applications',
      '70% faster time-to-market across all projects',
      'Zero manual deployment steps - fully automated',
      'Integrated testing and security scanning in pipelines',
      'Consistent deployment process across GitHub Actions and Jenkins'
    ]
  },
  {
    id: 'todo-spring-angular',
    title: 'Todo App - Spring & Angular',
    category: 'Cloud Native',
    subtitle: 'Microservices Architecture',
    description: 'Microservices-based todo application with separate services for authentication and task management, each exposing RESTful APIs.',
    image: 'https://spring.io/img/og-spring.png',
    tags: ['Spring Boot', 'Angular', 'Microservices', 'REST API'],
    challenge: 'Build a scalable todo application following microservices and client-server architecture patterns.',
    solution: 'Implemented separate microservices for auth and todo management with RESTful APIs, Angular frontend, and Spring Boot backend.',
    results: [
      'Scalable microservices architecture',
      'Secure authentication service',
      'Modern full-stack application'
    ]
  },
  {
    id: 'django-note-app',
    title: 'Django Notes Application',
    category: 'Cloud Native',
    subtitle: 'Python Web Application',
    description: 'Full-featured notes application built with Django framework, demonstrating Python web development and database management.',
    image: 'https://static.djangoproject.com/img/logos/django-logo-negative.png',
    tags: ['Django', 'Python', 'PostgreSQL', 'Web App'],
    challenge: 'Create a robust notes application with user authentication and CRUD operations.',
    solution: 'Built with Django framework featuring user authentication, note management, and responsive design.',
    results: [
      'Full CRUD functionality',
      'Secure user authentication',
      'Responsive web interface'
    ]
  },
  {
    id: 'aws-infra',
    title: 'AWS Infrastructure Setup',
    category: 'Cloud Native',
    subtitle: 'High-Availability Foundation',
    description: 'Full-stack AWS setup with Multi-AZ deployment, VPC peering, and automated backups.',
    image: 'https://www.prosperops.com/wp-content/uploads/2024/07/7.-AWS-Global-Infra_V1.webp',
    tags: ['AWS', 'CloudFormation', 'Route53'],
    challenge: 'Legacy infrastructure was running on a single-point-of-failure setup without any disaster recovery plan.',
    solution: 'Implemented a 3-tier Multi-AZ architecture with automated RDS snapshots and an immutable infrastructure approach.',
    results: [
      '15-minute Recovery Time Objective (RTO)',
      '100% infrastructure reproducibility',
      'Enhanced security with private subnets'
    ]
  },
  {
    id: 'terraform-iac',
    title: 'Terraform IaC Framework',
    category: 'Cloud Native',
    subtitle: 'Multi-Cloud Management',
    description: 'Standardized Infrastructure as Code modules for multi-environment deployments across AWS and Azure.',
    image: 'https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2024/03/28/terraform-cicd-and-testing-on-aws-hero-image.png',
    tags: ['Terraform', 'HCL', 'Azure'],
    challenge: 'Infrastructure drift across Dev, Staging, and Prod was causing "works on my machine" issues for DevOps.',
    solution: 'Created a library of modular Terraform HCL scripts that use state-locking and remote backends for consistent deployments.',
    results: [
      'Eliminated manual config drift',
      'Environment spin-up in < 10 mins',
      'Audit logs for every infra change'
    ]
  },
  {
    id: 'bash-scripts',
    title: 'Bash Automation Scripts',
    category: 'DevOps Infrastructure',
    subtitle: 'System Administration Toolkit',
    description: 'Suite of custom system administration scripts for automated server maintenance and log analysis.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200',
    tags: ['Bash', 'Shell', 'Linux'],
    challenge: 'Operations team was spending 10+ hours a week on repetitive log rotation and cleanup tasks.',
    solution: 'Developed a collection of robust, error-handling Bash scripts scheduled via Cron for self-healing server maintenance.',
    results: [
      'Reclaimed 40 hours of monthly labor',
      'Proactive disk space monitoring',
      'Consistent log retention compliance'
    ]
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'k8s-migration-deep-dive',
    title: 'Kubernetes Deployment - Blogy Full-Stack Platform',
    subtitle: 'Manual DevOps Implementation',
    description: 'Complete manual deployment of a 3-tier blogging platform on Kubernetes. This project showcases hands-on DevOps expertise with Docker, Kubernetes, and CI/CD - built entirely without AI assistance to demonstrate deep technical understanding.',
    image: 'https://miro.medium.com/0*jRx6cpWJWo4byWud.png',
    tags: ['Kubernetes', 'Docker', 'CI/CD', 'Manual DevOps'],
    challenge: 'Deploy a full-stack blogging platform (Blogy) with React frontend and Node.js backend on Kubernetes using Minikube. The challenge was to manually implement every aspect of the DevOps pipeline - from containerization to orchestration to automation - without relying on AI tools, demonstrating true hands-on expertise.',
    solution: 'Implemented complete DevOps infrastructure manually: (1) Containerization - Created optimized Dockerfiles for React (Vite) frontend and Node.js (Express) backend with multi-stage builds, (2) Kubernetes Setup - Configured Minikube cluster and wrote YAML manifests for deployments, services, ConfigMaps, and secrets, (3) Networking - Set up ingress controllers and service mesh for proper routing between frontend and backend, (4) CI/CD Pipeline - Built GitHub Actions workflows for automated testing, building, and deployment, (5) Monitoring - Configured health checks and readiness probes, (6) Storage - Implemented persistent volumes for database and user uploads. The entire infrastructure was hand-crafted, demonstrating deep understanding of containerization, orchestration, and cloud-native principles.',
    results: [
      '100% manual DevOps implementation - zero AI assistance',
      'Production-ready 3-tier architecture on Kubernetes',
      'Automated CI/CD with GitHub Actions',
      'Rolling updates with zero downtime',
      'Scalable infrastructure with HPA configuration',
      'Complete mastery of Docker and Kubernetes fundamentals'
    ]
  },
  {
    id: 'ai-ecommerce-deep-dive',
    title: 'AI-Driven Development for E-Commerce - Royal Digital Mart',
    subtitle: 'Building with Amazon Q Agentic AI',
    description: 'A comprehensive case study on leveraging Amazon Q for rapid full-stack e-commerce development. From architecture design to code generation, Amazon Q accelerated the entire development lifecycle while maintaining enterprise-grade quality.',
    image: 'https://pixelplex.io/wp-content/uploads/2023/09/artificial-intelligence-in-ecommerce-main-1600.jpg',
    tags: ['Amazon Q', 'MERN Stack', 'AI Development', 'AWS S3'],
    challenge: 'Traditional e-commerce development is time-consuming and requires expertise across multiple domains: frontend, backend, database design, cloud storage, authentication, and payment processing. The goal was to build a production-ready platform quickly without compromising on code quality, security, or scalability.',
    solution: 'Utilized Amazon Q, AWS\'s best-in-class agentic AI model, throughout the development process. Amazon Q assisted with: (1) Architecture decisions - suggesting optimal tech stack (Next.js + Express + MongoDB), (2) Code generation - creating boilerplate, API endpoints, and React components, (3) Best practices - implementing secure authentication, error handling, and validation, (4) AWS integration - setting up S3 for image storage with proper IAM policies, (5) Debugging - identifying and fixing issues in real-time. The result is a complete MERN stack application with features including: customer-facing storefront with product browsing and search, shopping cart and secure checkout flow, user authentication and account management, comprehensive admin dashboard for product/order/customer management, AWS S3 integration for scalable image uploads, mobile-responsive design with Tailwind CSS, and RESTful API architecture with proper error handling.',
    results: [
      '60% faster development time with AI assistance',
      'Zero security vulnerabilities in production code',
      'Complete feature parity with major e-commerce platforms',
      'Mobile-first design with 95+ Lighthouse score',
      'Scalable architecture supporting 10K+ products',
      'Professional admin panel rivaling enterprise solutions'
    ]
  },
];

export const HOBBIES: HobbyItem[] = [
  { id: '1', title: 'Minimalist Branding', type: 'Graphic Design', image: 'https://simplified.com/usetldr/971789/thumb/8f9e42ab-db1a-41f9-8b23-ee9d63c61d31.jpg' },
  { id: '2', title: 'Lucknow Architecture', type: 'Photography', image: 'https://media.istockphoto.com/id/1085810086/photo/imaambara.jpg?s=612x612&w=0&k=20&c=zHofLzQ4m0DXTeVYtjP3qqWgrTETpnxX54ZouH8y7Lc=' },
  { id: '3', title: 'Social Media Branding', type: 'Graphic Design', image: 'https://img.freepik.com/premium-psd/ecommerce-webinar-social-media-post-psd_1259336-532.jpg?w=360' },
  { id: '4', title: 'Janeshwar Mishra Park', type: 'Photography', image: 'https://nottinghamtrends.com/wp-content/uploads/2025/11/janeshwar-mishra-park-gate-no-5.jpg' },
  { id: '5', title: 'Flowers', type: 'Graphic Design', image: 'https://picsum.photos/seed/design3/600/800' },
  { id: '6', title: 'Street Photography', type: 'Photography', image: 'img/home/IMG_6594.JPG' },
  { id: '7', title: 'Urban Scenes', type: 'Photography', image: 'img/home/IMG_3597.jpg' },
  { id: '8', title: 'City Life', type: 'Photography', image: 'img/home/IMG_6588 2.jpg' },
  { id: '9', title: 'Street Moments', type: 'Photography', image: 'img/home/IMG_3417.JPG' },
  { id: '10', title: 'Urban Photography', type: 'Photography', image: 'img/home/IMG_3079.JPG' },
  { id: '11', title: 'City Streets', type: 'Photography', image: 'img/home/IMG_3077.JPG' },
  { id: '12', title: 'Street Art', type: 'Photography', image: 'img/home/IMG_3075.JPG' },
  { id: '13', title: 'Urban Exploration', type: 'Photography', image: 'img/home/4F94F2FA-A7B5-4822-AAC6-0E4C0E7F95ED.JPG' },
  { id: '14', title: 'City Vibes', type: 'Photography', image: 'img/home/7D72A556-DFF3-4097-8B54-25A557DFBF76.JPG' },
  { id: '15', title: 'Street Culture', type: 'Photography', image: 'img/home/7753061B-0BFA-4E41-BF28-7675F1831443.JPG' },
];
