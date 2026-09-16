export const siteConfig = {
  name: "Yuvraj Soni",
  role: "Data Engineer",
  tagline: "Big Data & Azure Data Engineer",
  summary:
    "I design and build large-scale data pipelines with PySpark, Spark SQL, and Azure Databricks — turning raw telecom and financial data into reliable, real-time analytics at 100+ GB/day scale.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    email: "yuvrajsoni2172@gmail.com",
    github: "https://github.com/yuvraj2172",
    linkedin: "https://www.linkedin.com/in/yuvraj-soni-5483aa206/",
  },
  resumeUrl: "/resume.pdf",
  codeFileName: "intro.py",
  contactMessage:
    "I'm open to full-time Data Engineering roles and interesting collaborations. Feel free to reach out — I'll get back to you as soon as I can.",
  heroStack: ["PySpark", "Spark SQL", "Azure Databricks", "Airflow"],
  about: {
    bio: [
      "I'm a Data Engineer with 2+ years of experience designing, building, and optimizing large-scale Big Data pipelines using PySpark, Spark SQL, Apache NiFi, Azure Databricks, Apache Airflow, and distributed computing frameworks on MapR-Hadoop and cloud platforms.",
      "At Ksolves, I've delivered 40% faster data processing and 30% less debugging time through performance tuning, workflow automation, and observability improvements — working on telecom-scale datasets that power financial reporting and billing analytics. I also lean on AI-assisted development tools to speed up pipeline delivery and improve code quality.",
    ],
    education: {
      degree: "B.Tech in Computer Science",
      school: "GLA University, Mathura",
      period: "Aug 2020 – May 2024",
    },
    certifications: [
      {
        name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
        issuer: "Microsoft",
        date: "Aug 2025",
      },
      {
        name: "Microsoft Azure Data Fundamentals (DP-900)",
        issuer: "Microsoft",
        date: "Dec 2024",
      },
    ],
    achievements: [
      "Received the Spot Award (twice) at Ksolves India Limited for high-impact data engineering solutions and technical excellence.",
      "Solved 1,000+ algorithmic problems on LeetCode, demonstrating strong Data Structures & Algorithms fundamentals.",
      "Participated in multiple Major League Hacking (MLH) hackathons, building data-driven and AI-based prototypes under tight deadlines.",
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "Scala", "Java","SQL", "KQL"],
    },
    {
      category: "Big Data Processing",
      items: [
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Apache NiFi",
        "ClickHouse",
        "MapR-Hadoop",
        "HDFS",
        "Parquet",
        "Distributed Computing",
      ],
    },
    {
      category: "Cloud & Data Platforms",
      items: [
        "Azure ADLS Gen2",
        "Azure Data Factory",
        "Azure Databricks",
        "Microsoft Fabric",
      ],
    },
    {
      category: "Data Engineering",
      items: [
        "ETL/ELT Pipelines",
        "Data Ingestion",
        "Batch Processing",
        "Data Validation",
        "Data Warehouse",
        "Partitioning Strategies",
      ],
    },
    {
      category: "Orchestration & CI/CD",
      items: [
        "Apache Airflow",
        "DAG Development",
        "Workflow Automation",
        "GitLab CI/CD",
      ],
    },
    {
      category: "Performance Engineering",
      items: [
        "Partition Pruning",
        "Broadcast Joins",
        "Caching",
        "Shuffle Optimization",
        "Query Optimization",
        "Resource Tuning",
      ],
    },
    {
      category: "Tools & Productivity",
      items: [
        "Git",
        "Docker",
        "Apache Superset",
        "REST APIs",
        "GitHub Copilot",
        "LLM-based Code Review",
      ],
    },
  ],
  projects: [
    {
      slug: "pipeline-modernization",
      name: "Enterprise Data Pipeline Modernization",
      kicker: "Ksolves · Production",
      description:
        "Led the full-cycle migration of legacy data transformation workflows from Apache Drill to PySpark, modernizing the enterprise data platform end-to-end.",
      highlights: [
        "Rewrote complex business logic into optimized, distributed PySpark/Spark SQL jobs using partition pruning, broadcast joins, and caching — cutting job runtime significantly",
        "Integrated pipelines with Apache Airflow for scheduling, orchestration, dependency management, and real-time monitoring",
        "Delivered 40% faster data processing and 30% less debugging time through structured logging and observability improvements",
      ],
      stack: ["PySpark", "Spark SQL", "Apache Airflow", "Apache Drill"],
    },
    {
      slug: "call-processing",
      name: "Daily User-Level Call Processing Pipeline",
      kicker: "Ksolves · Production",
      description:
        "Built an end-to-end data pipeline that ingests, processes, and aggregates telecom CDRs into per-user, per-day metrics for financial reporting and billing analysis.",
      highlights: [
        "Designed modular PySpark jobs — parse, validate, enrich, aggregate — with optimized transformations and joins for high-volume call data",
        "Implemented Apache Airflow DAGs for daily orchestration with scheduling, dependency management, retries, and monitoring",
        "Standardized storage on Parquet with event-date partitioning and automated data validation, eliminating manual reporting for billing teams",
      ],
      stack: ["PySpark", "Apache Airflow", "Parquet", "Spark SQL"],
    },
    {
      slug: "nifi-clickhouse-mapr",
      name: "PySpark Batch Pipeline — NiFi → ClickHouse → MapR",
      kicker: "Ksolves · Production",
      description:
        "Sole owner of an end-to-end batch pipeline ingesting data via Apache NiFi, transforming it in PySpark, and loading it into ClickHouse on a shared MapR-Hadoop cluster.",
      highlights: [
        "Authored all Apache Airflow DAGs to schedule, orchestrate, and monitor job execution, configuring triggers, dependencies, retries, and SLA alerts",
        "Independently resolved environment misconfigurations and a Python dependency conflict on the MapR cluster, unblocking deployment",
        "Validated end-to-end data integrity pre-cutover; the pipeline went live on schedule with zero manual intervention",
      ],
      stack: ["PySpark", "Apache NiFi", "ClickHouse", "MapR-Hadoop", "Apache Airflow"],
    },
  ],
};
