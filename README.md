<div align="center">

<h1>🐝 Comic Bee — Frontend</h1>

<p>
<strong>An interactive, comic-based learning experience built for students.</strong>
</p>

<p>
A modern frontend application that delivers educational content through structured navigation and an immersive comic reader interface.
</p>

</div>

<hr />

<h2>📌 Overview</h2>

<p>
Comic Bee is an educational platform that transforms traditional learning into a visual and engaging experience using comics.  
This repository contains the <strong>frontend implementation</strong> responsible for user flow, UI rendering, and comic reading experience.
</p>

<p>
The frontend is designed to be clean, scalable, and ready for seamless backend integration.
</p>

---

<h2>✨ Key Features</h2>

<ul>
  <li>📚 Class-based navigation (Grades 5–10)</li>
  <li>🧪 Subject & chapter selection flow</li>
  <li>📖 In-app comic reader interface</li>
  <li>📄 Static PDF comic rendering</li>
  <li>🔍 Page navigation with zoom controls</li>
  <li>📱 Fully responsive UI</li>
  <li>🧩 Reusable, modular components</li>
</ul>

---

<h2>🛠 Tech Stack</h2>

<ul>
  <li><strong>React</strong> (TypeScript)</li>
  <li><strong>Vite</strong> — fast development & build tool</li>
  <li><strong>Tailwind CSS</strong> — utility-first styling</li>
  <li><strong>React Router DOM</strong> — client-side routing</li>
  <li><strong>Lucide React</strong> — icon system</li>
</ul>

---

<h2>📂 Project Structure</h2>

<pre>
src/
 ├─ components/        Reusable UI components
 ├─ pages/             Page-level views
 ├─ hooks/             Custom hooks
 ├─ assets/            Images & static assets
 ├─ lib/               Utilities & helpers
 └─ main.tsx           App entry point

public/
 └─ pdfs/              Comic PDF files
</pre>

---

<h2>🧭 User Flow</h2>

<ol>
  <li>User selects a class</li>
  <li>Navigates through subject and chapter</li>
  <li>Comic reader opens inside the app</li>
  <li>PDFs are served from the public directory</li>
  <li>Navigation & zoom handled at UI level</li>
</ol>

---

<h2>🚀 Local Development</h2>

<p>To run the frontend locally:</p>

<pre>
npm install
npm run dev
</pre>

<p>The app will be available at:</p>

<pre>
http://localhost:8080
</pre>

---

<h2>🔌 Backend Integration</h2>

<ul>
  <li>Frontend and backend are developed independently</li>
  <li>Architecture supports API-based data fetching</li>
  <li>Ready for authentication, progress tracking, and dynamic content</li>
</ul>

---

<h2>🌿 Branching Strategy</h2>

<ul>
  <li>Frontend development is maintained in a dedicated branch</li>
  <li>Backend work is handled separately</li>
  <li>Integration will occur after feature stabilization</li>
</ul>

---

<h2>📈 Project Status</h2>

<p>
✅ Frontend implementation complete  
<br />
🚧 Backend integration in progress
</p>

---

<div align="center">

<p>
<strong>Comic Bee — Making learning visual, simple, and engaging.</strong>
</p>

</div>
