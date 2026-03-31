import { addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { format } from 'date-fns-tz';
import { LoginMailDto } from '../dto';
import { OrderCompletedDto } from '../dto/order-completed';

export const OrderComplete = (data: OrderCompletedDto) => {
  const { event, subtotal, serviceValue, total, order, localities, pay, customer, email } = data;

  const currentDate = format(new Date(), "dd 'de' MMMM 'de' yyyy  'a las' HH:mm", {
    timeZone: 'America/Guayaquil',
    locale: es,
  });
  
  let transaccionCode = '';
  if (pay.number !== null) {
    transaccionCode = `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f8;"><strong>Código de transacción</strong></td>
        <td style="padding: 12px 0; border-bottom: 1px solid #f0f2f8;">${pay.number}</td>
      </tr>
    `;
  }
  
  let contenidoHTML = '';
  for (const locality of localities) {
    contenidoHTML += `
      <tr style="border-bottom: 1px solid #f0f2f8;">
        <td style="padding: 12px 0;">${locality.name}</td>
        <td style="padding: 12px 0; text-align: center;">${locality.quantity}</td>
        <td style="padding: 12px 0; text-align: right;">$${locality.price}</td>
      </tr>
    `;
  }

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Pedido Completado - FireTickets</title>
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
    
    /* Mensaje de agradecimiento */
    .thankyou {
      background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
      border-radius: 20px;
      padding: 24px;
      text-align: center;
      margin-bottom: 28px;
      border: 1px solid rgba(138, 43, 226, 0.2);
    }
    
    .thankyou h2 {
      color: #1b1a46;
      font-size: 22px;
      margin-bottom: 12px;
    }
    
    .thankyou p {
      color: #4b5563;
      line-height: 1.5;
    }
    
    /* Secciones */
    .section {
      margin-bottom: 28px;
    }
    
    .section-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 600;
      color: #1b1a46;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid rgba(138, 43, 226, 0.3);
    }
    
    .section-title i {
      font-size: 20px;
    }
    
    /* Tablas */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      background: #f9fafb;
      border-radius: 16px;
      overflow: hidden;
    }
    
    .info-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .info-table td:first-child {
      font-weight: 600;
      color: #591f9e;
      width: 40%;
    }
    
    .info-table td:last-child {
      color: #1f2937;
    }
    
    .items-table {
      width: 100%;
      border-collapse: collapse;
      background: #f9fafb;
      border-radius: 16px;
      overflow: hidden;
    }
    
    .items-table th {
      background: #f3f4f6;
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      color: #1b1a46;
    }
    
    .items-table th:first-child { text-align: left; }
    .items-table th:nth-child(2) { text-align: center; }
    .items-table th:last-child { text-align: right; }
    
    .items-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .items-table td:first-child { text-align: left; }
    .items-table td:nth-child(2) { text-align: center; }
    .items-table td:last-child { text-align: right; }
    
    .total-row {
      background: #f3f4f6;
      font-weight: 700;
    }
    
    .total-row td:last-child {
      font-size: 18px;
      color: #8a2be2;
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
      margin: 16px 0 8px;
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
      
      .items-table th,
      .items-table td {
        padding: 10px 8px;
      }
      
      .info-table td {
        display: block;
        padding: 8px 12px;
      }
      
      .info-table td:first-child {
        width: 100%;
        padding-bottom: 0;
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
      <h1>¡Pedido Completado!</h1>
    </div>
    
    <!-- Cuerpo principal -->
    <div class="email-body">
      <!-- Mensaje de agradecimiento -->
      <div class="thankyou">
        <h2>✨ ¡Gracias por tu compra! ✨</h2>
        <p>Tu pedido en FireTickets se ha completado exitosamente. Los detalles se muestran a continuación:</p>
      </div>
      
      <!-- Resumen del pedido -->
      <div class="section">
        <div class="section-title">
          📋 Resumen del pedido
        </div>
        <table class="info-table">
          <tr>
            <td><strong>N° de pedido</strong></td>
            <td>${order}</td>
          </tr>
          <tr>
            <td><strong>Evento</strong></td>
            <td>${event}</td>
          </tr>
          <tr>
            <td><strong>Fecha de compra</strong></td>
            <td>${currentDate}</td>
          </tr>
        </table>
      </div>
      
      <!-- Detalle de localidades -->
      <div class="section">
        <div class="section-title">
          🎫 Detalle de entradas
        </div>
        <table class="items-table">
          <thead>
            <tr>
              <th>Localidad</th>
              <th style="text-align: center">Cantidad</th>
              <th style="text-align: right">Precio</th>
            </tr>
          </thead>
          <tbody>
            ${contenidoHTML}
            <tr style="border-top: 2px solid #e5e7eb;">
              <td colspan="2" style="text-align: right; font-weight: 600;">Subtotal</td>
              <td style="text-align: right;">$${subtotal}</td>
            </tr>
            <tr>
              <td colspan="2" style="text-align: right; font-weight: 600;">Cargo por servicio</td>
              <td style="text-align: right;">$${serviceValue}</td>
            </tr>
            <tr class="total-row">
              <td colspan="2" style="text-align: right; font-weight: 700;">Total</td>
              <td style="text-align: right; font-size: 18px; font-weight: 700; color: #8a2be2;">$${total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Datos de transacción -->
      <div class="section">
        <div class="section-title">
          💳 Datos de transacción
        </div>
        <table class="info-table">
          <tr>
            <td><strong>Método de pago</strong></td>
            <td>${pay.name}</td>
          </tr>
          ${transaccionCode}
        </table>
      </div>
      
      <!-- Datos de facturación -->
      <div class="section">
        <div class="section-title">
          👤 Datos de facturación
        </div>
        <table class="info-table">
          <tr>
            <td><strong>Nombre y Apellido</strong></td>
            <td>${customer.name}</td>
          </tr>
          <tr>
            <td><strong>Documento de identificación</strong></td>
            <td>${customer.ci}</td>
          </tr>
          <tr>
            <td><strong>Dirección</strong></td>
            <td>${customer.address}</td>
          </tr>
          <tr>
            <td><strong>Teléfono / Celular</strong></td>
            <td>${customer.phone}</td>
          </tr>
          <tr>
            <td><strong>Correo electrónico</strong></td>
            <td>${email}</td>
          </tr>
        </table>
      </div>
      
      <!-- Información adicional -->
      <div class="divider"></div>
      
      <div style="text-align: center;">
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">
          Tus entradas han sido enviadas en otro correo. También puedes acceder desde tu cuenta de FireTickets.
        </p>
        <a href="https://firetickets.site/perfil/mis-compras" class="btn">
          🎟️ Ver mis compras
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