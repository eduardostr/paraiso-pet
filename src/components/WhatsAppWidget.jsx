const PHONE = 'SEU_NUMERO_COM_DDD';

export default function WhatsAppWidget() {
  return (
    <>
      <style>{`
        @keyframes wpp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50%       { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
        }
        .wpp-btn {
          animation: wpp-pulse 2s ease-in-out infinite;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wpp-btn:hover {
          transform: scale(1.1);
        }
      `}</style>

      <a
        className="wpp-btn"
        href={`https://api.whatsapp.com/send?phone=${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Fale conosco no WhatsApp"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25d366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.826.737 5.48 2.027 7.788L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.772-1.852l-.485-.29-5.002 1.193 1.224-4.868-.317-.499A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.293-9.907c-.4-.2-2.363-1.165-2.729-1.299-.366-.133-.632-.2-.899.2-.266.4-1.032 1.299-1.265 1.565-.233.267-.466.3-.866.1-.4-.2-1.687-.622-3.214-1.983-1.188-1.06-1.99-2.369-2.223-2.769-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.699.2-.233.266-.4.4-.666.133-.267.066-.5-.033-.7-.1-.2-.899-2.165-1.232-2.965-.325-.78-.655-.674-.899-.686l-.766-.013c-.266 0-.699.1-1.065.5-.366.4-1.399 1.365-1.399 3.33s1.432 3.863 1.632 4.13c.2.266 2.819 4.304 6.827 6.033.954.412 1.698.658 2.279.843.957.305 1.829.262 2.518.159.768-.114 2.363-.966 2.696-1.899.333-.933.333-1.733.233-1.899-.1-.167-.366-.267-.766-.467z" />
        </svg>
      </a>
    </>
  );
}
