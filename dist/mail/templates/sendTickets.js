"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTickets = void 0;
const locale_1 = require("date-fns/locale");
const date_fns_tz_1 = require("date-fns-tz");
const sendTickets = async (data) => {
    const currentDate = (0, date_fns_tz_1.format)(new Date(), "dd 'de' MMMM 'de' yyyy  'a las' HH:mm", {
        timeZone: 'America/Guayaquil',
        locale: locale_1.es,
    });
    let contenidoHTML = '';
    let qrIndex = 1;
    for (const locality of data.localities) {
        for (const qr of locality.qrs) {
            contenidoHTML += `
      <!-- Tarjeta de Ticket -->
      <div class="ticket-card" style="margin-bottom: 24px; border-radius: 20px; overflow: hidden; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;">
        <div style="display: flex; flex-wrap: wrap;">
          <!-- Columna izquierda: Imagen del evento -->
          <div style="flex: 0 0 140px; background: #f9fafb;">
            <img src="${data.event.poster}" alt="Evento" style="width: 100%; height: 140px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/140?text=Evento'">
          </div>
          
          <!-- Columna derecha: Información del ticket -->
          <div style="flex: 1; padding: 16px;">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: start;">
              <div style="flex: 1;">
                <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 700; color: #1b1a46;">${data.event.name}</h3>
                <div style="margin-bottom: 8px;">
                  <span style="display: inline-block; background: #f3e8ff; color: #8a2be2; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">${locality.localityName}</span>
                </div>
                <div style="font-size: 13px; color: #6b7280; margin-bottom: 4px;">
                  📅 ${data.event.event_date} }
                </div>
              
                <div style="font-size: 13px; color: #6b7280;">
                  👤 Organizador: ${data.event.user.name}
                </div>
              </div>
              
              <!-- Columna QR -->
              <div style="text-align: center; min-width: 100px; margin-top: 8px;">
                <img src="${qr}" alt="QR Code" style="width: 90px; height: 90px; border-radius: 12px; border: 2px solid #f0f2f8;">
                <div style="margin-top: 8px;">
                  <span style="background: #8a2be2; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600;">Ticket #${qrIndex}</span>
                </div>
              </div>
            </div>
            
            <!-- Información del comprador -->
            <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #f0f2f8; display: flex; flex-wrap: wrap; gap: 16px; font-size: 12px;">
              <div><strong style="color: #591f9e;">Pedido:</strong> ${data.sale.id}</div>
              <div><strong style="color: #591f9e;">Comprador:</strong> ${data.name}</div>
            </div>
          </div>
        </div>
      </div>
      `;
            qrIndex++;
        }
    }
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tus Entradas - FireTickets</title>
  <style>
    /* Reset y estilos base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #f8f9fc 0%, #eef2f8 100%);
      margin: 0;
      padding: 20px;
    }
    
    /* Contenedor principal */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
    }
    
    /* Header con gradiente */
    .email-header {
      background: linear-gradient(135deg, #8a2be2 0%, #591f9e 100%);
      padding: 32px 24px;
      text-align: center;
    }
    
    .logo {
      max-width: 140px;
      height: auto;
      margin-bottom: 16px;
    }
    
    .email-header h1 {
      color: white;
      font-size: 28px;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.5px;
    }
    
    /* Cuerpo del correo */
    .email-body {
      padding: 32px 28px;
    }
    
    /* Mensaje de bienvenida */
    .welcome-message {
      background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 28px;
      text-align: center;
      border: 1px solid rgba(138, 43, 226, 0.2);
    }
    
    .welcome-message h2 {
      color: #1b1a46;
      font-size: 22px;
      margin-bottom: 8px;
    }
    
    .welcome-message p {
      color: #4b5563;
      line-height: 1.5;
    }
    
    /* Sección de información */
    .info-section {
      background: #f9fafb;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 24px;
      border: 1px solid #e5e7eb;
    }
    
    .info-section h3 {
      color: #1b1a46;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      font-weight: 600;
      color: #591f9e;
    }
    
    .info-value {
      color: #1f2937;
    }
    
    /* Tarjeta de ticket */
    .ticket-card {
      margin-bottom: 24px;
      border-radius: 20px;
      overflow: hidden;
      background: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      border: 1px solid #e5e7eb;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .ticket-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }
    
    /* Alerta importante */
    .important-alert {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 12px;
      padding: 16px 20px;
      margin: 24px 0;
    }
    
    .important-alert p {
      color: #92400e;
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 8px;
    }
    
    .important-alert ul {
      margin-top: 8px;
      padding-left: 20px;
      color: #92400e;
      font-size: 13px;
    }
    
    .important-alert li {
      margin: 4px 0;
    }
    
    /* Botón de acción */
    .btn {
      display: inline-block;
      background: linear-gradient(95deg, #8a2be2 0%, #591f9e 100%);
      color: white;
      text-decoration: none;
      padding: 12px 28px;
      border-radius: 40px;
      font-weight: 600;
      font-size: 16px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-align: center;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px -8px rgba(138, 43, 226, 0.4);
    }
    
    /* Separador */
    .divider {
      height: 2px;
      background: linear-gradient(90deg, #8a2be2, #e9d5ff, #8a2be2);
      margin: 24px 0;
    }
    
    /* Footer */
    .email-footer {
      background: #f9fafb;
      padding: 24px 28px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    
    .footer-links a {
      color: #6b7280;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    .footer-links a:hover {
      color: #8a2be2;
    }
    
    .footer-contact {
      color: #9ca3af;
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    
    .footer-contact a {
      color: #8a2be2;
      text-decoration: none;
    }
    
    .copyright {
      color: #9ca3af;
      font-size: 11px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
    }
    
    /* Responsive */
    @media (max-width: 550px) {
      body {
        padding: 10px;
      }
      
      .email-body {
        padding: 24px 20px;
      }
      
      .ticket-card > div {
        flex-direction: column;
      }
      
      .ticket-card > div > div:first-child {
        flex: none;
        height: 120px;
      }
      
      .ticket-card > div > div:first-child img {
        width: 100%;
        height: 120px;
      }
      
      .footer-links {
        gap: 12px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header con gradiente y logo -->
    <div class="email-header">
      <img src="https://corpfourier.s3.us-east-2.amazonaws.com/fff/icono2.png" 
           alt="FireTickets" 
           class="logo"
           style="width: 120px; height: auto;">
      <h1>¡Tus Entradas!</h1>
    </div>
    
    <!-- Cuerpo principal -->
    <div class="email-body">
      <!-- Mensaje de bienvenida -->
      <div class="welcome-message">
        <h2>🎫 ¡Gracias por tu compra, ${data.name}! 🎫</h2>
        <p>Tus tickets han sido generados exitosamente. Presenta el código QR en la entrada del evento.</p>
      </div>
      
      <!-- Información del pedido -->
      <div class="info-section">
        <h3>📋 Información del pedido</h3>
        <div class="info-row">
          <span class="info-label">N° de pedido:</span>
          <span class="info-value">${data.sale.id}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Fecha de compra:</span>
          <span class="info-value">${currentDate}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Evento:</span>
          <span class="info-value">${data.event.name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Fecha del evento:</span>
          <span class="info-value">${data.event.event_date}}</span>
        </div>
       
      </div>
      
      <!-- Tickets generados -->
      <h3 style="color: #1b1a46; margin-bottom: 16px; font-size: 18px;">🎟️ Tus Tickets (${qrIndex - 1})</h3>
      ${contenidoHTML}
      
      <!-- Información importante -->
      <div class="important-alert">
        <p><strong>⚠️ Información importante</strong></p>
        <p>Cada ticket tiene un código de autenticación único que será verificado previo al ingreso junto a la identificación del comprador.</p>
        <ul>
          <li>N° de pedido</li>
          <li>Nombre del comprador</li>
          <li>Localidad</li>
          <li>Código QR</li>
        </ul>
        <p><strong>El código QR solo puede ser validado una vez, luego quedará inhabilitado.</strong></p>
        <p style="margin-top: 8px;">El comprador asume toda responsabilidad en caso de que su entrada se presente duplicada o falsificada, perdiendo su derecho de acceder al evento.</p>
        <p style="margin-top: 8px;"><strong>FireTickets y los organizadores no asumen ninguna responsabilidad en caso de pérdida o robo de la entrada.</strong></p>
      </div>
      
      <!-- Botón de acción -->
      <div style="text-align: center; margin: 24px 0;">
        <a href="https://firetickets.site/perfil/mis-compras" class="btn">
          📱 Ver mis entradas
        </a>
      </div>
      
      <div class="divider"></div>
      
      <div style="font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.5;">
        <p>Este es un correo automático de FireTickets. Por favor no respondas a este mensaje.</p>
        <p style="margin-top: 8px;">Si tienes preguntas, contáctanos a través de nuestra página web.</p>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="email-footer">
      <div class="footer-links">
        <a href="https://firetickets.site/terminos-y-condiciones">Términos y condiciones</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://firetickets.site/nosotros">Nosotros</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://firetickets.site/preguntas-frecuentes">Preguntas frecuentes</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://firetickets.site/contacto">Contacto</a>
      </div>
      
      <div class="footer-contact">
        ¿Necesitas ayuda? Escríbenos a 
        <a href="mailto:info@firetickets.site">info@firetickets.site</a>
      </div>
      
      <div class="copyright">
        © 2024 FireTickets. Todos los derechos reservados.
      </div>
    </div>
  </div>
</body>
</html>`;
};
exports.sendTickets = sendTickets;
//# sourceMappingURL=sendTickets.js.map