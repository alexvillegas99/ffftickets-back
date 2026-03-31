import { addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { format } from 'date-fns-tz';
import { GetNewPasswordDto, LoginMailDto } from '../dto';

export const GetNewPasswordTemplate = (data: GetNewPasswordDto) => {
  const { newPassword } = data;

  const currentDate = format(new Date(), "dd 'de' MMMM 'de' yyyy  'a las' HH:mm", {
    timeZone: 'America/Guayaquil',
    locale: es,
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Recuperar Contraseña - FireTickets</title>
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
    
    /* Mensaje principal */
    .main-message {
      background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
      border-radius: 20px;
      padding: 28px;
      margin-bottom: 28px;
      text-align: center;
      border: 1px solid rgba(138, 43, 226, 0.2);
    }
    
    .main-message h2 {
      color: #1b1a46;
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .main-message p {
      color: #4b5563;
      line-height: 1.6;
    }
    
    /* Tarjeta de contraseña */
    .password-card {
      background: #f9fafb;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 24px;
      text-align: center;
      border: 1px solid #e5e7eb;
    }
    
    .password-label {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 12px;
      letter-spacing: 1px;
    }
    
    .password-value {
      background: linear-gradient(135deg, #8a2be2 0%, #591f9e 100%);
      color: white;
      font-size: 24px;
      font-weight: 700;
      font-family: monospace;
      padding: 16px 24px;
      border-radius: 12px;
      display: inline-block;
      letter-spacing: 2px;
      margin: 8px 0;
      box-shadow: 0 4px 12px rgba(138, 43, 226, 0.3);
    }
    
    .password-note {
      font-size: 12px;
      color: #9ca3af;
      margin-top: 12px;
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
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .info-section p {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.5;
    }
    
    /* Alerta de seguridad */
    .security-alert {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 12px;
      padding: 16px 20px;
      margin: 24px 0;
    }
    
    .security-alert p {
      color: #92400e;
      font-size: 13px;
      line-height: 1.5;
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
      margin: 8px 0;
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
      
      .password-value {
        font-size: 18px;
        padding: 12px 16px;
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
      <h1>Recuperar Contraseña</h1>
    </div>
    
    <!-- Cuerpo principal -->
    <div class="email-body">
      <!-- Mensaje principal -->
      <div class="main-message">
        <h2>🔐 Solicitud de cambio de contraseña</h2>
        <p>Hemos recibido una solicitud para restablecer tu contraseña de FireTickets.</p>
        <p style="margin-top: 8px;">A continuación encontrarás tu nueva contraseña temporal.</p>
      </div>
      
      <!-- Tarjeta de contraseña -->
      <div class="password-card">
        <div class="password-label">
          <i class="fas fa-key"></i> CONTRASEÑA TEMPORAL
        </div>
        <div class="password-value">
          ${newPassword}
        </div>
        <div class="password-note">
          <i class="fas fa-info-circle"></i> Esta contraseña es temporal y debe ser cambiada después de iniciar sesión
        </div>
      </div>
      
      <!-- Instrucciones -->
      <div class="info-section">
        <h3>📋 ¿Qué hacer ahora?</h3>
        <p>1. Inicia sesión con tu correo electrónico y esta contraseña temporal.</p>
        <p style="margin-top: 8px;">2. Dirígete a la sección de "Configuración" en tu perfil.</p>
        <p style="margin-top: 8px;">3. Cambia tu contraseña por una nueva y segura.</p>
        <p style="margin-top: 8px;">4. Guarda los cambios para asegurar tu cuenta.</p>
      </div>
      
      <!-- Alerta de seguridad -->
      <div class="security-alert">
        <p>
          <strong>⚠️ Importante</strong><br>
          Por seguridad, te recomendamos cambiar esta contraseña temporal inmediatamente después de iniciar sesión.
          No compartas tu contraseña con nadie. FireTickets nunca te pedirá tu contraseña por correo electrónico.
        </p>
      </div>
      
      <!-- Botón de acción -->
      <div style="text-align: center; margin: 24px 0;">
        <a href="https://firetickets.site/login" class="btn">
          🔑 Iniciar sesión ahora
        </a>
      </div>
      
      <div class="divider"></div>
      
      <div style="font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.5;">
        <p>Este es un correo automático de FireTickets. Por favor no respondas a este mensaje.</p>
        <p style="margin-top: 8px;">Si no solicitaste este cambio, contacta a nuestro soporte inmediatamente.</p>
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