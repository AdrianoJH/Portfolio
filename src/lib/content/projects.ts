import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "chronomax",
    title: "RunKing · Plataforma de Gestão de Eventos",
    year: "2024 — Atual",
    highlight: true,
    featured: true,
    private: true,
    image: "/images/shot-chronomax.jpg",
    tech: [
      "Next.js",
      "React",
      "Material-UI",
      "Redux",
      "Node.js",
      "CASL",
      "AWS Lambda",
      "Socket.io",
    ],
    links: { demo: "https://go.runking.com.br/" },
    summary: {
      pt: "Plataforma web de gestão e cronometragem de eventos de corrida — operação em tempo real e acesso por níveis de permissão.",
      en: "Web platform for managing and timing running events — real-time operation and role-based access.",
      es: "Plataforma web de gestión y cronometraje de eventos de carrera — operación en tiempo real y acceso por niveles de permiso.",
    },
    description: {
      pt: [
        "O RunKing (ChronoMAX) é o painel administrativo que empresas de cronometragem e organizadores usam para operar um evento esportivo: inscrição e e-commerce, credenciamento e emissão de kits, cronometragem por chip, resultados, certificados, comunicação com os atletas e financeiro.",
        "São cerca de 20 módulos e mais de 10 perfis de usuário (do super admin ao cronometrador, credenciador, fotógrafo, equipe médica, controle de acesso e treinador), cada um com acesso restrito via CASL.",
        "O admin conversa com um ecossistema de ~25 serviços serverless na AWS (funções Lambda em Node.js e Python): cronometragem, chips, atletas, resultados, financeiro, jornada do atleta, sites white-label, WhatsApp e IA. Integra pagamentos (Asaas, com split e subcontas), WhatsApp e Instagram (Meta), importação de inscrições (Ticket Sports), e-mail (SES) e IA (AWS Bedrock) para atendimento e resumos.",
        "Confiabilidade e tempo real são críticos durante a operação da prova, com milhares de atletas simultâneos.",
      ],
      en: [
        "RunKing (ChronoMAX) is the admin platform timing companies and organizers use to run a sports event: registration and e-commerce, check-in and kit issuing, chip timing, results, certificates, athlete communication and finance.",
        "Around 20 modules and 10+ user roles (from super admin to timekeeper, check-in operator, photographer, medical team, access control and coach), each with access restricted via CASL.",
        "The admin talks to an ecosystem of ~25 serverless services on AWS (Lambda functions in Node.js and Python): timing, chips, athletes, results, finance, athlete journey, white-label sites, WhatsApp and AI. It integrates payments (Asaas, with split and subaccounts), WhatsApp and Instagram (Meta), registration imports (Ticket Sports), email (SES) and AI (AWS Bedrock) for support and summaries.",
        "Reliability and real time are critical during the event, with thousands of concurrent athletes.",
      ],
      es: [
        "RunKing (ChronoMAX) es el panel administrativo que empresas de cronometraje y organizadores usan para operar un evento deportivo: inscripción y e-commerce, acreditación y emisión de kits, cronometraje por chip, resultados, certificados, comunicación con los atletas y finanzas.",
        "Alrededor de 20 módulos y más de 10 perfiles de usuario (del super admin al cronometrador, acreditador, fotógrafo, equipo médico, control de acceso y entrenador), cada uno con acceso restringido vía CASL.",
        "El admin se comunica con un ecosistema de ~25 servicios serverless en AWS (funciones Lambda en Node.js y Python): cronometraje, chips, atletas, resultados, finanzas, jornada del atleta, sitios white-label, WhatsApp e IA. Integra pagos (Asaas, con split y subcuentas), WhatsApp e Instagram (Meta), importación de inscripciones (Ticket Sports), correo (SES) e IA (AWS Bedrock) para atención y resúmenes.",
        "La fiabilidad y el tiempo real son críticos durante la operación de la prueba, con miles de atletas simultáneos.",
      ],
    },
    modules: {
      pt: [
        "Cronometragem — largadas, leituras de chip, classificação em tempo real, campeões, desclassificações e pontos de controle.",
        "Credenciamento — check-in por QR, impressão de etiquetas (editor visual próprio), modo quiosque, controle de acesso na entrada e câmara de chamada.",
        "Chips (RFID) — upload em lote (CSV/Excel), associação atleta↔chip, estatísticas e ranges.",
        "Modalidades — categorias, faixas etárias, segmentos, pontos de controle e de interesse.",
        "Atletas — CRUD, busca avançada, importação em lote e integração com Ticket Sports.",
        "Inscrições e e-commerce — kits e lotes, cupons, troca de modalidade e titularidade, pelotões, relatórios de venda e estoque.",
        "Financeiro — subcontas Asaas (KYC), configuração de taxas, split e extrato.",
        "Resultados — painéis públicos (telão, pódio, placar), filtros, exportação e detecção de anomalias.",
        "Certificados — editor visual próprio e foto-certificado com segundo telão.",
        "Jornada do atleta — editor visual de automações (XYFlow) com e-mail (SES), SMS e WhatsApp, e templates (Tiptap).",
        "Sites white-label — site de cada evento com domínio, SSL e identidade da marca, montado num editor visual próprio.",
        "Atendimento — WhatsApp e Instagram (Meta) com chatbot de IA (Bedrock).",
        "GoHelp (médico) — ocorrências, cadastro de equipes e equipamentos GoHard.",
        "Dashboard — KPIs de inscrição, financeiro e kits, com resumo de avaliações por IA.",
      ],
      en: [
        "Timing — starts, chip readings, real-time standings, champions, disqualifications and control points.",
        "Check-in — QR check-in, label printing (in-house visual editor), kiosk mode, entrance access control and call chamber.",
        "Chips (RFID) — bulk upload (CSV/Excel), athlete↔chip mapping, stats and ranges.",
        "Categories — age groups, segments, control points and points of interest.",
        "Athletes — CRUD, advanced search, bulk import and Ticket Sports integration.",
        "Registration & e-commerce — kits and batches, coupons, category and ownership changes, platoons, sales reports and stock.",
        "Finance — Asaas subaccounts (KYC), fee setup, split and statement.",
        "Results — public screens (leaderboard, podium, scoreboard), filters, export and anomaly detection.",
        "Certificates — in-house visual editor and photo-certificate with a second screen.",
        "Athlete journey — visual automation editor (XYFlow) with email (SES), SMS and WhatsApp, and templates (Tiptap).",
        "White-label sites — a site per event with its own domain, SSL and branding, built in an in-house visual editor.",
        "Support — WhatsApp and Instagram (Meta) with an AI chatbot (Bedrock).",
        "GoHelp (medical) — incidents, team registration and GoHard equipment.",
        "Dashboard — registration, finance and kit KPIs, with AI-summarized reviews.",
      ],
      es: [
        "Cronometraje — largadas, lecturas de chip, clasificación en tiempo real, campeones, descalificaciones y puntos de control.",
        "Acreditación — check-in por QR, impresión de etiquetas (editor visual propio), modo quiosco, control de acceso en la entrada y cámara de llamada.",
        "Chips (RFID) — carga en lote (CSV/Excel), asociación atleta↔chip, estadísticas y rangos.",
        "Modalidades — categorías, franjas de edad, segmentos, puntos de control y de interés.",
        "Atletas — CRUD, búsqueda avanzada, importación en lote e integración con Ticket Sports.",
        "Inscripciones y e-commerce — kits y lotes, cupones, cambio de modalidad y titularidad, pelotones, informes de venta y stock.",
        "Finanzas — subcuentas Asaas (KYC), configuración de tasas, split y extracto.",
        "Resultados — pantallas públicas (marcador, podio, tablero), filtros, exportación y detección de anomalías.",
        "Certificados — editor visual propio y foto-certificado con segunda pantalla.",
        "Jornada del atleta — editor visual de automatizaciones (XYFlow) con correo (SES), SMS y WhatsApp, y plantillas (Tiptap).",
        "Sitios white-label — un sitio por evento con dominio, SSL e identidad de marca, montado en un editor visual propio.",
        "Atención — WhatsApp e Instagram (Meta) con chatbot de IA (Bedrock).",
        "GoHelp (médico) — incidencias, registro de equipos y equipos GoHard.",
        "Panel — KPIs de inscripción, finanzas y kits, con resumen de evaluaciones por IA.",
      ],
    },
    highlights: {
      pt: [
        "Mapas da prova com Mapbox — pontos de controle georreferenciados, cálculo de elevação e import/export de rotas em GPX.",
        "Controle de acesso por papéis com CASL: mais de 10 perfis (admin, produtor, cronometrador, credenciador, fotógrafo, equipe médica, controle de acesso, treinador…), cada um roteado para a sua área.",
        "Cronometragem em tempo real com Socket.io — classificação ao vivo, ajuste de tempos, desclassificação e telas públicas (árbitro, pódio, placar) sincronizadas pelo relógio do servidor.",
        "Editor visual de automações de comunicação (XYFlow): gatilhos (inscrição, check-in, chegada) disparando e-mail (SES), SMS e WhatsApp, com as jornadas indexadas em OpenSearch.",
        "Editores visuais drag-and-drop próprios (construídos internamente) para sites white-label de eventos e para certificados e etiquetas de credenciamento.",
        "Módulo financeiro com split de pagamentos e subcontas Asaas (KYC) e importação de atletas e chips em lote (CSV/Excel) — uploads direto ao S3 via presigned URLs, sem credenciais no cliente.",
      ],
      en: [
        "Race maps with Mapbox — georeferenced control points, elevation profiles and GPX route import/export.",
        "Role-based access control with CASL: 10+ roles (admin, producer, timekeeper, check-in operator, photographer, medical team, access control, coach…), each routed to its own area.",
        "Real-time timing with Socket.io — live standings, time overrides, disqualification and public screens (referee, podium, scoreboard) synced by the server clock.",
        "Visual editor for communication automations (XYFlow): triggers (registration, check-in, finish) firing email (SES), SMS and WhatsApp, with journeys indexed in OpenSearch.",
        "In-house drag-and-drop visual editors for white-label event sites and for certificates and check-in labels.",
        "Finance module with payment split and Asaas subaccounts (KYC) and bulk athlete and chip imports (CSV/Excel) — uploads straight to S3 via presigned URLs, with no client-side credentials.",
      ],
      es: [
        "Mapas de la prueba con Mapbox — puntos de control georreferenciados, perfil de elevación e importación/exportación de rutas en GPX.",
        "Control de acceso por roles con CASL: más de 10 perfiles (admin, productor, cronometrador, acreditador, fotógrafo, equipo médico, control de acceso, entrenador…), cada uno enrutado a su área.",
        "Cronometraje en tiempo real con Socket.io — clasificación en vivo, ajuste de tiempos, descalificación y pantallas públicas (árbitro, podio, marcador) sincronizadas por el reloj del servidor.",
        "Editor visual de automatizaciones de comunicación (XYFlow): disparadores (inscripción, check-in, llegada) que envían correo (SES), SMS y WhatsApp, con las jornadas indexadas en OpenSearch.",
        "Editores visuales drag-and-drop propios (construidos internamente) para sitios white-label de eventos y para certificados y etiquetas de acreditación.",
        "Módulo financiero con split de pagos y subcuentas Asaas (KYC) e importación de atletas y chips en lote (CSV/Excel) — cargas directo a S3 vía presigned URLs, sin credenciales en el cliente.",
      ],
    },
    role: {
      pt: "Desenvolvedor Full Stack — front-end, serviços de back-end e integrações.",
      en: "Full Stack Developer — front-end, back-end services and integrations.",
      es: "Desarrollador Full Stack — front-end, servicios de back-end e integraciones.",
    },
  },
  {
    slug: "plataforma-do-atleta",
    title: "Plataforma do Atleta",
    year: "2025 — Atual",
    featured: true,
    private: true,
    image: "/images/shot-hub-do-atleta.jpg",
    tech: ["Next.js 16", "React 19", "TypeScript", "Three.js", "Tailwind CSS", "OpenAI", "PWA"],
    links: { demo: "https://d2188tjg2zue8u.cloudfront.net/" },
    summary: {
      pt: "Área imersiva do atleta: sala 3D com troféus, calendário, loja, treino com IA e transmissão ao vivo.",
      en: "Immersive athlete area: a 3D trophy room, calendar, store, AI training and live broadcast.",
      es: "Área inmersiva del atleta: sala 3D con trofeos, calendario, tienda, entrenamiento con IA y transmisión en vivo.",
    },
    description: {
      pt: [
        "Plataforma do atleta construída com Next.js 16 e React 19. Reúne num só lugar a jornada do corredor: home, calendário de provas, resultados, loja oficial, plano de treino e a 'Sala do Atleta' — um ambiente 3D interativo com medalheiro, troféus e guarda-roupa.",
        "A cena 3D usa Three.js (react-three-fiber) com pós-processamento WebGL2. Conecta-se às APIs do RunKing (perfil, resultados, autenticação) e a um serviço de treino em AWS Lambda; a IA é da OpenAI — gpt-image-1 no provador virtual de roupas e geração do plano de treino em texto. Tem i18n (pt/en/es), compartilhamento social (OG image e stories) e funciona como PWA.",
        "Inclui área médica com questionário PAR-Q+, evolução de desempenho, galeria de fotos (IndexedDB) e transmissão ao vivo com classificação parcial e acompanhamento de pelotão.",
      ],
      en: [
        "Athlete platform built with Next.js 16 and React 19. It brings the runner's journey together in one place: home, race calendar, results, official store, training plan and the 'Athlete's Room' — an interactive 3D space with a medal cabinet, trophies and wardrobe.",
        "The 3D scene uses Three.js (react-three-fiber) with WebGL2 post-processing. It connects to RunKing's APIs (profile, results, authentication) and a training service on AWS Lambda; AI is from OpenAI — gpt-image-1 for the virtual clothing try-on and text generation of the training plan. It has i18n (pt/en/es), social sharing (OG image and stories) and works as a PWA.",
        "It includes a medical area with the PAR-Q+ questionnaire, performance progression, a photo gallery (IndexedDB) and a live broadcast with partial standings and peloton tracking.",
      ],
      es: [
        "Plataforma del atleta construida con Next.js 16 y React 19. Reúne en un solo lugar la jornada del corredor: home, calendario de pruebas, resultados, tienda oficial, plan de entrenamiento y la 'Sala del Atleta' — un ambiente 3D interactivo con medallero, trofeos y guardarropa.",
        "La escena 3D usa Three.js (react-three-fiber) con post-procesamiento WebGL2. Se conecta a las APIs de RunKing (perfil, resultados, autenticación) y a un servicio de entrenamiento en AWS Lambda; la IA es de OpenAI — gpt-image-1 en el probador virtual de ropa y generación del plan de entrenamiento en texto. Tiene i18n (pt/en/es), compartir social (OG image y stories) y funciona como PWA.",
        "Incluye área médica con cuestionario PAR-Q+, evolución de rendimiento, galería de fotos (IndexedDB) y transmisión en vivo con clasificación parcial y seguimiento de pelotón.",
      ],
    },
    highlights: {
      pt: [
        "Cena 3D interativa (Three.js/react-three-fiber) com zoom de foco, hotspots e medalheiro procedural.",
        "Provador virtual de produtos com IA (geração de imagem via OpenAI).",
        "Plano de treino com geração assistida por IA e validação por coach (CREF).",
        "Transmissão ao vivo com classificação parcial e acompanhamento de pelotão em tempo real.",
        "PWA com i18n (pt/en/es), compartilhamento social (OG/stories) e armazenamento local (IndexedDB).",
      ],
      en: [
        "Interactive 3D scene (Three.js/react-three-fiber) with focus zoom, hotspots and a procedural medal cabinet.",
        "Image-based virtual product try-on powered by AI (OpenAI image generation).",
        "Training plan with AI-assisted generation and coach (CREF) validation.",
        "Live broadcast with partial standings and real-time peloton tracking.",
        "PWA with i18n (pt/en/es), social sharing (OG/stories) and local storage (IndexedDB).",
      ],
      es: [
        "Escena 3D interactiva (Three.js/react-three-fiber) con zoom de enfoque, hotspots y medallero procedural.",
        "Probador virtual de productos con IA (generación de imagen vía OpenAI).",
        "Plan de entrenamiento con generación asistida por IA y validación por coach (CREF).",
        "Transmisión en vivo con clasificación parcial y seguimiento de pelotón en tiempo real.",
        "PWA con i18n (pt/en/es), compartir en redes (OG/stories) y almacenamiento local (IndexedDB).",
      ],
    },
    role: {
      pt: "Desenvolvedor Front-end.",
      en: "Front-end Developer.",
      es: "Desarrollador Front-end.",
    },
  },
  {
    slug: "sites-de-provas",
    title: "Sites de Provas (White-label)",
    year: "2025 — Atual",
    featured: true,
    image: "/images/shot-sites-de-provas.jpg",
    tech: ["Next.js 15", "React 19", "Node.js", "AWS Lambda", "Prisma", "DynamoDB", "MapLibre GL", "PWA"],
    links: { demo: "https://maratonadorio2026.runking.com.br" },
    summary: {
      pt: "Plataforma white-label para eventos de corrida — inscrição, pagamento, acompanhamento ao vivo e replay da prova.",
      en: "White-label platform for running events — registration, payment, live tracking and race replay.",
      es: "Plataforma white-label para eventos de carrera — inscripción, pago, seguimiento en vivo y replay de la prueba.",
    },
    description: {
      pt: [
        "Plataforma white-label: cada prova ganha o seu próprio site (por subdomínio ou domínio próprio) cobrindo toda a jornada do atleta — da inscrição e pagamento ao acompanhamento ao vivo e aos resultados. O link aqui é um evento de exemplo.",
        "O front-end é um PWA em Next.js 15 / React 19 (push via Firebase, offline): inscrição multi-etapa com campos dinâmicos, loja e pagamento (PIX, boleto e cartão via Asaas), venda em grupo para assessorias, acompanhamento ao vivo no mapa (MapLibre GL) com pelotão, e replay da prova com geração de vídeo MP4 direto no navegador (WebCodecs + mp4-muxer).",
        "No back-end serverless (AWS Lambda, Node.js + Express): multi-tenant em DynamoDB, Aurora MySQL com Prisma (read-replicas e leitura no writer para consistência), agendamento de retirada de kit sem race condition via SQS FIFO, conteúdo dinâmico com IA (Bedrock) e provisionamento automático de domínio (CloudFront + Route53 + ACM + Firebase). Também conversa com os serviços de financeiro, resultados e rastreamento da ChronoMAX.",
        "Deploy em AWS — Elastic Beanstalk no front-end e Lambda no back-end.",
      ],
      en: [
        "White-label platform: each race gets its own site (by subdomain or custom domain) covering the whole athlete journey — from registration and payment to live tracking and results. The link here is a sample event.",
        "The front-end is a PWA in Next.js 15 / React 19 (push via Firebase, offline): multi-step registration with dynamic fields, store and payment (PIX, boleto and card via Asaas), group purchase for running crews, live tracking on the map (MapLibre GL) with peloton comparison, and race replay with in-browser MP4 video generation (WebCodecs + mp4-muxer).",
        "On the back-end (AWS Lambda, Node.js + Express): multi-tenant in DynamoDB, Aurora MySQL with Prisma (read-replicas and writer reads for consistency), race-condition-free kit-pickup scheduling via SQS FIFO, AI-generated dynamic content (Bedrock) and automatic domain provisioning (CloudFront + Route53 + ACM + Firebase). It also talks to ChronoMAX's finance, results and tracking services.",
        "Deployed on AWS — Elastic Beanstalk for the front-end and Lambda for the back-end.",
      ],
      es: [
        "Plataforma white-label: cada prueba tiene su propio sitio (por subdominio o dominio propio) cubriendo toda la jornada del atleta — de la inscripción y el pago al seguimiento en vivo y los resultados. El enlace aquí es un evento de ejemplo.",
        "El front-end es un PWA en Next.js 15 / React 19 (push vía Firebase, offline): inscripción multi-etapa con campos dinámicos, tienda y pago (PIX, boleto y tarjeta vía Asaas), compra en grupo para asesorías, seguimiento en vivo en el mapa (MapLibre GL) con pelotón, y replay de la prueba con generación de video MP4 directo en el navegador (WebCodecs + mp4-muxer).",
        "En el back-end serverless (AWS Lambda, Node.js + Express): multi-tenant en DynamoDB, Aurora MySQL con Prisma (read-replicas y lecturas en el writer para consistencia), agendamiento de retiro de kit sin race condition vía SQS FIFO, contenido dinámico con IA (Bedrock) y aprovisionamiento automático de dominio (CloudFront + Route53 + ACM + Firebase). También se comunica con los servicios de finanzas, resultados y rastreo de ChronoMAX.",
        "Desplegado en AWS — Elastic Beanstalk en el front-end y Lambda en el back-end.",
      ],
    },
    modules: {
      pt: [
        "Inscrição — formulário multi-etapa com campos dinâmicos, PCD/laudo, busca ViaCEP/IBGE e seleção de modalidade/kit.",
        "Venda em grupo — reserva de vagas (fila FIFO) antes dos dados, preenchimento por formulário, Excel ou convite, autosave e 2FA por WhatsApp.",
        "Loja e pagamento — carrinho, merchandising com variações, cupons e descontos de parceiros; pagamento PIX, boleto e cartão (Asaas).",
        "Retirada de kit — agendamento com slots por horário (sem race via SQS FIFO) e QR de validação na entrada.",
        "Acompanhamento ao vivo — mapa (MapLibre GL) com posição do atleta, pontos de controle, líderes ao vivo e rotas públicas.",
        "Replay da prova — animação no mapa com ritmo real e comparação de pelotão (até 10 rivais).",
        "Vídeo e certificado — geração de vídeo MP4 do replay no navegador (H.264) e certificado/arte para redes.",
        "Área do atleta — minhas inscrições, histórico e evolução (gráficos de ritmo e distância).",
        "Médico e emergência — ficha de saúde, contato de emergência, transferência de titularidade e troca de modalidade.",
        "Encorajamento — amigos enviam vídeo/áudio disparados por gatilho (antes da prova ou em ponto de controle).",
        "Multi-tenant e domínios — site por evento com provisionamento automático de subdomínio e SSL (CloudFront + Route53 + ACM).",
        "Conteúdo dinâmico — seções do evento geradas com IA (Bedrock) e configuração visual (cores, logos) por evento.",
      ],
      en: [
        "Registration — multi-step form with dynamic fields, disability (PCD) docs, ViaCEP/IBGE lookup and modality/kit selection.",
        "Group purchase — spot reservation (FIFO queue) before data, filling by form, Excel or invite, autosave and WhatsApp 2FA.",
        "Store and payment — cart, merchandising with variants, coupons and partner discounts; payment via PIX, boleto and card (Asaas).",
        "Kit pickup — time-slot scheduling (race-free via SQS FIFO) and a QR code validated at the gate.",
        "Live tracking — map (MapLibre GL) with athlete position, control points, live leaders and public routes.",
        "Race replay — map animation with real pace and peloton comparison (up to 10 rivals).",
        "Video and certificate — in-browser MP4 replay video (H.264) and certificate/social artwork.",
        "Athlete area — my registrations, history and progression (pace and distance charts).",
        "Medical and emergency — health form, emergency contact, ownership transfer and modality change.",
        "Encouragement — friends send video/audio triggered before the race or at a control point.",
        "Multi-tenant and domains — a site per event with automatic subdomain and SSL provisioning (CloudFront + Route53 + ACM).",
        "Dynamic content — event sections generated with AI (Bedrock) and per-event visual config (colors, logos).",
      ],
      es: [
        "Inscripción — formulario multi-etapa con campos dinámicos, documentos PCD, búsqueda ViaCEP/IBGE y selección de modalidad/kit.",
        "Compra en grupo — reserva de plazas (cola FIFO) antes de los datos, llenado por formulario, Excel o invitación, autoguardado y 2FA por WhatsApp.",
        "Tienda y pago — carrito, merchandising con variantes, cupones y descuentos de socios; pago vía PIX, boleto y tarjeta (Asaas).",
        "Retiro de kit — agendamiento con franjas horarias (sin race vía SQS FIFO) y QR de validación en la entrada.",
        "Seguimiento en vivo — mapa (MapLibre GL) con posición del atleta, puntos de control, líderes en vivo y rutas públicas.",
        "Replay de la prueba — animación en el mapa con ritmo real y comparación de pelotón (hasta 10 rivales).",
        "Video y certificado — generación de video MP4 del replay en el navegador (H.264) y certificado/arte para redes.",
        "Área del atleta — mis inscripciones, historial y evolución (gráficos de ritmo y distancia).",
        "Médico y emergencia — ficha de salud, contacto de emergencia, transferencia de titularidad y cambio de modalidad.",
        "Aliento — amigos envían video/audio disparados antes de la prueba o en un punto de control.",
        "Multi-tenant y dominios — un sitio por evento con aprovisionamiento automático de subdominio y SSL (CloudFront + Route53 + ACM).",
        "Contenido dinámico — secciones del evento generadas con IA (Bedrock) y configuración visual (colores, logos) por evento.",
      ],
    },
    highlights: {
      pt: [
        "Back-end serverless (AWS Lambda + Express) multi-tenant em DynamoDB, com Aurora MySQL via Prisma (read-replicas e leitura no writer para consistência).",
        "Provisionamento automático de domínio a partir do painel: subdomínio, DNS e SSL (CloudFront + Route53 + ACM) e allowlist no Firebase.",
        "Agendamento de retirada de kit sem race condition, serializado por horário via SQS FIFO.",
        "Replay da prova no mapa (MapLibre GL) com ritmo real e pelotão (até 10 rivais), e geração de vídeo MP4 (H.264) no próprio navegador (WebCodecs + mp4-muxer).",
        "Venda em grupo para assessorias: reserva de vagas antes dos dados, preenchimento por formulário/Excel/convite, autosave e 2FA por WhatsApp.",
        "Resultados protegidos contra scraping (rate-limit + Cloudflare Turnstile) e conteúdo do evento gerado com IA (Bedrock).",
      ],
      en: [
        "Serverless back-end (AWS Lambda + Express), multi-tenant in DynamoDB, with Aurora MySQL via Prisma (read-replicas and writer reads for consistency).",
        "Automatic domain provisioning from the dashboard: subdomain, DNS and SSL (CloudFront + Route53 + ACM) plus Firebase allowlisting.",
        "Race-condition-free kit-pickup scheduling, serialized per time slot via SQS FIFO.",
        "Race replay on the map (MapLibre GL) with real pace and peloton (up to 10 rivals), and in-browser MP4 video (H.264) generation (WebCodecs + mp4-muxer).",
        "Group purchase for running crews: spots reserved before data, filling by form/Excel/invite, autosave and WhatsApp 2FA.",
        "Results protected against scraping (rate-limit + Cloudflare Turnstile) and event content generated with AI (Bedrock).",
      ],
      es: [
        "Back-end serverless (AWS Lambda + Express), multi-tenant en DynamoDB, con Aurora MySQL vía Prisma (read-replicas y lecturas en el writer para consistencia).",
        "Aprovisionamiento automático de dominio desde el panel: subdominio, DNS y SSL (CloudFront + Route53 + ACM) y allowlist en Firebase.",
        "Agendamiento de retiro de kit sin race condition, serializado por franja horaria vía SQS FIFO.",
        "Replay de la prueba en el mapa (MapLibre GL) con ritmo real y pelotón (hasta 10 rivales), y generación de video MP4 (H.264) en el propio navegador (WebCodecs + mp4-muxer).",
        "Compra en grupo para asesorías: plazas reservadas antes de los datos, llenado por formulario/Excel/invitación, autoguardado y 2FA por WhatsApp.",
        "Resultados protegidos contra scraping (rate-limit + Cloudflare Turnstile) y contenido del evento generado con IA (Bedrock).",
      ],
    },
    role: {
      pt: "Desenvolvedor Full Stack — front-end (PWA) e back-end serverless.",
      en: "Full Stack Developer — front-end (PWA) and serverless back-end.",
      es: "Desarrollador Full Stack — front-end (PWA) y back-end serverless.",
    },
  },
  {
    slug: "app-runking",
    title: "App RunKing (iOS & Android)",
    year: "2024 — Atual",
    image: "/images/shot-app-runking.jpg",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    links: {
      appStore: "https://apps.apple.com/us/app/runking/id6451327424",
      playStore: "https://play.google.com/store/apps/details?id=br.com.runking",
    },
    summary: {
      pt: "Aplicativo oficial do atleta para iOS e Android: inscrições, resultados, acompanhamento e notificações.",
      en: "Official athlete app for iOS and Android: registrations, results, tracking and notifications.",
      es: "Aplicación oficial del atleta para iOS y Android: inscripciones, resultados, seguimiento y notificaciones.",
    },
    description: {
      pt: [
        "Aplicativo mobile oficial da RunKing, publicado na App Store e no Google Play. Leva a experiência do atleta para o celular: consulta de provas e inscrições, resultados e certificados, acompanhamento ao vivo e notificações push.",
        "Desenvolvido em Flutter (Dart) a partir de um único código para as duas plataformas, consumindo as mesmas APIs serverless do ecossistema ChronoMAX, com notificações via Firebase.",
      ],
      en: [
        "RunKing's official mobile app, published on the App Store and Google Play. It brings the athlete experience to the phone: events and registrations, results and certificates, live tracking and push notifications.",
        "Built with Flutter (Dart) from a single codebase for both platforms, consuming the same serverless APIs of the ChronoMAX ecosystem, with notifications via Firebase.",
      ],
      es: [
        "Aplicación móvil oficial de RunKing, publicada en la App Store y Google Play. Lleva la experiencia del atleta al móvil: pruebas e inscripciones, resultados y certificados, seguimiento en vivo y notificaciones push.",
        "Desarrollada en Flutter (Dart) a partir de un único código para ambas plataformas, consumiendo las mismas APIs serverless del ecosistema ChronoMAX, con notificaciones vía Firebase.",
      ],
    },
    highlights: {
      pt: [
        "App multiplataforma (iOS e Android) a partir de um único código Flutter.",
        "Integração com as APIs serverless do ecossistema e push via Firebase.",
      ],
      en: [
        "Cross-platform app (iOS and Android) from a single Flutter codebase.",
        "Integration with the ecosystem's serverless APIs and push via Firebase.",
      ],
      es: [
        "App multiplataforma (iOS y Android) a partir de un único código Flutter.",
        "Integración con las APIs serverless del ecosistema y push vía Firebase.",
      ],
    },
    role: {
      pt: "Desenvolvedor Mobile.",
      en: "Mobile Developer.",
      es: "Desarrollador Móvil.",
    },
  },
  {
    slug: "dk-drift",
    title: "DK Drift · Campeonato de Drift",
    year: "2025",
    image: "/images/shot-dk-drift.jpg",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Prisma", "styled-components"],
    links: { demo: "https://www.dkdrift.com/" },
    summary: {
      pt: "Site oficial de um campeonato de drift — calendário de etapas, ranking de pilotos e painel administrativo. Em desenvolvimento.",
      en: "Official site for a drift championship — stage calendar, driver ranking and an admin panel. In development.",
      es: "Sitio oficial de un campeonato de drift — calendario de etapas, ranking de pilotos y panel administrativo. En desarrollo.",
    },
    description: {
      pt: [
        "Projeto freelance: site oficial do campeonato DKBR (drift). Mostra o calendário de etapas, o ranking de pilotos, galeria de fotos e patrocinadores, com formulário de contato — tudo gerenciado por um painel administrativo.",
        "Construído em Next.js 16 / React 19 (TypeScript) com Supabase (PostgreSQL, Auth e Storage) e Prisma. O painel admin, protegido por autenticação, permite gerenciar banners, etapas, patrocinadores e galeria sem tocar no código. E-mails transacionais via Resend e deploy na Vercel. Em desenvolvimento.",
      ],
      en: [
        "Freelance project: official site for the DKBR drift championship. It shows the stage calendar, driver ranking, photo gallery and sponsors, with a contact form — all managed through an admin panel.",
        "Built with Next.js 16 / React 19 (TypeScript), Supabase (PostgreSQL, Auth and Storage) and Prisma. The authenticated admin panel lets the client manage banners, stages, sponsors and gallery without touching code. Transactional emails via Resend and deployed on Vercel. In development.",
      ],
      es: [
        "Proyecto freelance: sitio oficial del campeonato DKBR (drift). Muestra el calendario de etapas, el ranking de pilotos, galería de fotos y patrocinadores, con formulario de contacto — todo gestionado por un panel administrativo.",
        "Construido en Next.js 16 / React 19 (TypeScript) con Supabase (PostgreSQL, Auth y Storage) y Prisma. El panel admin, protegido por autenticación, permite gestionar banners, etapas, patrocinadores y galería sin tocar el código. Correos transaccionales vía Resend y desplegado en Vercel. En desarrollo.",
      ],
    },
    highlights: {
      pt: [
        "Painel administrativo com autenticação (Supabase) para gerenciar eventos, banners, patrocinadores e galeria.",
        "Back-end com Supabase (PostgreSQL + Storage) e Prisma; APIs REST e validação com Zod.",
        "Deploy na Vercel com cron job de keep-alive e renderização otimizada.",
      ],
      en: [
        "Authenticated admin panel (Supabase) to manage events, banners, sponsors and gallery.",
        "Back-end with Supabase (PostgreSQL + Storage) and Prisma; REST APIs and Zod validation.",
        "Deployed on Vercel with a keep-alive cron job and optimized rendering.",
      ],
      es: [
        "Panel administrativo con autenticación (Supabase) para gestionar eventos, banners, patrocinadores y galería.",
        "Back-end con Supabase (PostgreSQL + Storage) y Prisma; APIs REST y validación con Zod.",
        "Desplegado en Vercel con cron job de keep-alive y renderizado optimizado.",
      ],
    },
    role: {
      pt: "Desenvolvedor Full Stack (freelance).",
      en: "Full Stack Developer (freelance).",
      es: "Desarrollador Full Stack (freelance).",
    },
  },
  {
    slug: "resultados",
    title: "Portal de Resultados",
    year: "2024 — Atual",
    image: "/images/shot-resultados.jpg",
    tech: ["Next.js", "React", "Material-UI", "ApexCharts", "Leaflet", "Puppeteer"],
    links: { demo: "https://resultados.runking.com.br/" },
    summary: {
      pt: "Busca e consulta de resultados de provas — rankings, desempenho e certificados.",
      en: "Search and view race results — rankings, performance and certificates.",
      es: "Búsqueda y consulta de resultados de pruebas — rankings, rendimiento y certificados.",
    },
    description: {
      pt: [
        "Portal público de resultados que reúne provas de várias empresas de cronometragem. Busca por evento ou organizador e exibe rankings e classificações com filtros por modalidade, categoria, faixa etária e gênero, além de páginas de desempenho individual.",
        "Construída em Next.js com Material-UI, combina várias bibliotecas de visualização (ApexCharts, Chart.js, MUI X Charts) e mapas (Leaflet). Gera certificados e relatórios em PDF (Puppeteer) e usa canvas (Konva) para composições de imagem. Consome a API de resultados da ChronoMAX.",
      ],
      en: [
        "Public results portal that aggregates races from several timing companies. Search by event or organizer and view rankings and standings with filters by category, age group and gender, plus individual performance pages.",
        "Built with Next.js and Material-UI, it combines several visualization libraries (ApexCharts, Chart.js, MUI X Charts) and maps (Leaflet). It generates certificates and reports as PDF (Puppeteer) and uses canvas (Konva) for image compositions. It consumes ChronoMAX's results API.",
      ],
      es: [
        "Portal público de resultados que reúne pruebas de varias empresas de cronometraje. Busca por evento u organizador y muestra rankings y clasificaciones con filtros por modalidad, categoría, franja de edad y género, además de páginas de rendimiento individual.",
        "Construida en Next.js con Material-UI, combina varias bibliotecas de visualización (ApexCharts, Chart.js, MUI X Charts) y mapas (Leaflet). Genera certificados e informes en PDF (Puppeteer) y usa canvas (Konva) para composiciones de imagen. Consume la API de resultados de ChronoMAX.",
      ],
    },
    highlights: {
      pt: [
        "Rankings com filtros combinados e análise de desempenho por atleta.",
        "Visualizações com múltiplas libs de gráficos e mapas (ApexCharts, Chart.js, Leaflet).",
        "Geração de certificados e relatórios em PDF (Puppeteer).",
      ],
      en: [
        "Rankings with combined filters and per-athlete performance analysis.",
        "Visualizations with multiple chart and map libraries (ApexCharts, Chart.js, Leaflet).",
        "Certificate and report generation as PDF (Puppeteer).",
      ],
      es: [
        "Rankings con filtros combinados y análisis de rendimiento por atleta.",
        "Visualizaciones con múltiples libs de gráficos y mapas (ApexCharts, Chart.js, Leaflet).",
        "Generación de certificados e informes en PDF (Puppeteer).",
      ],
    },
  },
  {
    slug: "gohelp",
    title: "GoHelp · Emergência Médica",
    year: "2025",
    image: "/images/shot-gohelp.jpg",
    tech: ["Next.js", "React", "Geolocation API", "Tailwind CSS", "AWS S3"],
    links: { demo: "https://emergencia-help.runking.com.br/?event=maratona-chronomax" },
    summary: {
      pt: "Acionamento de emergência médica durante o evento, com identificação do atleta e geolocalização.",
      en: "Trigger a medical emergency during an event, with athlete identification and geolocation.",
      es: "Activación de una emergencia médica durante el evento, con identificación del atleta y geolocalización.",
    },
    description: {
      pt: [
        "Interface para abrir uma emergência médica durante o evento: identifica o atleta pelo número de peito (ou registra como não identificado) e captura a localização em tempo real, acionando a equipe de atendimento.",
        "Conecta-se ao módulo de operação GoHelp da plataforma de gestão, onde os socorristas acompanham os chamados e a posição dos atendentes num mapa ao vivo (status online/offline, ocorrências e comunicação).",
      ],
      en: [
        "Interface to open a medical emergency during an event: it identifies the athlete by bib number (or logs them as unidentified) and captures the location in real time, alerting the response team.",
        "It connects to the GoHelp operations module of the management platform, where responders track calls and medic positions on a live map (online/offline status, incidents and communication).",
      ],
      es: [
        "Interfaz para abrir una emergencia médica durante el evento: identifica al atleta por número de dorsal (o lo registra como no identificado) y captura la ubicación en tiempo real, alertando al equipo de atención.",
        "Se conecta al módulo de operación GoHelp de la plataforma de gestión, donde los socorristas siguen las llamadas y la posición de los atendientes en un mapa en vivo (estado online/offline, incidencias y comunicación).",
      ],
    },
    highlights: {
      pt: [
        "Geolocalização em tempo real do atleta que aciona o socorro.",
        "Integração com o painel de operação médica (mapa ao vivo de socorristas e ocorrências).",
      ],
      en: [
        "Real-time geolocation of the athlete triggering the help request.",
        "Integration with the medical operations dashboard (live map of responders and incidents).",
      ],
      es: [
        "Geolocalización en tiempo real del atleta que acciona el socorro.",
        "Integración con el panel de operación médica (mapa en vivo de socorristas e incidencias).",
      ],
    },
  },
  {
    slug: "site-chronomax",
    title: "Site Institucional ChronoMAX",
    year: "2025",
    image: "/images/shot-portal-chronomax.jpg",
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "SSR", "SEO"],
    links: { demo: "https://chronomax.com.br/" },
    summary: {
      pt: "Site institucional da ChronoMAX: a empresa, os serviços de cronometragem e a consulta de resultados.",
      en: "ChronoMAX's institutional site: the company, its timing services and results lookup.",
      es: "Sitio institucional de ChronoMAX: la empresa, los servicios de cronometraje y la consulta de resultados.",
    },
    description: {
      pt: [
        "Site institucional da ChronoMAX, a empresa de cronometragem. Apresenta a empresa e os serviços, o calendário de próximos eventos e a consulta de resultados de provas já realizadas.",
        "Construído em Next.js 15 / React 19 com Tailwind, usa SSR e metadados dinâmicos (SEO) e consome a API própria de resultados e eventos, com busca em tempo real, paginação e formulário de contato validado.",
      ],
      en: [
        "ChronoMAX's institutional site, the timing company. It presents the company and its services, the upcoming-events calendar and lets visitors look up results of past races.",
        "Built with Next.js 15 / React 19 and Tailwind, it uses SSR and dynamic metadata (SEO) and consumes the in-house results and events API, with real-time search, pagination and a validated contact form.",
      ],
      es: [
        "Sitio institucional de ChronoMAX, la empresa de cronometraje. Presenta la empresa y los servicios, el calendario de próximos eventos y la consulta de resultados de pruebas ya realizadas.",
        "Construido en Next.js 15 / React 19 con Tailwind, usa SSR y metadatos dinámicos (SEO) y consume la API propia de resultados y eventos, con búsqueda en tiempo real, paginación y formulario de contacto validado.",
      ],
    },
    highlights: {
      pt: [
        "Busca de resultados em tempo real com paginação, consumindo API própria.",
        "SSR e SEO dinâmico por página.",
      ],
      en: [
        "Real-time results search with pagination, consuming an in-house API.",
        "SSR and per-page dynamic SEO.",
      ],
      es: [
        "Búsqueda de resultados en tiempo real con paginación, consumiendo una API propia.",
        "SSR y SEO dinámico por página.",
      ],
    },
  },
  {
    slug: "ficha-medica",
    title: "Ficha Médica do Atleta",
    year: "2024",
    private: true,
    image: "/images/shot-ficha-medica.jpg",
    tech: ["Next.js", "React", "React Hook Form", "Yup", "AWS S3"],
    links: { demo: "https://help.runking.com.br/?event=maratona-chronomax" },
    summary: {
      pt: "Preenchimento dos dados médicos (PAR-Q) do atleta, com identificação e envio seguro.",
      en: "Athletes fill in their medical data (PAR-Q), with identification and secure upload.",
      es: "El atleta completa sus datos médicos (PAR-Q), con identificación y envío seguro.",
    },
    description: {
      pt: [
        "Aplicação para o atleta preencher e atualizar seus dados médicos (questionário PAR-Q e informações de saúde) por evento. O atleta se identifica por CPF/passaporte e data de nascimento e preenche a ficha com validação.",
        "Construída em Next.js/React com React Hook Form e validação (Yup), armazenando os arquivos no S3 e integrada ao back-end da plataforma.",
      ],
      en: [
        "App for the athlete to fill in and update their medical data (PAR-Q questionnaire and health information) per event. The athlete identifies with ID/passport and date of birth and completes the form with validation.",
        "Built with Next.js/React using React Hook Form and validation (Yup), storing files in S3 and integrated with the platform's back-end.",
      ],
      es: [
        "Aplicación para que el atleta complete y actualice sus datos médicos (cuestionario PAR-Q e información de salud) por evento. El atleta se identifica con documento/pasaporte y fecha de nacimiento y completa la ficha con validación.",
        "Construida en Next.js/React con React Hook Form y validación (Yup), almacenando los archivos en S3 e integrada con el back-end de la plataforma.",
      ],
    },
  },
  {
    slug: "site-institucional",
    title: "Site Institucional RunKing",
    year: "2023",
    image: "/images/shot-site-institucional.jpg",
    tech: ["Next.js", "React", "Swiper", "SEO"],
    links: { demo: "https://runking.com.br/" },
    summary: {
      pt: "Landing page institucional da RunKing, com apresentação de serviços e SEO.",
      en: "RunKing's institutional landing page, presenting services, with SEO.",
      es: "Landing page institucional de RunKing, con presentación de servicios y SEO.",
    },
    description: {
      pt: [
        "Site institucional da RunKing: apresentação da plataforma e dos serviços, com seções de destaque, carrosséis (Swiper) e consentimento de cookies.",
        "Construído em Next.js/React, responsivo e otimizado para SEO.",
      ],
      en: [
        "RunKing's institutional site: presenting the platform and its services, with highlight sections, carousels (Swiper) and cookie consent.",
        "Built with Next.js/React, responsive and optimized for SEO.",
      ],
      es: [
        "Sitio institucional de RunKing: presentación de la plataforma y de los servicios, con secciones destacadas, carruseles (Swiper) y consentimiento de cookies.",
        "Construido en Next.js/React, responsivo y optimizado para SEO.",
      ],
    },
  },
  {
    slug: "amigos-pinturas",
    title: "Amigos Pinturas",
    year: "2024",
    image: "/images/shot-amigos-pinturas.jpg",
    tech: ["React", "Vite", "styled-components", "EmailJS", "SEO"],
    links: { demo: "https://www.amigospinturas.com/" },
    summary: {
      pt: "Site institucional de uma empresa de pintura — serviços, galeria e orçamento, com foco em SEO.",
      en: "Institutional site for a painting company — services, gallery and quotes, focused on SEO.",
      es: "Sitio institucional de una empresa de pintura — servicios, galería y presupuesto, con foco en SEO.",
    },
    description: {
      pt: [
        "Projeto freelance: site institucional da Amigos Pinturas. Apresenta os serviços (pintura lisa, projetada, grafiato, textura e marmorato), galeria de trabalhos por categoria e um formulário de orçamento.",
        "Construído em React + Vite com styled-components. Envio de orçamento via EmailJS (sem back-end), botão de WhatsApp e forte trabalho de SEO: React Helmet, dados estruturados (Schema.org LocalBusiness), Open Graph e sitemap.",
      ],
      en: [
        "Freelance project: institutional site for Amigos Pinturas. It presents the services (smooth, sprayed, grafiato, textured and marble finishes), a work gallery by category and a quote form.",
        "Built with React + Vite and styled-components. Quotes are sent via EmailJS (no back-end), with a WhatsApp button and strong SEO work: React Helmet, structured data (Schema.org LocalBusiness), Open Graph and a sitemap.",
      ],
      es: [
        "Proyecto freelance: sitio institucional de Amigos Pinturas. Presenta los servicios (pintura lisa, proyectada, grafiato, textura y marmorato), una galería de trabajos por categoría y un formulario de presupuesto.",
        "Construido en React + Vite con styled-components. El presupuesto se envía vía EmailJS (sin back-end), con botón de WhatsApp y un fuerte trabajo de SEO: React Helmet, datos estructurados (Schema.org LocalBusiness), Open Graph y sitemap.",
      ],
    },
    highlights: {
      pt: [
        "SEO: metadados por página, Schema.org (LocalBusiness), Open Graph e sitemap.",
        "Galeria por categoria com modal de ampliação e navegação por query params.",
        "Formulário de orçamento via EmailJS, sem necessidade de back-end.",
      ],
      en: [
        "SEO: per-page metadata, Schema.org (LocalBusiness), Open Graph and sitemap.",
        "Gallery by category with a zoom modal and query-param navigation.",
        "Quote form via EmailJS, with no back-end needed.",
      ],
      es: [
        "SEO: metadatos por página, Schema.org (LocalBusiness), Open Graph y sitemap.",
        "Galería por categoría con modal de ampliación y navegación por query params.",
        "Formulario de presupuesto vía EmailJS, sin necesidad de back-end.",
      ],
    },
  },
  {
    slug: "gralha-trac",
    title: "Gralha Trac · Baterias",
    year: "2024",
    image: "/images/shot-gralha-trac.jpg",
    tech: ["React", "Vite", "Flask", "Python", "Google Maps", "styled-components"],
    links: { demo: "https://gralhatracbaterias.com.br/" },
    summary: {
      pt: "Site institucional de baterias tracionárias — catálogo, serviços e contato.",
      en: "Institutional site for traction batteries — catalog, services and contact.",
      es: "Sitio institucional de baterías de tracción — catálogo, servicios y contacto.",
    },
    description: {
      pt: [
        "Projeto freelance: site institucional da Gralha Trac, de manutenção e acessórios de baterias tracionárias (empilhadeiras). Traz catálogo de produtos, os tipos de manutenção, vídeos de demonstração, localização no mapa e contato.",
        "Front-end em React + Vite (styled-components, Swiper, Google Maps) com um back-end em Python/Flask que recebe o formulário e envia os e-mails por SMTP. Responsivo, com integração de WhatsApp e redes sociais.",
      ],
      en: [
        "Freelance project: institutional site for Gralha Trac, which maintains and sells accessories for traction batteries (forklifts). It features a product catalog, maintenance types, demo videos, a map location and contact.",
        "Front-end in React + Vite (styled-components, Swiper, Google Maps) with a Python/Flask back-end that receives the form and sends emails over SMTP. Responsive, with WhatsApp and social media integration.",
      ],
      es: [
        "Proyecto freelance: sitio institucional de Gralha Trac, de mantenimiento y accesorios de baterías de tracción (montacargas). Trae catálogo de productos, los tipos de mantenimiento, videos de demostración, ubicación en el mapa y contacto.",
        "Front-end en React + Vite (styled-components, Swiper, Google Maps) con un back-end en Python/Flask que recibe el formulario y envía los correos por SMTP. Responsivo, con integración de WhatsApp y redes sociales.",
      ],
    },
    highlights: {
      pt: [
        "Back-end em Python/Flask (Flask-Mail) para o formulário de contato por SMTP.",
        "Google Maps com estilo customizado e carrossel (Swiper) na home.",
        "Catálogo de produtos e seção de serviços com vídeos de demonstração.",
      ],
      en: [
        "Python/Flask back-end (Flask-Mail) for the contact form over SMTP.",
        "Google Maps with a custom style and a Swiper carousel on the home page.",
        "Product catalog and a services section with demo videos.",
      ],
      es: [
        "Back-end en Python/Flask (Flask-Mail) para el formulario de contacto por SMTP.",
        "Google Maps con estilo personalizado y carrusel (Swiper) en la home.",
        "Catálogo de productos y sección de servicios con videos de demostración.",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
