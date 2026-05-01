# 🧾 Log Ingestor & Query System

A scalable log ingestion and querying system built using **Node.js,
Express, and Elasticsearch**, with a simple and usable **Web UI** for
interacting with logs.

------------------------------------------------------------------------

## 🚀 Features

### ✅ Log Ingestion

-   HTTP endpoint to ingest logs (`POST /logs`)
-   Handles structured JSON logs
-   Designed for high-throughput ingestion

### ✅ Query Interface

-   Full-text search on `message`
-   Filtering based on:
    -   level
    -   resourceId
    -   timestamp
    -   traceId
    -   spanId
    -   commit
    -   metadata.parentResourceId

### ⭐ Bonus Features

-   Date range filtering (`startTime`, `endTime`)
-   Combination of multiple filters

### 🖥️ UI

-   Simple Web UI using HTML (no frameworks)
-   Allows searching logs via input fields
-   Displays results in a structured format

------------------------------------------------------------------------

## 🧱 Tech Stack

-   **Backend**: Node.js + Express
-   **Search Engine**: Elasticsearch
-   **Frontend**: Plain HTML + JavaScript

------------------------------------------------------------------------

## 📁 Project Structure

    log-system/
    │── server.js
    │── elastic.js
    │── package.json
    │
    ├── routes/
    │   ├── ingest.js
    │   └── search.js
    │
    ├── utils/
    │   └── buildQuery.js
    │
    └── public/
        └── index.html

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1. Install Dependencies

    npm install

------------------------------------------------------------------------

### 2. Start Elasticsearch

#### Option A: Docker

    docker run -p 9200:9200 -e "discovery.type=single-node" elasticsearch:8.13.0

#### Option B: Local Installation

-   Download from: https://www.elastic.co/downloads/elasticsearch
-   Run:

```{=html}
<!-- -->
```
    ./bin/elasticsearch

Verify:

    http://localhost:9200

------------------------------------------------------------------------

### 3. Start Server

    npm start

Server runs on:

    http://localhost:3000

------------------------------------------------------------------------

### 4. Open UI

    http://localhost:3000

------------------------------------------------------------------------

## 📥 API Endpoints

### 🔹 Ingest Logs

    POST /logs

Example:

    {
      "level": "error",
      "message": "Failed to connect to DB",
      "resourceId": "server-1234",
      "timestamp": "2025-09-15T08:00:00Z"
    }

------------------------------------------------------------------------

### 🔹 Search Logs

    GET /search

Examples:

    /search?level=error
    /search?message=Failed
    /search?startTime=2025-09-10T00:00:00Z&endTime=2025-09-15T23:59:59Z

------------------------------------------------------------------------

## 🖥️ Why Simple HTML UI?

-   No build tools required
-   Faster development
-   Focus remains on backend
-   Zero dependency issues

------------------------------------------------------------------------

## 🧠 Design Decisions

-   Elasticsearch for fast search
-   Modular structure
-   Optimized queries using match, term, range

------------------------------------------------------------------------

## ⚡ Scalability Considerations

-   Can add Kafka/RabbitMQ
-   Supports scaling via Elasticsearch
-   Bulk ingestion possible

------------------------------------------------------------------------

## ⚠️ Limitations

-   No authentication
-   No pagination
-   Single-node setup

------------------------------------------------------------------------

## 🎯 Conclusion

Efficient ingestion, fast querying, clean design, and usable interface.

------------------------------------------------------------------------

## 🙌 Author

Nikhil Singh
