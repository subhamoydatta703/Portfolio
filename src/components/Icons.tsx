import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .68-.523l3.855-4.127 4.407-4.788c.54-.54.54-1.414 0-1.955A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export function NpmIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M0 7.334v9.332h7.999v-6.666h2.668v6.666h13.333V7.334H0zm6.666 8H2.667v-6.667h3.999v6.667zm6.667-2.667h-2.667v-3.999h2.667v3.999zm8 2.667h-4V10h-2.667v5.334h-1.333V8.667h8v6.667z" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.35 15.688v-7.39H9.42V6.65h7.17v1.648h-2.43v7.39zm4.274.133c.896 0 1.602-.236 2.117-.707.516-.47.774-1.077.774-1.82 0-.498-.124-.925-.371-1.28-.248-.356-.688-.707-1.32-1.055-.633-.347-1.01-.6-1.134-.76a.798.798 0 0 1-.185-.506c0-.236.09-.434.27-.595.18-.16.43-.24.75-.24.34 0 .633.09.878.27.246.18.42.443.523.79l1.452-.613c-.195-.57-.54-1.01-1.037-1.32-.497-.31-1.107-.466-1.83-.466-.86 0-1.547.23-2.06.693-.513.462-.77 1.05-.77 1.764 0 .524.13.965.39 1.324.26.36.708.71 1.343 1.055.635.346 1.014.6 1.137.76.123.16.184.34.184.542 0 .27-.107.493-.322.67-.215.176-.51.264-.887.264-.47 0-.853-.12-1.15-.36-.296-.24-.492-.587-.587-1.042l-1.503.442c.164.78.544 1.38 1.14 1.8.595.42 1.353.63 2.273.63z" />
    </svg>
  );
}

export function BunIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a8 8 0 0 0-8 8c0 3 1.5 5.5 4 7v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3c2.5-1.5 4-4 4-7a8 8 0 0 0-8-8z" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M12 14a2 2 0 0 1-2-2" />
    </svg>
  );
}

export function DockerIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.77 12.06c-.347-.217-.99-.304-1.636-.202-.127-.58-.456-1.108-.95-1.523l-.337-.24-.262.316c-.463.559-.72 1.25-.746 1.968-.42-.09-.854-.128-1.297-.128-.68 0-1.343.08-1.975.234H.576a.576.576 0 00-.576.576c0 3.398 1.94 6.22 4.965 7.55 1.542.678 3.238 1.05 5.035 1.05 5.253 0 9.873-3.09 11.874-7.55.703-.134 1.488-.567 1.896-1.472.102-.227.14-.424.08-.57-.042-.1-.13-.195-.28-.28" />
    </svg>
  );
}

export function GeminiIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

export function SearchIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function KeyIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21 2-2 2m-1.5 1.5L14 9l-1.5-1.5L11 9l1.5 1.5L11 12l-1.5-1.5L8 12l1.5 1.5L7 16l-3-3a5 5 0 1 1 7-7l1.5 1.5z" />
    </svg>
  );
}

export function OpenAIIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.181a5.984 5.984 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.798.798 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

export function ZodIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zm-3.75 13.5H8.25v-1.875l4.875-5.25H8.25V7.5h7.5v1.875l-4.875 5.25h4.875v1.875z" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.55.06-1.09.17-1.61L8.5 14.7V17h7v-2.3l4.33-4.31c.11.52.17 1.06.17 1.61 0 4.41-3.59 8-8 8zm6.5-10.2L14.7 13.6h-5.4L5.5 9.8C6.9 6.8 9.9 5 12 5s5.1 1.8 6.5 4.8z" />
    </svg>
  );
}

export function RedisIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.023 7.822L12.392 3.01a1 1 0 0 0-.784 0L1.977 7.822A1 1 0 0 0 1.4 8.718v6.564a1 1 0 0 0 .577.896l9.631 4.812a1 1 0 0 0 .784 0l9.631-4.812a1 1 0 0 0 .577-.896V8.718a1 1 0 0 0-.577-.896zM12 4.954l7.925 3.96-3.238 1.618L8.762 6.572 12 4.954zm-8.6 4.3l7.6 3.8-3.2 1.6-7.6-3.8 3.2-1.6zm8.6 10.792L4.075 16.08V9.92l7.925 3.96v6.166zm8.6-3.966L13.4 19.846V13.88l7.2-3.6v5.806z" />
    </svg>
  );
}

export function QueueIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function S3Icon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export function AwsIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.08.192-.24.336l-.88.704c-.08.064-.152.096-.216.096a.35.35 0 0 1-.224-.096 4.7 4.7 0 0 1-.48-.56 3.6 3.6 0 0 1-.368-.68 3.5 3.5 0 0 1-.168-.888c0-.624.184-1.12.552-1.488.368-.368.896-.552 1.584-.552.48 0 .912.08 1.296.24.384.16.68.376.888.648.208.272.312.632.312 1.08v3.456c0 .28.032.488.096.624.064.136.144.256.24.36.056.064.08.12.08.168 0 .088-.08.2-.24.336l-.88.704a.43.43 0 0 1-.272.104.38.38 0 0 1-.256-.128 3.5 3.5 0 0 1-.24-.4c-.072-.152-.128-.36-.168-.624a2.76 2.76 0 0 1-.872.84 2.47 2.47 0 0 1-1.256.32c-.592 0-1.072-.168-1.44-.504-.368-.336-.552-.792-.552-1.368 0-.616.216-1.104.648-1.464.432-.36 1.04-.576 1.824-.648l1.408-.12v-.264c0-.44-.104-.768-.312-.984-.208-.216-.544-.328-1.008-.328-.352 0-.68.064-.984.192-.304.128-.536.288-.696.48zm1.72 2.16l-.992.096c-.464.04-.8.144-1.008.312-.208.168-.312.4-.312.696 0 .288.096.512.288.672.192.16.448.24.768.24.368 0 .696-.088.984-.264.288-.176.472-.408.552-.696.08-.288.12-.6.12-.936v-.12zm4.12-3.84h1.488l1.456 5.864 1.344-5.864h1.36l1.344 5.864 1.488-5.864h1.416l-2.168 7.824h-1.416l-1.352-5.744-1.352 5.744h-1.416l-2.192-7.824zm10.744 6.784c-.216.16-.496.288-.84.384-.344.096-.704.144-1.08.144-.72 0-1.272-.176-1.656-.528-.384-.352-.576-.848-.576-1.488 0-.328.056-.64.168-.936.112-.296.288-.56.528-.792.24-.232.544-.416.912-.552.368-.136.808-.224 1.32-.264l.872-.072v-.288c0-.36-.08-.632-.24-.816-.16-.184-.424-.272-.792-.272-.288 0-.552.056-.792.168-.24.112-.424.256-.552.432a.37.37 0 0 1-.2.128.32.32 0 0 1-.208-.088l-.752-.616a.43.43 0 0 1-.128-.248c0-.072.032-.144.096-.216.208-.248.512-.456.912-.624.4-.168.888-.256 1.464-.256.768 0 1.344.176 1.728.528.384.352.576.88.576 1.584v3.136c0 .488.088.856.264 1.104.056.072.08.136.08.192 0 .096-.08.208-.24.336l-.88.704a.43.43 0 0 1-.272.104c-.08 0-.152-.032-.216-.096a2.8 2.8 0 0 1-.208-.344zm-.256-1.744v-.68l-.664.064c-.368.032-.64.112-.816.24-.176.128-.264.312-.264.552 0 .232.072.416.216.552.144.136.352.208.624.208.272 0 .504-.064.696-.192.192-.128.312-.328.36-.6.048-.104.072-.256.072-.456zM2.84 17.656C6.72 20.376 11.96 21.75 16.8 20.616c2.816-.656 5.344-2.088 7.2-4.144.2-.232.144-.456-.128-.352-2.024.784-4.248 1.256-6.52 1.376-4.52.232-9.16-.928-12.872-3.32-.392-.256-.736.144-.32.48z" />
    </svg>
  );
}

export function TavilyIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m10 15 5-3-5-3v6Z" />
    </svg>
  );
}

export function AgentLoopIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

export function GitTrustIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

export function ScanSecretIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function JwtIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function OAuthIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function ClerkIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.82 17.15L9.67 6.86H7.95v10.28h1.61V9.75l7.07 9.17c.4-.52.79-1.12 1.19-1.77zm-1.61-5.18V6.86h-1.61v6.94l1.61-1.83z" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-4v-1.5h4zm2-3.5H9v-1.5h6zm1-3.5H8V8h8z" />
    </svg>
  );
}

export function LangChainIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function MongoIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C11.6 0 11.2.3 11 .8 9.5 5 6 9.5 6 14.5c0 3.6 2.7 6.8 6 7.5 3.3-.7 6-3.9 6-7.5 0-5-3.5-9.5-5-13.7-.2-.5-.6-.8-1-.8zm0 20.5c-2.5-.6-4.5-3-4.5-6 0-3.8 2.8-7.5 4.5-11.2 1.7 3.7 4.5 7.4 4.5 11.2 0 3-2 5.4-4.5 6z" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.5-2 1 .1 1.7.9 2.5 1.7C14.3 12 16 13.7 20 13.7c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.5 2-1-.1-1.7-.9-2.5-1.7C17.7 7.7 16 6 12 6zm-8 7.7c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.5-2 1 .1 1.7.9 2.5 1.7C6.3 19.7 8 21.4 12 21.4c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.5 2-1-.1-1.7-.9-2.5-1.7C9.7 15.4 8 13.7 4 13.7z" />
    </svg>
  );
}

export function ViteIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m23.4 3.7-11.1 20a1 1 0 0 1-1.8 0L.6 3.7a1 1 0 0 1 1.2-1.4l9.3 2.5a1 1 0 0 0 .5 0L21 2.3a1 1 0 0 1 1.3 1.4h1.1z" />
    </svg>
  );
}
