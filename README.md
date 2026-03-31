# SHA-256 Hash of GitHub Username
# [db7d806235fcb18668dddc84cf9f583f650022d6bdd9b702e5697444b09f532c]

# 📝 NoteFlow - Premium Modern Notes Studio

NoteFlow is a state-of-the-art notes application built for the **InLabels Frontend Internship Challenge**. It features a cutting-edge **Svelte 5** architecture and **Tailwind CSS 4** for a high-fidelity user experience.

---

## 🚀 Live Links
# 🚀 NoteFlow: Premium Svelte 5 Studio

NoteFlow is a studio-grade creative suite built for the **Frontend Internship Take-Home Challenge**. It combines a high-performance **offline-first sync engine** with a premium, glassmorphic UI.

## 🔗 Links
- **Live Demo**: [https://note-flow-rouge.vercel.app]
- **GitHub Repository**: [https://github.com/MOHIKA-STUDENT/NoteFlow]

## ✨ Requirements & Feature Checklist

### 📄 Core Features
- [x] **CRUD Operations**: Full Create, Read, Update, and Delete support with MockAPI.
- [x] **Responsive Design**: Optimized for mobile, tablet, and desktop via Tailwind CSS 4.
- [x] **Search & Filter**: Debounced search and multi-criteria sorting (Date, Alphabetical, ID).
- [x] **Pagination**: "Expand Repository" logic for managing large sets of data.
- [x] **Validation**: Strict form validation for title and content (max lengths, required fields).

### 🎨 Advanced UX
- [x] **Dark Mode Pro**: Authoritative theme toggle with `color-scheme` synchronization.
- [x] **Soft Delete with Undo**: 10-second safety window to recover deleted notes via premium toasts.
- [x] **Confirmation Modals**: Safeguards for all destructive actions.
- [x] **Keyboard Shortcuts**: `Ctrl + N` for new notes, `Esc` to close modals.
- [x] **Custom 404 Page**: Stunning "Lost in the Flow" catch-all route.
- [x] **Visual Feedback**: Loading skeletons, spinners, and empty state illustrations.

### ⚙️ Architecture & Logic
- [x] **Offline Sync**: Resilient IndexedDB-powered queue that automatically syncs when online.
- [x] **Optimistic UI**: Instant local updates with background server confirmation.
- [x] **API Wrapper**: Reusable, TypeScript-safe module with advanced error diagnostics.

## 💡 Added Feature: Note Pinning & Studio Aesthetics
I chose to implement **Note Pinning (Critical Focus)** and **Studio-Grade Animations** because a creative tool should feel alive. 
- **Pinning**: Allows users to prioritize key inspirations at the top of their workspace.
- **Aesthetics**: Using Svelte 5's fine-grained reactivity, I implemented staggered GSAP-like entrance animations and mesh-gradient glassmorphism to create a "Pro" software feel.

## 🛠 Tech Stack
- **Framework**: SvelteKit 2 (Svelte 5 Runes)
- **Styling**: Tailwind CSS 4
- **Storage**: IndexedDB (`idb-keyval`)
- **Icons**: Lucide Svelte

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Check Project Health**:
   ```bash
   npm run check
   npm run lint
   ```

## 📝 Reflection & Trade-offs
- **Approach**: I focused on "Offline-First" stability. By using a persistent sync queue, the app remains usable even on poor connections.
- **Trade-off**: Used `idb-keyval` for simplicity over a full `Dexie` or `PouchDB` setup, as the data model is relatively flat.
- **Future Work**: I would implement **Rich Text Editing** and **Tagging** with more time.

---
**Build with precision for the InLabels Team.**
