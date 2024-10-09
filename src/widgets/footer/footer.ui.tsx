import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="w-full h-full bg-white border-t border-white/50"
      aria-label="Подвал - Footer"
    >
      <div className="container w-full h-full">
        <div className="py-5 grid items-start sm:grid-cols-2 grid-rows-1 grid-cols-1 gap-2 sm:gap-1.5 lg:gap-1">
          <div className="flex items-start flex-col gap-2">
            <Link href={`/codecs`}>Кодекс предпринимателской этики</Link>
            <Link href={`/yuridi`}>Юридическая помощь</Link>
            <Link href={`/obmen`}>Обмен опытом</Link>
            <Link href={`/news`}>Новости</Link>
            <Link href={`/inoplatej`}> Ино. платежная система</Link>
            <Link href={`/erp-crm`}>ERP/CRM</Link>
          </div>
          <div className="flex items-start gap-2 flex-col">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <p>Пн-Пт С 9:00 до 19:00. Сб-вс выходные</p>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="space-y-0.5">
                <span className="flex gap-1">
                  СПБ:
                  <Link className="block text-gray" href="tel:+78126480001">
                    +7 (812) 648-00-01
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/50">
          <h2 className="text-sm text-center py-3.5">
            © Archi 2024. Все права защищены
          </h2>
        </div>
      </div>
    </footer>
  );
}
