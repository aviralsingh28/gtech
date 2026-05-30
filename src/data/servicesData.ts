export interface ServiceDetail {
  num: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  technologies: string[];
  benefits: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    num: "01",
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom software solutions tailored to your business needs with cutting-edge technologies and best practices.",
    longDescription: `At GTechSoft, we specialize in creating custom software solutions that align perfectly with your business objectives. Our experienced development team leverages cutting-edge technologies and industry best practices to deliver robust, scalable, and maintainable software systems.

Whether you're looking to build a greenfield application or modernize existing systems, we have the expertise to guide you through every step of the development lifecycle. From requirements analysis and architecture design to implementation and deployment, we ensure quality at every stage.

Our Software Development services encompass full-stack development, microservices architecture, legacy system modernization, and cloud-native applications. We work with you to understand your unique challenges and deliver solutions that drive measurable business value.`,
    keyFeatures: [
      "Full-stack development capabilities",
      "Agile and iterative development methodology",
      "Comprehensive testing and quality assurance",
      "Security-first development practices",
      "Scalable architecture design",
      "Post-launch support and maintenance",
      "Technology-agnostic approach",
      "Performance optimization",
    ],
    technologies: [
      "TypeScript/JavaScript",
      "Python",
      "Java",
      "C#/.NET",
      "Go",
      "React",
      "Vue.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    benefits: [
      "Reduced development time with experienced team",
      "Lower total cost of ownership",
      "Better system reliability and uptime",
      "Easier maintenance and updates",
      "Faster time-to-market for new features",
      "Improved operational efficiency",
      "Future-proof technology stack",
    ],
  },
  {
    num: "02",
    slug: "erp-solutions",
    title: "ERP Solutions",
    shortDescription:
      "Enterprise Resource Planning systems that streamline your business operations and improve efficiency.",
    longDescription: `Enterprise Resource Planning (ERP) systems are the backbone of modern business operations. At GTechSoft, we implement and customize leading ERP platforms to integrate your finance, supply chain, manufacturing, human resources, and customer relationship management processes.

Our ERP solutions help you gain real-time visibility into your business operations, eliminate data silos, and make informed decisions faster. We work with industry-leading platforms and have the expertise to customize them to your specific business requirements.

From implementation planning and data migration to user training and ongoing support, we ensure a smooth transition to your new ERP system. Our approach minimizes disruption while maximizing ROI and operational efficiency.`,
    keyFeatures: [
      "End-to-end ERP implementation",
      "System customization and configuration",
      "Data migration and cleansing",
      "Integration with existing systems",
      "Comprehensive user training programs",
      "Performance tuning and optimization",
      "Change management support",
      "Ongoing maintenance and support",
    ],
    technologies: [
      "SAP",
      "Oracle NetSuite",
      "Microsoft Dynamics 365",
      "Infor CloudSuite",
      "Odoo",
      "IFS",
      "Workday",
      "Acumatica",
    ],
    benefits: [
      "Unified view of business operations",
      "Improved data accuracy and consistency",
      "Faster financial close processes",
      "Enhanced supply chain visibility",
      "Better decision-making with real-time data",
      "Reduced operational costs",
      "Improved regulatory compliance",
      "Scalability for future growth",
    ],
  },
  {
    num: "03",
    slug: "cyber-security",
    title: "Cyber Security",
    shortDescription:
      "Comprehensive security solutions to protect your digital assets and ensure compliance with regulations.",
    longDescription: `In today's threat landscape, cybersecurity is not a luxury—it's a necessity. GTechSoft provides comprehensive cybersecurity solutions to protect your digital assets, data, and infrastructure from evolving threats.

Our security experts conduct thorough assessments, design robust security architectures, and implement industry-standard protective measures. We help you build a security-aware culture while maintaining compliance with regulatory requirements.

From vulnerability management and threat detection to incident response and forensics, we provide end-to-end security services tailored to your organization's risk profile and industry requirements.`,
    keyFeatures: [
      "Security risk assessments and audits",
      "Penetration testing and vulnerability scanning",
      "Security architecture design",
      "Intrusion detection and prevention systems",
      "Threat intelligence and monitoring",
      "Incident response and forensics",
      "Security awareness training",
      "Compliance management (ISO 27001, HIPAA, PCI-DSS)",
    ],
    technologies: [
      "SIEM solutions",
      "Firewalls and WAF",
      "Encryption technologies",
      "VPN and secure tunnels",
      "Multi-factor authentication",
      "Security information management",
      "Endpoint protection",
      "Cloud security tools",
    ],
    benefits: [
      "Reduced risk of data breaches",
      "Faster threat detection and response",
      "Regulatory compliance assurance",
      "Protected business continuity",
      "Enhanced customer trust",
      "Lower incident response costs",
      "Improved security posture",
      "Reduced cyber insurance premiums",
    ],
  },
  {
    num: "04",
    slug: "mobile-web-applications",
    title: "Mobile & Web Applications",
    shortDescription:
      "Native and cross-platform apps plus responsive websites that engage your audience and drive conversions.",
    longDescription: `In a mobile-first world, having a strong digital presence is crucial. GTechSoft creates native iOS and Android applications, cross-platform mobile apps, and responsive web applications that engage users and drive business results.

Our design and development teams work collaboratively to create intuitive, visually stunning applications that solve real user problems. We focus on user experience, performance, and accessibility to ensure your application succeeds in the competitive app marketplace.

Whether you need a consumer-facing mobile app, a B2B web platform, or a progressive web application, we have the expertise to deliver solutions that meet your business objectives and user expectations.`,
    keyFeatures: [
      "Native iOS and Android development",
      "Cross-platform development (Flutter, React Native)",
      "Responsive web application design",
      "Progressive Web Apps (PWA)",
      "User experience optimization",
      "Performance optimization",
      "API integration",
      "Analytics and tracking implementation",
    ],
    technologies: [
      "Swift/Objective-C",
      "Kotlin/Java",
      "React Native",
      "Flutter",
      "React.js",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Firebase",
      "AWS Amplify",
    ],
    benefits: [
      "Broader audience reach",
      "Higher user engagement",
      "Improved customer loyalty",
      "Better conversion rates",
      "Offline functionality",
      "Push notification capabilities",
      "Seamless cross-platform experience",
      "Easier maintenance and updates",
    ],
  },
  {
    num: "05",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription:
      "Scalable cloud infrastructure and migration services across AWS, GCP and DigitalOcean.",
    longDescription: `Cloud computing has revolutionized how businesses operate, providing flexibility, scalability, and cost efficiency. GTechSoft helps you harness the power of cloud technology through infrastructure design, migration, and optimization.

Whether you're moving from on-premises systems or looking to optimize your existing cloud environment, our cloud architects and engineers guide you through every step. We work with leading cloud providers to design solutions that scale with your business while optimizing costs.

Our services include cloud architecture design, infrastructure as code, containerization, serverless solutions, and cloud cost optimization—all tailored to your specific business needs.`,
    keyFeatures: [
      "Cloud architecture design and consulting",
      "Infrastructure as Code (IaC)",
      "Multi-cloud strategies",
      "Containerization and Kubernetes",
      "Serverless computing solutions",
      "Database migration and optimization",
      "Cloud cost optimization",
      "Disaster recovery and backup solutions",
    ],
    technologies: [
      "AWS (EC2, S3, Lambda, RDS, etc.)",
      "Google Cloud Platform (Compute, BigQuery, etc.)",
      "Microsoft Azure",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CloudFormation",
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced disaster recovery",
      "Better security and compliance",
      "Faster deployment of applications",
      "Reduced IT overhead",
      "Global reach and low latency",
      "Better resource utilization",
    ],
  },
  {
    num: "06",
    slug: "iot-development",
    title: "IoT Development",
    shortDescription:
      "Connected systems that turn real-time data into intelligent, automated actions.",
    longDescription: `The Internet of Things is transforming industries by connecting devices, collecting real-time data, and enabling intelligent automation. GTechSoft develops IoT solutions that turn raw data into actionable insights and automated processes.

From device firmware development and edge computing to cloud integration and real-time analytics, we build end-to-end IoT systems. Our expertise spans various industries including manufacturing, healthcare, agriculture, and smart city applications.

We help you harness sensor data, implement machine learning models, and create intelligent systems that optimize operations, improve product quality, and create new revenue streams.`,
    keyFeatures: [
      "IoT device firmware development",
      "Edge computing solutions",
      "Real-time data collection and processing",
      "IoT cloud platforms and integration",
      "Machine learning model deployment",
      "Real-time analytics and dashboards",
      "Device management and provisioning",
      "Security and encryption for IoT",
    ],
    technologies: [
      "C/C++",
      "Python",
      "Arduino/Raspberry Pi",
      "MQTT",
      "CoAP",
      "AWS IoT",
      "Azure IoT Hub",
      "Google Cloud IoT",
      "TensorFlow",
      "Edge AI frameworks",
    ],
    benefits: [
      "Real-time operational insights",
      "Predictive maintenance capabilities",
      "Automated decision-making",
      "Improved product quality",
      "Cost optimization through efficiency",
      "New revenue opportunities",
      "Enhanced customer experience",
      "Competitive advantage",
    ],
  },
  {
    num: "07",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "User-centered design that combines aesthetics with functionality to create memorable digital experiences.",
    longDescription: `Great design is the intersection of form and function. GTechSoft's UI/UX design team creates user-centered digital experiences that are not just beautiful, but also intuitive and functional.

We start with deep user research and testing to understand your audience's needs, pain points, and behaviors. Then we craft designs that solve real problems while maintaining visual excellence and brand consistency.

From wireframes and prototypes to design systems and interaction design, we ensure every pixel serves a purpose. Our designs are optimized for accessibility, responsive across devices, and backed by research and testing.`,
    keyFeatures: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design and animations",
      "Responsive design for all devices",
      "Accessibility compliance (WCAG)",
      "Design system creation",
      "User testing and usability research",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping tools",
      "Framer",
      "CSS/HTML",
      "Design systems (Storybook)",
      "Analytics tools",
    ],
    benefits: [
      "Higher user satisfaction and retention",
      "Increased conversion rates",
      "Reduced support costs",
      "Enhanced brand perception",
      "Better accessibility for all users",
      "Faster development cycles",
      "Improved SEO performance",
      "Competitive market advantage",
    ],
  },
];
