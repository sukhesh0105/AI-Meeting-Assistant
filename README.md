# AI Meeting Assistant

An AI-powered meeting assistant that converts recorded speech into clean, structured, and professional meeting notes.

The application combines **Whisper** for speech-to-text transcription, **Ollama + Gemma** for AI-powered transcript cleaning, **FastAPI** for the backend API, and **React + TypeScript** for the frontend interface.

## ✨ Features

- 🎤 Browser-based audio recording
- 📁 Audio file upload
- 📝 Text transcript input
- 🔊 Local Whisper speech-to-text transcription
- 🤖 AI-powered transcript cleaning using Ollama + Gemma
- 📋 Structured meeting notes
  - Meeting Summary
  - Key Decisions
  - Action Items
- 🗂️ Meeting metadata
  - Meeting Title
  - Date
  - Participants
  - Project / Team
- 📄 Professional PDF meeting notes export
- 📋 One-click copy of meeting notes
- ⚡ Fully local AI processing
- 🎨 Modern responsive dashboard interface

## 🧠 Architecture

```text
                    AI Meeting Assistant
                           │
             ┌─────────────┴─────────────┐
             │                           │
        React Frontend              FastAPI Backend
             │                           │
             │                    ┌──────┴──────┐
             │                    │             │
             │                 Whisper       Ollama
             │                    │          + Gemma
             │                    │             │
             └──────────────► Structured Meeting Notes
                                      │
                                      ▼
                              Professional PDF
```

## 🔄 Processing Flow

```text
Audio / Transcript
        ↓
Whisper Transcription
        ↓
Raw Transcript
        ↓
Ollama + Gemma
        ↓
Structured Meeting Notes
        ↓
Meeting Metadata + Notes
        ↓
PDF Export
```

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS Modules
- Lucide React

### Backend
- Python
- FastAPI
- Uvicorn
- Pydantic
- ReportLab

### AI
- Faster-Whisper
- Ollama
- Gemma 3 4B

### Development
- Git
- GitHub
- uv
- npm

## 📂 Project Structure

```text
AI-Meeting-Assistant/
│
├── backend/
│   ├── app.py
│   ├── transcription.py
│   ├── pdf_generator.py
│   ├── system_prompt.txt
│   ├── .env.example
│   └── pyproject.toml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── types/
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

## 🚀 Local Setup

### Prerequisites
- Python 3.12+
- Node.js
- npm
- Git
- uv
- Ollama

### 1. Clone the Repository

```bash
git clone https://github.com/sukhesh0105/AI-Meeting-Assistant.git
cd AI-Meeting-Assistant
```

### 2. Configure the Backend

```bash
cd backend
uv sync
```

Create a `.env` file inside the `backend` folder:

```env
LLM_BASE_URL=http://localhost:11434/v1
LLM_API_KEY=ollama
LLM_MODEL=gemma3:4b
```

### 3. Start Ollama

Make sure Ollama is installed and running, then pull the model:

```bash
ollama pull gemma3:4b
```

### 4. Start the Backend

```bash
python -m uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at:

```
http://localhost:8000
```

### 5. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at:

```
http://localhost:3000
```

## 🎯 Using the Application

1. Open the application in your browser.
2. Enter the meeting details.
3. Record audio, upload an audio file, or enter a transcript.
4. Run transcription if using audio.
5. Use AI cleaning to generate structured meeting notes.
6. Review the Summary, Key Decisions, and Action Items.
7. Copy the notes or export them as a PDF.

## 📄 PDF Export

The generated PDF includes:

- AI Meeting Assistant branding
- Meeting title
- Formatted date
- Project / Team
- Participants
- Meeting Summary
- Key Decisions
- Action Items

PDF files are generated locally using ReportLab.

## 🔐 Privacy

The application is designed for local AI processing:

- Whisper runs locally for transcription.
- Ollama runs locally for AI processing.
- No external AI API is required with the current configuration.
- Meeting data remains on the local machine during processing.

## ⚙️ Configuration

The backend uses the following environment variables:

```env
LLM_BASE_URL=http://localhost:11434/v1
LLM_API_KEY=ollama
LLM_MODEL=gemma3:4b
```

You can change the LLM configuration through the `.env` file.

## 🧪 Current Limitations

- Whisper transcription currently runs on CPU for reliable local execution.
- The current AI workflow is focused on English meeting transcripts.
- Smaller local LLMs may occasionally produce less accurate structured notes.
- Meeting history and persistent storage are not implemented yet.

## 🔮 Planned Improvements

- Meeting history and searchable meetings
- Improved action item and decision extraction
- Speaker identification
- Multi-language transcription
- Real-time transcription
- Ask questions about a meeting
- Semantic search across meetings
- Advanced AI agents
- Optional cloud LLM support
- Meeting insights and analytics

## 👨‍💻 Project

AI Meeting Assistant is a portfolio project focused on:

- LLM integration
- Speech-to-text pipelines
- Prompt engineering
- Structured AI output
- API development
- Frontend/backend integration
- Local AI deployment
- Document generation

Built with Python, FastAPI, React, TypeScript, Whisper, Ollama, and Gemma.
