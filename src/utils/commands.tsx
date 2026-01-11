import { EXPERIENCE_DATA, OTHER_DATA } from "@/data/Experience";

export const COMMAND_MAP: any = {
  "ls project": (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-white/20 border-collapse">
        <thead className="text-green-400 border-b border-white/20">
          <tr>
            <th className="text-left px-2 py-1">Project</th>
            <th className="text-left px-2 py-1">Command</th>
          </tr>
        </thead>

        <tbody className="text-white/70">
          <tr className="border-b border-white/10">
            <td className="px-2 py-1">Octodock</td>
            <td className="px-2 py-1 text-white/50">cat project octodock</td>
          </tr>

          <tr className="border-b border-white/10">
            <td className="px-2 py-1">Dr. Web</td>
            <td className="px-2 py-1 text-white/50">cat project dr-web</td>
          </tr>
          <tr className="border-b border-white/10">
            <td className="px-2 py-1">Daksh</td>
            <td className="px-2 py-1 text-white/50">cat project daksh</td>
          </tr>
          <tr className="border-b border-white/10">
            <td className="px-2 py-1">Quizora</td>
            <td className="px-2 py-1 text-white/50">cat project quizora </td>
          </tr>

          <tr className="border-b border-white/10">
            <td className="px-2 py-1">IEEE Website</td>
            <td className="px-2 py-1 text-white/50">cat project ieee-web</td>
          </tr>
          <tr className="border-b border-white/10">
            <td className="px-2 py-1">HackWithHer</td>
            <td className="px-2 py-1 text-white/50">cat project hwh</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  neofetch: (
    <pre className="font-mono text-green-400 leading-none whitespace-pre">
      {String.raw`
 █████╗ ███╗   ██╗ ██████╗  █████╗ ██████╗ 
██╔══██╗████╗  ██║██╔════╝ ██╔══██╗██╔══██╗
███████║██╔██╗ ██║██║  ███╗███████║██║  ██║
██╔══██║██║╚██╗██║██║   ██║██╔══██║██║  ██║
██║  ██║██║ ╚████║╚██████╔╝██║  ██║██████╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ 
`}
    </pre>
  ),
  "ls jobs": (
    <table className="w-full">
      <th>
        <td>Job</td>
        <td>command</td>
      </th>
      <tr>
        <td>TBB MEDIA</td>
        <td>cat experience tbb-media</td>
      </tr>
      <tr>
        <td>OpenSourceChandigarh</td>
        <td>cat experience osc</td>
      </tr>
      <tr>
        <td>IEEE</td>
        <td>cat experience ieee</td>
      </tr>
    </table>
  ),
  "cat experience tbb-media": (
    <div className="space-y-4">
      <div className="text-green-400 font-semibold">📁 TBB Media</div>

      {EXPERIENCE_DATA.map((item, i) => (
        <div key={i} className="border-l border-white/20 pl-4">
          <div className="text-white font-semibold">{item.title}</div>

          <div className="text-xs text-white/50">
            {new Date(item.start_date).toLocaleDateString()} →{" "}
            {new Date(item.end_date).toLocaleDateString()} • {item.status} •{" "}
            {item.job_type}
          </div>

          <ul className="list-disc ml-5 mt-2 text-sm text-white/70">
            {item.job_contributions.map((c, j) => (
              <li key={j}>{c}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),

  "cat experience osc": (
    <div className="space-y-4">
      <div className="text-green-400 font-semibold">
        📁 Open Source Chandigarh
      </div>

      {OTHER_DATA.filter((d) =>
        d.company.toLowerCase().includes("open source")
      ).map((item, i) => (
        <div key={i} className="border-l border-white/20 pl-4">
          <div className="text-white font-semibold">{item.title}</div>

          <div className="text-xs text-white/50">
            {new Date(item.start_date).toLocaleDateString()} →{" "}
            {new Date(item.end_date).toLocaleDateString()} • {item.status}
          </div>

          <ul className="list-disc ml-5 mt-2 text-sm text-white/70">
            {item.job_contributions.map((c, j) => (
              <li key={j}>{c}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),

  "cat experience ieee": (
    <div className="space-y-4">
      <div className="text-green-400 font-semibold">
        📁 IEEE CIET Student Branch
      </div>

      {OTHER_DATA.filter((d) => d.company.toLowerCase().includes("ieee")).map(
        (item, i) => (
          <div key={i} className="border-l border-white/20 pl-4">
            <div className="text-white font-semibold">{item.title}</div>

            <div className="text-xs text-white/50">
              {new Date(item.start_date).toLocaleDateString()} →{" "}
              {new Date(item.end_date).toLocaleDateString()} • {item.status}
            </div>

            <ul className="list-disc ml-5 mt-2 text-sm text-white/70">
              {item.job_contributions.map((c, j) => (
                <li key={j}>{c}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  ),
  "cat project octodock": (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">Octodock</div>

      <div className="text-white/70 text-sm">
        Octodock is an AI-powered developer tool that automates backend code
        generation and deployment readiness with seamless GitHub integration.
        Designed with scalable architecture and deployed to Microsoft Store.
      </div>

      <div className="text-xs text-white/50">
        Stack: React, Turborepo, Gemini, StackBlitz, Kafka, Docker, Prisma,
        MongoDB
      </div>

      <div className="text-xs text-white/40">
        Tags: no-code, saas, backend-automater, deployment-automater
      </div>

      <div className="text-xs text-white/50">
        GitHub: https://github.com/AngadSudan/Octodock
      </div>
    </div>
  ),

  "cat project dr-web": (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">Dr. Web</div>

      <div className="text-white/70 text-sm">
        Dr. Web is a real-time monitoring platform built on top of Prometheus.
        It provides instant analytics dashboards using server-sent events by
        simply integrating an SDK into backend services.
      </div>

      <div className="text-xs text-white/50">
        Stack: Next.js, Turborepo, Prometheus, Razorpay, MongoDB, Node.js
      </div>

      <div className="text-xs text-white/40">
        Tags: monitoring, saas, observability, realtime-data
      </div>

      <div className="text-xs text-white/50">
        GitHub: https://github.com/AngadSudan/dr-web
      </div>
    </div>
  ),

  "cat project daksh": (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">Daksh</div>

      <div className="text-white/70 text-sm">
        Daksh is an AI-driven productivity platform for teachers and students,
        offering intelligent notes, task management, document parsing, and daily
        planning backed by AI assistance.
      </div>

      <div className="text-xs text-white/50">
        Stack: React, Node.js, Adobe PDF API, Cloudinary, Gemini, MongoDB
      </div>

      <div className="text-xs text-white/40">
        Tags: notes-management, exam-prep, classroom
      </div>

      <div className="text-xs text-white/50">
        Live: https://daksh-saas-frontend.vercel.app
      </div>
    </div>
  ),

  "cat project quizora": (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">Quizora</div>

      <div className="text-white/70 text-sm">
        Quizora is a real-time quiz platform that enables interactive
        competitions with live leaderboards, dynamic question control, and
        real-time communication.
      </div>

      <div className="text-xs text-white/50">
        Stack: Next.js, Node.js, Gemini, MongoDB
      </div>

      <div className="text-xs text-white/40">
        Tags: quiz-application, leaderboard, ai-powered
      </div>

      <div className="text-xs text-white/50">
        GitHub: https://github.com/AngadSudan/Quizora_G2
      </div>
    </div>
  ),

  "cat project ieee-web": (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">IEEE Website</div>

      <div className="text-white/70 text-sm">
        Official IEEE CUIET website built during the 2024–2025 tenure,
        supporting user registrations and event signups to promote the college
        society.
      </div>

      <div className="text-xs text-white/50">
        Stack: Next.js, Node.js, Cloudinary, Prisma, PostgreSQL
      </div>

      <div className="text-xs text-white/40">
        Tags: ieee-cuiet, club-designing, ai-powered
      </div>

      <div className="text-xs text-white/50">
        Live: https://ieee.chitkara.edu.in/
      </div>
    </div>
  ),

  "cat project hwh": (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">HackWithHer 4.0</div>

      <div className="text-white/70 text-sm">
        Website for the flagship HackWithHer hackathon, built to support 300+
        registrations, idea submissions, and PPT uploads for 30+ finalist teams.
      </div>

      <div className="text-xs text-white/50">
        Stack: Next.js, Node.js, Cloudinary, MongoDB
      </div>

      <div className="text-xs text-white/40">
        Tags: ieee-cuiet, hackathon, hackwithher
      </div>

      <div className="text-xs text-white/50">
        Live: https://hack-with-her.in/
      </div>
    </div>
  ),
};
